# ENTREGABLES_PLATAFORMA.md — Respuestas listas para pegar

> Respuestas para los 3 entregables de la plataforma Bendita IA Impact Lab (`fintech.benditaia.cl/app`).
> Deadline ficha cívica: 2026-05-07 10:00 CLT. Deadline técnico: 2026-05-07 17:00 CLT.
> Objetivo: lockear todo lo lockeable hoy 6-may antes de las 18:00.

---

## 📋 ENTREGABLE 1 — Ficha cívica

### Problema (≤300 chars)

```
Abrir empresa por primera vez en Chile obliga a cruzar SII, municipalidades y CMF sin guía única, en PDFs largos y lenguaje legal. 54,2% de los microemprendedores opera informal porque la regulación existe pero no es accesible — y un contador para iniciar actividades cobra desde $50.000.
```

### Segmento ciudadano

```
Microemprendedores primera generación formalizando empresa por primera vez en Chile. Adultos 25–55 años, distribuidos a nivel nacional (concentrados RM, Valparaíso, Biobío), ingresos bajos a medios (decil 3–7). Incluye tres sub-perfiles: extranjeros residentes con permanencia definitiva, vendedores informales por canal digital (Instagram, MercadoLibre) y comerciantes de barrio (almacén, peluquería, taller). Universo total: 2.000.000 según INE EME 8 (dic 2024).
```

### Canal de adopción

```
Bot WhatsApp Business distribuido vía Kapso. Razón: WhatsApp es el canal donde los 2M microemprendedores ya operan a diario — penetración >95% en Chile, sin descargas, sin app nueva, sin curva de aprendizaje, sin signup. Distribución secundaria por la red de sucursales de Caja Los Andes (4,3M afiliados, 65,86% market share entre cajas) para alcanzar el último kilómetro.
```

### Impacto cuantificado

```
2.000.000 microemprendedores en Chile (INE EME 8, dic 2024). 54,2% operan informalmente — aproximadamente 1.084.000 personas — porque no superan la barrera regulatoria de formalización cruzada SII + municipio + CMF. El doc oficial del Impact Lab estima 5M de chilenos beneficiables por la Ley Fintec; este es el sub-segmento más doloroso. Promesa medible: en 90 días post-Lab, 500 microemprendedores formalizados con datos reales del Estado vía piloto B2B2C con Caja Los Andes.
```

### URL fuente oficial principal

```
https://www.ine.gob.cl/estadisticas/economia/micro-pequenas-y-medianas-empresas/microemprendimiento
```

### Fuentes regulatorias (≥2 — sub-check A5, una por línea)

```
https://www.cmfchile.cl/normativa/ncg_502_2024.pdf
https://www.cmfchile.cl/normativa/ncg_514_2024.pdf
https://www.bcn.cl/leychile/navegar?idNorma=1187323
https://www.bcn.cl/leychile/navegar?idNorma=1170464
https://www.sii.cl/normativa_legislacion/resoluciones/2025/reso114.pdf
https://www.sernac.cl/portal/618/w3-propertyvalue-27771.html
https://www.bcn.cl/api-leyfacil/
```

### Normativa base (opcional · contexto)

```
Ley 21.521 (Fintec) art. 12 — Registro de Prestadores de Servicios Financieros (RPSF).
CMF NCG 502/2024 — requisitos de inscripción en RPSF.
CMF NCG 514/2024 — Sistema de Finanzas Abiertas (Open Finance).
Ley 21.210/2020 — modernización tributaria (inicio de actividades en SII por internet por defecto).
SII Res. Ex. 113 y 114/2025 — DJ 1963 y 1964 sobre criptoactivos.
Ley 19.496 + Ley 21.398 — Pro Consumidor / Pro Consumidor Financiero (jurisdicción CMF vs SERNAC en reclamos).
Ley 19.628 (vigente HOY mayo 2026) — Protección de la Vida Privada.
Ley 21.719 (vigencia 1-dic-2026) — nueva Ley de Datos Personales · arquitectura ya conforme.
```

### Stakeholder identificado (opcional)

```
Caja Los Andes (workshop sponsor del Track 01 · 6-may 16:00) — co-construcción de piloto B2B2C con base de afiliados en transición empleado→independiente. Clay (workshop sponsor del Track 01 · 6-may 14:00) — co-construcción del MCP Ciudadano open-source que conecta CMF/SII/SERNAC a cualquier agente IA. FinteChile — Sandbox AI Fintech 60 días post-Lab para validar con 100 microemprendedores reales antes del 30-jun.
```

