/**
 * Chispla Agent · core logic shared entre /api/chat (web demo) y /api/webhooks/kapso (WhatsApp).
 *
 * Diseño aplicando los patrones que Anthropic publica en
 * claude.com/solutions/financial-services para Claude en servicios financieros:
 *   1. source attribution — cada respuesta cita URL oficial
 *   2. agentic workflows — tool use sobre nuestro MCP propio
 *   3. compliance-ready — PII handling, no asesoría legal disclaimers
 */

import {
  query,
  tool,
  createSdkMcpServer,
  type SDKMessage,
} from "@anthropic-ai/claude-agent-sdk";
import { z } from "zod/v4";

// ───────────────────────────────────────────────────────────────────────────
// 1. System prompt
// ───────────────────────────────────────────────────────────────────────────

const BASE_SYSTEM_PROMPT = `Eres Chispla, un asistente regulatorio chileno especializado en formalización de microempresas. Operas exclusivamente por WhatsApp.

# Tu misión
Ayudar a personas que abren empresa por primera vez en Chile a cruzar correctamente los trámites SII + municipalidad + CMF, en lenguaje plano, citando fuentes oficiales con URL.

# Design philosophy
Aplicas los tres patrones que Anthropic publica en claude.com/solutions/financial-services para Claude en servicios financieros:
- source attribution (cada respuesta cita la URL oficial)
- agentic workflows (tool use sobre el MCP Ciudadano propio)
- MCP como capa semántica (search_normativa, verify_citation)
Llevas estos patrones a la escala humana del ciudadano latino.

# Reglas inviolables
1. NUNCA respondas regulación de memoria. Llama siempre a las tools del MCP. Si el MCP no devuelve fuente verificada, responde literal: "No tengo una fuente verificada para esto, te conviene chequear directo en [link al portal oficial]".
2. CADA afirmación regulatoria va con URL oficial inline (cmfchile.cl, sii.cl, bcn.cl, sernac.cl, leychile.cl).
3. Disclaimer en el primer mensaje de cada sesión: "No soy abogado ni contador. Te muestro qué dice la regulación oficial con su fuente. Para tu caso, valida con un profesional."
4. Plain language. Nunca uses legalese salvo citando textualmente la ley, e inmediatamente tradúcela.
5. Idioma: español (Chile). Si el usuario escribe en inglés, responde en español aclarando "EN soporte completo en próxima versión, sigamos en español por ahora".
6. UX WhatsApp: máximo una pregunta por mensaje. Mensajes cortos. Listas con viñetas, no párrafos largos. Sin emojis salvo si el usuario los usa primero.
7. JAMÁS pidas la Clave Única del usuario. Si te la ofrece, recházala explícitamente — es la llave de su identidad digital y nunca debe compartirse.

# Progress markers (no gamificación XP, marcadores naturales en WhatsApp)
Cuando cierres un paso del proceso, márcalo con check en la conversación:
✓ Paso 1: tipo de empresa elegido
✓ Paso 2: régimen tributario decidido
🟡 Paso 3: F4415 listo, falta presentar
⬜ Paso 4: patente municipal pendiente
Cuando el usuario pregunte "¿cómo voy?", devuelve un resumen tipo dashboard con porcentaje de avance, leyes que le aplican, próximo deadline.

# Tono
Cercano, directo, sin condescendencia. El usuario es adulto y capaz, lo que necesita es traducción, no protección.`;

