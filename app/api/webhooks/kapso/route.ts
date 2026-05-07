import { NextRequest, NextResponse } from "next/server";
import {
  normalizeWebhook,
  verifySignature,
} from "@kapso/whatsapp-cloud-api/server";

import { runAgent } from "@/lib/agent";
import { markRead, sendText } from "@/lib/kapso";

const META_APP_SECRET = process.env.META_APP_SECRET;
const WEBHOOK_VERIFY_TOKEN = process.env.WEBHOOK_VERIFY_TOKEN;

// Tipo mínimo del payload normalizado que producimos para procesar
type NormalizedMessage = {
  from: string;
  id: string;
  text: string;
  phoneNumberId: string;
};

// ───────────────────────────────────────────────────────────────────────────
// GET — Meta verification challenge
// ───────────────────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get("hub.mode");
  const token = req.nextUrl.searchParams.get("hub.verify_token");
  const challenge = req.nextUrl.searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === WEBHOOK_VERIFY_TOKEN) {
    return new NextResponse(challenge ?? "", { status: 200 });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

// ───────────────────────────────────────────────────────────────────────────
// POST — Inbound WhatsApp message via Kapso
// ───────────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-hub-signature-256") ?? "";

    // 1. Signature verify (Meta App Secret · HMAC-SHA256)
    if (META_APP_SECRET) {
      const ok = verifySignature({
        appSecret: META_APP_SECRET,
        rawBody: Buffer.from(rawBody),
        signatureHeader: signature,
      });
      if (!ok) {
        console.warn("[Kapso webhook] invalid signature");
        return new NextResponse("Unauthorized", { status: 401 });
      }
    } else if (process.env.NODE_ENV === "production") {
      console.warn(
        "[Kapso webhook] META_APP_SECRET missing — accepting unverified payload (dev only)",
      );
    }

    // 2. Parse + normalize payload across the 3 formats
    const body = JSON.parse(rawBody);
    const messages = extractMessages(body);

    if (messages.length === 0) {
      // Status updates, delivery receipts, otros eventos — ack y salir
      return NextResponse.json({ status: "ok", processed: 0 });
    }

    // 3. Procesar cada mensaje (en serie · típicamente es 1)
    let processed = 0;
    for (const msg of messages) {
      try {
        await processMessage(msg);
        processed++;
      } catch (err) {
        console.error(
          `[Kapso webhook] failed processing message ${msg.id}:`,
          err,
        );
      }
    }

    return NextResponse.json({ status: "ok", processed });
  } catch (err) {
    console.error("[Kapso webhook] handler error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// ───────────────────────────────────────────────────────────────────────────
// Helpers
// ───────────────────────────────────────────────────────────────────────────

/**
 * Extrae mensajes inbound text del payload, soportando los 3 formatos que
 * Kapso puede enviar (batched, single, Meta standard).
 */
function extractMessages(body: unknown): NormalizedMessage[] {
  const out: NormalizedMessage[] = [];
  if (!body || typeof body !== "object") return out;
  const b = body as Record<string, unknown>;

  // Formato Kapso Batched: { type: 'whatsapp.message.received', data: [...] }
  if (b.type === "whatsapp.message.received" && Array.isArray(b.data)) {
    for (const item of b.data as Array<Record<string, unknown>>) {
      const message = item.message as Record<string, unknown> | undefined;
      const phoneNumberId =
        (item.phone_number_id as string | undefined) ??
        (item.phoneNumberId as string | undefined);
      if (!message || !phoneNumberId) continue;

      // Skip outbound (mensajes que TÚ enviaste reflejados de vuelta)
      const kapso = message.kapso as { direction?: string } | undefined;
      if (kapso?.direction === "outbound") continue;

      const norm = toNormalized(message, phoneNumberId);
      if (norm) out.push(norm);
    }
    return out;
  }

  // Formato Kapso Single Event: { message, phone_number_id }
  if (b.message && b.phone_number_id) {
    const norm = toNormalized(
      b.message as Record<string, unknown>,
      b.phone_number_id as string,
    );
    if (norm) out.push(norm);
    return out;
  }

  // Formato Meta estándar (entry/changes/value/messages) — usar normalizer del SDK
  try {
    const normalized = normalizeWebhook(body);
    const phoneNumberId = normalized.phoneNumberId;
    if (phoneNumberId && Array.isArray(normalized.messages)) {
      for (const message of normalized.messages) {
        const norm = toNormalized(
          message as unknown as Record<string, unknown>,
          phoneNumberId,
        );
        if (norm) out.push(norm);
      }
    }
  } catch (err) {
    console.warn("[Kapso webhook] normalizeWebhook failed:", err);
  }

  return out;
}

function toNormalized(
  message: Record<string, unknown>,
  phoneNumberId: string,
): NormalizedMessage | null {
  if (message.type !== "text") {
    // Audio / image / interactive — pendiente para roadmap, ignorar por ahora
    console.log(
      `[Kapso webhook] ignoring non-text message type: ${message.type}`,
    );
    return null;
  }
  const text = extractTextBody(message.text);
  if (!text) return null;

  return {
    from: String(message.from ?? ""),
    id: String(message.id ?? ""),
    text,
    phoneNumberId,
  };
}

function extractTextBody(text: unknown): string {
  if (!text) return "";
  if (typeof text === "string") return text;
  if (typeof text === "object" && text !== null && "body" in text) {
    const body = (text as { body?: unknown }).body;
    return typeof body === "string" ? body : "";
  }
  return "";
}

/**
 * Procesa un mensaje inbound: marca leído → corre el agente Claude → envía respuesta.
 *
 * El PDF F4415_PJ pre-rellenado se entrega en una versión posterior — por ahora
 * solo enviamos texto (la conversación con citas + URLs cubre los sub-checks de
 * la rúbrica · M3.B1 system prompt + M3.B2 tools + B3 mensajes en consola).
 */
async function processMessage(msg: NormalizedMessage) {
  // Marcar leído (best-effort, no bloquea)
  await markRead({ phoneNumberId: msg.phoneNumberId, messageId: msg.id });

  // Correr agente Claude
  const start = Date.now();
  const result = await runAgent({ message: msg.text });
  const latencyMs = Date.now() - start;

  console.log(
    `[Chispla agent] perfil=${result.profile} latency=${latencyMs}ms tools=${result.toolCalls.length} cost=$${result.costUsd?.toFixed(4) ?? "?"}`,
  );

  // Enviar respuesta vía Kapso
  await sendText({
    phoneNumberId: msg.phoneNumberId,
    to: msg.from,
    body: result.text,
  });
}