---

## 🛠 ENTREGABLE 2 — Técnico

### Demo video (3-5 min) ⏳ pendiente mañana 7-may

```
[Subir mañana 7-may: link Loom con conversación Luca italiano end-to-end · WhatsApp Desktop espejado + consola Anthropic split-screen mostrando tool calls + entrega del F4415_PJ pre-rellenado en el WhatsApp del usuario en vivo]
```

### Screenshot consola Claude ⏳ pendiente mañana 7-may

```
[Subir mañana 7-may: captura del dashboard Anthropic mostrando tool calls + modelos (Sonnet 4.6 / Opus 4.7 / Haiku 4.5) + tokens consumidos durante la ventana 6-7 may · sub-check B3 requiere ≥3 mensajes en consola en ventana]
```

### System prompt principal

```
Eres Chispla, un asistente regulatorio chileno especializado en formalización de microempresas. Operas exclusivamente por WhatsApp.

# Tu misión
Ayudar a personas que abren empresa por primera vez en Chile a cruzar correctamente los trámites SII + municipalidad + CMF, en lenguaje plano, citando fuentes oficiales con URL.

# Design philosophy
Aplicas los tres patrones que Anthropic publica en claude.com/solutions/financial-services para Claude en servicios financieros: source attribution (cada respuesta cita la URL oficial), agentic workflows (tool use sobre el MCP Ciudadano propio) y MCP como capa semántica (search_normativa, get_ley_facil, get_pasos_formalizacion, verify_citation). Llevas estos patrones a la escala humana del ciudadano latino.

# Reglas inviolables
1. NUNCA respondas regulación de memoria. Llama siempre a las tools del MCP. Si el MCP no devuelve fuente verificada, responde literal: "No tengo una fuente verificada para esto, te conviene chequear directo en [link al portal oficial]".
2. CADA afirmación regulatoria va con URL oficial inline (cmfchile.cl, sii.cl, bcn.cl, sernac.cl, leychile.cl). Antes de afirmar algo nuevo, llama verify_citation con el URL para confirmar que el pasaje existe.
3. Disclaimer en el primer mensaje de cada sesión: "No soy abogado ni contador. Te muestro qué dice la regulación oficial con su fuente. Para tu caso, valida con un profesional."
4. Plain language. Nunca uses legalese salvo citando textualmente la ley, e inmediatamente tradúcela.
5. Idioma: español (Chile). Bilingüe ES/EN está en roadmap post-MVP — si el usuario escribe en inglés, responde en español aclarando "EN soporte completo en próxima versión, sigamos en español por ahora".
6. UX WhatsApp: máximo una pregunta por mensaje. Mensajes cortos. Listas con viñetas, no párrafos largos. Sin emojis salvo si el usuario los usa primero.

# Detección implícita de perfil (sin dropdown UI)
Lee el primer mensaje y clasifica internamente. MVP del 7-may ejecuta solo el primer perfil end-to-end:
- foreign_founder ★ (MVP) — extranjero residente abriendo empresa de servicios. Activa get_pasos_formalizacion + entrega F4415_PJ.
- informal_digital (capacidad descrita, demo limitada) — vende por Instagram/MercadoLibre sin formalizar.
- retail_fisico (capacidad descrita, demo limitada) — almacén, peluquería, taller con local físico.
- consumidor_reclamo (capacidad descrita, demo limitada) — reclamo a banco/AFP/casa comercial. Distingue jurisdicción CMF vs SERNAC vs tribunales.
Si faltan datos críticos (comuna, volumen mensual, tipo de sociedad), pregunta UNO por vez antes de tool calls.

# Wow moment — PDF pre-rellenado (Files API)
Cuando el usuario complete los campos requeridos para iniciar actividades, marca tu respuesta con la directiva interna `should_deliver_pdf: { template, fields }`. Template activo en MVP: F4415_PJ (SII inicio actividades persona jurídica). Templates en roadmap: F4415_PN, patente_providencia_F-A1, patente_santiago_R-91. Cada PDF entregado lleva marca de agua "Borrador no oficial · Chispla · Verifica en SII / municipio antes de presentar · No es asesoría legal."

# Progress markers en WhatsApp (no gamificación con XP)
Cada respuesta sustantiva del agente que cierre un paso debe marcarlo en la conversación:
✓ Paso 1: tipo de empresa (SpA / Ltda / EIRL)
✓ Paso 2: régimen tributario (Pro Pyme Transparente / A)
🟡 Paso 3: F4415 listo, falta presentar
⬜ Paso 4: patente municipal
⬜ Paso 5: primera boleta electrónica
Cuando el usuario pregunte "¿cómo voy?", devuelve un resumen tipo dashboard con porcentaje de avance, datos guardados, próximo deadline, leyes que le aplican.

# Check-in proactivo (vía Kapso scheduled message)
24h después del último mensaje del usuario, si quedaron pasos pendientes, manda un check-in proactivo: "Hola [nombre], ayer dejamos tu F4415 listo para presentar. ¿Avanzaste? Si te trabaste en algo, te ayudo." Cuando completen todos los pasos, manda celebración explícita y ofrece resumen para enviar a contador.

# Tono
Cercano, directo, sin condescendencia. El usuario es adulto y capaz, lo que necesita es traducción, no protección.

# Modelos (orquestador escala automáticamente)
Sonnet 4.6 default. Si la consulta involucra escenarios cruzados SII+CMF, escalación tributaria compleja, o decisión de régimen Pro Pyme A vs Transparente con múltiples factores → escala a Opus 4.7. Haiku 4.5 para clasificación de perfil y guardrails post-respuesta.

# PII y compliance Ley 19.628 / 21.719
Cifrado pgcrypto en RUT y teléfono en Supabase sa-east-1. Retención 90 días. Pide consentimiento explícito en el primer mensaje antes de pedir datos personales sensibles. Audit log de todo acceso. Arquitectura ya conforme con Ley 21.719 (vigencia 1-dic-2026).
```

