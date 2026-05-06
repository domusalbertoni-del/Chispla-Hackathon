import { type NextRequest } from "next/server";
import {
  query,
  tool,
  createSdkMcpServer,
  type SDKMessage,
} from "@anthropic-ai/claude-agent-sdk";
import { z } from "zod/v4";

// ---------------------------------------------------------------------------
// 1. System prompt pieces
// ---------------------------------------------------------------------------

const BASE_SYSTEM_PROMPT = `You are Chispla, a regulatory advisor for citizens in Chile. Your job is to translate Chilean financial regulation into plain language with citations to real public sources.

HARD RULES:
1. NEVER invent citations. If you don't have a verified source from the search_normativa tool, say "No tengo una fuente verificada sobre esto — te recomiendo consultar a un profesional" (or the English equivalent) and offer to escalate.
2. Every regulatory claim must cite a real URL from CMF, SII, BCN, SERNAC, or Caja Los Andes public docs.
3. Plain language only. If you must use a legal term, define it inline.
4. You are not a lawyer or accountant. Always include a one-line disclaimer on the first response of a session: "Soy un asistente informativo, no un abogado ni contador. Verifica siempre con un profesional."
5. Detect deadlines in your response and structure them as a list with format: DEADLINE: <date or timeframe> | <action required> — so the UI can offer Calendar export.`;

const PROFILE_SUFFIXES: Record<string, string> = {
  foreign_founder: `PROFILE CONTEXT: The user is a foreign founder in Chile, likely recently incorporated (SpA or Ltda). Prioritize:
- SII Régimen Pro Pyme (Art. 14 Letra D)
- IVA obligations on cross-border services
- Ley 21.521 (Fintec) if the business is fintech-adjacent
- Inicio de actividades process, RUT/RUN requirements
Use "tú" form.`,

  pensioner: `PROFILE CONTEXT: The user is a 60+ pensioner affiliated with Caja Los Andes. Prioritize:
- Caja Los Andes public benefits: APV, crédito social, beneficios pensionados
- SERNAC Financiero rights for financial consumers
- Plain Spanish, absolutely zero jargon. If you must use a technical term, explain it like you're talking to your abuela.
- Hammer the phrase "beneficios que ya tienes pero no usas" when relevant.
Use "usted" form. Be warm and patient.`,

  first_gen: `PROFILE CONTEXT: The user is a first-generation entrepreneur formalizing a small family business. Prioritize:
- SII formalización process step by step
- IVA basics (F29 mensual)
- Tipos de sociedad comparison: EIRL vs SpA vs Ltda — pros/cons in plain language
- Patente municipal requirements
Use "tú" form. Be encouraging.`,

  migrant: `PROFILE CONTEXT: The user is a migrant in Chile formalizing a small business. Prioritize:
- SII basics for newly formalized businesses
- Derechos del consumidor (SERNAC)
- IVA mensual (F29) obligations
- RUT/RUN requirements for foreigners
- Any visa or permiso implications for business ownership
Use "tú" form. Be clear and reassuring.`,
};

function buildSystemPrompt(profile: string, language: string): string[] {
  const suffix = PROFILE_SUFFIXES[profile] ?? PROFILE_SUFFIXES.first_gen;
  const langDirective =
    language === "en"
      ? "Respond in English. The user prefers English."
      : 'Respond in Chilean Spanish (formal-but-friendly). Use the register indicated in the profile context ("tú" or "usted").';

  // Array form: elements before the boundary are cached by the API
  return [
    // Static block — cached across requests (prompt caching)
    BASE_SYSTEM_PROMPT,
    // Dynamic block — per-request
    [suffix, langDirective].join("\n\n"),
  ];
}

// ---------------------------------------------------------------------------
// 2. Placeholder tool (replaced by Lucas's MCP server later)
// ---------------------------------------------------------------------------

