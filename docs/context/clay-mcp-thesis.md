# Clay's "MCP Ciudadano" Thesis

> Source: Track 1 agenda block (Wed 14:00-15:00). Clay is Track 1 sponsor. Mentor + jury: Francisco Provoste.

---

## What Clay said publicly (agenda copy)

> "Clay abre el Track 01 con un bloque ampliado de 60 minutos. La apuesta: construir un MCP que traduzca CMF/SII/SERNAC al lenguaje de quien recién entra al sistema financiero. Del prompt al prototipo funcional, jugando en vivo con casos reales de consumidores. Co-construcción abierta con los equipos finalistas del track."

**The Apuesta line that matters most:**
> "Co-construir un MCP ciudadano entre Clay y los equipos finalistas."

---

## Translation

Francisco wants to leave this Lab with a **citizen MCP that exists**. Not a slide. Not a manifesto. A real, deployed, running MCP server that translates CMF/SII/SERNAC into language a regular person can read.

**He explicitly said co-construction with the finalist teams.** That means he's open to whoever shows up with the best v0 and lets him shape it. **That's us.**

---

## Why our MCP IS the citizen MCP

What Francisco said it should do | What our MCP does
--- | ---
Translates CMF | ✅ scrapes + indexes CMF normativa, returns cited chunks
Translates SII | ✅ scrapes + indexes SII circulares
Translates SERNAC | ✅ wraps SERNAC Financiero docs (Ley 21.398)
Plain language for new entrants | ✅ system prompt forces plain-language output, branches on profile
Deployed, callable | ✅ Vercel serverless, HTTP transport, public URL
Co-buildable with Clay | ✅ open source from day 1, schema review on Day 1

**The pitch insight:** we don't say "we built a chatbot." We say "we built the citizen MCP that Clay proposed in the Track 1 opening."

---

## The schema we want Francisco to review

Tools exposed by our MCP server:
```typescript
search_normativa({
  query: string,           // user's natural-language query
  source?: 'cmf' | 'sii' | 'bcn' | 'sernac' | 'caja_los_andes',
  profile?: 'foreign_founder' | 'pensioner' | 'first_gen' | 'migrant',
  language?: 'es' | 'en'
}) → { chunks: [{ text, source_url, citation, published_at, confidence }] }

get_ley_facil({ law_id: string }) → { title, plain_summary, official_url }

get_deadlines({ situation: string, profile: string })
  → { deadlines: [{ title, date, source_url, regulatory_basis }] }

verify_citation({ url: string, claimed_text: string })
  → { exists: boolean, actual_text?: string, confidence: number }
```

**What we ask Francisco to add/change.** He becomes co-author on the schema. Now he's invested.

---

## Open-source plan

- Repo: `github.com/bendita-ia/citizen-mcp` (public after demo Thursday)
- License: MIT
- README in ES + EN
- Clay logo + Francisco's name as Co-Architect (with his permission)
- Issue templates for "add a new regulation source"
- The hackathon code becomes the v1.0 release

This is the line in the pitch: *"El MCP Ciudadano que Clay propuso construir en este Lab. Lo abrimos como código abierto el lunes."*

---

## What if Clay doesn't bite?

Lower-probability scenario but plan for it:
- We still build it, still open-source it, still call it "Citizen MCP"
- We pivot the pitch line to "the MCP this Lab needed" instead of "Clay co-built"
- Francisco still sees his thesis realized — credit accrues to us, but the thesis wins
- Standing-desk-and-mentorship Track 1 prize still in play

**Cost of plan:** zero. We were going to build the MCP regardless. Clay co-build is upside.
