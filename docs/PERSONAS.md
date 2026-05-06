# PERSONAS.md — Conversaciones tipo del MVP

> Chispla atiende UN segmento (primera vez emprendedores formalizando empresa). El "switch de perfil" no es un dropdown UI — es detección implícita por contenido del primer mensaje. Estas son las 4 conversaciones tipo que el MVP debe responder bien.

---

## Segmento único: primera vez emprendedores

**Denominador común:** nunca pasaron por el proceso de formalización en Chile. Cubre microemprendedores primera generación (≈2M en Chile · INE EME 8 dic 2024 · 54,2% son informales), extranjeros residentes, jóvenes que recién empiezan, e informales que llevan meses vendiendo y nunca formalizaron.

**Bilingüe:** ES default, EN auto-detectado por idioma del primer mensaje.

---

## Conversación tipo 1 — Extranjero residente abriendo empresa de servicios 🌎 (PRIMARY · caso Luca)

**Por qué primaria:** es el caso real de Luca, miembro del equipo. El hook del pitch arranca con él. Activa empatía + cubre J1.2 ("ciudadano específico beneficiado por nombre o caso").

**Señales del primer mensaje:** menciona nacionalidad no chilena, tiempo en Chile, intención de abrir empresa, posiblemente tipo de servicio (SaaS, consultoría).

**Mensaje tipo del usuario:**
> "Soy italiano y vivo en Chile hace un año. Quiero abrir mi empresa de servicios, ¿qué necesito?"

**Comportamiento esperado del agente:**
- Detección perfil → "extranjero residente · servicios · primera vez"
- Tool call → `get_pasos_formalizacion({ tipo_negocio: 'servicios', ciudadania: 'extranjero', comuna: 'preguntar' })`
- Respuesta: lista de pasos en orden cruzados (RUT extranjero verificado, iniciación de actividades en SII, patente municipal según comuna), fechas y plazos, decisiones que debe tomar (régimen Pro Pyme A vs Transparente, IVA exportación si vende afuera).
- Pregunta de cierre: comuna donde estará el domicilio comercial (necesario para patente).
- **Wow moment:** ofrece descargar PDF F4415_PJ pre-rellenado con sus datos + el formulario de patente de su comuna.

---

## Conversación tipo 2 — Informal que vende por Instagram 📱

**Por qué importante:** segmento masivo del 54,2% informal del INE. Mensaje natural en lenguaje cotidiano, no técnico.

**Señales:** menciona venta por canal digital sin formalizar, tiempo vendiendo, ingresos recientes.

**Mensaje tipo:**
> "Vendo cosméticos por Instagram desde hace 6 meses, ¿tengo que formalizar?"

**Comportamiento esperado:**
- Detección → "informal · retail digital · evaluando formalización"
- Tool call → `search_normativa({ source: 'sii', query: 'umbrales obligación boleta retail digital', profile: 'informal_digital' })`
- Respuesta: explica los umbrales del SII donde se gatilla obligación de boleta electrónica, decisiones a tomar (régimen Pro Pyme Transparente recomendado para low-volume, patente comercial domiciliaria si trabaja desde casa), plazos de declaración mensual F29.
- Cita Resolución SII relevante con URL.
- Cierre con pregunta sobre volumen mensual aproximado para personalizar la recomendación.

---

## Conversación tipo 3 — Almacén de barrio 🥖

**Por qué importante:** caso clásico de microempresario primera generación, retail físico, formalización completa. Conecta con red Caja Los Andes (crédito social como financiamiento de partida).

**Señales:** menciona retail físico, comuna específica, mención de capital o financiamiento.

**Mensaje tipo:**
> "Quiero abrir un almacén de barrio, ¿qué tengo que hacer primero?"

**Comportamiento esperado:**
- Detección → "retail físico · primera empresa · necesita financiamiento"
- Tool call → `get_pasos_formalizacion({ tipo_negocio: 'retail_fisico', ciudadania: 'chileno', comuna: 'preguntar' })` y `search_normativa({ source: 'caja_los_andes', query: 'crédito social financiamiento microempresa' })`
- Respuesta: secuencia exacta (escritura de constitución → RUT → SII iniciación → patente comercial municipal → primera boleta), fechas críticas, opciones de financiamiento Caja Los Andes (crédito social).
- **Wow moment:** PDF de patente comercial de la comuna del usuario pre-rellenado.
- Citación obligatoria del Reglamento de Patentes Municipales y de los términos del crédito social Caja.

---

## Conversación tipo 4 — Reclamo a proveedor financiero ⚠️ (cubre flanco CMF Línea 01)

**Por qué importante:** el brief asignado al equipo es "Asistente Inteligente de Consultas y Reclamaciones Financieras" (CMF Línea 01). Esta conversación protege el flanco frente a jurados CMF/FinteChile que pueden preguntar "¿dónde está la reclamación?".

**Señales:** menciona cobro no reconocido, condiciones no entendidas de un crédito, problema con un producto financiero.

**Mensaje tipo:**
> "Mi proveedor financiero me cobró un cargo que no reconozco / no me explicaron bien las condiciones del crédito, ¿qué hago?"

**Comportamiento esperado:**
- Detección → "consumidor financiero · reclamo · derivación regulador"
- Tool call → `search_normativa({ source: 'sernac+cmf', query: 'reclamo proveedor financiero, derivación' })` y `get_ley_facil({ law_id: '21398' })`
- Respuesta: diferencia jurisdicción según entidad (CMF si banco/AFP/aseguradora, SERNAC si retailer/casa comercial, tribunales si ya hay juicio). Redacta el reclamo con los hechos en lenguaje formal citando Ley 19.496 + Ley 21.398 + NCG aplicable.
- **Wow moment:** entrega un PDF con el borrador del reclamo + link directo al portal de reclamos CMF o SERNAC.

---

## Cómo funciona la detección de perfil (sin dropdown)

```
mensaje del usuario
       ↓
   Haiku 4.5 (clasificador)
       ↓
   { profile: "foreign_founder" | "informal_digital" | "retail_fisico" | "consumidor_reclamo",
     complexity: "low" | "high",
     language: "es" | "en",
     missing_fields: ["comuna", "volumen_mensual", ...] }
       ↓
   Sonnet 4.6 (default) o Opus 4.7 (si complexity=high)
   con system prompt sufijo específico al perfil
```

Si `missing_fields` no está vacío, el agente pregunta primero antes de tool calls. UX WhatsApp: 1 pregunta por vez.

---

## Lo que toda conversación comparte

- **Bilingüe ES/EN** — auto-detectado del primer mensaje, mantenido a lo largo de la sesión.
- **Citaciones obligatorias** — todo claim regulatorio viene con URL oficial (CMF, SII, BCN, SERNAC, BCN Ley Fácil). Si no hay fuente: "No tengo una fuente verificada para esto, te conviene chequear directo en [link al portal]".
- **Disclaimer en primer mensaje:** "No soy abogado ni contador. Te muestro qué dice la regulación oficial con su fuente. Para tu caso específico, valida con un profesional."
- **Plain language** — el agente nunca usa legalese salvo citando la ley textualmente, e inmediatamente la traduce.
- **PDFs entregados con marca de borrador** — "Borrador no oficial · verifica en SII/municipio antes de presentar".

---

**Última actualización:** 2026-05-06 — Edo — full rewrite alineando a la spec WhatsApp + 4 conversaciones tipo del dashboard. Sustituye la versión pre-rebrand de 4 personas con dropdown web.
