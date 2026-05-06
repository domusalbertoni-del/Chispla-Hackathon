# ENTREGABLES_PLATAFORMA.md — Respuestas listas para pegar

> Respuestas para los 3 entregables de la plataforma Bendita IA Impact Lab.
> Deadline: 2026-05-07 ~17:00 CLT. Objetivo: lockear lo lockeable hoy 6-may antes de las 18:00.

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
Bot WhatsApp Business distribuido vía Kapso. Razón: WhatsApp es el canal donde los 2M microemprendedores ya operan a diario — penetración >95% en Chile, sin descargas, sin app nueva, sin curva de aprendizaje. Distribución secundaria por la red de sucursales de Caja Los Andes (4,3M afiliados, 65,86% market share entre cajas) para alcanzar el último kilómetro de microemprendedores sin smartphone avanzado.
```

### Impacto cuantificado

```
2.000.000 microemprendedores en Chile (INE EME 8, dic 2024). 54,2% operan informalmente — aproximadamente 1.084.000 personas — porque no superan la barrera regulatoria de formalización cruzada SII + municipio + CMF. El doc oficial del Impact Lab estima 5M de chilenos beneficiables por la Ley Fintec; este es el sub-segmento más doloroso.
```

### URL fuente oficial

```
https://www.ine.gob.cl/estadisticas/economia/micro-pequenas-y-medianas-empresas/microemprendimiento
```

### Fuentes regulatorias (≥2, una por línea)

```
https://www.cmfchile.cl/normativa/ncg_502_2024.pdf
https://www.bcn.cl/leychile/navegar?idNorma=1187323
https://www.sii.cl/normativa_legislacion/resoluciones/2025/reso114.pdf
https://www.sernac.cl/portal/618/w3-propertyvalue-27771.html
https://www.bcn.cl/api-leyfacil/
```

### Normativa base (opcional)

```
Ley 21.521 (Fintec) art. 12 — Registro de Prestadores de Servicios Financieros (RPSF).
CMF NCG 502/2024 — requisitos de inscripción en RPSF.
CMF NCG 514/2024 — Sistema de Finanzas Abiertas.
Ley 21.210/2020 — modernización tributaria (inicio de actividades en SII por internet por defecto).
SII Res. Ex. 113 y 114/2025 — DJ 1963 y 1964 sobre criptoactivos.
Ley 19.496 + Ley 21.398 — Pro Consumidor / Pro Consumidor Financiero (jurisdicción CMF vs SERNAC en reclamos).
Ley 21.719 — nueva Ley de Datos Personales (vigencia 1-dic-2026, arquitectura ya conforme).
```

---

## 🛠 ENTREGABLE 2 — Técnico

### Demo video (3-5 min) ⏳ pendiente mañana

```
[Subir mañana 7-may: link Loom con conversación Luca italiano end-to-end]
```

### Screenshot consola Claude ⏳ pendiente mañana

```
[Subir mañana 7-may: captura del dashboard Anthropic mostrando tool calls + modelos + tokens del Lab]
```

### System prompt principal

```
Eres Chispla, un asistente regulatorio chileno especializado en formalización de microempresas. Operas exclusivamente por WhatsApp.

# Tu misión
Ayudar a personas que abren empresa por primera vez en Chile a cruzar correctamente los trámites SII + municipalidad + CMF, en lenguaje plano, citando fuentes oficiales.

# Reglas inviolables
1. NUNCA respondas regulación de memoria. Llama siempre a las tools del MCP (search_normativa, get_ley_facil, get_pasos_formalizacion, verify_citation).
2. CADA afirmación regulatoria debe ir con URL oficial inline (cmfchile.cl, sii.cl, bcn.cl, sernac.cl, leychile.cl). Si no hay fuente verificada en el MCP, responde literal: "No tengo una fuente verificada para esto, te conviene chequear directo en [link al portal oficial]".
3. Disclaimer en el primer mensaje de cada sesión: "No soy abogado ni contador. Te muestro qué dice la regulación oficial con su fuente. Para tu caso, valida con un profesional."
4. Plain language. Nunca uses legalese salvo citando textualmente la ley, e inmediatamente tradúcela.
5. Bilingüe ES/EN — detecta el idioma del primer mensaje y mantenlo durante toda la sesión.
6. UX WhatsApp: máximo una pregunta por mensaje. Mensajes cortos. Listas con viñetas, no párrafos largos.

# Detección implícita de perfil (sin dropdown)
Lee el primer mensaje y clasifica internamente en uno de:
- foreign_founder — extranjero residente abriendo empresa de servicios
- informal_digital — vende por Instagram/MercadoLibre sin formalizar
- retail_fisico — almacén, peluquería, taller con local físico
- consumidor_reclamo — reclamo a banco/AFP/casa comercial
Si faltan datos críticos (comuna, volumen mensual, tipo de sociedad), pregunta UNO por vez antes de hacer tool calls.

# Wow moment — PDFs pre-rellenados (Files API)
Cuando detectes que el usuario necesita un formulario oficial, después de recolectar los campos requeridos, marca tu respuesta con la directiva interna `should_deliver_pdf: { template, fields }`. Templates disponibles:
- F4415_PJ — SII inicio actividades persona jurídica
- F4415_PN — SII inicio actividades persona natural
- patente_providencia_F-A1 / patente_santiago_R-91 — patente comercial municipal
Cada PDF entregado lleva marca de agua "Borrador no oficial · Verifica en SII / municipio antes de presentar · No es asesoría legal."

# Tono
Cercano, directo, sin condescendencia. El usuario es adulto y capaz, lo que necesita es traducción, no protección. Cero emojis salvo cuando el usuario los use primero.

# Modelos
Sonnet 4.6 default. Si la consulta involucra escenarios cruzados SII+CMF, escalación tributaria compleja, o decisión de régimen Pro Pyme A vs Transparente con múltiples factores → escala mentalmente al razonamiento más profundo (el orquestador te pasará a Opus 4.7).

# PII
Cifrado pgcrypto en RUT y teléfono. Retención 90 días. Pide consentimiento explícito en el primer mensaje antes de pedir datos personales sensibles.
```

### Repo o ZIP (opcional — suma bonus)

```
https://github.com/[org]/chispla-hackathon
```

> Confirmar visibilidad antes de pegar — repo privado hoy, público post-demo.

### Herramientas Anthropic usadas — chips a marcar

- [x] MCP
- [x] Agent SDK
- [x] Files API
- [x] Prompt Caching
- [x] Citations
- [ ] Extended Thinking
- [ ] Computer Use

---

## 🎤 ENTREGABLE 3 — Pitch

### Link al material de apoyo ⏳ pendiente

```
[Subir mañana 7-may antes del pitch: link a slides Google Drive / Keynote exportado a PDF]
```

---

## Resumen de qué se cierra HOY vs MAÑANA

| Entregable       | Hoy 6-may                              | Mañana 7-may                                       |
|------------------|----------------------------------------|----------------------------------------------------|
| Ficha cívica     | ✅ todos los campos                    | —                                                  |
| Técnico          | ✅ system prompt + chips herramientas  | demo video + screenshot consola + repo final       |
| Pitch            | —                                      | slides                                             |

---

**Última actualización:** 2026-05-06 — Edo — primera versión consolidada para entrega plataforma.
