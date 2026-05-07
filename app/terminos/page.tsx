import Link from "next/link";

export const metadata = {
  title: "Términos de uso — Chispla",
  description:
    "Términos de uso de Chispla. No es asesoría legal ni tributaria.",
  robots: { index: true, follow: false },
};

export default function TerminosPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <Link href="/" className="text-sm text-blue-700 hover:underline">
        ← Volver a la portada
      </Link>
      <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-slate-900">
        Términos de uso
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Última actualización: 6 de mayo de 2026
      </p>

      <div className="prose prose-slate mt-8 max-w-none">
        <h2>Qué es Chispla</h2>
        <p>
          Chispla es un agente conversacional informativo que traduce
          regulación pública chilena (CMF, SII, BCN, SERNAC) a lenguaje
          simple, citando la fuente oficial en cada respuesta. Vive en
          WhatsApp.
        </p>

        <h2>No es asesoría legal ni tributaria</h2>
        <p>
          <strong>
            Chispla no reemplaza a un abogado, contador o asesor profesional.
          </strong>{" "}
          Es una capa de orientación informativa. Para tu caso específico,
          siempre valida con un profesional certificado.
        </p>

        <h2>Los formularios que entregamos</h2>
        <p>
          Los PDFs pre-rellenados son <strong>borradores no oficiales</strong>{" "}
          generados a partir de los datos que tú nos compartes. Llevan marca
          de agua de borrador. La presentación oficial se hace siempre en los
          canales oficiales — Mi SII online, sitio de la municipalidad, etc.
          Chispla no presenta trámites por ti.
        </p>

        <h2>Limitaciones de responsabilidad</h2>
        <ul>
          <li>
            La regulación cambia. Aunque actualizamos diariamente, puede haber
            ajustes que aún no estén reflejados.
          </li>
          <li>
            Cualquier decisión empresarial, tributaria o legal que tomes
            basada en lo que conversas con Chispla es tu responsabilidad.
          </li>
          <li>
            No nos hacemos responsables por daños derivados de un mal uso del
            servicio o por presentar trámites incorrectos.
          </li>
        </ul>

        <h2>Uso responsable</h2>
        <ul>
          <li>
            No compartas tu Clave Única con Chispla. Si alguna vez te la
            pedimos, no somos nosotros.
          </li>
          <li>
            No uses Chispla para automatizar trámites que requieran tu firma
            digital personal.
          </li>
          <li>
            No reenvíes tu link personal a terceros sin tu consentimiento.
          </li>
        </ul>

        <h2>Propiedad intelectual</h2>
        <p>
          El código del MCP Ciudadano se libera como software de código
          abierto bajo licencia MIT después del Demo Day del 7 de mayo de
          2026.
        </p>

        <h2>Marco legal aplicable</h2>
        <p>
          Estos términos se rigen por la legislación chilena. Las
          controversias se resuelven en los tribunales ordinarios de
          Santiago.
        </p>
      </div>
    </article>
  );
}
