# CLAUDE.md — Master Context for Chispla

> Every Claude Code, Cursor, or Claude Desktop session working on this project must read this file before responding. This is the team's shared brain.

---

## Who we are

We are **Chispla**, a 3-person team competing at **Claude Impact Lab Chile 2026** (May 6-7, Espacio Riesco, Santiago) in **Track 1: Inclusión Financiera**.

Team:
- **Luca** — Product, stakeholder networking, full-stack flex. Italian, based in Santiago. The live case study in the pitch.
- **Lucas** (lucaslobosn@gmail.com) — Builder + pitcher. Owns the MCP server and regulatory data layer.
- **Edo** (edosanchezcl@gmail.com) — Builder (vibecoder). Owns the WhatsApp integration and frontend.

We are vibecoders. We ship fast. We prefer working code over architecture purity.

---

## CRITICAL RULE

> **Zero code before May 6 00:00 Chile time (UTC-4).** The jury verifies commits + Claude console. Building before = technical score = 0. Docs and planning are fine.

---

## Monorepo structure

```
chispla/
├── CLAUDE.md          ← You are here
├── docs/              ← Team coordination (decisions, blockers, personas, dashboard)
├── app/               ← Backend + API routes (Railway containers persistentes)
├── mcp-server/        ← TypeScript MCP server (Railway containers persistentes)
└── .github/           ← CI/CD
```

---

## What we are building

A **WhatsApp-based conversational agent** that helps people opening a business in Chile for the first time. The agent gives them a **complete playbook** — steps in order, deadlines, obligations, decisions to make, and pre-filled PDF forms — grounded in real SII, CMF, and BCN regulations.

**Target segment:** Anyone formalizing a business for the first time — microempresarios primera generación (1.8M+ in Chile), foreign founders, informal sellers, young entrepreneurs.

**Channel:** WhatsApp via Kapso (where the users already are).

**The technical heart:** A custom MCP server wrapping Chilean regulatory data (SII, CMF, BCN Ley Fácil API). Claude calls this MCP to ground every response in real, citable, verifiable law.

**The killer demo moment:** A first-time founder describes their situation → the agent returns a personalized playbook with citations to real regulations → delivers pre-filled PDF forms ready to execute.

---

## Why this wins

The Track 1 jury is Anthropic + FinteChile + CMF + Clay + Caja Los Andes. We are building **product-agnostic infrastructure** (a "citizen MCP") that multiple sponsors want to adopt.

**Strategy:** Arrive at Demo Day with 2 sponsors confirmed asking for the pilot.

- **Clay** wants a citizen MCP for their PyME clients. We are building it.
- **Caja Los Andes** wants to retain affiliates transitioning employee→independent. Our user = their user.
- **CMF** wants regulatory rigor. Every response cites a real article.
- **Anthropic** wants production-grade agent + MCP + tool use patterns.
- **FinteChile** wants scalable infrastructure. The MCP is open after the Lab.

---

## Technical decisions (locked)

- **Models:** Claude Sonnet 4.6 default. Opus 4.7 for complex reasoning. Haiku 4.5 for classification. IDs: `claude-sonnet-4-6`, `claude-opus-4-7`, `claude-haiku-4-5`. No date suffixes.
- **Opus 4.7 quirk:** never send `temperature`, `top_p`, `top_k`, or `budget_tokens` — returns 400.
- **Agent runtime:** `@anthropic-ai/claude-agent-sdk` (NOT raw SDK, NOT LangChain).
- **WhatsApp:** via Kapso (WhatsApp Business API integration).
- **Backend:** Railway containers persistentes functions.
- **Database:** Supabase (Postgres + pgvector + Auth). Region sa-east-1. RLS strict.
- **Embeddings:** OpenAI `text-embedding-3-small` (only allowed non-Claude AI use; embeddings are math not reasoning).
- **MCP server:** Standalone TypeScript, deployed as Railway containers persistentes function.
- **Data sources:** BCN API Ley Fácil (JSON, free, official) + cached PDFs from CMF/SII.
- **Files API:** For delivering pre-filled PDF forms to users.
- **Deploy:** Railway (Next.js app + cron) + Supabase sa-east-1 (Postgres + pgvector + RLS). Railway chosen for speed: account already exists, persistent containers, built-in cron for proactive WhatsApp check-ins. Repo private until demo, public after.
- **Prompt caching:** required for the regulatory context block.

## Forbidden

- Never use OpenAI, Gemini, or any non-Claude model for reasoning.
- Never use LangChain, LlamaIndex, Bolt, or Replit Agent.
- Never expose `ANTHROPIC_API_KEY` in frontend/client code.
- Never use Pinecone or Weaviate. pgvector via Supabase.
- Never auto-share files or send emails without Luca's explicit approval.

---

## The demo (3 min pitch + 2 min Q&A, Thursday May 7)

**Who pitches:** Lucas. Luca is on stage as the live case study.

**Hook (15s):** "Luca está acá conmigo. Es italiano. Lleva un año en Chile y quiere abrir su empresa. Tres semanas leyendo PDFs del SII después, no sabe si tiene que sacar patente municipal primero o iniciar actividades en el SII..."

**Structure:** Hook → Problem (1.8M microempresarios) → Solution (live demo) → Market → Civic impact → Traction (Forum validations + sponsors) → Team → Ask.

**Ask:** 60-day AI Fintech Sandbox + Caja Los Andes pilot + Clay MCP access. Promise: 500 microempresarios formalizados in 90 days.

**Bonus tools declared:** MCP propio + Files API.

---

## Deliverables & deadlines

| Deadline | Deliverable |
|----------|-------------|
| May 7, 10:00 | Ficha cívica (problem, segment, value prop, channel, data) |
| May 7, 17:00 | Technical (demo video 3-5 min + Claude console screenshot + system prompt + bonus: repo, tools schema) |
| May 7, afternoon | Live pitch (3 min + 2 min Q&A) |

---

## Operating principles

1. **Read first, write second.** Check `docs/PROJECT.md` for state, `docs/DECISIONS.md` for prior choices.
2. **Demo-first reasoning.** Every decision: "does this strengthen the Thursday demo?"
3. **Vertical slices, not horizontal layers.** Ship end-to-end features, not abstract layers.
4. **Cite the law, never invent it.** No MCP result = say "No tengo una fuente verificada."
5. **Bilingual from the start.** ES and EN. System prompt branches by language.
6. **Time-box.** 90 minutes stuck → escalate in `docs/BLOCKERS.md`.
7. **Update the hive.** Append to `docs/DECISIONS.md` for any architectural choice.
8. **Validate in the hallway.** Test with Chile Fintech Forum attendees on Day 1, not among ourselves.

---

## Pointers

- War-room dashboard: `docs/chispla-dashboard.html`
- Current state: `docs/PROJECT.md`
- Decision log: `docs/DECISIONS.md`
- Active blockers: `docs/BLOCKERS.md`
- Demo personas: `docs/PERSONAS.md`
- Pitch script: `docs/DEMO_SCRIPT.md`
- Architecture: `docs/ARCHITECTURE.md`
- Regulatory datasets: `docs/DATASETS.md`
- Strategic context: `docs/context/`
