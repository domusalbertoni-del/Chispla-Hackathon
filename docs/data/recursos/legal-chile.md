# Legal — Chile

_Marco regulatorio fintech chileno actualizado a 2026 — leyes vigentes, NCGs, organismos y datasets._

> Documento actualizado al 17 abril 2026. Fuentes: BCN, CMF, ANCI, SII, SERNAC, Banco Central.

## Ley N° 21.521 — Ley Fintec

Ley vigente desde **3 de febrero de 2023**. Establece el marco legal para prestadores de servicios financieros tecnológicos en Chile. Es una de las regulaciones fintech más completas de Latinoamérica.

**Servicios financieros regulados (Título II):**
- Plataformas de financiamiento colectivo (crowdfunding/crowdlending)
- Sistemas alternativos de transacción
- Intermediación de instrumentos financieros
- Enrutamiento de órdenes
- Asesoría crediticia y de inversión
- Custodia de instrumentos financieros

**Qué protege a los usuarios:**
- Derecho a información clara (sin lenguaje jurídico denso)
- Protección de datos personales
- Sistema formal de reclamos ante CMF
- **Portabilidad financiera** vía Sistema de Finanzas Abiertas (SFA)

**Normativa de implementación (CMF):**

| Norma | Tema | Publicación |
|-------|------|-------------|
| NCG 502 | Registro y obligaciones prestadores Fintec | Ene 2024 (mod. dic 2024) |
| NCG 503 | Requisitos de competencia de roles | 2024 |
| NCG 504 | Disposiciones Art. 65 LMV | 2024 |
| NCG 514 | Sistema de Finanzas Abiertas (Open Finance) | Jul 2024 |
| Manual SIF | Reportería tecnológica y ciberseguridad | Ene 2025 |

> **Nota importante:** la **NCG 514** es la que regula Open Finance, no la NCG 502 (que cubre registro de prestadores). La implementación del SFA tiene fases de 24-36 meses desde julio 2024.

**Estado del Registro (RPSF) al 4 feb 2025:**
- 179 entidades autorizadas
- 300+ solicitudes en revisión
- Consulta pública: https://www.cmfchile.cl/institucional/estadisticas/seg_rgpsf.php

**Enlaces oficiales:**
- Texto Ley 21.521: https://www.bcn.cl/leychile/navegar?idNorma=1187323
- Portal Fintec CMF: https://www.cmfchile.cl/portal/principal/613/w3-propertyvalue-43589.html
- NCG 502 (PDF): https://www.cmfchile.cl/normativa/ncg_502_2024.pdf
- NCG 514 (PDF): https://www.cmfchile.cl/normativa/ncg_514_2024.pdf

## Ley N° 21.719 — Nueva Ley de Protección de Datos Personales

**Promulgada:** diciembre 2024. **Entra en vigencia: 1 diciembre 2026**.

> Durante la hackathon (6-7 mayo 2026) esta ley **aún no está vigente** — rige Ley 19.628. Pero diseña pensando en los 7 meses siguientes: las soluciones que se construyan deberán cumplirla antes de pasar a producción.

**Qué cambia respecto a Ley 19.628:**

- **Agencia de Protección de Datos Personales** — organismo autónomo con facultades sancionatorias reales
- **Derechos ARCO+** ampliados: Acceso, Rectificación, Cancelación, Oposición, **Portabilidad**, **Bloqueo**
- **Categorías especiales** con protección reforzada: datos biométricos, salud, financieros, de menores
- **Régimen sancionatorio efectivo** (la ley anterior no tenía autoridad de control con dientes)
- **Notificación obligatoria de brechas** de seguridad
- **Evaluaciones de impacto** en tratamientos de alto riesgo
- **Transferencia internacional** de datos bajo reglas específicas

**Enlace oficial:** https://www.bcn.cl/leychile/navegar?idNorma=1209272

## Ley N° 21.459 — Delitos Informáticos

Vigente desde **20 junio 2022**. Deroga la Ley 19.223 y adapta el Código Penal al Convenio de Budapest (estándar internacional).

