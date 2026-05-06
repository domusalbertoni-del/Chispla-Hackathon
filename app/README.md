# Bendita IA — Frontend + API

Next.js 15 App Router + Tailwind + shadcn

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Structure

```
app/
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── page.tsx    # Landing + profile selector
│   │   ├── chat/       # Chat interface
│   │   └── api/
│   │       └── chat/   # Agent SDK endpoint (SSE)
│   ├── components/     # UI components (shadcn)
│   ├── lib/            # Utils, agent config, supabase client
│   └── prompts/        # System prompts per persona
├── public/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Key Routes

- `/` — Landing page with profile selector
- `/chat` — Conversational interface (SSE streaming)
- `/api/chat` — Agent SDK loop (calls MCP server)

## Environment Variables

```
ANTHROPIC_API_KEY=       # Server-only, never exposed to client
SUPABASE_URL=
SUPABASE_ANON_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```