const PROFILE_SUFFIXES: Record<string, string> = {
  // ★ MVP: ejecutado end-to-end, demo principal con caso Luca italiano
  foreign_founder: `# Perfil detectado: extranjero residente abriendo empresa de servicios

Prioridades regulatorias para este perfil:
- SII Régimen Pro Pyme Transparente (Ley 21.210, Art. 14 Letra D) — recomendado por defecto para servicios sin empleados
- IVA exportación de servicios si vende a clientes fuera de Chile
- RUT extranjero verificado (debe estar activo como persona)
- Inicio de actividades en SII vía Mi SII online (obligatorio por internet desde Ley 21.210, salvo excepciones)
- Patente comercial municipal según comuna del domicilio comercial (puede ser su casa)
- Capital inicial: NO hay mínimo legal en SpA — puede ser $1 simbólico

Si el usuario está abriendo SpA, el wow moment es entregar el F4415_PJ pre-rellenado con sus datos vía Files API.`,

  // Capacidad descrita, demo limitada en MVP
  informal_digital: `# Perfil detectado: vendedor informal por canal digital (capacidad descrita, demo limitada en MVP)

Prioridades regulatorias para este perfil:
- Umbrales SII donde se gatilla obligación de boleta electrónica
- Régimen Pro Pyme Transparente (típicamente recomendado a este volumen)
- Patente comercial domiciliaria si trabaja desde casa
- Plazos F29 mensual para IVA
- Citación obligatoria de Resolución SII relevante`,

  retail_fisico: `# Perfil detectado: retail físico (capacidad descrita, demo limitada en MVP)

Prioridades regulatorias para este perfil:
- Secuencia: escritura → RUT → SII → patente municipal → primera boleta electrónica
- Fechas críticas y plazos por trámite
- Opciones de financiamiento Caja Los Andes (crédito social) para capital de partida
- Reglamento de Patentes Municipales según comuna específica`,

  consumidor_reclamo: `# Perfil detectado: reclamo a proveedor financiero (cubre flanco CMF Línea 01)

Prioridades regulatorias para este perfil:
- Diferenciar jurisdicción: CMF si banco/AFP/aseguradora · SERNAC si retail/casa comercial · tribunales si ya hay juicio
- Citación obligatoria de Ley 19.496 + Ley 21.398 + NCG aplicable
- Redactar borrador de reclamo formal con los hechos del usuario
- Link directo al portal de reclamos correspondiente`,
};

function classifyProfile(message: string): keyof typeof PROFILE_SUFFIXES {
  const lower = message.toLowerCase();
  if (
    /italiano|venezolan|extranjer|migrante|spa.*servicios|residente|residencia/.test(
      lower,
    )
  ) {
    return "foreign_founder";
  }
  if (/instagram|mercadolibre|facebook|tienda online|vendo por|informal/.test(lower)) {
    return "informal_digital";
  }
  if (/almacén|peluquería|taller|local|barrio|patente comercial/.test(lower)) {
    return "retail_fisico";
  }
  if (/reclam|cobro|cargo|me cobraron|crédito|tarjeta|banco/.test(lower)) {
    return "consumidor_reclamo";
  }
  return "foreign_founder"; // default — el caso primario del MVP
}

function buildSystemPrompt(profile: keyof typeof PROFILE_SUFFIXES): string[] {
  // Array form: prefix se cachea (prompt caching), sufijo es per-request
  return [BASE_SYSTEM_PROMPT, PROFILE_SUFFIXES[profile]];
}

// ───────────────────────────────────────────────────────────────────────────
// 2. Tools — placeholder local, después se reemplaza con MCP server de Lucas
// ───────────────────────────────────────────────────────────────────────────

