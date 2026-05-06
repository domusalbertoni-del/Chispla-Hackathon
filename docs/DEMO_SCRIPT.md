# DEMO_SCRIPT.md — Pitch de 3 minutos + 2 minutos Q&A

> Lucas pitchea. Luca está en escena como el caso real. Edo opera el demo desde el laptop. Total: 3:00 pitch + 2:00 Q&A según rúbrica v3.3 oficial del Lab.

---

## Setup técnico del demo

- **Laptop de Edo proyectado.** Pantalla split en dos:
  - Izquierda: WhatsApp Desktop (la conversación con Chispla)
  - Derecha: Consola Anthropic en tiempo real mostrando los tool calls a Claude (refuerza J3.4 "uso de Claude evidente")
- **Teléfono de Luca** mostrando el mismo WhatsApp (refuerza que es real, no un mock).
- **Loom backup pre-grabado de 90s** con el flujo Luca italiano end-to-end. Si la red falla en vivo, Edo abre el Loom sin pausar el pitch.
- **Conversaciones pre-validadas:** las 3 conversaciones tipo de PERSONAS.md fueron probadas en pasillo el día 1 (Forum). Se elige la que mejor reaccionó para el demo en vivo.

---

## Versión española (default — pitch en español)

### 0:00–0:15 — Hook

> *"Luca está acá conmigo."*
>
> [Lucas señala a Luca, parado al lado del proyector]
>
> *"Es italiano. Lleva un año en Chile y quiere abrir su empresa. Tres semanas leyendo PDFs del SII después, no sabe si tiene que sacar patente municipal primero o iniciar actividades en el SII, no entiende qué cambia siendo extranjero residente, y nadie le explicó que la municipalidad y el SII son trámites distintos."*
>
> *"Por él construimos Chispla."*

**Por qué este hook:** activa empatía (caso real, no inventado), cubre J1.2 (ciudadano específico beneficiado por nombre y caso), y planta el problema en 15 segundos.

---

### 0:15–0:45 — El problema

> *"El doc oficial del Impact Lab estima que 5 millones de chilenos se beneficiarían de la Ley Fintec. Nosotros vamos al subconjunto más doloroso: los **2 millones de microemprendedores que registra el INE**, de los cuales el **54,2% son informales** porque nunca pasaron el laberinto cruzado de SII, municipios y CMF."*
>
> *"No es por flojera. Es porque el sistema chileno no se entiende sin abogado o contador. Y un primer contador cobra $200.000."*

**Citación inline:** INE EME 8 (dic 2024). El "5M Lab" reconoce la cifra del doc del evento. El "2M INE" es la cifra anclada.

---

### 0:45–1:30 — La solución (demo en vivo)

> *"Le hicimos a Luca un agente conversacional en WhatsApp. Toma información pública real — circulares SII, normas CMF, BCN Ley Fácil — y la traduce a la situación específica de cada persona."*
>
> [Edo proyecta WhatsApp Desktop. Luca toma su teléfono y escribe en vivo:]
>
> *"Soy italiano y vivo en Chile hace un año. Quiero abrir mi empresa de servicios, ¿qué necesito?"*
>
> [La conversación entra. En la mitad derecha del proyector la consola Anthropic muestra el tool call a `search_normativa` y `get_pasos_formalizacion`.]
>
> *"Acá está. Régimen Pro Pyme Transparente, citando Resolución SII tal. Patente comercial domiciliaria primero, después SII, los formularios pre-rellenados con sus datos."*
>
> [Luca recibe en su WhatsApp un PDF adjunto. Lo abre. Se ven los datos llenos: nombre, RUT, domicilio.]
>
> *"Esto es el F4415_PJ del SII pre-rellenado. Y esto es la solicitud de patente municipal de Providencia. Listos para firmar y presentar."*

**Pausa de 2 segundos después del PDF. Que el silencio aterrice.**

---

### 1:30–2:00 — Por qué se sostiene (3 cosas)

> *"Tres razones por las que esto pasa de demo a producto:"*
>
> *"**Uno** — El MCP que conecta a Claude con CMF/SII/SERNAC es exactamente el que Clay propuso co-construir en su workshop de hoy. Lo abrimos como código abierto el lunes. Cualquier red — Caja, Coopeuch, ASECH — lo enchufa a sus canales."*
>
> *"**Dos** — Cero alucinación. Cada respuesta cita la URL oficial. Si no hay fuente, el agente lo dice. La rúbrica del Lab penaliza alucinación regulatoria con -30% — eso lo blindamos en el system prompt."*
>
> *"**Tres** — Donde la gente realmente está. WhatsApp. No app, no web, no descargas. Los 2 millones de microemprendedores ya lo usan todos los días."*

---

### 2:00–2:30 — Mercado y tracción

> *"Caja Los Andes — 4,3 millones de afiliados, 65,86% market share entre cajas — tiene al microemprendedor en el momento crítico de transición empleado a independiente. Su workshop de las 16:00 hoy. Su fondo LEAP de 9 millones de dólares. Conversaciones con su equipo durante el Forum."*
>
> *"Clay nos co-construye el MCP en su workshop de hoy 14:00. Ese flujo ya está en marcha."*

