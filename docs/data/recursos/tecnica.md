# Técnica

_Claude API, Agent SDK, MCP, stacks recomendados y snippets listos para copiar._

## Tus créditos Claude

Cada equipo recibe **USD $2.000 en créditos Claude API** para construir durante el Impact Lab. Se acceden con una API key de Anthropic que te entregaremos al comenzar el evento. La clave vive solo en backend — nunca la expongas en frontend.

## Modelos Claude disponibles (abril 2026)

| Modelo | ID en código | Contexto | Input $/1M | Output $/1M | Cuándo usarlo |
|--------|--------------|----------|------------|-------------|---------------|
| Claude Opus 4.7 | `claude-opus-4-7` | 1M tokens | $5.00 | $25.00 | Razonamiento complejo, agentes largos, evaluación |
| Claude Sonnet 4.6 | `claude-sonnet-4-6` | 1M tokens | $3.00 | $15.00 | Default para producción, chat avanzado |
| Claude Haiku 4.5 | `claude-haiku-4-5` | 200K tokens | $1.00 | $5.00 | Clasificación, tool use rápido, prototipos |

> **Importante:** los aliases (`claude-opus-4-7`, `claude-sonnet-4-6`, `claude-haiku-4-5`) son los IDs correctos — no les agregues sufijos de fecha. Opus 4.7 usa adaptive thinking: no envíes `temperature`, `top_p`, `top_k` ni `budget_tokens` (devuelve 400).

## Claude API — Setup básico

```bash
npm install @anthropic-ai/sdk
```

```typescript
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic() // lee ANTHROPIC_API_KEY del entorno

const response = await client.messages.create({
  model: 'claude-sonnet-4-6',
  max_tokens: 1024,
  messages: [{ role: 'user', content: 'Hola, ¿cómo estás?' }],
})

for (const block of response.content) {
  if (block.type === 'text') console.log(block.text)
}
```

## Tool Use — la base de todo agente

Claude puede llamar funciones (tools) que tú defines. El patrón es: tú le pasas herramientas, Claude decide cuándo usarlas, tú ejecutas la función y le devuelves el resultado. La forma recomendada usa Zod para tipado estricto.

```typescript
import { betaZodTool } from '@anthropic-ai/sdk/helpers/beta/zod'
import { z } from 'zod'

const getWeather = betaZodTool({
  name: 'get_weather',
  description: 'Obtiene el clima actual de una ciudad',
  inputSchema: z.object({ city: z.string() }),
  run: async ({ city }) => `22°C y despejado en ${city}`,
})

const final = await client.beta.messages.toolRunner({
  model: 'claude-sonnet-4-6',
  max_tokens: 2048,
  tools: [getWeather],
  messages: [{ role: 'user', content: '¿Clima en Santiago?' }],
})
```

El `toolRunner` ejecuta el loop completo por ti: Claude llama la tool → corre tu `run` → le devuelve el resultado → Claude continúa hasta tener la respuesta final.

## Streaming — respuestas token a token

```typescript
const stream = client.messages.stream({
  model: 'claude-sonnet-4-6',
  max_tokens: 4096,
  messages: [{ role: 'user', content: 'Cuéntame una historia corta' }],
})

for await (const event of stream) {
  if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
    process.stdout.write(event.delta.text)
  }
}

const finalMessage = await stream.finalMessage()
```

## Extended Thinking — razonamiento profundo

Opus 4.7 y Sonnet 4.6 pueden pensar antes de responder. Sirve para matemáticas, análisis legal, debugging de código complejo.

```typescript
await client.messages.create({
  model: 'claude-opus-4-7',
  max_tokens: 16000,
  thinking: { type: 'adaptive' },
  output_config: { effort: 'high' }, // 'low' | 'medium' | 'high' | 'max'
  messages: [{ role: 'user', content: 'Resuelve paso a paso...' }],
})
```

## Claude Agent SDK — agentes completos en 10 líneas

El **Claude Agent SDK** es el runtime oficial de Anthropic para construir agentes. Es el mismo motor que usa Claude Code. Trae tools built-in (bash, read, write, edit, glob, grep, web_fetch, web_search), soporta MCP, y maneja sesiones y permisos.

```bash
npm install @anthropic-ai/claude-agent-sdk
```

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk'

for await (const message of query({
  prompt: '¿Qué archivos hay en la carpeta actual? Resume qué hace cada uno.',
})) {
  console.log(message)
}
```

**Qué te da gratis:**
- Tools built-in: bash, edición de archivos, búsqueda web, fetch
- Sesiones persistentes — el agente recuerda turnos anteriores
- Permisos finos — decides qué tools puede usar y cuándo pedir confirmación
- Hooks `PreToolUse` / `PostToolUse` para auditar o modificar llamadas
- Outputs estructurados con Zod
- Adaptive thinking integrado

Docs: https://code.claude.com/docs/en/agent-sdk/typescript

## MCP — Model Context Protocol

MCP es el estándar abierto (impulsado por Anthropic) para conectar modelos a datos y sistemas externos. Es "USB-C para IA": tú escribes un **servidor MCP** que expone tools, resources y prompts, y cualquier **cliente MCP** (Claude Desktop, Claude Code, Cursor, VS Code) puede usarlo.

**Servidor MCP mínimo (TypeScript):**

```bash
npm install @modelcontextprotocol/sdk zod
```

```typescript
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

const server = new McpServer({ name: 'fintech-helper', version: '1.0.0' })

server.tool(
  'consulta_cmf',
  'Consulta registro de prestadores fintec en la CMF',
  { rut: z.string() },
  async ({ rut }) => ({
    content: [{ type: 'text', text: `Consultando ${rut}...` }],
  }),
)

