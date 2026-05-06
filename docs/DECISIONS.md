# DECISIONS.md — Append-Only Decision Log

> Every meaningful technical or strategic decision goes here. Append, don't edit. Format: date, decision, why, who.

---

## 2026-05-05 — Track 1: Inclusión Financiera
**Decision:** Compete in Track 1 (not 2 or 3).
**Why:** Strongest sponsor alignment with our team's profile. Clay's "MCP ciudadano" thesis perfectly matches what we want to build. Caja Los Andes opens a pilot pathway. Luca is literally the foreign-founder persona.
**Who:** Luca

## 2026-05-05 — Profile-driven multi-persona, not single-sponsor
**Decision:** Build a platform that adapts to 4 personas (foreign founder, Caja Los Andes affiliate, pensioner, first-gen entrepreneur), not a Caja Los Andes-specific tool.
**Why:** Multi-jury format means optimizing for one sponsor loses 4 other votes. "Platform" framing wins more prize categories (track + grand prize + sandbox).
**Who:** Luca

## 2026-05-05 — Claude Agent SDK over raw Anthropic SDK
**Decision:** Use `@anthropic-ai/claude-agent-sdk` for the agent loop.
**Why:** Native MCP support, sessions, hooks, prompt caching. Less code, more capability. Anthropic engineers in the room will recognize it.
**Who:** Luca (research from Anthropic legal/technical doc)

## 2026-05-05 — Sonnet 4.6 default, Opus 4.7 for complex reasoning
**Decision:** Default model is `claude-sonnet-4-6`. Escalate to `claude-opus-4-7` for profile reasoning and citation verification.
**Why:** Cost/speed balance. $2k credits is plenty but Opus is 5x more expensive on input. Sonnet 4.6 handles 95% of our agent flows.
**Who:** Luca

## 2026-05-05 — Supabase + pgvector over external vector DB
**Decision:** Use Supabase Postgres with pgvector extension.
**Why:** Recommended in the Lab's official legal/technical guide. One service for auth + DB + vectors. Free tier covers the hackathon.
**Who:** Luca

## 2026-05-05 — OpenAI embeddings (the only non-Claude AI use)
**Decision:** Use `text-embedding-3-small` for vectorizing regulatory chunks.
**Why:** Claude doesn't have an embeddings API. Embeddings are math, not reasoning, so they don't violate the "main work in Claude" rule. Cheap (~$0.02 for the whole regulatory corpus).
**Who:** Luca

## 2026-05-05 — Lovable for UI scaffold, custom backend for agent
**Decision:** Lovable scaffolds the front-end shell. The agent and MCP calls live in our own Next.js API routes, not Lovable's built-in AI.
**Why:** Speed where speed matters (UI), control where control matters (agent). "Main work in Claude" stays clean.
**Who:** Luca

## 2026-05-05 — Vertical slices per teammate, not horizontal layers
**Decision:** Each teammate owns one persona end-to-end (UI → MCP → output) instead of one owning frontend, one backend.
**Why:** Less merge conflict, faster ship, easier to demo each slice independently if one breaks.
**Who:** Luca

---

<!-- Append new decisions below with date and signature -->
