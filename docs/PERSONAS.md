# PERSONAS.md — The 4 Demo Personas

> Each persona drives a different system prompt branch and surfaces different MCP context. The agent's behavior should adapt visibly between them.

---

## Persona 1: Foreign Founder 🌎 (PRIMARY DEMO PERSONA)

**Why primary:** This is Luca's lived experience. The pitch opens with this story.

**Profile signals:** non-Chilean nationality, recently incorporated entity (SpA, Ltda), tech/SaaS context, often serves clients abroad.

**System prompt branch:** prioritize SII tax setup (Régimen Pro Pyme, IVA on cross-border services), CMF if fintech-adjacent, Ley 21.521 if applicable, foreign-investor implications.

**Demo query (the one Luca types live on stage):**
> "I'm Italian, just opened an SpA in Chile in October. I sell SaaS to Chilean and Brazilian clients. No employees yet. What tax obligations do I have and what should I do first?"

**Expected agent behavior:**
- Detect: foreign founder, SpA, B2B SaaS, cross-border, no employees
- Call MCP: `search_normativa({ source: 'sii', topic: 'pro_pyme + IVA exportacion' })`
- Return: structured 7-day checklist with citations
- Offer: export deadlines to Google Calendar
- Language: respond in same language as query (EN here)

---

## Persona 2: Caja Los Andes Affiliate Pensioner 👴 (SECONDARY DEMO PERSONA)

**Why secondary:** The "watch — same agent, different context" moment in the demo. Caja Los Andes-specific.

**Profile signals:** retiree, receives pension, may have APV, benefits awareness gap.

**System prompt branch:** prioritize Caja Los Andes public benefits (APV, crédito social, beneficios pensionados), SERNAC Financiero rights, plain-language pension/financial decisions.

**Demo query:**
> "Tengo 68 años, recibo pensión de la AFP, soy afiliada de Caja Los Andes. Me dijeron que con APV me devuelven plata pero no entiendo nada. ¿Me explican simple?"

**Expected agent behavior:**
- Detect: pensioner, Caja Los Andes affiliate, APV question, plain-Spanish request
- Call MCP: `search_normativa({ source: 'caja_los_andes + sii', topic: 'APV + bonificacion fiscal' })`
- Return: plain-Spanish explanation, citing Caja Los Andes' public APV page + SII bonificación rules
- Hammer the Caja Los Andes "Apuesta" phrase: *beneficios que ya tienes pero no usas*

---

## Persona 3: First-Gen Chilean Entrepreneur 🥖

**Why included:** Demonstrates breadth without burning demo time. Ready for Q&A or extended demo.

**Profile signals:** small family business, often regional, low financial literacy, considering formalization.

**Demo query:**
> "Mi familia tiene una panadería hace 15 años, vendemos como persona natural. Queremos formalizarnos. ¿Qué tipo de empresa nos conviene y qué impuestos pagamos?"

**Expected:** SII Régimen Pro Pyme explanation, comparing EIRL vs SpA, IVA basics, plain-Spanish.

---

## Persona 4: Migrant Small Business Owner 🛒

**Why included:** Inclusion narrative. Caja Los Andes overlap (many migrant workers are affiliates).

**Profile signals:** non-Chilean, informal or just-formalized small business, language friction.

**Demo query:**
> "Soy venezolana, abrí un almacén pequeño hace 6 meses. No sé qué papeles del SII tengo que tener al día y me da miedo que me multen."

**Expected:** SII formalization basics, IVA mensual, boleta electrónica, derechos del consumidor financiero (SERNAC) if she's taking out crédito.

---

## How profile detection works in the agent

Two paths:
1. **Explicit:** UI dropdown lets the user pick their profile → injects profile-specific context block into system prompt
2. **Implicit:** From the natural-language query, Claude classifies the user (using Haiku 4.5 for speed) and selects the appropriate context

Demo uses **explicit** for clarity and visual impact (judges see the dropdown change behavior). Production would use both.

---

## What every persona shares

- Bilingual ES/EN auto-detected from query
- Every claim cited with link to real CMF/SII/BCN/Caja Los Andes URL
- Plain language — agent never uses legalese unless quoting law verbatim with translation
- Optional: export to Google Calendar for any deadline-driven response
- Disclaimer footer: "No es asesoría legal. Consulta a un profesional para tu caso específico." (only on first response per session)