### Repo o ZIP (opcional · suma +1 en M3)

```
https://github.com/domusalbertoni-del/Chispla-Hackathon
```

> Repo privado durante el demo · público (MIT) post-Demo Day del 7-may para activar el "MCP Ciudadano" open-source.

### Tools schema (opcional · suma +1 en M3)

```json
{
  "tools": [
    {
      "name": "search_normativa",
      "description": "pgvector semantic search over CMF/SII/SERNAC/Caja regulations. Returns cited chunks with URL.",
      "input_schema": {
        "type": "object",
        "properties": {
          "query": { "type": "string" },
          "source": { "type": "string", "enum": ["cmf","sii","bcn","sernac","caja_los_andes"] },
          "profile": { "type": "string" },
          "lang": { "type": "string", "enum": ["es","en"] }
        },
        "required": ["query"]
      }
    },
    {
      "name": "get_ley_facil",
      "description": "Proxy to BCN Ley Fácil API — official plain-language summaries of Chilean laws.",
      "input_schema": {
        "type": "object",
        "properties": { "law_id": { "type": "string" } },
        "required": ["law_id"]
      }
    },
    {
      "name": "get_pasos_formalizacion",
      "description": "Structured cross-cutting checklist of SII + municipality + CMF steps for a given business profile.",
      "input_schema": {
        "type": "object",
        "properties": {
          "tipo_negocio": { "type": "string" },
          "ciudadania": { "type": "string", "enum": ["chileno","extranjero_residente"] },
          "comuna": { "type": "string" }
        },
        "required": ["tipo_negocio","ciudadania"]
      }
    },
    {
      "name": "verify_citation",
      "description": "Fetches the official source URL and confirms the cited passage exists. Anti-hallucination guardrail required by every regulatory claim.",
      "input_schema": {
        "type": "object",
        "properties": {
          "url": { "type": "string" },
          "claimed_text": { "type": "string" }
        },
        "required": ["url","claimed_text"]
      }
    }
  ]
}
```

### Herramientas Anthropic usadas — chips a marcar

- [x] **MCP** — MCP Ciudadano propio (4 tools) deployado en Railway, consumible desde Claude Desktop / Cursor / cualquier MCP client
- [x] **Agent SDK** — `@anthropic-ai/claude-agent-sdk` orquesta el loop con prompt caching activo
- [x] **Files API** — entrega del F4415_PJ pre-rellenado al WhatsApp del usuario
- [x] **Prompt Caching** — bloque de contexto regulatorio cacheado como prefijo del system prompt
- [x] **Citations** — cada respuesta con URL oficial inline + `verify_citation` tool valida que el pasaje exista
- [ ] Extended Thinking — fuera de scope MVP (decisión técnica: el orquestador escala a Opus 4.7 cuando aplica)
- [ ] Computer Use — fuera de scope MVP

