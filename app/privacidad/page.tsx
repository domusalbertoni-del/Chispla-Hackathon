import Link from "next/link";

export const metadata = {
  title: "Privacidad — Chispla",
  description:
    "Política de privacidad de Chispla. Cumple Ley 19.628 vigente y arquitectura conforme a Ley 21.719 (vigencia 1-dic-2026).",
  robots: { index: true, follow: false },
};

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <Link
        href="/"
        className="text-sm text-blue-700 hover:underline"
      >
        ← Volver a la portada
      </Link>
      <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-slate-900">
        Política de privacidad
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Última actualización: 6 de mayo de 2026
      </p>

      <div className="prose prose-slate mt-8 max-w-none">
        <h2>Quién es responsable de tus datos</h2>
        <p>
          El equipo Chispla, formado por Luca Marrella, Lucas Lobos y Eduardo
          Sánchez, construido durante el Claude Impact Lab Chile 2026 (Track
          01 — Inclusión Financiera).
        </p>

        <h2>Qué datos recolectamos</h2>
        <ul>
          <li>
            <strong>Número de WhatsApp</strong> — necesario para que el agente
            te responda. Cifrado en reposo con pgcrypto.
          </li>
          <li>
            <strong>Contenido de la conversación</strong> — para mantener el
            contexto durante tu sesión.
          </li>
          <li>
            <strong>RUT y datos de tu empresa</strong> — solo si tú los
            compartes para pre-rellenar formularios. Cifrados en reposo.
          </li>
        </ul>

        <h2>Qué NO recolectamos</h2>
        <ul>
          <li>
            <strong>Tu Clave Única.</strong> Jamás la pediremos. Si alguna vez
            te la solicitamos, no somos nosotros.
          </li>
          <li>Datos bancarios o de tarjetas de crédito.</li>
          <li>Tracking pixels de terceros, cookies de marketing, analytics
            invasivos.</li>
        </ul>

        <h2>Para qué los usamos</h2>
        <p>
          Únicamente para responderte con orientación regulatoria personalizada
          y entregarte los formularios pre-rellenados. No vendemos tus datos.
          No los compartimos con terceros salvo cuando tú lo decides
          explícitamente (por ejemplo, al compartir tu conversación con tu
          contador).
        </p>

        <h2>Cuánto tiempo los guardamos</h2>
        <p>
          90 días desde tu última interacción. Después se borran
          automáticamente. Puedes pedir el borrado anticipado escribiéndonos
          por el mismo WhatsApp.
        </p>

        <h2>Tus derechos (Ley 19.628 / próxima Ley 21.719)</h2>
        <ul>
          <li>
            <strong>Acceso:</strong> pedirnos qué datos tenemos sobre ti.
          </li>
          <li>
            <strong>Rectificación:</strong> corregir datos incorrectos.
          </li>
          <li>
            <strong>Cancelación:</strong> que eliminemos tus datos.
          </li>
          <li>
            <strong>Oposición:</strong> que dejemos de procesarlos.
          </li>
          <li>
            <strong>Portabilidad</strong> (Ley 21.719): exportar todos tus
            datos en formato estándar.
          </li>
        </ul>

        <h2>Marco legal aplicable</h2>
        <p>
          Cumplimos la{" "}
          <a
            href="https://www.bcn.cl/leychile/navegar?idNorma=141599"
            target="_blank"
            rel="noopener"
          >
            Ley 19.628 sobre Protección de la Vida Privada
          </a>
          , vigente hoy. Nuestra arquitectura ya está conforme con la{" "}
          <a
            href="https://www.bcn.cl/leychile/navegar?idNorma=1209272"
            target="_blank"
            rel="noopener"
          >
            Ley 21.719 sobre Protección de Datos Personales
          </a>
          , que entra en vigencia el 1 de diciembre de 2026.
        </p>

        <h2>Contacto</h2>
        <p>
          Para cualquier consulta sobre tus datos, escríbenos por el mismo
          WhatsApp donde conversas con Chispla.
        </p>
      </div>
    </article>
  );
}
