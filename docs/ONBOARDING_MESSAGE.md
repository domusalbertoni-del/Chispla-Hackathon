# Onboarding message for Lucas + Edo

> Paste this into your team WhatsApp tomorrow morning (don't paste it tonight — the message has more impact when they read it fresh).

---

Buenas! Listos para el Impact Lab esta semana. Armé un repo que va a ser nuestro cerebro compartido durante los 2 días — lo llamé **bendita-hive**.

Es un repo de markdown (no es el producto, es el contexto). Cada uno lo clona y lo mantiene abierto en su editor mientras trabaja. Cada vez que abren Claude Code o Cursor, el `CLAUDE.md` del repo le da contexto completo a la IA — quiénes somos, qué construimos, qué decisiones ya tomamos, qué está bloqueado.

**Link al repo:** [Luca: pega aquí el link después de crear el repo]

**Onboarding (5 min):**
1. Clona el repo
2. Lee el README.md
3. Lee CLAUDE.md
4. Skim PROJECT.md, DECISIONS.md, BLOCKERS.md
5. Mira PERSONAS.md — vamos a dividirnos por persona, no por capa

**Tu slice (vertical, no por layer):**
- **Lucas** — MCP server + regulatory data ingestion. Eres el dueño de las normas CMF/SII/BCN/Caja Los Andes y de la lógica que Claude usa para citarlas.
- **Edo** — Frontend + Google Calendar export. Eres el dueño de la experiencia del demo. La magia visible vive en tu código.
- **Yo (Luca)** — Producto, prompts, networking, pitch. Yo mantengo el hive vivo, ustedes shippan.

**Ritual diario (no negociable):**
- Pull del hive cada vez que empiezan
- Push cuando hagan algo nuevo (decisión, blocker, feature)
- Commit messages claros: `PROJECT: ...`, `DECISION: ...`, `BLOCKER: ...`

**Reglas técnicas no negociables (están en CLAUDE.md):**
- Solo Claude para razonamiento. OpenAI solo para embeddings.
- Sonnet 4.6 default, Opus 4.7 para razonamiento complejo
- Agent SDK, NO LangChain
- Supabase + pgvector

Para el martes (mañana) la idea es:
- Yo: hive listo + Drive folder + Calendar compartido + research stakeholders
- Lucas: scraping de normas a JSON estructurado + MCP server v0 deployado en Railway
- Edo: Next.js scaffold + landing pública con QR + webhook Kapso (sin Lovable, agente vive en WhatsApp)

Si están atascados >30 min en algo, lo escriben en `BLOCKERS.md` y siguen con otra cosa. Que la IA lea el blocker después y nos ayude.

Vamos con todo, equipo. Primer Impact Lab del mundo apoyado por Anthropic, 9 países, nosotros Track 1. Ese Mac Mini se viene. 🇨🇱🚀

Luca

---

## Drive folder + Calendar setup (Luca, 90 seconds)

After you create the repo, do these in order:

1. Open Google Drive → New Folder → "Bendita IA Hive"
2. Right-click → Share → add `lucaslobosn@gmail.com` and `edosanchezcl@gmail.com` as Editors
3. Open Google Calendar → + Create new calendar → "Bendita Hive"
4. Settings for that calendar → Share with specific people → add both emails as "Make changes to events"
5. Pin both in your team WhatsApp

Done. Three minutes total.
