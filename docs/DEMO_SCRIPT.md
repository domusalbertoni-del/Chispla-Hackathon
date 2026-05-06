# DEMO_SCRIPT.md — The 4-Minute Pitch

> Luca delivers this. Memorized, not read. Times are targets, not exact. Total: 4:00 + 1:00 Q&A.

---

## Spanish version (default — pitch will be in Spanish)

### 0:00–0:30 — Hook (la historia personal)

"Hace tres meses abrí una empresa en Chile. Una SpA. Soy italiano.

Pasé cuatro horas con un contador que me cobró doscientas mil pesos para descubrir que mi régimen tributario era... obvio. Pro Pyme Transparente. Cinco minutos en el SII si supieras dónde mirar.

Y yo estoy en Santiago, hablo español, tengo una notebook. Imagínense un migrante venezolano abriendo un almacén. Una pensionada de Caja Los Andes que tiene APV y no sabe que le devuelven plata. Cinco millones de chilenos viven esa misma pared todos los días.

Eso es lo que vamos a romper."

### 0:30–1:00 — Lo que construimos

"Construimos un agente conversacional que toma información pública real — circulares del SII, normas CMF, Ley Fácil de la BCN — y la traduce a la situación de cada persona.

[Show landing page. Profile dropdown visible.]

No es un chatbot. Es un agente que llama un MCP que escribimos nosotros, sobre datos regulatorios reales. Cada respuesta cita el artículo, con link a la fuente."

### 1:00–2:30 — Demo en vivo (FOREIGN FOUNDER PERSONA)

[Type the foreign founder query live.]

"Acabo de abrir una SpA. Soy italiano. Vendo SaaS a clientes en Chile y Brasil. Sin empleados. ¿Qué tengo que hacer?"

[Agent thinks. MCP call visible. Response streams in.]

"Acá está. Régimen Pro Pyme Transparente, citando Resolución SII tal. IVA en exportación de servicios — link al artículo. Una checklist de siete días: inicio de actividades, factura electrónica, declaración mensual.

[CLICK "EXPORTAR A GOOGLE CALENDAR"]

Y acá las fechas se van directo a mi calendario. Inicio de actividades — esta semana. F29 mensual — el día 12. Renta anual — abril.

Eso es la primera milla que faltaba."

### 2:30–3:00 — Switch persona (CAJA LOS ANDES PENSIONER)

"Pero esto no es solo para fundadores. Mira."

[Click profile dropdown → "Afiliado Caja Los Andes Pensionado"]

[Type:] "Tengo 68 años, recibo pensión, soy afiliada de Caja Los Andes. Me dijeron que con APV me devuelven plata pero no entiendo."

[Agent responds with plain-Spanish APV explanation, citing Caja Los Andes APV page + SII bonificación.]

"Mismo agente. Mismo MCP. Contexto distinto. Esto es lo que Caja Los Andes llama beneficios que ya tienes pero no usas."

### 3:00–3:30 — Por qué esto se sostiene

"Tres cosas:

Uno — el MCP es el que Clay propuso construir en este Lab. Lo abrimos como código abierto el lunes. Cualquiera lo conecta a Claude, a Cursor, a su propia app.

Dos — sobre datos reales, citados, verificables. CMF, SII, BCN, Caja Los Andes pública. Cero alucinación porque no respondemos desde memoria.

Tres — bilingüe nativo. Español e inglés. Para los cinco millones de chilenos y para los que vienen de afuera."

### 3:30–4:00 — El ask + cierre

"Lo que pedimos: los sesenta días del Sandbox para correr un piloto con afiliados pensionados de Caja Los Andes. Ya hablamos con [nombre del rep]. Y publicar el MCP ciudadano con Clay.

La regulación que no se entiende es regulación que no existe. Hoy existe para algunos. Mañana, para todos."

---

## English version (backup if requested by jury)

[Mirror the Spanish flow, same structure, swap the foreign-founder query into English natively. Caja Los Andes persona stays in Spanish — that's intentional, demonstrates real-world bilingualism.]

---

## Q&A — Pre-rehearsed answers

**Q: How do you avoid hallucination?**
A: We don't answer from model memory. The agent must call the MCP, retrieve a real document chunk, and cite it. If no chunk exists for a query, the agent says "I don't have a verified source on this" and offers to escalate to a human professional. We made that a hard rule in the system prompt.

**Q: How do you keep regulations up to date?**
A: The MCP re-scrapes daily on a Vercel cron. CMF and SII publish new normativa with predictable URL patterns. BCN's Ley Fácil API gives us structured, official summaries. Versioned in our database with publication dates so the agent can say "as of [date]."

**Q: What's your business model?**
A: This is the wrong question for the Impact Lab — but yes, we have one. B2B2C through Caja Los Andes and similar institutions; the citizen MCP stays free and open. Revenue comes from white-label deployments to fintechs, banks, and cooperatives that want a regulatory advisory layer for their users.

**Q: What about regulatory liability — you're giving financial advice.**
A: We are explicit: this is not legal or financial advice. We translate public regulation into plain language with citations. The contador and the abogado still exist — we remove the friction of getting started. Every response carries a disclaimer and a link to the official source.

**Q: How is this different from a ChatGPT plugin?**
A: ChatGPT answers from training data. We answer from a live MCP that retrieves cited, dated, verifiable Chilean regulatory documents. The MCP is open — anyone can audit what data we use. Try asking ChatGPT for a CMF NCG citation; it'll hallucinate the article number.

---

## Delivery notes (Luca)

- **Open with eye contact, not the laptop.** First 30 seconds, look at the jury, not the screen.
- **Speak slower than feels natural.** Spanish speakers in adrenaline mode talk fast. Force the pace down.
- **Pause after the Calendar export.** Let the silence land. That's the wow moment.
- **Use Caja Los Andes' exact language** ("beneficios que ya tienes pero no usas"). They will hear themselves.
- **Don't apologize if something breaks.** Cut to the Loom backup, keep talking, finish on time.

---

**Last updated:** 2026-05-05 — Luca — initial draft
