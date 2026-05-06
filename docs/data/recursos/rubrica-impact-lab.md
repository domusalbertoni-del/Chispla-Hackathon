# Rúbrica del Impact Lab — v3.3

_Cómo se evalúan los equipos. 22 sub-checks binarios, pre-evaluación automática con Bendi (Haiku 4.5), confirmación humana 1-click, score final 40% mentor + 60% juez._

## Filosofía v3.3

Cero ambigüedad, todo medible, todo auditable.

**Bendi (Haiku 4.5) pre-evalúa con evidencia → mentor confirma con un click → el juez puntúa el pitch en vivo.**

Cada sub-check es binario (cumple / duda / no_cumple). Bendi devuelve `{veredicto, razón, evidencia}` con cita textual. El humano ve la sugerencia, la evidencia, y confirma con 1 click. Si confirma distinto a lo que dijo Bendi, queda registrado en `bendi_audit_decision` para auditoría.

```
Score total = score_mentor × 0.40 + score_juez × 0.60   →   0–100
```

---

## FASE 1 — Mentor (6 mayo, durante el día)

**1 mentor por equipo, ~17 equipos cada uno. Bendi pre-evalúa los 10 sub-checks apenas el equipo entrega su ficha cívica + entregable técnico.**

### M1 — Problema y ciudadano (peso 20%)

| ID | Pregunta binaria | Cómo lo mide Bendi |
|---|---|---|
| **A1** | El problema está descrito sin jerga técnica y en ≤300 caracteres | Cuenta chars + detecta palabras técnicas no explicadas |
| **A2** | El segmento ciudadano es específico (no "los chilenos") | Verifica grupo etario + ubicación + condición socioeconómica |
| **A3** | El canal de adopción es concreto y alcanzable | Exige nombre de canal real (WhatsApp, app X) + justificación |
| **A4** | El impacto está cuantificado con número y fuente verificable | Extrae métrica + valida URL .gob.cl o institucional |

### M2 — Datos responsables (peso 20%)

| ID | Pregunta binaria | Cómo lo mide Bendi |
|---|---|---|
| **A5** | Cita ≥2 fuentes regulatorias oficiales con URL | Cuenta URLs de cmf.cl, sii.cl, sernac.cl, bcn.cl, csirt.gob.cl, leychile.cl |
| **A6** | Cero alucinaciones regulatorias detectadas | Compara afirmaciones legales contra Wiki Legal (RAG sobre legal-chile.md) |

### M3 — Uso de Claude + arquitectura agéntica (peso 35%)

| ID | Pregunta binaria | Cómo lo mide Bendi |
|---|---|---|
| **B1** | System prompt entregado, específico al problema (>200 chars, dominio claro) | Mide longitud + detecta menciones a CMF/SII/Ley 21.719 |
| **B2** | ≥2 tools definidas con schema JSON válido | Parsea tools.json y valida cada schema |
| **B3** | Consola Anthropic muestra ≥3 mensajes en ventana 6-7 mayo | Cuenta mensajes + valida timestamps en ventana del evento |

### M4 — Funciona (peso 25%)

| ID | Pregunta binaria | Cómo lo mide Bendi |
|---|---|---|
| **B4** | Demo video 3-5 min muestra flujo end-to-end | Verifica duración + URL accesible + flujo completo (input→output) |

### Score del mentor

```
Cada Mn = (sub-checks marcados como cumple ÷ total sub-checks de Mn) × 5
score_mentor = (M1×0.20 + M2×0.20 + M3×0.35 + M4×0.25) × 20  →  0–100
```

### Lo que ve el mentor en el portal

- **Resumen ejecutivo** de Bendi (1 párrafo) + score sugerido (no vinculante)
- Fortalezas (3-4) + áreas de mejora (2-3) + banderas con severidad alta/media/baja
- **Entregables del equipo** (ficha cívica + técnico) para revisar evidencia
- Por cada sub-check: veredicto Bendi (cumple/duda/no_cumple) + razón + evidencia citada
- Botones **Cumple / No cumple** → click registra decisión (1 segundo)
- Chat lateral con Bendi para preguntar dudas

---

## FASE 2 — Selección de 12 finalistas (7 mayo 11:00)

```
Top 4 por vertical × 3 verticales = 12 finalistas
```