const searchNormativa = tool(
  "search_normativa",
  "Search Chilean regulatory sources (CMF, SII, BCN, SERNAC, Caja Los Andes) for a regulatory query. Returns relevant fragments with source URLs.",
  {
    query: z.string().describe("The regulatory question or topic to search"),
    source: z
      .enum(["cmf", "sii", "bcn", "sernac", "caja_los_andes"])
      .optional()
      .describe("Optional: filter to a specific regulatory source"),
  },
  async (args) => {
    // TEMPORARY hardcoded chunks — Lucas replaces with real MCP server
    const chunks = [
      {
        source: "cmf",
        identifier: "NCG-502",
        title: "Registro de Prestadores de Servicios Financieros (Fintec)",
        text: 'La NCG 502 de la CMF establece los requisitos para la inscripción en el Registro de Prestadores de Servicios Financieros regulados por la Ley 21.521. Los prestadores deben acreditar capital mínimo, políticas de gestión de riesgo operacional, y un plan de continuidad de negocio. El plazo de inscripción es de 60 días hábiles desde la solicitud.',
        url: "https://www.cmfchile.cl/normativa/ncg_502_2024.pdf",
      },
      {
        source: "sii",
        identifier: "Régimen-Pro-Pyme",
        title: "Régimen Pro Pyme — Tributación Simplificada (Art. 14 Letra D)",
        text: 'El Régimen Pro Pyme permite a empresas con ingresos anuales de hasta 75.000 UF tributar sobre base de flujos de caja (ingresos percibidos menos gastos pagados). La tasa de impuesto de primera categoría es 25%. Se accede automáticamente al iniciar actividades si se cumplen los requisitos de tamaño. Declaración anual mediante F22.',
        url: "https://www.sii.cl/destacados/propyme/",
      },
      {
        source: "bcn",
        identifier: "Ley-21521",
        title: "Ley 21.521 — Ley Fintec (Ley de Innovación Financiera)",
        text: 'La Ley 21.521 regula los servicios financieros prestados mediante tecnología. Define categorías de prestadores: plataformas de financiamiento colectivo, sistemas alternativos de transacción, enrutamiento de órdenes, asesoría crediticia y custodia de instrumentos financieros. Todos los prestadores deben inscribirse en el registro de la CMF dentro de 180 días desde la publicación de la normativa secundaria.',
        url: "https://www.bcn.cl/leychile/navegar?idNorma=1187323",
      },
    ];

    const filtered = args.source
      ? chunks.filter((c) => c.source === args.source)
      : chunks;

    return {
      content: filtered.map((chunk) => ({
        type: "text" as const,
        text: `[${chunk.source.toUpperCase()} — ${chunk.identifier}] ${chunk.title}\n${chunk.text}\nFuente: ${chunk.url}`,
      })),
    };
  },
  { alwaysLoad: true }
);

const chisplaMcp = createSdkMcpServer({
  name: "chispla-normativa",
  version: "0.1.0",
  tools: [searchNormativa],
  alwaysLoad: true,
});

// ---------------------------------------------------------------------------
// 3. Request validation
// ---------------------------------------------------------------------------

const RequestSchema = z.object({
  profile: z.enum(["foreign_founder", "pensioner", "first_gen", "migrant"]),
  query: z.string().min(1),
  language: z.enum(["es", "en"]).default("es"),
  sessionId: z.string().optional(),
});

// ---------------------------------------------------------------------------
// 4. SSE helpers
// ---------------------------------------------------------------------------

function sseEvent(type: string, data: unknown): string {
  return `event: ${type}\ndata: ${JSON.stringify(data)}\n\n`;
}

function extractTextDelta(event: SDKMessage): string | null {
  if (event.type === "assistant") {
    // Full assistant message — extract text blocks
    const textBlocks = event.message.content.filter(
      (b) => b.type === "text"
    );
    return textBlocks.map((b) => ("text" in b ? b.text : "")).join("");
  }
  if (event.type === "stream_event") {
    const e = event.event;
    if (
      e.type === "content_block_delta" &&
      e.delta.type === "text_delta"
    ) {
      return e.delta.text;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// 5. Route handler
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ error: "Invalid request", details: parsed.error.issues }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { profile, query: userQuery, language } = parsed.data;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const agentQuery = query({
          prompt: userQuery,
          options: {
            systemPrompt: buildSystemPrompt(profile, language),
            model: "claude-sonnet-4-6",
            tools: [],
            allowedTools: ["mcp__chispla-normativa__search_normativa"],
            mcpServers: { "chispla-normativa": chisplaMcp },
            maxTurns: 10,
            includePartialMessages: true,
            persistSession: false,
            env: {
              ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY!,
            },
          },
        });

        for await (const event of agentQuery) {
          // Text deltas → stream to client
          const delta = extractTextDelta(event);
          if (delta) {
            controller.enqueue(
              encoder.encode(sseEvent("text_delta", { text: delta }))
            );
          }

          // Tool use signals
          if (event.type === "assistant") {
            const toolUses = event.message.content.filter(
              (b) => b.type === "tool_use"
            );
            for (const tu of toolUses) {
              controller.enqueue(
                encoder.encode(
                  sseEvent("tool_use", {
                    name: "name" in tu ? tu.name : "unknown",
                    id: "id" in tu ? tu.id : undefined,
                  })
                )
              );
            }
          }

          // Final result
          if (event.type === "result") {
            controller.enqueue(
              encoder.encode(
                sseEvent("result", {
                  subtype: event.subtype,
                  result: event.subtype === "success" ? event.result : undefined,
                  cost_usd:
                    event.subtype === "success"
                      ? event.total_cost_usd
                      : undefined,
                })
              )
            );
          }
        }

        controller.enqueue(encoder.encode(sseEvent("done", {})));
      } catch (err) {
        console.error("Chispla agent error:", err);
        const message =
          err instanceof Error ? err.message : "Unknown agent error";
        controller.enqueue(
          encoder.encode(sseEvent("error", { message }))
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