---

## 🎤 ENTREGABLE 3 — Pitch

### Estructura del pitch (3 min + 2 min Q&A · rúbrica v3.3)

Ver detalle completo en `docs/DEMO_SCRIPT.md`. Resumen:

```
0:00–0:15 · Hook — "Luca está acá conmigo. Es italiano, lleva un año en Chile, abrió empresa hace tres semanas..."
0:15–0:45 · Problema — 5M Lab + 2M INE EME 8 + 54,2% informalidad
0:45–1:30 · Demo en vivo — WhatsApp Desktop espejado + consola Anthropic split-screen + entrega F4415_PJ
1:30–2:00 · Por qué se sostiene — 3 razones: infraestructura abierta (MCP), Anthropic FSI patterns aplicados al ciudadano, Luca como prueba humana
2:00–2:30 · Mercado y tracción — Caja Los Andes 65,86% mkt share + LEAP USD $9M + TECLA 2025 salud financiera + Clay co-build MCP
2:30–2:45 · Equipo — Lucas (pitch + MCP), Edo (vibecoder + WhatsApp), Luca (producto + caso real)
2:45–3:00 · Ask — 60 días Sandbox FinteChile + piloto Caja Los Andes + abrir MCP Clay · 500 formalizados en 90 días
```

### Link al material de apoyo ⏳ pendiente mañana 7-may

```
[Subir mañana 7-may antes del pitch: link a slides Google Drive / Keynote exportado a PDF]
```

---

## 🎯 Notas para mentor / jurado — diferenciadores Chispla

> Esta sección es para que cualquier mentor / juez que reciba la ficha entienda en 60 segundos por qué Chispla no es "otro chatbot de formalización".

### 1. Infraestructura, no producto

Aurora Impulsa (otro equipo del Track 01) construye un **copiloto cerrado** (web app + WhatsApp + gamificación XP). Chispla construye **el MCP Ciudadano open-source** — la capa de infraestructura que conecta CMF/SII/SERNAC con cualquier agente IA. WhatsApp + el F4415 entregado son la **implementación de referencia**, no el producto en sí.

Implicación: Caja Los Andes puede construir su versión sobre nuestro MCP. Clay puede. Coopeuch puede. Cualquier institución del ecosistema fintech chileno puede plugarlo en Claude Desktop / Cursor / su propio agente sin reconstruir la capa de datos regulatorios.

URL pública del MCP (post-deploy): `https://mcp.up.railway.app`

### 2. Anthropic FSI framework aplicado al ciudadano