**Cifras todas con URL en el dossier técnico.**

---

### 2:30–2:45 — Equipo

> *"Tres personas. Lucas — pitcher y dueño del MCP regulatorio. Edo — vibecoder, integración WhatsApp y backend. Luca — producto, networking, y el caso real que están viendo en el escenario."*

---

### 2:45–3:00 — El ask (cierre)

> *"Pedimos tres cosas:"*
>
> *"60 días en el AI Fintech Sandbox de FinteChile para validar Chispla con 100 microemprendedores reales antes del 30 de junio."*
>
> *"Piloto B2B2C con Caja Los Andes en su base de afiliados en transición."*
>
> *"Abrir el MCP de Clay para que Chispla lo use en producción."*
>
> *"Promesa medible: en 90 días, 500 microemprendedores formalizados con datos reales del Estado, no con explicaciones genéricas."*

**Mirar a la mesa de jurados al cerrar. Pausa.**

---

## Versión inglés (backup si lo piden)

[Espejo de la estructura ES. El query en demo se hace en inglés natural si el jurado pide inglés. La detección de idioma de Chispla cambia automáticamente la conversación a EN.]

---

## Q&A — respuestas pre-rehearsadas (2 minutos)

### Q: ¿Cómo evitan alucinación regulatoria?

R: No respondemos desde memoria del modelo. El agente está obligado por system prompt a llamar al MCP, recuperar un chunk real con URL oficial, y citarlo. Si no hay chunk: "No tengo fuente verificada, chequea acá [link al portal oficial]". Está en consola Anthropic — pueden ver el `verify_citation` tool call después de cada respuesta.

### Q: ¿Cómo se mantienen las normas al día?

R: El MCP re-scrapea diario en cron nativo de Railway. CMF y SII publican normativa con URL predictibles. BCN Ley Fácil API es JSON oficial. Versionado en Supabase con `published_at` para que el agente diga "según la versión vigente al [fecha]".

### Q: ¿Modelo de negocio?

R: B2B2C. El MCP queda libre y abierto — esa es la apuesta de Clay y de Anthropic. Revenue post-Lab viene de white-label a Caja, Clay, cooperativas que quieran capa regulatoria sobre sus canales. Hoy estamos en el Sandbox de FinteChile, no en monetización.

### Q: ¿Y la responsabilidad legal? ¿Están dando asesoría?

R: Disclaimer explícito en cada conversación: "No soy abogado ni contador. Esto es traducción de regulación pública con su fuente. Para tu caso, valida con un profesional." El contador y el abogado siguen existiendo. Quitamos la fricción de empezar.

### Q: ¿En qué se diferencian de un GPT con RAG?

R: GPT responde desde training data. Nosotros desde un MCP que verifica cada cita contra la URL oficial en tiempo real. El MCP es público — auditable. Pidanle a ChatGPT una NCG CMF específica: alucina el número de artículo. Pídansela a Chispla: cita el PDF oficial.

### Q: ¿Los formularios PDF que entregan tienen validez oficial?

R: Son borradores no oficiales con marca de agua. El usuario los firma y presenta. La presentación oficial sigue siendo en SII (vía Mi SII online) o en la municipalidad (PDF oficial autocompletable). Chispla acelera la preparación, no reemplaza la presentación.

### Q: ¿Y el manejo de PII (RUT, datos bancarios)?

R: Supabase region sa-east-1, RUT y teléfono cifrados con pgcrypto, RLS estricto, retención 90 días, consentimiento explícito en el primer mensaje, sin logging de contenido sensible. Cumple Ley 19.628 hoy. Arquitectura lista para Ley 21.719 cuando entre en vigencia el 1-dic-2026.

---

## Notas de delivery (Lucas)

- **Apertura con contacto visual, no con laptop.** Los primeros 15 segundos: mirar al jurado, no a la pantalla.
- **Hablar más lento de lo natural.** En adrenalina hablamos rápido. Forzar el ritmo.
- **Pausa después del PDF.** Que el silencio cargue. Es el wow moment — dejen que aterrice.
- **Si algo se rompe, no pedir disculpas.** Edo abre el Loom backup y Lucas sigue hablando como si fuera planeado.
- **Cerrar mirando a la mesa, no al proyector.** El ask se entrega cara a cara.

---

## Notas de operación (Edo durante el demo)

- WhatsApp Desktop conectado y abierto antes de subir.
- Consola Anthropic con la API key del equipo, tab ya abierta.
- Loom backup descargado local (no streaming).
- Teléfono de Luca con WhatsApp abierto en la conversación con Chispla.
- Si el agente devuelve algo en >25s en vivo (riesgo de pasarse de J3.3 latency), cortar y pasar al Loom.

---

**Última actualización:** 2026-05-06 — Edo — full rewrite alineado a CLAUDE.md (WhatsApp + Files API · 3+2 según rúbrica v3.3 · hook "Luca está acá conmigo"). Sustituye la versión pre-rebrand de 4+1 con Calendar export.