**Tipos penales cubiertos:**
- Ataques a integridad de sistemas informáticos
- Ataques a integridad de datos
- Acceso ilícito a sistemas
- Interceptación ilícita de comunicaciones
- **Fraude informático** (relevante para fintech)
- Falsificación informática
- Abuso de dispositivos
- Receptación de datos informáticos

**Enlace:** https://www.bcn.cl/leychile/navegar?idNorma=1177743

## Ley N° 21.663 — Ley Marco de Ciberseguridad (ANCI)

Promulgada marzo 2024. Estructura ANCI **vigente desde enero 2025**. Obligaciones plenas de servicios esenciales se escalonan durante 2025-2026.

> Durante mayo 2026 la **ANCI ya opera** y los reportes de incidentes al CSIRT Nacional son exigibles a servicios esenciales y operadores de importancia vital (OIV). Las fintech reguladas por CMF están dentro del perímetro.

**Plazos de reporte al CSIRT Nacional:**

| Plazo | Obligación |
|-------|------------|
| 3 horas | Alerta temprana desde conocimiento del incidente |
| 72 horas | Descripción detallada del incidente |
| 15 días corridos | Informe completo con lecciones aprendidas |

**Obligaciones permanentes:**
- Medidas de prevención, detección y respuesta
- Cumplimiento de estándares técnicos ANCI
- Designación de responsable de ciberseguridad
- Planes de continuidad operacional

**Enlaces:**
- Ley 21.663: https://www.bcn.cl/leychile/navegar?idNorma=1202434
- ANCI: https://anci.gob.cl
- CSIRT Nacional: https://csirt.gob.cl
- Normativa ANCI: https://anci.gob.cl/normativa/leyes/

## CMF — Comisión para el Mercado Financiero

La CMF decide qué empresas financieras pueden operar en Chile y fiscaliza su cumplimiento.

**Datos públicos disponibles:**
- Registro de instituciones reguladas (bancos, fintec, aseguradoras)
- Normativa vigente (NCG y circulares) buscable
- Registro de reclamos por institución
- Alertas de estafas y entidades no autorizadas
- Registro Prestadores Fintec (RPSF)

**Portales clave:**
- Normativa vigente: https://www.cmfchile.cl/portal/principal/613/w3-propertyname-702.html
- Educación financiera (CMF Educa): https://www.cmfchile.cl/educa/
- Alertas al público: https://www.cmfchile.cl/portal/principal/613/w3-propertyvalue-43545.html
- Estadísticas: https://www.cmfchile.cl/institucional/estadisticas/

> **Nota técnica:** la CMF no publica actualmente una API REST documentada. Los datos están en CSV y PDF descargables. Si tu producto necesita consultas frecuentes, cachea localmente y respeta los `robots.txt`.

## Ley N° 21.398 — "Pro Consumidor" (SERNAC Financiero)

Vigente desde **24 diciembre 2021** con entradas escalonadas. Aplicaciones clave al sector financiero:

- Análisis obligatorio de solvencia antes de cursar operaciones de crédito
- **Plazo máximo 5 días hábiles** para certificados de deuda (portabilidad/renegociación)
- Prohibición de ofertas crediticias en establecimientos educacionales
- Facilitación de término anticipado de contratos financieros
- Garantía legal ampliada de 3 a 6 meses

**Leyes base de consumidor:**
- Ley 19.496 — Derechos del consumidor
- Ley 20.555 — SERNAC Financiero
- Ley 21.398 — Pro Consumidor

**Enlaces:**
- Ley 21.398: https://www.bcn.cl/leychile/navegar?idNorma=1170464
- SERNAC Financiero: https://www.sernac.cl/portal/618/w3-propertyvalue-27771.html
- CMF Educa: https://www.cmfchile.cl/educa/

## SII — Tributación digital y criptoactivos

El SII administra impuestos. Fintech y usuarios tienen obligaciones específicas:

- Ventas por plataformas digitales → boleta/factura electrónica
- Pagos vía fintech → son ingresos tributables
- Ganancias en crowdfunding → tributan como renta
- Criptoactivos → gravados bajo régimen general LIR (no IVA sobre compraventa)

**Normativa reciente (2025) sobre criptoactivos:**

