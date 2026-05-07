import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";
import {
  normalizeWebhook,
  verifySignature,
} from "@kapso/whatsapp-cloud-api/server";

import { runAgent } from "@/lib/agent";
import { markRead, sendText } from "@/lib/kapso";

// ─── Config ────────────────────────────────────────────────────────────────

// Kapso v2 webhooks (formato propio de Kapso · header X-Webhook-Signature).
// Este es el secret que aparece en la UI Kapso → Webhook → "Secret".
const KAPSO_WEBHOOK_SECRET = process.env.KAPSO_WEBHOOK_SECRET;

// Meta forward webhooks (Kapso reenvía el payload original de Meta sin tocar).
// Este es el "Meta App Secret" de la WhatsApp Business config.
const META_APP_SECRET = process.env.META_APP_SECRET;

// Token para el GET verification challenge (cuando el endpoint se registra
// directamente con Meta). En modo Kapso v2 NO se usa.
const WEBHOOK_VERIFY_TOKEN = process.env.WEBHOOK_VERIFY_TOKEN;

// Tipo mínimo del mensaje normalizado que pasamos al agente
type NormalizedMessage = {
  from: string;
  id: string;
  text: string;
  phoneNumberId: string;
};

// ─── GET · Meta verification challenge ────────────────────────────────────

