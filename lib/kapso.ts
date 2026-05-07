/**
 * Kapso · cliente para enviar mensajes WhatsApp via Kapso Meta proxy.
 *
 * Patrón aprendido de RevOS: usar @kapso/whatsapp-cloud-api SDK con
 * baseUrl `https://api.kapso.ai/meta/whatsapp` + header `x-kapso-api-key`.
 */

import { WhatsAppClient } from "@kapso/whatsapp-cloud-api";

const KAPSO_API_KEY = process.env.KAPSO_API_KEY;

function getClient() {
  if (!KAPSO_API_KEY) {
    throw new Error(
      "KAPSO_API_KEY missing. Configura el secret en Vercel env vars.",
    );
  }
  return new WhatsAppClient({
    baseUrl: "https://api.kapso.ai/meta/whatsapp",
    kapsoApiKey: KAPSO_API_KEY,
  });
}

/**
 * Envía un mensaje de texto al usuario.
 */
export async function sendText(opts: {
  phoneNumberId: string;
  to: string;
  body: string;
}) {
  const client = getClient();
  return client.messages.sendText({
    phoneNumberId: opts.phoneNumberId,
    to: opts.to,
    body: opts.body,
  });
}

/**
 * Marca un mensaje recibido como leído (✓✓ azul en WhatsApp).
 * Best-effort, no lanza si falla.
 */
export async function markRead(opts: {
  phoneNumberId: string;
  messageId: string;
}) {
  try {
    const client = getClient();
    await client.messages.markRead({
      phoneNumberId: opts.phoneNumberId,
      messageId: opts.messageId,
    });
  } catch (err) {
    console.warn("[Kapso] markRead failed (non-critical):", err);
  }
}

/**
 * Sube un PDF a Kapso media y lo envía como documento al usuario.
 *
 * Flujo:
 * 1. POST /meta/whatsapp/v24.0/{phoneNumberId}/media (multipart) → media_id
 * 2. POST /meta/whatsapp/v24.0/{phoneNumberId}/messages con type=document, document.id=media_id
 *
 * Wow moment de Chispla: F4415_PJ pre-rellenado llegando al WhatsApp del usuario.
 */
export async function sendPdfDocument(opts: {
  phoneNumberId: string;
  to: string;
  pdfBuffer: Uint8Array | ArrayBuffer | Buffer;
  filename: string;
  caption?: string;
}) {
  if (!KAPSO_API_KEY) {
    throw new Error("KAPSO_API_KEY missing");
  }

  // 1. Upload media. Cast a BlobPart compatible para evitar fricción con
  // el tipado de Uint8Array<ArrayBufferLike> (Node 22 vs lib.dom).
  const formData = new FormData();
  const blob = new Blob([opts.pdfBuffer as BlobPart], {
    type: "application/pdf",
  });
  formData.append("messaging_product", "whatsapp");
  formData.append("type", "application/pdf");
  formData.append("file", blob, opts.filename);

  const uploadRes = await fetch(
    `https://api.kapso.ai/meta/whatsapp/v24.0/${opts.phoneNumberId}/media`,
    {
      method: "POST",
      headers: { "x-kapso-api-key": KAPSO_API_KEY },
      body: formData,
    },
  );

  if (!uploadRes.ok) {
    const errText = await uploadRes.text();
    throw new Error(
      `Kapso media upload failed: ${uploadRes.status} ${errText}`,
    );
  }

  const upload = (await uploadRes.json()) as { id?: string };
  const mediaId = upload.id;
  if (!mediaId) {
    throw new Error("Kapso media upload returned no id");
  }

  // 2. Send document message
  const sendRes = await fetch(
    `https://api.kapso.ai/meta/whatsapp/v24.0/${opts.phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-kapso-api-key": KAPSO_API_KEY,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: opts.to,
        type: "document",
        document: {
          id: mediaId,
          filename: opts.filename,
          caption: opts.caption,
        },
      }),
    },
  );

  if (!sendRes.ok) {
    const errText = await sendRes.text();
    throw new Error(
      `Kapso send document failed: ${sendRes.status} ${errText}`,
    );
  }

  return sendRes.json();
}
