# Bases del Impact Lab

_Reglas formales del Claude Impact Lab Chile 2026 — quién participa, qué se entrega, cómo se evalúa, qué se gana._

## Qué es

El **Claude Impact Lab Chile 2026** es la primera edición mundial del programa global de Anthropic aplicado a inclusión financiera. 200 builders construyen en 48 horas, con datos públicos reales (CMF, SII, SERNAC, BCN, CSIRT), herramientas de IA que acerquen la regulación a los 5 millones de chilenos que hoy no pueden leerla.

Fecha: **6 y 7 de mayo de 2026**, en Espacio Riesco (Santiago), dentro del Chile Fintech Forum 2026.

## Quién participa

- Mayores de 18 años, residentes en Chile o Latinoamérica.
- Equipos de **2 a 4 personas**, o **SOLOpreneur** (individual).
- Categorías cross-track (elige una al inscribirte):
  - **AI Builder** — developers que construyen con código (Python, JS, APIs, Agent SDK)
  - **Vibecoder** — creadores que construyen con Claude Code / Cursor / v0 / no-code
  - **Comercial / Producto** — estrategas que articulan el problema, validan con usuarios y conectan la tecnología con las personas
- Un equipo ideal mezcla las tres categorías. El equipo compite en una única línea temática.

## El desafío

**Un desafío único:** Inclusión Financiera para Chile. Tres líneas temáticas a elegir:

### Línea 01 — Inclusión Financiera
¿Cómo hacemos que cualquier chileno entienda sus derechos financieros sin necesidad de ser un abogado?

Ejemplos: agentes que expliquen circulares CMF en lenguaje simple, comparadores de productos regulados, guías interactivas de derechos del consumidor.

Datos: circulares CMF, normativas SII, registros de instituciones financieras reguladas.

### Línea 02 — Ciberseguridad Ciudadana
¿Cómo protegemos a los ciudadanos del fraude financiero digital con IA accesible?

Ejemplos: detectores conversacionales de phishing, agentes de reporte de fraude conectados a CMF, educadores en tiempo real sobre amenazas.

Datos: reportes CSIRT, alertas CMF, bases de URLs maliciosas.

### Línea 03 — Protección de Datos
¿Cómo empoderamos a las personas para controlar cómo se usan sus datos financieros?

Ejemplos: agentes para ejercer derechos ARCO ante instituciones financieras, explicadores de políticas de privacidad, asistentes de portabilidad de datos.

Datos: Ley 21.719 de Protección de Datos, registros de la Agencia de Protección de Datos.

## Qué deben entregar los equipos

Tres entregables. Nada más, nada menos.

### 1. Ficha cívica (antes del 7 mayo 10:00 Chile)

Formulario estructurado en `/app > Entregables`. Define con precisión:

- **Línea temática** elegida
- **Problema ciudadano** concreto (máx 500 chars)
- **Segmento específico** con datos demográficos ("Jubiladas 60-75 en Valparaíso", no "Chilenos en general")
- **Propuesta de valor** (máx 300 chars)
- **Canal de adopción:** B2C directo / B2B2C (vía fintech o banco) / B2G (regulador/SERNAC/municipio) / B2NGO (fundación u ONG)
- **Stakeholder identificado** (opcional): persona, institución o canal concreto que ya confirmó interés
- **Datos usados:** fuentes oficiales que consumen (CMF circular N, SII res. X, etc.)

### 2. Entregable técnico (antes del 7 mayo 17:00 Chile)

**Obligatorio:**

- **Demo video** de 3 a 5 minutos mostrando el producto funcionando end-to-end con inputs reales. Upload en la plataforma del Lab (max 100 MB).
- **Screenshot de la consola Claude** (dashboard de Anthropic) mostrando llamadas al modelo durante la ventana del Lab. Prueba que usaron Claude como motor principal y permite ver elección de modelo (Haiku / Sonnet / Opus).
- **System prompt** principal del agente (textarea en la plataforma).

**Opcional — suma +1 en el criterio "Uso de Claude":**

- Repositorio público (GitHub link) o ZIP ≤5 MB
- Tools schema JSON si usan tool use
- Declaración de herramientas Anthropic usadas: MCP, Files API, Extended Thinking, Computer Use

### 3. Pitch en vivo (7 mayo, durante el Demo Day)

