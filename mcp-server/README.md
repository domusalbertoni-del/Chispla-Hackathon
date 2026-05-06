# Chispla MCP — Citizen MCP Server

TypeScript MCP server with HTTP transport, deployed as a Railway service at `mcp.up.railway.app`.

**Design philosophy:** Chispla MCP applies the three patterns Anthropic publishes for [Claude in financial services](https://claude.com/solutions/financial-services) — **source attribution**, **agentic workflows**, and **MCP as semantic data layer** — to the citizen segment in Chile. Open source, MIT, consumable from Claude Desktop / Cursor / any MCP client.

## Tools

| Tool | Purpose |
|------|---------|
| `search_normativa` | pgvector semantic search over CMF / SII / SERNAC / Caja regulations with cited chunks |
| `get_ley_facil` | Proxy to BCN Ley Fácil API — official plain-language summaries of Chilean laws |
| `get_pasos_formalizacion` | Structured checklist of cross-cutting steps (SII + municipality + CMF where applicable) |
| `verify_citation` | Fetches the source URL and confirms the cited passage exists — anti-hallucination guardrail |

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Structure

```
mcp-server/
├── src/
│   ├── index.ts        # MCP server entry point
│   ├── tools/          # Tool implementations
│   │   ├── search-normativa.ts
│   │   ├── get-ley-facil.ts
│   │   ├── get-deadlines.ts
│   │   └── verify-citation.ts
│   ├── db/             # Supabase client + queries
│   └── scraper/        # Firecrawl ingestion scripts
├── package.json
└── tsconfig.json
```

## Environment Variables

```
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=            # For embeddings only
```

## Data Ingestion

```bash
# One-time scrape of regulatory sources
npm run ingest
```

## Consumir el MCP desde otro cliente

Una vez deployado, cualquier agente compatible con MCP puede conectarse. Ejemplo para Claude Desktop config:

```json
{
  "mcpServers": {
    "chispla": {
      "url": "https://mcp.up.railway.app"
    }
  }
}
```

Cualquier institución (Caja Los Andes, Clay, Coopeuch, ASECH) puede plugar este MCP en su propio agente y traducir CMF/SII/SERNAC para sus usuarios sin reconstruir la capa de datos.