### Reglas de desempate (en orden estricto)

1. Mayor score en **M3** (uso de Claude — corazón del evento)
2. Mayor score en **M2** (datos responsables)
3. Mayor score en **M1** (problema y ciudadano)
4. **Timestamp más temprano** del último entregable
5. Voto del comité (Felipe + 1 mentor por vertical)

---

## FASE 3 — Juez (7 mayo desde 11:30, durante los pitches)

**3 jueces por pitch en doble ciego. Score juez del equipo = mediana de los 3 (descarta extremos).**

### J1 — Pitch (peso 35%) — en vivo, 3 min + 2 Q&A

| ID | Pregunta binaria |
|---|---|
| **J1.1** | Pitch ≤3 minutos exactos |
| **J1.2** | Menciona ciudadano específico beneficiado por nombre o caso |
| **J1.3** | Cita ≥1 fuente regulatoria oficial durante el pitch |
| **J1.4** | Responde ambas preguntas del Q&A sin evadir |

### J2 — Impacto ciudadano real (peso 35%) — del dossier + pitch

| ID | Pregunta binaria |
|---|---|
| **J2.1** | Métrica concreta de impacto (X personas en Y meses) |
| **J2.2** | Solución alcanzable post-hackathon |
| **J2.3** | Resuelve algo que el ciudadano hoy NO puede resolver |
| **J2.4** | Canal de adopción realista para el segmento |

### J3 — Producto / demo en vivo (peso 30%) — en vivo

| ID | Pregunta binaria |
|---|---|
| **J3.1** | Demo se reproduce en vivo sin crashear |
| **J3.2** | Input/output del agente visibles en pantalla |
| **J3.3** | Latencia <30s por respuesta |
| **J3.4** | Uso de Claude evidente (no solo wrapper UI) |

### Score del juez

```
Cada Jn = (sub-checks marcados como cumple ÷ total sub-checks de Jn) × 5
score_juez = (J1×0.35 + J2×0.35 + J3×0.30) × 20  →  0–100
```

### Lo que ve el juez antes de cada pitch

- Mismo dossier de Bendi que vio el mentor (resumen + sub-checks confirmados)
- Acceso directo a entregables (ficha + demo video + repo)
- 3 preguntas Q&A sugeridas por Bendi específicas al equipo
- Chat con Bendi para profundizar
- Timer del pitch + tablet con doble ciego (no ve scores de otros jueces hasta cerrar)

---

## FASE 4 — Score final y ganadores

```
score_final = score_mentor × 0.40 + score_juez × 0.60   →   0–100
```

- **2 ganadores por vertical** = **6 ganadores totales** (1° y 2° lugar)
- Desempate ganadores: J3 > J2 > J1 > voto del jurado completo

---

## Lo que cambió respecto a versiones anteriores

**Eliminado:**
- Sliders subjetivos 1-5 (reemplazados por sub-checks binarios)
- Gates de fraude (commits en ventana, trabajo previo, alucinación grave como descalificador)
- Bonus agéntico discrecional

**Agregado:**
- Sub-checks binarios con evidencia obligatoria
- Pre-evaluación automática con Haiku
- Dossier ejecutivo + chat unificado de Bendi
- Audit de divergencia mentor↔Bendi (`bendi_audit_decision`)
- Doble escritura compatible con sistema legacy (`evaluaciones` 1-5 sigue alimentando leaderboard y motor existentes)

---

## Transparencia

- 6 mayo durante el día: scores publicados en `/leaderboard` en realtime cada vez que un mentor cierra evaluación
- 7 mayo 11:00: anuncio de 12 finalistas
- Después del pitch: score juez se publica
- Post-evento: tarjeta completa por equipo con sub-checks + evidencia citada en `/leaderboard/equipo/:id`
- Disputa formal: 2h post-anuncio finalistas + 1h post-anuncio ganadores

---

## Costo Bendi (Haiku 4.5)

- Pre-eval (10 sub-checks paralelo) por equipo: ~$0.06
- Resumen ejecutivo por equipo: ~$0.03
- Chat con mentores/jueces (~20 mensajes/equipo): ~$0.15
- Re-procesos (cuando reentregan): ~$0.05
- **Total estimado para 50 equipos: ~$15 USD todo el evento**