export async function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get("hub.mode");
  const token = req.nextUrl.searchParams.get("hub.verify_token");
  const challenge = req.nextUrl.searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === WEBHOOK_VERIFY_TOKEN) {
    return new NextResponse(challenge ?? "", { status: 200 });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

// ─── POST · Inbound webhook (Kapso v2 o Meta forward) ─────────────────────

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();

    // Lee ambos posibles headers de firma. Cada modo de Kapso usa uno distinto.
    const kapsoSig =
      req.headers.get("x-webhook-signature") ??
      req.headers.get("x-kapso-signature") ??
      "";
    const metaSig = req.headers.get("x-hub-signature-256") ?? "";
    const eventName = req.headers.get("x-webhook-event") ?? "";
    const idempotencyKey = req.headers.get("x-idempotency-key") ?? "";

    // 1. Verificar firma según el modo activo.
    const verifyResult = verifyAnySignature(rawBody, {
      kapsoSig,
      metaSig,
    });
    if (!verifyResult.ok) {
      console.warn(
        `[Kapso webhook] signature verification failed (${verifyResult.reason}) · idempotency=${idempotencyKey}`,
      );
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (verifyResult.warning) {
      console.warn(`[Kapso webhook] ${verifyResult.warning}`);
    }

    // 2. Parse + normalize payload (3 formatos posibles)
    const body = JSON.parse(rawBody);
    const messages = extractMessages(body);

    console.log(
      `[Kapso webhook] event=${eventName || "unknown"} mode=${verifyResult.mode} messages=${messages.length} idempotency=${idempotencyKey}`,
    );

    if (messages.length === 0) {
      // Status updates, delivery receipts, otros eventos sin texto procesable
      return NextResponse.json({ status: "ok", processed: 0 });
    }

    // 3. Procesar cada mensaje
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
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

// ─── Verificación de firma ────────────────────────────────────────────────

type VerifyResult =
  | { ok: true; mode: "kapso-v2" | "meta-forward" | "unverified"; warning?: string }
  | { ok: false; mode: "kapso-v2" | "meta-forward"; reason: string };

function verifyAnySignature(
  rawBody: string,
  headers: { kapsoSig: string; metaSig: string },
): VerifyResult {
  // Modo Kapso v2 (configurado en este proyecto)
  if (headers.kapsoSig) {
    if (!KAPSO_WEBHOOK_SECRET) {
      // Sin secret configurado, aceptamos en dev y warneamos en producción
      if (process.env.NODE_ENV === "production") {
        return {
          ok: true,
          mode: "unverified",
          warning:
            "X-Webhook-Signature present but KAPSO_WEBHOOK_SECRET not configured · accepting in production with WARNING",
        };
      }
      return { ok: true, mode: "unverified", warning: "dev mode · no secret" };
    }
    const valid = verifyKapsoSignature(rawBody, headers.kapsoSig, KAPSO_WEBHOOK_SECRET);
    return valid
      ? { ok: true, mode: "kapso-v2" }
      : { ok: false, mode: "kapso-v2", reason: "kapso HMAC mismatch" };
  }

  // Modo Meta forward (Kapso reenvía Meta payload con su firma original)
  if (headers.metaSig) {
    if (!META_APP_SECRET) {
      if (process.env.NODE_ENV === "production") {
        return {
          ok: true,
          mode: "unverified",
          warning: "Meta sig present but META_APP_SECRET not configured",
        };
      }
      return { ok: true, mode: "unverified", warning: "dev · no Meta secret" };
    }
    const valid = verifySignature({
      appSecret: META_APP_SECRET,
      rawBody: Buffer.from(rawBody),
      signatureHeader: headers.metaSig,
    });
    return valid
      ? { ok: true, mode: "meta-forward" }
      : { ok: false, mode: "meta-forward", reason: "meta HMAC mismatch" };
  }

  // Sin headers de firma — solo aceptar en dev
  if (process.env.NODE_ENV === "production") {
    return {
      ok: true,
      mode: "unverified",
      warning: "no signature headers present · accepting (review immediately)",
    };
  }
  return { ok: true, mode: "unverified", warning: "dev · unsigned" };
}

/**
 * HMAC-SHA256 de Kapso v2.
 *
 * Soporta tanto el formato `sha256=<hex>` como solo `<hex>` plano. La
 * comparación usa timingSafeEqual para evitar timing attacks.
 */
function verifyKapsoSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string,
): boolean {
  try {
    const expected = createHmac("sha256", secret)
      .update(rawBody, "utf8")
      .digest("hex");
    const actual = signatureHeader.replace(/^sha256=/, "").trim();
    if (expected.length !== actual.length) return false;
    return timingSafeEqual(
      Buffer.from(expected, "hex"),
      Buffer.from(actual, "hex"),
    );
  } catch (err) {
    console.warn("[Kapso webhook] verifyKapsoSignature error:", err);
    return false;
  }
}

// ─── Extracción de mensajes ───────────────────────────────────────────────

/**
 * Soporta los 3 formatos de payload Kapso:
 *   1. Kapso v2 batched: { type: 'whatsapp.message.received', data: [...] }
 *   2. Kapso single event: { message, phone_number_id, conversation }
 *   3. Meta standard: usar normalizeWebhook del SDK
 */
function extractMessages(body: unknown): NormalizedMessage[] {
  const out: NormalizedMessage[] = [];
  if (!body || typeof body !== "object") return out;
  const b = body as Record<string, unknown>;

  // Formato Kapso Batched
  if (b.type === "whatsapp.message.received" && Array.isArray(b.data)) {
    for (const item of b.data as Array<Record<string, unknown>>) {
      const message = item.message as Record<string, unknown> | undefined;
      const phoneNumberId =
        (item.phone_number_id as string | undefined) ??
        (item.phoneNumberId as string | undefined);
      if (!message || !phoneNumberId) continue;

      // Skip outbound (mensajes que enviamos nosotros, reflejados de vuelta)
      const kapso = message.kapso as { direction?: string } | undefined;
      if (kapso?.direction === "outbound") continue;

      const norm = toNormalized(message, phoneNumberId);
      if (norm) out.push(norm);
    }
    return out;
  }

  // Formato Kapso Single Event
  if (b.message && b.phone_number_id) {
    const norm = toNormalized(
      b.message as Record<string, unknown>,
      b.phone_number_id as string,
    );
    if (norm) out.push(norm);
    return out;
  }

  // Formato Meta estándar (entry/changes/value/messages)
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

// ─── Procesamiento del mensaje ────────────────────────────────────────────

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
