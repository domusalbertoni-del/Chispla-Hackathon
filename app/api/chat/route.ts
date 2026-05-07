/**
 * /api/chat — Web demo del agente Chispla.
 *
 * Comparte el mismo `lib/agent.ts` que el webhook /api/webhooks/kapso, así
 * la web demo y WhatsApp ejecutan el mismo cerebro. La diferencia: aquí
 * streameamos via SSE (split-screen con consola Anthropic en pitch),
 * en WhatsApp respondemos completo de una.
 */

import { type NextRequest } from "next/server";
import { z } from "zod/v4";

import { runAgent } from "@/lib/agent";

const RequestSchema = z.object({
  query: z.string().min(1),
  sessionId: z.string().optional(),
});

function sseEvent(type: string, data: unknown): string {
  return `event: ${type}\ndata: ${JSON.stringify(data)}\n\n`;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ error: "Invalid request", details: parsed.error.issues }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const { query: userQuery, sessionId } = parsed.data;
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const result = await runAgent({
          message: userQuery,
          sessionId,
          onTextDelta: (delta) => {
            controller.enqueue(
              encoder.encode(sseEvent("text_delta", { text: delta })),
            );
          },
          onToolUse: (info) => {
            controller.enqueue(
              encoder.encode(sseEvent("tool_use", info)),
            );
          },
        });

        controller.enqueue(
          encoder.encode(
            sseEvent("result", {
              profile: result.profile,
              cost_usd: result.costUsd,
              tool_calls: result.toolCalls.length,
            }),
          ),
        );
        controller.enqueue(encoder.encode(sseEvent("done", {})));
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unknown agent error";
        console.error("[/api/chat] error:", err);
        controller.enqueue(
          encoder.encode(sseEvent("error", { message })),
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
