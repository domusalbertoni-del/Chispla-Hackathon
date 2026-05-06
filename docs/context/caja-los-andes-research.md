# Caja Los Andes — Research for the Pensioner Persona

> Background reading for the team. The pensioner persona only convinces if it's specific. Generic "abuelita uses agent" loses to "afiliada Caja Los Andes 68 años pregunta por APV con bonificación 15% del SII."

---

## Who Caja Los Andes is

Largest caja de compensación in Chile. **3.9 million affiliates** (per the agenda copy). Workers, pensioners, middle class. Their products mix social welfare and consumer finance:

- **Crédito social** — flagship. Personal loans at lower rates than banks for affiliates. Eligibility tied to employment/pension status.
- **APV (Ahorro Previsional Voluntario)** — voluntary pension savings with tax bonifications.
- **Subsidio cesantía** — unemployment subsidy administration.
- **Beneficios pensionados** — discounts, health, recreation.
- **Préstamos hipotecarios y crédito hipotecario** — mortgage products.
- **Cuenta 2 / Ahorro voluntario** — savings products.

---

## Their pain (as stated in their Apuesta)

> "Cómo una IA conversacional puede guiar decisiones financieras cotidianas (crédito social, cesantía, APV) en lenguaje humano, sin empujar venta. Caso base: asesoría financiera sobre **beneficios que la gente ya tiene pero no usa**."

**Key phrase to memorize:** *"beneficios que ya tienes pero no usas."* Use this verbatim in the pitch. They will hear themselves.

---

## Why pensioners specifically (our segment pick)

Three reasons:
1. **Highest unmet need.** Pensioners have APV bonifications they don't claim. Subsidies they don't apply for. Crédito options they don't compare.
2. **Lowest tech comfort, highest impact.** A plain-language conversational agent is genuinely more accessible than the current self-service portal.
3. **Caja Los Andes can pilot fast.** Pensioner segment is well-defined, ~hundreds of thousands of users, contained.

---

## The APV demo specifically

The query: *"Tengo 68 años, recibo pensión, soy afiliada de Caja Los Andes. Me dijeron que con APV me devuelven plata pero no entiendo nada. ¿Me explican simple?"*

What the agent should answer (in plain Spanish):

1. **What APV is.** Una manera de ahorrar para tu pensión que el Estado premia con un bono o con un descuento de impuestos.
2. **The two regimes.**
   - **Régimen A:** El Estado te pone 15% extra de lo que ahorras (con tope anual). No descuenta impuestos.
   - **Régimen B:** El Estado descuenta de tu base de impuestos lo que ahorraste. Sirve si pagas impuestos altos.
3. **For a pensioner specifically.** Régimen A es típicamente mejor — el bono es plata directa que llega a tu cuenta.
4. **What to do next.** Caja Los Andes tiene un APV específico — tasa, costos, mínimos.
5. **Citations.**
   - SII APV — bonificación 15% (cite real URL)
   - Caja Los Andes APV product page (cite real URL)
6. **Disclaimer.** "Esto te explica cómo funciona, no es asesoría sobre cuánto te conviene a ti — para eso conversa con un asesor previsional."

---

## What the agent should NEVER do

- Recommend a specific product over a competitor
- Tell the user how much to save
- Promise outcomes ("vas a ganar X")
- Use legalese or insurance jargon

---

## Caja Los Andes-specific data we want in the MCP

Public pages from cajalosandes.cl that should be scraped:

- Crédito Social — landing + tasas vigentes
- APV — landing + product detail
- Beneficios pensionados — index
- Subsidio cesantía — guía de aplicación
- Centro de ayuda — FAQs

These are public, no auth, fair game for scraping. Respect rate limits.

---

## What we don't have access to (and shouldn't pretend to)

- Their internal CRM data
- Their non-public actuarial tables
- Their crédito-social pricing engine
- Member-specific account info

**The agent works on PUBLIC info only.** That's a feature, not a limitation. Tell the jury this. CMF will love it.

---

## Pilot proposal (for the post-Lab conversation with Caja Los Andes rep)

**60 days.** **One segment: pensionados afiliados.** **Three deliverables:**

1. Custom Caja Los Andes branded version of the agent, focused on pensioner queries
2. Anonymized analytics: top 20 questions pensioners actually ask
3. Recommendation report: which beneficios are most underused, by query volume

**What we ask from them:**
- A name and a meeting on the calendar within 7 days post-Lab
- (Optional but huge): anonymized FAQ data from their actual call center
- Permission to use the brand inside the agent for the segment

**What they get:**
- A working pilot, deployed, free, during the 60-day Sandbox
- The data on what pensioners are actually confused about (worth gold for their product team)
- First-mover credit in the press from the Impact Lab

This is a no-brainer for them. The risk is zero.

---

**The single sentence to lead with on Day 1:**

> *"Vimos su Apuesta. Estamos construyendo exactamente eso para pensionados — beneficios que ya tienen pero no usan, en lenguaje humano. Queremos pilotearlo gratis en sus 60 días post-Lab."*
