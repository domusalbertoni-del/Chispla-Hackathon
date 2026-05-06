# BLOCKERS.md — Active Issues

> If you're stuck on something for more than 30 minutes, write it here. Anyone — human or Claude — should be able to read this and either help or work around it. Format: status emoji, owner, blocker, what's been tried.

🟢 = resolved (move to bottom under "Resolved")
🟡 = working on it
🔴 = stuck, need help

---

## Active

(no active blockers)

---

## Resolved

🟢 **[Edo] [2026-05-06 16:00] — Desalineamiento docs/ pre-rebrand vs CLAUDE.md + dashboard**

**Qué pasaba:** `docs/ARCHITECTURE.md`, `docs/DEMO_SCRIPT.md` y `docs/PERSONAS.md` describían el producto pre-rebrand (web + Lovable + Calendar + 4 personas con dropdown). `CLAUDE.md` y el dashboard describían el producto vigente (WhatsApp via Kapso + Files API + microemprendedores formalizando + pitch 3+2 con hook "Luca está acá conmigo").

**Resolución:** confirmado por el equipo que el producto canónico es el de CLAUDE.md (WhatsApp + Files API). Lovable y Google Calendar export están **fuera** del producto final. Los 3 docs se reescribieron a la spec WhatsApp en el commit `[hash a llenar tras commit]`. La arquitectura ahora explicita: agente solo en WhatsApp via Kapso, landing pública en Next.js solo para QR + info, PDFs pre-rellenados como wow vía Files API, detección de perfil implícita por contenido del primer mensaje (no dropdown).

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
