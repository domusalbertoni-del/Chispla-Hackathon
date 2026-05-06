# Chispla

> WhatsApp agent that helps first-time founders in Chile formalize their business — powered by Claude + a regulatory MCP server.

**Claude Impact Lab Chile 2026 | Track 1: Inclusión Financiera**

## What is this?

For anyone opening a business in Chile for the first time, Chispla builds a complete playbook via WhatsApp — steps, deadlines, obligations, decisions, and pre-filled PDF forms — grounded in real SII and CMF regulations.

## Monorepo

| Folder | What | Owner |
|--------|------|-------|
| `app/` | Backend + API routes (Vercel serverless) | Edo + Luca |
| `mcp-server/` | TypeScript MCP server (regulatory data) | Lucas + Luca |
| `docs/` | Team coordination, war-room dashboard, decisions | Everyone |

## Quick Start

```bash
# Backend
cd app && npm install && npm run dev

# MCP Server
cd mcp-server && npm install && npm run dev
```

## Team

- **Luca** — Product, full-stack flex, live case study
- **Lucas** — MCP server + regulatory data + pitcher
- **Edo** — WhatsApp integration + vibecoding

## Stack

- Claude Agent SDK (`@anthropic-ai/claude-agent-sdk`)
- WhatsApp via Kapso
- Supabase (Postgres + pgvector)
- BCN API Ley Fácil + cached SII/CMF PDFs
- Files API (pre-filled PDF forms)
- OpenAI embeddings (text-embedding-3-small)
- Vercel deployment

## Key Principle

> The agent never invents citations. If the MCP has no verified source, it says so.
