# Inclusión Financiera

_IA para que cualquier persona entienda sus derechos financieros sin necesitar un abogado._

## El problema

Chile aprobó una de las leyes fintech más avanzadas de Latinoamérica (Ley 21.521). 5 millones de personas podrían beneficiarse. La mayoría no puede entenderla porque existe como PDFs densos en portales desconectados del gobierno.

La inclusión financiera no es solo "tener cuenta bancaria" — es **entender qué derechos tienes** y **saber cómo ejercerlos**.

## ¿A quién impacta?

- **Microempresarios (+1.8M en Chile)** — <30% entiende sus obligaciones tributarias digitales
- **Adultos mayores** — tienen productos financieros que no entienden
- **Jóvenes** — reciben ofertas fintech sin saber las trampas
- **Inmigrantes** — sistema financiero chileno opaco, sin explicación en otros idiomas
- **Mujeres jefas de hogar** — barreras adicionales para acceso a crédito

## Datos disponibles

- **CMF — Registros de instituciones** (quién está autorizado)
- **CMF — Educación financiera** (https://www.cmfchile.cl/educa)
- **SERNAC — Derechos y reclamos**
- **SII — Obligaciones tributarias** (normativa + tutoriales)
- **Biblioteca del Congreso Nacional** — textos legales
- **Banco Central** — indicadores (endeudamiento, morosidad)
- **INE** — ingresos por comuna, ocupación, etnia
- **CASEN** — encuesta socioeconómica nacional

## Marco legal — más importantes

- **Ley 21.521** — Fintech (Open Finance, sandbox, protección cliente)
- **Ley 19.496** — Derechos del consumidor (base)
- **Ley 20.555** — SERNAC Financiero (protección reforzada)
- **Circular CMF 2.345** — Transparencia en cobros

Ver detalle completo en sección **Legal Chile**.

## Ideas de solución

1. **Traductor legal → humano** — pegas un contrato fintech, te explica punto por punto qué implica, qué es rojo/amarillo/verde
2. **Simulador de productos** — "¿qué pasa si saco este crédito?" — compara ofertas reales con TU situación
3. **Derechos-bot por WhatsApp** — tienes una duda ("me cobraron mal"), te guía paso a paso a reclamar
4. **Comparador Open Finance** — usa tu info real para encontrar la mejor oferta
5. **Dashboard "tu salud financiera"** — conecta tus cuentas (Open Finance), te muestra tu situación y qué mejorar
6. **Juego educativo adulto mayor** — historias con elecciones, aprendes jugando
7. **Guía tributaria digital para microemprendedores** — qué debes hacer según tu caso

## Criterios de éxito para este track

- **Lenguaje comprensible** — mide con tests de usuario real, no con expertos
- **Acción, no solo info** — debe llevar a algo concreto (ej. generar reclamo, cambiar banco)
- **Datos reales** — conecta con CMF, SII, SERNAC
- **Inclusivo** — piensa en analfabetismo digital, smartphones viejos, conexión lenta

## Stakeholders

- **CMF** — interesado en reducir brecha
- **SERNAC** — reduce reclamos si la gente entiende primero
- **Ministerio de Hacienda** — política de inclusión financiera
- **ONGs** — Fundación ChileMujeres, ASECH, FINCA
- **Cooperativas de ahorro** (Coopeuch, Oriencoop) — buscan inclusión
- **Educación formal** — Junaeb, Mineduc

## Alguien ya hizo algo parecido

- **Destacame** — score crediticio alternativo
- **Fintual educación financiera** — contenido gratuito
- **ABIF cursos** — banca tradicional
- **CMF Educa** — portal oficial

Lo que les falta: **conversacional + accionable + personalizado**. Ahí está tu oportunidad.

## Stack recomendado

- **Claude API** — traducción legal → lenguaje claro
- **RAG con pgvector** — busca en la ley basado en contexto del usuario
- **Frontend:** WhatsApp Business API (donde ya están) o PWA super liviana
- **Datos:** scrapping + API CMF + SII
- **Formato output:** cards, no párrafos largos

## Idea ganchera

> **"Pega cualquier contrato y entiende en 30 segundos"** — subes una foto del contrato, la app extrae el texto, lo analiza con Claude, te devuelve un resumen con ⚠️ en puntos de riesgo y 💡 en derechos que tienes.