const NORMATIVA_CHUNKS = [
  {
    source: "cmf" as const,
    identifier: "NCG-502",
    title: "Registro de Prestadores de Servicios Financieros (Fintec)",
    text:
      "La NCG 502 de la CMF establece los requisitos para la inscripción en el Registro de Prestadores de Servicios Financieros regulados por la Ley 21.521. Capital mínimo, políticas de gestión de riesgo operacional, plan de continuidad. Plazo: 60 días hábiles desde la solicitud.",
    url: "https://www.cmfchile.cl/normativa/ncg_502_2024.pdf",
  },
  {
    source: "sii" as const,
    identifier: "Régimen-Pro-Pyme-Transparente",
    title: "Régimen Pro Pyme — Tributación Simplificada (Art. 14 Letra D)",
    text:
      "El Régimen Pro Pyme Transparente permite a empresas con ingresos anuales hasta 75.000 UF tributar sobre flujo de caja. Acceso automático al iniciar actividades si cumple requisitos. Declaración anual F22, IVA mensual F29.",
    url: "https://www.sii.cl/normativa_legislacion/",
  },
  {
    source: "bcn" as const,
    identifier: "Ley-21521",
    title: "Ley 21.521 — Ley Fintec",
    text:
      "La Ley 21.521 (vigente desde 3-feb-2023) regula los servicios financieros prestados mediante tecnología. Define categorías de prestadores y crea el Sistema de Finanzas Abiertas (Open Finance).",
    url: "https://www.bcn.cl/leychile/navegar?idNorma=1187323",
  },
  {
    source: "bcn" as const,
    identifier: "Ley-21210",
    title: "Ley 21.210 · Modernización tributaria",
    text:
      "La Ley 21.210 obliga a presentar el inicio de actividades en SII por internet (Mi SII) por defecto, salvo excepciones específicas para personas naturales sin acceso digital.",
    url: "https://www.bcn.cl/leychile/navegar?idNorma=1145503",
  },
  {
    source: "sernac" as const,
    identifier: "Ley-21398",
    title: "Ley 21.398 · Pro Consumidor Financiero (SERNAC Financiero)",
    text:
      "Reforzó SERNAC Financiero. Análisis obligatorio de solvencia antes de cursar crédito. Plazo máximo 5 días hábiles para certificados de deuda. Garantía legal ampliada de 3 a 6 meses.",
    url: "https://www.bcn.cl/leychile/navegar?idNorma=1170464",
  },
];

const searchNormativa = tool(
  "search_normativa",
  "Busca en fuentes regulatorias chilenas oficiales (CMF, SII, BCN, SERNAC) y devuelve fragmentos citados con URL.",
  {
    query: z.string().describe("La pregunta o tema regulatorio a buscar"),
    source: z
      .enum(["cmf", "sii", "bcn", "sernac"])
      .optional()
      .describe("Filtrar a una fuente específica"),
  },
  async (args) => {
    const filtered = args.source
      ? NORMATIVA_CHUNKS.filter((c) => c.source === args.source)
      : NORMATIVA_CHUNKS;
    return {
      content: filtered.map((chunk) => ({
        type: "text" as const,
        text: `[${chunk.source.toUpperCase()} · ${chunk.identifier}] ${chunk.title}\n${chunk.text}\nFuente: ${chunk.url}`,
      })),
    };
  },
  { alwaysLoad: true },
);

const verifyCitation = tool(
  "verify_citation",
  "Anti-alucinación. Hace fetch del URL oficial provisto y confirma que el dominio responde 200. Llamar antes de cada nueva afirmación regulatoria si la URL no proviene de search_normativa.",
  {
    url: z.string().url().describe("URL oficial a verificar"),
    claimed_text: z
      .string()
      .describe("Texto que se afirma proviene del URL · resumen breve"),
  },
  async (args) => {
    try {
      const allowedHosts = [
        "www.cmfchile.cl",
        "cmfchile.cl",
        "www.sii.cl",
        "sii.cl",
        "www.bcn.cl",
        "bcn.cl",
        "www.sernac.cl",
        "sernac.cl",
        "www.ine.gob.cl",
        "ine.gob.cl",
        "www.suseso.gob.cl",
        "anci.gob.cl",
        "csirt.gob.cl",
      ];
      const u = new URL(args.url);
      if (!allowedHosts.includes(u.hostname)) {
        return {
          content: [
            {
              type: "text" as const,
              text: `❌ verify_citation rechazó URL no oficial: ${u.hostname}. Solo aceptamos dominios .gob.cl o instituciones reguladoras chilenas.`,
            },
          ],
        };
      }
      const res = await fetch(args.url, {
        method: "HEAD",
        redirect: "follow",
        signal: AbortSignal.timeout(5000),
      });
      const ok = res.status >= 200 && res.status < 400;
      return {
        content: [
          {
            type: "text" as const,
            text: ok
              ? `✅ verify_citation OK · ${u.hostname} respondió ${res.status}. URL aceptada para citar.`
              : `⚠️ verify_citation falló · ${u.hostname} respondió ${res.status}. NO uses esta URL en la respuesta — di al usuario que no tienes fuente verificada.`,
          },
        ],
      };
    } catch (err) {
      const msg = err instanceof Error ? err.message : "unknown";
      return {
        content: [
          {
            type: "text" as const,
            text: `⚠️ verify_citation error: ${msg}. NO uses esta URL.`,
          },
        ],
      };
    }
  },
  { alwaysLoad: true },
);

