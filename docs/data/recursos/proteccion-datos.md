# Protección de Datos

_IA para empoderar a las personas sobre el uso de sus datos financieros._

## El problema

Tus datos financieros te pertenecen — pero en la práctica, no sabes qué se hace con ellos. Los términos y condiciones tienen 40 páginas, cambian sin aviso, y consentimiento se da por clic.

La Ley 19.628 existe desde 1999. La nueva **Ley 21.719 de Protección de Datos Personales** fue promulgada en 2024 y entra en plena vigencia en diciembre de 2026 — crea la Agencia de Protección de Datos Personales y robustece los derechos ARCO (acceso, rectificación, cancelación, oposición) + portabilidad. Pero hay una brecha enorme entre lo que la ley dice y lo que el ciudadano entiende o puede accionar.

Open Finance (NCG 502) permite portar tus datos entre instituciones. La mayoría no sabe que existe.

## ¿A quién impacta?

- **Toda persona con banco / fintech** — es decir, casi todos
- **Trabajadores informales** — sus patrones de consumo se usan para denegarles crédito
- **Empresas que manejan datos sensibles** — necesitan compliance pero no tienen recursos
- **Clientes de telefónicas/fintechs** — pagan por servicios que venden sus datos

## Datos disponibles

- **CMF** — registro de instituciones autorizadas a manejar datos financieros
- **Transparencia Activa** — qué organismos públicos tratan tus datos
- **Autoridad de Protección Datos (futura)** — la Ley 21.719 la crea
- **SERNAC** — reclamos sobre mal uso de datos por empresas
- **NCG 502 CMF** — cómo funciona Open Finance en Chile

## Marco legal

- **Ley 19.628 (1999)** — base legal vigente, obsoleta
- **Ley 21.719** — proyecto de nueva ley (más robusta, multas altas)
- **Constitución Art. 19 N°4** — derecho a la vida privada
- **Ley 21.521 (Fintech)** — reglas específicas datos financieros
- **GDPR (referencia)** — Europa es el estándar mundial

**Principios clave:**
- Consentimiento informado
- Finalidad específica
- Proporcionalidad
- Calidad y veracidad
- Derechos ARCO: **A**cceso, **R**ectificación, **C**ancelación, **O**posición

## Ideas de solución

1. **Asistente legal para consentimientos** — lee los T&C por ti, te explica qué estás aceptando, qué riesgos hay, en qué puedes decir no
2. **Dashboard de "tus datos"** — en un solo lugar ves qué empresas tienen tus datos y qué pueden hacer con ellos
3. **Generador de solicitudes ARCO** — un wizard que te genera la carta formal para ejercer tus derechos
4. **Auditor de Open Finance** — compara productos financieros usando TU info real (portabilidad)
5. **Detector de "letra chica" cambiada** — monitorea cambios en T&C de servicios que usas
6. **Compliance kit para pymes** — plantillas, checklists, simulaciones para ayudar a empresas chicas a cumplir

## Criterios de éxito para este track

- **Educa sin asustar** — la gente se pierde con términos legales
- **Genera acción concreta** — no solo informa, ayuda a hacer algo
- **Respeta los datos que procesa** — irónico construir esto sin cumplir la ley
- **Accesible** — chilenos promedio, no solo abogados

## Stakeholders

- **SERNAC** — interesado en reducir reclamos
- **Futura Autoridad de Protección de Datos** (2026+)
- **Consejo para la Transparencia**
- **ONGs Derechos Digitales** (Derechos Digitales, Datos Protegidos)
- **Gremios de pymes** — necesitan compliance simple

## Alguien ya hizo algo parecido

- **OneTrust** — compliance empresarial (global, caro)
- **Consent-o-matic** — extension browser (open source)
- **Mine** — dashboard de dónde tienen tus datos (consumer)

Lo que les falta: **contexto chileno + lenguaje claro + integración fintech**. Ahí está tu oportunidad.

## Stack recomendado

- **NLP:** Claude para parsear T&C y extraer puntos clave
- **Base legal:** markdown con artículos relevantes (lo que ya tienes aquí)
- **Frontend:** Next.js + Tailwind (form wizard)
- **Storage:** Supabase para guardar cartas generadas, historial de consentimientos
- **Auth:** magic link (no requieras creación de cuenta compleja)
- **Extensión browser:** MV3 para detectar T&C al navegar

## Idea ganchera

> **"Descubre qué saben de ti 20 empresas en 2 minutos"** — pega tu RUT, la app consulta datos públicos y te muestra un dashboard de quién tiene qué datos tuyos y cómo recuperarlos.