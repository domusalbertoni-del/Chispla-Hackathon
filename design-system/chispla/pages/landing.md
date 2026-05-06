# Landing — Page Override

> Esta override **reemplaza** el `MASTER.md` para la página landing de Chispla.
> Lectura: si vas a escribir código de la landing, lee este archivo primero. Si construyes otra cosa (admin, error pages), usa MASTER.md.

**Fecha:** 2026-05-06
**Stack:** Next.js 16 (App Router) · Tailwind CSS · shadcn/ui · TypeScript estricto

---

## Pattern (override)

**Trust & Authority + Conversion** (no "Real-Time / Operations" como decía MASTER por default).

Razón del cambio: Chispla es un agente regulatorio en WhatsApp. La conversión NO es signup ni demo de plataforma — es **scaneo de QR + apertura de WhatsApp**. La autoridad viene de citar fuentes oficiales con URLs visibles y de los logos institucionales del Lab.

**Section order:**

```
1. Hero          — Mission + QR como CTA primario · ES/EN toggle
2. Trust bar     — Logos: Anthropic · Claude Impact Lab Chile 2026 · FinteChile · Caja Los Andes (si confirma) · Clay (si confirma)
3. ¿Qué responde? — 3 conversaciones tipo (cards con mockup mensaje WhatsApp)
4. Datos que usa — Tabla/lista de fuentes oficiales con URL inline (BCN · CMF · SII · SERNAC · BCN Ley Fácil)
5. Cómo funciona — Diagrama simple usuario → WhatsApp → Claude+MCP → fuentes oficiales → respuesta+PDF
6. Disclaimer    — "No es asesoría legal / tributaria. Verifica con un profesional."
7. Equipo        — Lucas + Edo + Luca (con sus roles) + créditos Track 01 Impact Lab Chile 2026
8. Footer        — Repo público (post-Lab) · contacto · privacidad
```

**CTAs:**
- Primario único: el QR + número WhatsApp (en hero, sticky en mobile, repetido al final)
- Secundario: link al GitHub del MCP (post-Lab)
- NO incluir: "Comenzar gratis", "Demo", "Pricing" — no aplican al producto

**No-go en este pattern:** banners de "AI startup", gradientes púrpura/rosa, mocks vacíos. Toda la prueba viene de las URLs oficiales visibles.

---

## Color (refinement de MASTER)

Mantenemos el azul institucional + naranja del MASTER porque ya alinea con el dashboard del equipo. Agrego un acento teal para "datos verificados" que distingue las citas oficiales del CTA.

| Rol | Hex | Tailwind | Uso |
|---|---|---|---|
| Primary | `#2563EB` | `blue-600` | Headings, links institucionales, ring de focus |
| Primary deep | `#1E40AF` | `blue-800` | Énfasis en datos cuantitativos del hero |
| CTA | `#F97316` | `orange-500` | Botón QR, "Hablar en WhatsApp" — usa este SOLO para CTA |
| Trust accent | `#0F766E` | `teal-700` | Badge "fuente verificada" en URLs de citas |
| Foreground | `#0F172A` | `slate-900` | Texto cuerpo principal |
| Muted | `#475569` | `slate-600` | Subtítulos, helpers, disclaimers |
| Background | `#FFFFFF` | `white` | Fondo principal |
| Surface | `#F8FAFC` | `slate-50` | Cards, secciones alternadas |
| Border | `#E2E8F0` | `slate-200` | Bordes sutiles |
| Success | `#16A34A` | `green-600` | "Cumple Ley X" badges |
| Destructive | `#DC2626` | `red-600` | Disclaimer destacado, "no soy abogado" |

**Anti-patrón crítico:** **NO** usar gradientes purple→pink (banderote de "AI startup"). Chispla es fintech regulatorio gov-adjacent — el lenguaje visual es Anthropic/CMF, no OpenAI/ChatGPT.

---

## Typography (mantenido de MASTER)

- **Headings:** Lexend (300/400/500/600/700) — diseñada explícitamente para reading proficiency. Calza con narrativa de inclusión.
- **Body:** Source Sans 3 (300/400/500/600/700) — humanista, alta legibilidad mobile.
- **Mono (citas legales, NCG, normativa):** ui-monospace, SFMono-Regular (system stack).

**Type scale:**

| Token | Mobile | Desktop | Uso |
|---|---|---|---|
| `text-xs` | 12px | 12px | Labels, timestamps |
| `text-sm` | 14px | 14px | Helpers, footnotes |
| `text-base` | 16px | 16px | Body — mínimo para mobile |
| `text-lg` | 18px | 18px | Body destacado |
| `text-xl` | 20px | 20px | H4, lead |
| `text-2xl` | 24px | 28px | H3 |
| `text-3xl` | 28px | 36px | H2 |
| `text-4xl` | 32px | 48px | H1 hero |
| `text-5xl` | 40px | 60px | Cifras hero (2M, 54%) |

`line-height: 1.5` para body, `1.2` para headings, `1.65` para párrafos largos del disclaimer.

---

## Componentes específicos del landing

### Hero

```
[Logo Chispla]                    [ES | EN] toggle
─────────────────────────────────────────────
                                              
   Te ayudamos a abrir tu empresa en Chile    
   sin abogado.                                
                                              
   Chispla es un agente conversacional que    
   responde por WhatsApp con datos oficiales  
   del SII, CMF y BCN. Cita la fuente. No     
   alucina regulación.                         
                                              
   [QR grande]   [Botón naranja "Abrir       
   144x144px     WhatsApp →"]                  
                                              
   📱 +56 9 XXXX XXXX                          
                                              
─────────────────────────────────────────────
```