const chisplaMcp = createSdkMcpServer({
  name: "chispla-normativa",
  version: "0.1.0",
  tools: [searchNormativa, verifyCitation],
  alwaysLoad: true,
});

// ───────────────────────────────────────────────────────────────────────────
// 3. Public API · runAgent({ message, sessionId? })
// ───────────────────────────────────────────────────────────────────────────

export type AgentResponse = {
  text: string;
  profile: keyof typeof PROFILE_SUFFIXES;
  toolCalls: { name: string; id?: string }[];
  costUsd?: number;
};

export async function runAgent(opts: {
  message: string;
  sessionId?: string;
  /**
   * Si se provee, recibe text deltas en tiempo real (para SSE en /api/chat web demo).
   * En el flow WhatsApp se omite y la respuesta llega completa al final.
   */
  onTextDelta?: (delta: string) => void;
  /**
   * Si se provee, recibe señales de tool calls (útil para split-screen demo
   * que muestra los tool calls en pantalla mientras el usuario habla).
   */
  onToolUse?: (info: { name: string; id?: string }) => void;
}): Promise<AgentResponse> {
  const profile = classifyProfile(opts.message);
  const systemPrompt = buildSystemPrompt(profile);

  const agentQuery = query({
    prompt: opts.message,
    options: {
      systemPrompt,
      model: "claude-sonnet-4-6",
      tools: [],
      allowedTools: [
        "mcp__chispla-normativa__search_normativa",
        "mcp__chispla-normativa__verify_citation",
      ],
      mcpServers: { "chispla-normativa": chisplaMcp },
      maxTurns: 8,
      includePartialMessages: Boolean(opts.onTextDelta),
      persistSession: false,
      env: { ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY! },
    },
  });

  const fullText: string[] = [];
  const toolCalls: { name: string; id?: string }[] = [];
  let costUsd: number | undefined;

  for await (const event of agentQuery) {
    // Final assistant message
    if (event.type === "assistant") {
      const textBlocks = event.message.content.filter((b) => b.type === "text");
      const text = textBlocks
        .map((b) => ("text" in b ? b.text : ""))
        .join("");
      if (text) fullText.push(text);

      const tools = event.message.content.filter((b) => b.type === "tool_use");
      for (const tu of tools) {
        const info = {
          name: "name" in tu ? (tu.name as string) : "unknown",
          id: "id" in tu ? (tu.id as string) : undefined,
        };
        toolCalls.push(info);
        opts.onToolUse?.(info);
      }
    }

    // Streaming deltas for web demo
    if (event.type === "stream_event") {
      const e = event.event;
      if (e.type === "content_block_delta" && e.delta.type === "text_delta") {
        opts.onTextDelta?.(e.delta.text);
      }
    }

    if (event.type === "result") {
      if (event.subtype === "success") {
        costUsd = event.total_cost_usd;
      }
    }
  }

  // El último mensaje del assistant es la respuesta final
  const text = fullText[fullText.length - 1] ?? fullText.join("\n");

  return { text, profile, toolCalls, costUsd };
}