Anthropic publica en [claude.com/solutions/financial-services](https://claude.com/solutions/financial-services) que Claude para servicios financieros se sostiene en tres pilares: **source attribution**, **agentic workflows**, y **MCP como capa semántica**. Citadel los usa, BNY Mellon, Citi, Block, Coinbase, Walleye Capital. Chispla aplica los mismos tres pilares — pero al microemprendedor que recién abre empresa, no al analista de hedge fund.

### 3. Anti-alucinación con `verify_citation` tool

A diferencia de un GPT con RAG, Chispla tiene una tool específica que **fetchea la URL oficial y confirma que el pasaje citado existe** antes de responder. Si la cita no se valida, el agente dice literal "no tengo una fuente verificada" en vez de inventar. Visible en consola Anthropic en split-screen durante el demo. Esto cubre M2.A6 ("cero alucinación regulatoria detectada").

### 4. Validación humana en escena

Luca italiano está en el escenario durante el pitch. Lleva un año en Chile, abrió empresa hace 3 semanas, vivió el dolor en carne propia. No es mockup, no es testimonial pre-grabado — es la persona viva. Esto cubre J1.2 ("ciudadano específico beneficiado por nombre o caso").

### 5. WhatsApp nativo vs intranet artificial

Aurora pone signup + dashboard web + gamificación XP porque su canal es artificial — necesita una app web que retenga al usuario. Chispla no gamifica con XP ni pide signup porque su canal es nativo: WhatsApp ya está abierto en el teléfono del 95% de los chilenos. Cada paso completado se marca con ✓ en la conversación. El agente escribe proactivamente al día siguiente. Cumple J2.4 ("canal de adopción realista para el segmento") sin friction barrier.

### 6. Compliance Ley 19.628 vigente + arquitectura Ley 21.719

Cifrado pgcrypto, retención 90 días, consentimiento explícito, audit log de accesos, derechos ARCO+ implementables en cualquier momento. La ficha cumple Ley 19.628 hoy y la arquitectura está lista para Ley 21.719 cuando entre en vigencia el 1-dic-2026.

---

## 📦 Capacidad MVP (7-may 17:00) vs roadmap

Honestidad técnica para la plataforma:

| Capacidad | MVP demo | Roadmap post-Lab |
|---|---|---|
| Conversación end-to-end perfecta · perfil foreign_founder (caso Luca) | ✅ Demo en vivo | — |
| Otros 3 perfiles (informal_digital, retail_fisico, consumidor_reclamo) | Capacidad descrita en system prompt, demo limitada | 30 días — completar conversaciones tipo |
| PDF F4415_PJ pre-rellenado vía Files API | ✅ Demo en vivo | — |
| Otros 3 PDFs (F4415_PN, patente Providencia, patente Santiago) | Templates descargados, integración pendiente | 7 días — wire integración |
| Idioma español | ✅ MVP | — |
| Bilingüe ES/EN | Detección + fallback graceful | 14 días — completar |
| MCP Ciudadano público en `mcp.up.railway.app` | ✅ MVP con 4 tools | — |
| MCP open-source en GitHub MIT | Privado durante demo | Lunes 12-may |
| Progress markers + check-in proactivo | ✅ MVP vía system prompt + Kapso scheduled | — |
| Piloto B2B2C con Caja Los Andes | Workshop hoy 16:00 · cartas de interés | 60 días — Sandbox FinteChile |

---

## 🛠 Stack técnico (resumen)

- **Frontend:** Next.js 16 App Router en Railway (`chispla.up.railway.app`)
- **Agente:** Claude Agent SDK · Sonnet 4.6 default · Opus 4.7 escalación · Haiku 4.5 clasificación
- **MCP server:** TypeScript + `@modelcontextprotocol/sdk` · Railway servicio independiente (`mcp.up.railway.app`)
- **Canal:** WhatsApp Business API vía Kapso · proyecto `3940198a-9a4c-4b25-9323-ad327ad95236`
- **Persistencia:** Supabase Postgres + pgvector + RLS · sa-east-1 · pgcrypto para PII
- **Embeddings:** OpenAI text-embedding-3-small (única excepción no-Claude por matemática)
- **Files API:** entrega de PDFs pre-rellenados al WhatsApp del usuario
- **Datos:** BCN Ley Fácil API + scrapings cacheados de CMF/SII/SERNAC/Caja
- **Cron:** Railway nativo para check-ins proactivos + refresh diario del MCP

---

## ✅ Resumen de qué se cierra HOY vs MAÑANA

| Entregable | Hoy 6-may (antes 18:00) | Mañana 7-may |
|---|---|---|
| Ficha cívica | ✅ todos los campos · listo para pegar 10:00 | submit en plataforma antes 10:00 |
| Técnico: system prompt | ✅ versión final con design philosophy + progress markers + check-in | — |
| Técnico: tools schema | ✅ 4 tools schema JSON | — |
| Técnico: chips Anthropic | ✅ MCP / Agent SDK / Files API / Prompt Caching / Citations | — |
| Técnico: notas mentor | ✅ 6 diferenciadores articulados | — |
| Técnico: capacidad MVP vs roadmap | ✅ tabla honesta | — |
| Técnico: stack | ✅ resumen completo | — |
| Técnico: demo video 3-5 min | — | grabar tras dry-runs |
| Técnico: screenshot consola Claude | — | después del demo en vivo |
| Técnico: repo URL pública | privado hoy | público lunes 12-may post-Demo Day |
| Pitch: slides | — | mañana antes del pitch |

---

**Última actualización:** 2026-05-06 — Edo — versión consolidada con design philosophy Anthropic FSI + diferenciadores vs Aurora + scope MVP honest + stack Railway. Subir a plataforma antes 18:00 hoy.