- **Res. Ex. 113/2025** — crea Declaración Jurada 1963: proveedores de servicios de activos digitales reportan transacciones de usuarios **no residentes**. Primera presentación: 30 junio 2026.
- **Res. Ex. 114/2025** — crea Declaración Jurada 1964: reporte de transacciones de usuarios **residentes** en Chile. Primera presentación: 30 junio 2026.
- Alineadas con el **Crypto-Asset Reporting Framework (CARF)** de la OCDE.

**Fiscalización activa:** al 22 septiembre 2025, el SII reportó 13 casos fiscalizados con rendimiento cercano a CLP 5.000 millones.

**Enlaces:**
- FAQ criptomonedas: https://www.sii.cl/preguntas_frecuentes/criptomonedas/arbol_faqs_criptomonedas_1653.htm
- Res. Ex. 114/2025 (PDF): https://www.sii.cl/normativa_legislacion/resoluciones/2025/reso114.pdf
- Normativa SII: https://www.sii.cl/normativa_legislacion/

## Ciberseguridad y fraude digital en Chile

Más de 800.000 intentos de fraude digital al año. 70% de víctimas no denuncia. Adultos mayores son el grupo más vulnerable.

**Amenazas principales:**
- **Phishing financiero** — 45% de los fraudes digitales
- **Vishing** (voice phishing) — llamadas suplantando al banco
- **Smishing** (SMS phishing) — Chile en top 5 LATAM
- Suplantación de identidad digital
- Estafas cripto en redes sociales ("duplica tu dinero")

**Marco legal aplicable:**
- Ley 21.459 — Delitos informáticos
- Ley 21.663 — Marco de ciberseguridad
- Ley 21.521 — Requisitos de seguridad para fintech
- Ley 21.719 — Notificación de brechas (desde dic 2026)

**Enlaces operativos:**
- CSIRT Chile: https://csirt.gob.cl
- ANCI: https://anci.gob.cl
- CMF alertas estafas: https://www.cmfchile.cl/portal/principal/613/w3-propertyvalue-43545.html
- PhishTank (API pública): https://phishtank.org

## Datasets y APIs públicas para construir

| Fuente | Recurso | URL | Formato |
|--------|---------|-----|---------|
| Banco Central | API BDE series estadísticas | https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx | JSON REST |
| Banco Central | Docs API BDE | https://si3.bcentral.cl/estadisticas/Principal1/Web_Services/doc_es.htm | — |
| CMF | Registro Prestadores Fintec | https://www.cmfchile.cl/institucional/estadisticas/seg_rgpsf.php | HTML |
| CMF | Normativa buscable | https://www.cmfchile.cl/portal/principal/613/w3-propertyname-702.html | HTML/PDF |
| SII | Normativa y resoluciones | https://www.sii.cl/normativa_legislacion/ | HTML/PDF |
| ANCI | Normativa ciberseguridad | https://anci.gob.cl/normativa/leyes/ | HTML/PDF |
| CSIRT | Alertas y boletines | https://csirt.gob.cl | HTML |
| BCN | API Ley Fácil | https://www.bcn.cl/api-leyfacil/ | JSON |
| PhishTank | URLs maliciosas | https://phishtank.org | API REST |

**Notas técnicas:**
- **API Banco Central (BDE):** requiere registro gratuito (usuario/password). Métodos: `GetSeries`, `SearchSeries`. Soporte Python y R.
- **CMF:** sin API REST pública — scraping respetuoso (rate limit 1 req/s).
- **BCN API Ley Fácil:** gratuita, JSON, ideal para explicar normas a usuarios finales.

## Principios transversales para diseñar

1. **Privacy by design** — minimización de datos desde el prototipo, aunque Ley 21.719 aún no esté vigente
2. **Consentimiento informado** — explícito, granular, revocable
3. **Seguridad por defecto** — cifrado at-rest y in-transit, autenticación multifactor
4. **Transparencia algorítmica** — si usas IA para decisiones financieras, explica
5. **Accesibilidad regulatoria** — tu producto debe estar listo para registro en CMF si encaja en Título II de Ley Fintec
6. **Reportes ANCI** — pipeline de detección y notificación de incidentes desde el día uno