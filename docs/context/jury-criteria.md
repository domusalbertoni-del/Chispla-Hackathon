# Jury Criteria — How We Will Be Judged

> This is meta-context for the team. Not for the demo. Used to self-score before the pitch.

---

## The Track 1 jury

- **Anthropic** — Technical Partner. Cares about: correct use of Agent SDK, MCP architecture, prompt patterns, Claude as the reasoning engine (not a wrapper).
- **FinteChile** — Ecosystem connector. Cares about: scalability, sandbox-readiness, who could adopt this in 60 days.
- **CMF** — Regulator. Cares about: regulatory rigor, no hallucination, real citations, doesn't give legal advice.
- **Clay (Francisco Provoste)** — Track 1 sponsor. Cares about: did you build the citizen MCP? Is it open? Does it make their thesis real?
- **Caja Los Andes** — Track 1 co-sponsor. Cares about: does this serve their 3.9M affiliates? Is the pensioner persona real?

---

## The published rubric (per the comercial doc)

The Impact Lab measures **citizen impact, not business model**. The rubric line that distinguishes 3/5 from 5/5:

| Score | Viability post-Lab |
|-------|---------------------|
| 3 | Realistic channel, no concrete contact |
| 4 | First contact identified or meeting scheduled |
| 5 | 30-60 day plan, stakeholder committed, roadmap written |

**Our 5/5 strategy:** Day 1 networking gets a verbal commitment from a Caja Los Andes rep + Francisco Provoste (Clay) for a 60-day post-Lab pilot. We have the names, the agenda, and the access.

---

## How we self-score against the 7 likely criteria

**1. Working demo (does it run live?)**
Target: 5/5. Must run end-to-end on stage. Loom backup recorded Wed night.

**2. Regulatory rigor (cited, accurate, no hallucination)**
Target: 5/5. Hard rule in system prompt: no MCP result → no answer. Every claim cites a real URL.

**3. Originality (vs. generic RAG chatbot)**
Target: 5/5. Profile-driven multi-persona + citizen MCP + Calendar export = no other team will have all three.

**4. Technical depth (Anthropic-quality patterns)**
Target: 5/5. Agent SDK, prompt caching, MCP server, tool use, structured outputs. All from the official Anthropic playbook.

**5. Citizen impact (specific segment + real adoption channel)**
Target: 5/5. Foreign founders + Caja Los Andes pensioners. Real numbers. Real adoption path through Caja Los Andes.

**6. Presentation (4-minute pitch quality)**
Target: 5/5. Memorized, lived experience, killer Calendar moment, switch-persona reveal.

**7. Team & viability (post-Lab plan, stakeholder commitment)**
Target: 5/5. The Day 1 networking commitments are the lever here.

---

## Where we lose if we don't watch out

- **Demo breaks live.** Mitigation: Loom backup, dry-run 4x Wed night, fallback to "let me show you the recording."
- **Citations broken.** Mitigation: every citation URL verified during ingestion, broken-link alerting in the MCP.
- **No Caja Los Andes commitment by Thursday morning.** Mitigation: Luca finds them within first 2 hours of Day 1, has a printed 1-pager, leaves with a yes or a clear "let's talk Friday."
- **Looking like every other RAG chatbot.** Mitigation: lead pitch with Calendar export + persona switch. These are the differentiators.
- **Anthropic engineer looks at the repo and sees LangChain.** Mitigation: enforce in CLAUDE.md, code review before push.

---

## Pitches we expect to be up against

Most likely competitor concepts on Track 1:
- "Generic CMF chatbot in WhatsApp" (low diff, weak demo)
- "Crowdfunding regulation explainer" (narrow, niche)
- "AFP/pension explainer for boomers" (overlaps Caja Los Andes turf — but if executed well, dangerous)
- "Voice agent for blind/low-literacy users" (high inclusion impact — could beat us if they execute)
- "Open Finance / NCG 514 onboarding tool" (very technical — could win Anthropic vote)

**Where we beat each:**
- Generic chatbot → we have profiles + Calendar export
- Crowdfunding-only → we span multiple use cases
- AFP/pensions → our pensioner persona covers this AND we're broader
- Voice → we can add ElevenLabs Wed night if they're a real threat
- Open Finance → we cite NCG 514 too, and we're more user-facing

---

## What to NOT say in the pitch

- Don't promise to "replace contadores or abogados." Triggers regulatory pushback.
- Don't say "we use AI to give financial advice." Say "we translate public regulation."
- Don't oversell B2B revenue — Impact Lab cares about citizen impact, not ARR.
- Don't show the LangChain logo if you accidentally use it (we're not using it, but: enforce).
- Don't reference Anthropic's competitors. Don't joke about hallucination.