- 3 minutos de presentación + 2 minutos de Q&A con jueces.
- Demo funcional requerida (no slides vacías).
- Los jueces pueden hacer red team al producto en vivo (probarlo con casos reales y trampa).

## Gates (descalificadores o penalizaciones automáticas)

Tres checks que el equipo organizador aplica antes de calcular el score final:

| Gate | Cómo se verifica | Consecuencia |
|---|---|---|
| **Commits en ventana** | Todos los commits entre 2026-05-06 00:00 y 2026-05-07 23:59 hora Chile (UTC-4). Agente técnico + revisión manual. | Si no: score de "Uso de Claude" y "Funciona" = 0. |
| **Sin trabajo preexistente** | Agente técnico marca `posible_trabajo_previo` si detecta commits o arquitectura no construible en 48h. Revisión humana final. | Si humano confirma: descalificación. |
| **Sin alucinación regulatoria grave** | Mentor regulatorio revisa demo + README y contrasta con Wiki Legal. | Grave: -30% del score total. Leve: -5 pts. |

**Además:** uso obligatorio de Claude como motor principal. Si en la consola no aparecen llamadas a Claude API → descalificación.

**Entregables:** si falta la ficha cívica: -20%. Si falta el entregable técnico: -30%. Si no hay pitch: descalificado.

## Calendario

| Fecha | Hito |
|---|---|
| 29 abril (miércoles) | Se abre el login del portal y arranca la formación de equipos en el wizard. Email masivo a inscritos. |
| 30 abril 23:59 Chile (jueves) | Cierre de inscripciones individuales — último día para postular. |
| 2 mayo | Bendi y la plataforma Web4 se encienden. |
| 5 mayo | Cierre de equipos: no se admiten cambios de integrantes. |
| **6 mayo 00:00** | Arranca la ventana de construcción válida. |
| 7 mayo 10:00 | Deadline ficha cívica. |
| 7 mayo 17:00 | Deadline entregable técnico. Preselección Top 6 por línea. |
| 7 mayo (tarde-noche) | Pitches finales + premiación + cierre. |
| **7 mayo 23:59** | Cierra la ventana de construcción válida. |

## Preselección y ganadores

- **Top 6 por línea temática → 18 equipos** al pitch. Calculado antes del pitch con D1+D2+D3+D4+bonus (sin D5 aún).
- **2 wild cards** que el comité puede activar por razones cualitativas.
- **6 ganadores** (2 por línea temática): 1° y 2° lugar.
- **Reconocimientos cross-track:** Best AI Builder, Best Vibecoder, Best Comercial/Producto, Best SOLOpreneur, Mención a pensamiento agéntico.

## Qué se llevan los equipos

### Todos los participantes

- $50 USD en créditos Claude API (cada persona).
- Swag oficial de Anthropic.
- 2 horas de mentoría experta durante el Lab.
- Ticket liberado al Chile Fintech Forum 2026 (valor $80 USD).
- Certificado oficial Claude Impact Lab.

### Primer lugar por línea

- $500 USD en efectivo.
- Mac Mini para el equipo.
- 60 días en AI Fintech Sandbox Chile (aceleración post-Lab con mentorías CMF / FinteChile).
- Stage en CFF26.
- Mención en el blog oficial de Anthropic.

### Cross-track

- Best AI Builder, Best Vibecoder, Best Comercial/Producto, Best SOLOpreneur: reconocimiento público + créditos API adicionales.

## Reglas críticas

1. **Claude es el motor principal.** Soluciones que usen otros LLMs como base → descalificadas.
2. **No inventes normativa.** Si tu agente afirma algo sobre la Ley 21.521 u otra norma, debe citar fuente oficial o decir "no sé".
3. **Maneja PII con respeto.** Si tu producto recibe RUT, datos bancarios o historial crediticio, declara cómo los proteges y minimiza su uso.
4. **Construye en la ventana.** Código y contenido que existan antes del 6 mayo 00:00 o después del 7 mayo 23:59 no cuentan.
5. **El equipo domina lo que construyó.** En el Q&A del pitch, los jueces preguntan por arquitectura, decisiones de modelo, y cómo manejarían edge cases. Si el equipo no sabe, baja el score de pitch.

## Contacto

- Dudas durante el evento: Bendi (agente IA 24/7 en la plataforma).
- Temas formales: Slack `#fintech-dev-platform` del Impact Lab.
- Apelaciones: correo al equipo organizador dentro de las 24h post-pitch.