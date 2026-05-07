import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Github,
  MessageCircle,
  Quote,
  ShieldCheck,
} from "lucide-react";

import { QrButton } from "./components/QrButton";
import {
  CONVERSACIONES,
  EQUIPO,
  FUENTES,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/data";

export default function Home() {
  return (
    <main id="contenido">
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              CLAUDE IMPACT LAB CHILE 2026 · TRACK 01
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Formaliza tu empresa en Chile,{" "}
              <span className="text-blue-600">con la ley citada</span> y{" "}
              <span className="text-blue-600">el formulario listo</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
              Chispla es un agente conversacional en{" "}
              <strong className="text-slate-900">WhatsApp</strong>. Cita la
              fuente oficial. No alucina regulación. Te entrega el F4415 del
              SII <em>pre-rellenado</em> con tus datos. Sin signup, sin app que
              descargar.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg focus-visible:outline-blue-600"
              >
                <MessageCircle className="h-5 w-5" />
                Abrir WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="font-mono text-sm text-slate-600">
                o escribe a{" "}
                <strong className="text-slate-900">{WHATSAPP_DISPLAY}</strong>
              </span>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              <strong className="text-slate-700">2 millones</strong> de
              microemprendedores en Chile · 54,2% son informales ·{" "}
              <a
                href="https://www.ine.gob.cl/eme"
                target="_blank"
                rel="noopener"
                className="underline decoration-slate-400 hover:text-blue-600"
              >
                INE EME 8 dic 2024
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
            <QrButton url={WHATSAPP_URL} size={180} />
            <span className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">
              Escanea para abrir<br />en WhatsApp
            </span>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-600">
            Construido sobre datos oficiales del Estado · datos en vivo de{" "}
            <span className="text-slate-900">CMF</span> ·{" "}
            <span className="text-slate-900">SII</span> ·{" "}
            <span className="text-slate-900">BCN</span> ·{" "}
            <span className="text-slate-900">SERNAC</span> · powered by{" "}
            <span className="text-slate-900">Claude</span>
          </p>
        </div>
      </section>

      {/* ─── CONVERSACIONES TIPO ───────────────────────────── */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              ¿Qué le puedes preguntar?
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Tres conversaciones reales que Chispla resuelve hoy. Cada
              respuesta cita la fuente y entrega lo que el usuario necesita.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {CONVERSACIONES.map((conv) => (
              <article
                key={conv.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <header className="flex items-center gap-3 border-b border-slate-100 p-5">
                  <span className="text-2xl" aria-hidden>
                    {conv.emoji}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {conv.perfil}
                    </p>
                  </div>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  {/* mensaje del usuario */}
                  <div className="self-end max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-100 px-4 py-3 text-sm text-slate-900">
                    {conv.pregunta}
                  </div>

                  {/* mensaje de Chispla */}
                  <div className="self-start max-w-[90%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm text-slate-900">
                    {conv.respuesta}
                    <a
                      href={conv.cita.url}
                      target="_blank"
                      rel="noopener"
                      className="mt-3 flex items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-2.5 py-1.5 text-[11px] font-medium text-teal-800 hover:bg-teal-100"
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      Fuente verificada · {conv.cita.texto}
                      <ExternalLink className="ml-auto h-3 w-3" />
                    </a>
                    {conv.entrega && (
                      <div className="mt-2 flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-2.5 py-1.5 text-[11px] font-semibold text-orange-800">
                        <FileText className="h-3 w-3" />
                        Adjunto · {conv.entrega}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ANTHROPIC FSI FRAMING ─────────────────────────── */}
      <section className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-blue-700">
              Por qué este patrón
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Claude for Financial Services, aplicado al ciudadano
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Chispla aplica los tres pilares que Anthropic publica para
              Claude en servicios financieros — pero llevados a la escala del
              microemprendedor latino.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Pilar
              titulo="Source attribution"
              descripcion="Cada respuesta del agente cita la URL oficial. Una herramienta verify_citation valida que el pasaje exista antes de responder."
            />
            <Pilar
              titulo="Agentic workflows"
              descripcion="Tool use sobre nuestro MCP Ciudadano propio. Visible en consola Anthropic en tiempo real durante el demo del pitch."
            />
            <Pilar
              titulo="Compliance-ready"
              descripcion="Cumple Ley 19.628 hoy y arquitectura conforme a Ley 21.719 cuando entre en vigencia el 1-dic-2026. PII cifrada en reposo."
            />
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            Framework publicado por Anthropic en{" "}
            <a
              href="https://claude.com/solutions/financial-services"
              target="_blank"
              rel="noopener"
              className="underline hover:text-blue-600"
            >
              claude.com/solutions/financial-services
            </a>{" "}
            · usado por Citadel, BNY Mellon, Citi, Block, Coinbase
          </p>
        </div>
      </section>

      {/* ─── DATOS OFICIALES ───────────────────────────────── */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Datos oficiales que usa
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Chispla nunca responde de memoria. Cada cita lleva URL oficial,
              auditeable en un click. Si no hay fuente verificada, lo dice.
            </p>
          </div>

          <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
            {FUENTES.map((f) => (
              <li
                key={f.url}
                className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="inline-flex w-20 items-center justify-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                  {f.institucion}
                </span>
                <span className="flex-1 text-sm text-slate-800">
                  {f.recurso}
                </span>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-800 hover:bg-teal-100"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Fuente verificada
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CÓMO FUNCIONA ─────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Cómo funciona
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Cuatro pasos. Sin signup. Sin descargar nada. WhatsApp ya lo
              tienes en tu teléfono.
            </p>
          </div>

          <ol className="grid gap-6 md:grid-cols-4">
            {[
              {
                n: 1,
                t: "Escaneas el QR",
                d: "Se abre tu WhatsApp con la conversación lista para empezar.",
              },
              {
                n: 2,
                t: "Cuentas tu situación",
                d: "Lenguaje normal — el agente clasifica tu caso y pregunta lo justo.",
              },
              {
                n: 3,
                t: "Recibes pasos + leyes",
                d: "Cada respuesta cita la URL oficial. Sin abogado, sin alucinaciones.",
              },
              {
                n: 4,
                t: "Te llega el F4415 listo",
                d: "PDF pre-rellenado con tus datos, listo para firmar y presentar.",
              },
            ].map((p) => (
              <li
                key={p.n}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="font-heading text-3xl font-bold text-blue-600">
                  {String(p.n).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {p.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {p.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── DISCLAIMER LEGAL ──────────────────────────────── */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border-l-4 border-red-600 bg-red-50/50 p-6">
            <div className="flex items-start gap-3">
              <Quote className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden />
              <div>
                <h3 className="font-heading text-lg font-semibold text-slate-900">
                  No es asesoría legal ni tributaria
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Chispla traduce regulación pública chilena con su fuente.
                  <strong className="text-slate-900">
                    {" "}
                    Para tu caso específico, valida con un contador o
                    abogado.
                  </strong>{" "}
                  Los formularios PDF que entregamos son borradores no
                  oficiales — la presentación se hace en{" "}
                  <a
                    href="https://www.sii.cl"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-blue-600"
                  >
                    Mi SII online
                  </a>{" "}
                  o en la municipalidad correspondiente. Cumplimos Ley
                  19.628 vigente y nuestra arquitectura está lista para Ley
                  21.719 (vigencia 1-dic-2026).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EQUIPO ────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Quién está detrás
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Tres builders. Track 01 · Inclusión Financiera. Construido en
              48 horas durante el Claude Impact Lab Chile 2026.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {EQUIPO.map((p) => (
              <article
                key={p.nombre}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-heading text-xl font-semibold text-slate-900">
                  {p.nombre}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-700">
                  {p.rol}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {p.nota}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-slate-900 py-12 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-heading text-xl font-bold text-white">
              Chispla
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Track 01 · Inclusión Financiera · Claude Impact Lab Chile 2026
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="https://github.com/domusalbertoni-del/Chispla-Hackathon"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"
            >
              <Github className="h-4 w-4" />
              MCP en GitHub
            </a>
            <a href="/privacidad" className="text-slate-300 hover:text-white">
              Privacidad
            </a>
            <a href="/terminos" className="text-slate-300 hover:text-white">
              Términos
            </a>
            <a
              href="/desarrolladores"
              className="text-slate-300 hover:text-white"
            >
              Desarrolladores
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function Pilar({ titulo, descripcion }: { titulo: string; descripcion: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="font-heading text-lg font-semibold text-slate-900">
        {titulo}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">
        {descripcion}
      </p>
    </article>
  );
}
