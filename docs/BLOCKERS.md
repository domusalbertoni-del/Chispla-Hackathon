# BLOCKERS.md — Active Issues

> If you're stuck on something for more than 30 minutes, write it here. Anyone — human or Claude — should be able to read this and either help or work around it. Format: status emoji, owner, blocker, what's been tried.

🟢 = resolved (move to bottom under "Resolved")
🟡 = working on it
🔴 = stuck, need help

---

## Active

🟡 **[Edo] [2026-05-06 15:30] — Desalineamiento docs/ pre-rebrand vs CLAUDE.md + dashboard**

**Qué pasa:** `CLAUDE.md` (post-rebrand "Chispla") y `docs/chispla-dashboard.html` describen el producto actual: **WhatsApp via Kapso · playbook de formalización con PDFs pre-rellenados · pitch 3+2 con hook "Luca está acá conmigo" · personas microempresarios primera generación**.

Pero los docs `docs/ARCHITECTURE.md`, `docs/DEMO_SCRIPT.md` y `docs/PERSONAS.md` describen el producto **pre-rebrand**: web app con dropdown de 4 personas (foreign founder + pensioner + first-gen + migrant) · Next.js + Lovable · Google Calendar export como wow moment · pitch 4+1 con apertura "Hace tres meses abrí una empresa".

**Por qué importa:** Lucas está owner de MCP y la implementación va a leer `ARCHITECTURE.md` para construir. Si construye el web app de 4 personas, no la integración WhatsApp de microempresarios, el demo del 7-may no calza con el pitch.

**Qué se hizo:**
- Dashboard corregido a v3.3 (rúbrica oficial 7-checks, gates con penalizaciones tipadas, fuentes ancladas con URL).
- `docs/data/` agregado con snapshot del API del Lab (rúbrica oficial v3.3 confirma estructura mentor 40% + juez 60%).
- Este blocker abierto.

**Decisión que falta:** ¿Cuál es el producto de verdad? Opciones:
1. WhatsApp + formalización (lo que dice CLAUDE.md). Actualizar ARCHITECTURE/DEMO_SCRIPT/PERSONAS.
2. Web + 4 personas (lo que dicen los docs). Actualizar CLAUDE.md y el dashboard.
3. Híbrido: backend único, dos canales (WhatsApp + web).

**Quien decide:** Luca + Lucas + Edo en Discord/standup. Antes del workshop Clay 6-may 14:00 idealmente.

---

---

## Resolved

(empty)

---

## How to use this file

**When you hit a blocker:**
1. Append a new entry with 🔴
2. Write what you tried already
3. Tag what kind of help you need
4. Push the change to the hive repo
5. Continue on the next vertical slice while you wait

**When you resolve someone's blocker:**
1. Move their entry to "Resolved"
2. Add a one-line note on what fixed it
3. Push

**When Claude reads this:**
Always check this list before suggesting work. If a teammate is blocked and you have context that unblocks them, surface that first.

---

## Template for a new blocker

```
🔴 [Owner] [YYYY-MM-DD HH:MM] — One-line summary

**What I'm trying to do:** ...

**What's happening:** ...

**What I've tried:**
- attempt 1
- attempt 2

**What kind of help I need:** code review / second pair of eyes / a Claude with full repo context / Luca decision
```