- QR como elemento central — protagonista visual del hero
- Botón naranja como alternativa móvil (deep link `wa.me/56XXXX?text=Hola`)
- Cifras hero opcionales: "≈2M microemprendedores · 54% informales · INE EME 8"

### Trust bar

Logos en gris (`slate-400`) en una sola fila, con tooltip al hover ("Sponsor del Lab", "Track 01", etc.). Texto sobre la fila: *"Construido en Claude Impact Lab Chile 2026 con datos oficiales del Estado."*

### Cards de conversaciones tipo

3 cards lado a lado en desktop (1 columna en mobile, scroll-snap horizontal). Cada card:
- Avatar de WhatsApp del usuario
- Mensaje del usuario en burbuja gris (típica WhatsApp)
- Mensaje de Chispla en burbuja verde-WhatsApp con citation pill al pie
- Adjunto: chip de PDF cuando aplica

### Tabla de fuentes oficiales

Lista vertical, no tabla densa. Cada fila:
- Logo institucional pequeño (Heroicons/Simple Icons)
- Nombre + descripción 1-línea
- URL clickable con icono de external link
- Badge teal "fuente verificada"

Fuentes: BCN Ley Fácil API · CMF normativa (NCG 502, 514, Manual SIF, Ley Fintec) · SII (F4415, regímenes Pro PyME, IVA) · SERNAC Financiero · BCN texto leyes (Ley 21.521, 21.398, etc.).

### Disclaimer destacado

Sección con borde rojo izquierdo (`border-l-4 border-red-600`):
> *"Chispla traduce regulación pública con su fuente. **No es asesoría legal ni tributaria.** Para tu caso específico, valida con un contador o abogado. Los formularios PDF que entregamos son borradores no oficiales — la presentación se hace en SII (Mi SII online) o en la municipalidad."*

---

## Effects + animation

- Transitions: 150-300ms (hover de cards, links, botón)
- `prefers-reduced-motion: reduce` debe desactivar todas las animaciones decorativas
- **NO usar:** parallax, reveal-on-scroll lento, partículas, gradient-meshes animados
- Focus rings visibles 3-4px en color teal-700 (no el azul, que se confunde con links)

---

## Touch & responsive

- Breakpoints: 375 (mobile small) · 640 (tablet) · 1024 (desktop) · 1280 (wide)
- Tap targets: ≥44×44pt en QR + botón hero
- En mobile: QR grande arriba, botón naranja sticky en bottom (más fácil tap)
- Scroll-snap horizontal en cards de conversaciones
- Sin horizontal scroll fuera de los carruseles

---

## Accesibilidad (WCAG AAA target porque es regulatorio)

- Contraste body ≥7:1 (slate-900 sobre white = ~16:1, OK)
- Contraste muted ≥4.5:1 (slate-600 sobre white = ~7.4:1, OK)
- `aria-label` en QR ("Código QR para iniciar conversación con Chispla en WhatsApp")
- `lang="es"` por default, switch a `lang="en"` cuando el toggle está en EN
- Skip-link "Saltar al contenido principal"
- Headings en orden h1 → h2 → h3 sin saltos
- Form-labels reales (no placeholder-only) si agregamos newsletter post-MVP

---

## Anti-patrones específicos para Chispla

- ❌ **Gradientes purple/pink** — bandera de "AI startup genérica". Somos fintech regulatorio gov-adjacent.
- ❌ **Mocks de chat vacíos sin contenido real** — usar las 3 conversaciones tipo del PERSONAS.md, no lorem ipsum.
- ❌ **CTAs como "Demo gratis", "Pruébalo ya"** — el CTA es escanear QR + abrir WhatsApp, no signup.
- ❌ **Pricing section** — no aplica.
- ❌ **Stats inventadas** — toda cifra debe tener URL inline (M2 datos responsables aplica también a la landing).
- ❌ **Iconos emoji 🚀 💡 ⚡** — usar Heroicons o Lucide en SVG.
- ❌ **Glassmorphism / claymorphism** — fuera de pattern Accessible & Ethical.
- ❌ **Modal autoplay con video** — distrae del QR.
- ❌ **Cookie banner agresivo** — usar página de privacidad simple, no popup intrusivo.

---

## Pre-delivery checklist específico landing Chispla

- [ ] QR funciona (escanear con cámara abre WhatsApp con número correcto)
- [ ] Botón naranja "Abrir WhatsApp" es deep-link `wa.me/56XXXX?text=Hola%20Chispla`
- [ ] Cada cifra del hero tiene URL inline a la fuente (INE EME 8, etc.)
- [ ] Cada URL en "Fuentes oficiales" abre en nueva pestaña con `rel="noopener"`
- [ ] Toggle ES/EN cambia `lang` y todo el contenido en <300ms
- [ ] Disclaimer legal visible sin scroll en mobile (tras el hero)
- [ ] Trust bar muestra logos solo de sponsors confirmados (no inventar)
- [ ] OG image + Twitter card configurados (la landing puede ser compartida en LinkedIn por sponsors)
- [ ] Lighthouse a11y ≥95 en mobile y desktop
- [ ] Lighthouse perf ≥90 (fonts preloaded, imágenes optimizadas)
- [ ] Sin tracking pixels de terceros (mantenerse limpio para gov audience)
