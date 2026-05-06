# Bendita IA — MCP Server

TypeScript MCP server deployed as Vercel serverless function.

## Tools

| Tool | Purpose |
|------|---------|
| `search_normativa` | pgvector semantic search over CMF/SII/Caja regulations |
| `get_ley_facil` | Real-time BCN Ley Fácil plain-language API |
| `get_deadlines` | Structured date extraction from regulations |
| `verify_citation` | Returns URLs + article refs for every claim |

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
