# Ciberseguridad Ciudadana

_IA para proteger a las personas del fraude financiero digital._

## El problema

+800.000 intentos de fraude digital al año en Chile. Las pérdidas superan USD $200M anuales. Los adultos mayores son el grupo más vulnerable — reciben llamadas de vishing haciéndose pasar por sus bancos, confían, pierden sus ahorros.

La ciberseguridad existe en los bancos, pero no llega al ciudadano. Las alertas de la CMF están en PDFs densos. Las denuncias toman semanas.

## ¿A quién impacta?

- **Adultos mayores** (65+) — principales víctimas de vishing y smishing
- **Migrantes y personas sin acceso a bancos tradicionales** — más expuestos a estafas en apps
- **Microempresarios** — phishing dirigido a sus cuentas de negocio
- **Adolescentes** — engaños en redes sociales (estafas cripto, premios falsos)

## Datos disponibles

**Públicos (puedes usar sin permiso):**
- **API CMF — Alertas al público**: entidades no autorizadas, fraudes detectados
  - https://www.cmfchile.cl/portal/principal/613/w3-propertyvalue-43545.html
- **CSIRT Chile** — reportes de incidentes nacionales
  - https://www.csirt.gob.cl
- **PhishTank** — URLs de phishing reportadas globalmente
  - https://phishtank.org (API REST gratis)
- **URLhaus** — URLs maliciosas activas
  - https://urlhaus.abuse.ch
- **SERNAC** — denuncias de estafas por empresa
- **Banco Central** — estadísticas de uso medios de pago

**Datasets sintéticos (generar con Claude):**
- Transcripciones de llamadas de vishing (basadas en casos reales)
- Mensajes de smishing típicos
- Logs de transacciones sospechosas

## Marco legal

- **Ley 21.459** — Delitos informáticos (tipifica phishing, fraude, acceso ilícito)
- **Ley 21.663** — Marco de ciberseguridad (crea ANCI y fortalece CSIRT)
- **Ley 21.521** — Ley Fintech (requisitos de seguridad)
- **Ley 19.223** — Delitos informáticos (base)

## Ideas de solución

1. **Detector de vishing en tiempo real** — app que escucha la llamada y alerta si detecta patrones de estafa (usa Claude + audio transcription)
2. **Firewall de SMS** — clasifica SMS entrantes como legítimos / sospechosos / fraude
3. **Education bot** — simula ataques de phishing para entrenar a usuarios vulnerables
4. **Alertas proactivas** — cross-reference transacciones del usuario con base CMF de alertas
5. **Dashboard CISO para cooperativas** — agrega incidentes de pequeñas instituciones
6. **Trace de estafa** — cuando eres víctima, te ayuda a reconstruir qué pasó y dónde reclamar

## Criterios de éxito para este track

- **Impacto medible** — ¿cuántas personas proteges? ¿cuánto fraude previenes?
- **Accesibilidad** — ¿lo puede usar un adulto mayor sin problema?
- **Integración con datos reales** — no inventes, conecta con CMF / CSIRT
- **Compliance** — respeta privacidad, no recolectes más de lo necesario

## Stakeholders

- **CMF** — regulador principal, quiere reducir estadísticas de fraude
- **Bancos tradicionales** — compradores potenciales (B2B)
- **ONGs adulto mayor** — aliados para distribución
- **CSIRT nacional** — puede compartir intel
- **Asociación de Bancos (ABIF)** — gremio fintech/bancos

## Alguien ya hizo algo parecido

- **TrueCaller** — bloquea llamadas spam global
- **Token CMF** — alertas automáticas Chile (limitado)
- **Banca Fácil CMF** — portal educativo CMF
- **HaloSafe** — monitoreo familiar adultos mayores

Lo que les falta: **IA generativa aplicada en tiempo real** al flujo de la persona. Ahí está tu oportunidad.

## Stack recomendado

- **Speech-to-text:** Whisper (OpenAI) o Deepgram
- **Análisis:** Claude para detectar intent + patrones de estafa
- **Cross-reference:** pgvector con base CMF de alertas + PhishTank
- **Frontend:** app móvil (React Native) o PWA
- **Notificaciones:** Firebase Cloud Messaging o Expo

> 72 horas es el tiempo promedio en que una víctima detecta que fue atacada. Construye algo que lo reduzca a 0.