await server.connect(new StdioServerTransport())
```

Úsalo si tu producto expone datos específicos (registro CMF, circulares SII, datasets propios) y quieres que Claude los consulte con reglas tuyas. Docs: https://modelcontextprotocol.io

## Prompt Caching — ahorra hasta 90% en contexto repetido

Si tu agente usa un system prompt largo (ej: 20k tokens con instrucciones + dataset), el prompt caching guarda ese prefijo y cobra ~0.1× por lecturas posteriores.

```typescript
await client.messages.create({
  model: 'claude-opus-4-7',
  max_tokens: 2048,
  system: [{
    type: 'text',
    text: '<contexto enorme reutilizable>',
    cache_control: { type: 'ephemeral', ttl: '1h' }, // o sin ttl = 5min
  }],
  messages: [{ role: 'user', content: 'Pregunta del usuario' }],
})
```

**Reglas clave:**
- Mínimo 4096 tokens cacheables en Opus 4.7 / Haiku 4.5 (2048 en Sonnet 4.6)
- Máximo 4 breakpoints por request
- Verifica hits: `response.usage.cache_read_input_tokens > 0`
- Cualquier byte que cambie en el prefijo invalida todo lo posterior — pon contenido estable primero

Docs: https://platform.claude.com/docs/en/build-with-claude/prompt-caching

## Imágenes y PDFs

**Imagen por URL:**

```typescript
messages: [{
  role: 'user',
  content: [
    { type: 'image', source: { type: 'url', url: 'https://...' } },
    { type: 'text', text: '¿Qué ves en esta imagen?' },
  ],
}]
```

**PDF con Files API** (recomendado si lo reutilizas):

```typescript
import { toFile } from '@anthropic-ai/sdk'
import fs from 'fs'

const uploaded = await client.beta.files.upload({
  file: await toFile(fs.createReadStream('circular.pdf'), undefined, {
    type: 'application/pdf',
  }),
  betas: ['files-api-2025-04-14'],
})

await client.beta.messages.create({
  model: 'claude-opus-4-7',
  max_tokens: 4096,
  messages: [{
    role: 'user',
    content: [
      { type: 'text', text: 'Resume esta circular CMF' },
      {
        type: 'document',
        source: { type: 'file', file_id: uploaded.id },
        citations: { enabled: true },
      },
    ],
  }],
  betas: ['files-api-2025-04-14'],
})
```

## Prompt Engineering — lo que funciona

- **Rol + tarea explícita** en el system prompt
- **Formato esperado** (JSON con schema, markdown, XML)
- **Ejemplos** (few-shot) cuando el patrón es complejo
- **Limitaciones** (qué NO debe hacer)
- **XML tags** para estructurar input: `<context>...</context>`, `<question>...</question>`
- **Adaptive thinking** antes de responder si el problema lo requiere

```
Eres analista regulatorio senior. Tu tarea es evaluar propuestas fintech
contra la Ley 21.521 (Chile) y devolver veredicto estructurado.

<formato>
{
  "cumple_ley_fintec": true|false,
  "articulos_aplicables": ["art. X"],
  "riesgos": ["..."],
  "recomendaciones": ["..."]
}
</formato>

Nunca inventes artículos. Si te falta información, pídela explícitamente.
```

## Stacks recomendados

**Frontend + fullstack:**
- **Next.js 14+ (App Router)** — el default. Deploy instantáneo en Vercel
- **React + Vite** — si solo quieres SPA rápida
- **Remix / TanStack Start** — alternativas más livianas

**Backend + DB:**
- **Supabase** (Postgres + Auth + Storage + Realtime + pgvector) — recomendado
- **Firebase** — alternativa Google
- **Neon / Turso** — solo DB serverless

**Deploy:**
- **Vercel** — ideal para Next.js
- **Fly.io / Railway / Render** — si necesitas workers o WebSockets

**IA:**
- **Claude API** + `@anthropic-ai/sdk`
- **Claude Agent SDK** — para agentes de verdad
- **MCP SDK** — para exponer tus datos como tools

## Supabase en 5 minutos

```bash
npm install @supabase/supabase-js @supabase/ssr
```

```typescript
// src/lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
```

**Auth con magic link:**

```typescript
const supabase = createClient()
await supabase.auth.signInWithOtp({
  email: 'user@ejemplo.cl',
  options: { emailRedirectTo: `${origin}/callback` },
})
```

**Row Level Security** es obligatoria desde el día uno — no uses `service_role` en rutas públicas.

## RAG con pgvector — resumen

Si tu producto necesita buscar en muchos documentos:

1. **Ingesta:** divide docs en chunks de ~500 tokens
2. **Embeddings:** convierte chunks a vectores (OpenAI `text-embedding-3-small`)
3. **Storage:** guarda vectores + texto en pgvector (Supabase lo soporta nativo)
4. **Query:** embedding del query → similarity search → top-k chunks → pasar a Claude como contexto

## Deploy rápido

```bash
npm install -g vercel
vercel
```

Conectas tu repo, configuras env vars (`ANTHROPIC_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`), listo. CI/CD automático en cada push.

## Recursos imprescindibles

- Anthropic Docs: https://docs.anthropic.com
- Claude Agent SDK: https://code.claude.com/docs/en/agent-sdk/typescript
- Anthropic Cookbook: https://github.com/anthropics/anthropic-cookbook
- Claude Code: https://claude.ai/code
- MCP spec + servers: https://modelcontextprotocol.io
- Supabase docs: https://supabase.com/docs
- Next.js App Router: https://nextjs.org/docs/app
- Vercel: https://vercel.com/docs