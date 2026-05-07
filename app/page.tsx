import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  FileText,
  Github,
  MessageCircle,
  ScrollText,
  ShieldCheck,
  Sparkles,
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
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-hero-radial" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
          {/* Left: copy */}
          <div className="flex flex-col">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              CLAUDE IMPACT LAB CHILE 2026 · TRACK 01
            </span>

            <h1 className="font-heading text-[2.5rem] font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Formaliza tu empresa en Chile,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                con la ley citada
              </span>{" "}
              y{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                el formulario listo
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
              Chispla es un agente conversacional en{" "}
              <strong className="text-slate-900">WhatsApp</strong>. Cita la
              fuente oficial. No alucina regulación. Te entrega el F4415 del
              SII <em>pre-rellenado</em> con tus datos. Sin signup, sin app
              que descargar.
            </p>

            {/* CTA cluster */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/20 ring-1 ring-orange-600/20 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-orange-600/30 focus-visible:outline-blue-600"
              >
                <MessageCircle className="h-5 w-5" />
                Abrir WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <div className="flex flex-col text-sm">
                <span className="text-slate-500">o escribe a</span>
                <span className="font-mono font-semibold text-slate-900">
                  {WHATSAPP_DISPLAY}
                </span>
              </div>
            </div>

            {/* Stats inline */}
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  En Chile
                </dt>
                <dd className="mt-1 font-heading text-2xl font-bold text-slate-900">
                  ≈2M
                </dd>
                <dd className="text-xs text-slate-600">
                  microemprendedores
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Operan
                </dt>
                <dd className="mt-1 font-heading text-2xl font-bold text-orange-600">
                  54,2%
                </dd>
                <dd className="text-xs text-slate-600">informalmente</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Fuente
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://www.ine.gob.cl/eme"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
                  >
                    INE EME 8
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </dd>
                <dd className="text-xs text-slate-600">dic 2024</dd>
              </div>
            </dl>
          </div>

          {/* Right: QR card */}
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5">
              <QrButton url={WHATSAPP_URL} size={220} />
              <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800">
                <span className="relative inline-block h-2 w-2 rounded-full bg-emerald-500">
                  <span className="live-dot absolute inset-0 text-emerald-500" />
                </span>
                Agente activo
              </div>
            </div>

            <p className="max-w-[240px] text-center text-xs text-slate-500">
              Apunta la cámara al QR para abrir la conversación en WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Construido sobre datos oficiales del Estado
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { name: "CMF", full: "Comisión para el Mercado Financiero" },
              { name: "SII", full: "Servicio de Impuestos Internos" },
              { name: "BCN", full: "Biblioteca del Congreso Nacional" },
              { name: "SERNAC", full: "Servicio Nacional del Consumidor" },
              { name: "INE", full: "Instituto Nacional de Estadísticas" },
            ].map((inst) => (
              <span
                key={inst.name}
                className="font-heading text-lg font-bold tracking-tight text-slate-700"
                title={inst.full}
              >
                {inst.name}
              </span>
            ))}
            <span className="text-slate-300">·</span>
            <span className="font-heading text-sm font-medium text-slate-600">
              powered by{" "}
              <span className="text-slate-900">Claude</span>
            </span>
          </div>
        </div>
      </section>

      {/* ─── CONVERSACIONES TIPO ───────────────────────────── */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              En vivo en WhatsApp
            </span>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              ¿Qué le puedes preguntar?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Tres conversaciones reales que Chispla resuelve hoy. Cada
              respuesta cita la fuente oficial y entrega lo que el usuario
              necesita.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {CONVERSACIONES.map((conv, idx) => (
              <article
                key={conv.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-900/10"
              >
                {/* WhatsApp-style header */}
                <header className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/50 px-5 py-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-base">
                    <span aria-hidden>{conv.emoji}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900">
                      Chispla
                    </p>
                    <p className="truncate text-[11px] text-slate-500">
                      {conv.perfil}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </header>

                {/* Chat body */}
                <div
                  className="relative flex-1 space-y-3 px-4 py-5"
                  style={{ backgroundColor: "var(--color-wa-bg)" }}
                >
                  {/* User message (sent · green bubble) */}
                  <div className="flex justify-end">
                    <div
                      className="max-w-[88%] rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-[13px] leading-relaxed text-slate-900 shadow-sm"
                      style={{
                        backgroundColor: "var(--color-wa-bubble-sent)",
                      }}
                    >
                      {conv.pregunta}
                      <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500">
                        <span>18:22</span>
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      </div>
                    </div>
                  </div>

                  {/* Chispla response (received · white bubble) */}
                  <div className="flex justify-start">
                    <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-slate-900 shadow-sm">
                      {conv.respuesta}

                      <a
                        href={conv.cita.url}
                        target="_blank"
                        rel="noopener"
                        className="mt-2.5 flex items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-2.5 py-1.5 text-[10.5px] font-medium text-teal-800 transition hover:border-teal-300 hover:bg-teal-100"
                      >
                        <CheckCircle2 className="h-3 w-3 flex-none" />
                        <span className="flex-1">
                          Fuente verificada · {conv.cita.texto}
                        </span>
                        <ExternalLink className="h-3 w-3 flex-none" />
                      </a>

                      {conv.entrega && (
                        <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-2.5 py-1.5 text-[10.5px] font-semibold text-orange-800">
                          <FileText className="h-3 w-3 flex-none" />
                          <span className="flex-1">
                            Adjunto · {conv.entrega}
                          </span>
                        </div>
                      )}

                      <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-500">
                        <span>18:23</span>
                      </div>
                    </div>
                  </div>

                  {/* Typing indicator (subtle, signals "live") */}
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2.5 shadow-sm">
                      <div className="flex items-center gap-1">
                        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ANTHROPIC FSI FRAMING ─────────────────────────── */}
      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Por qué este patrón
            </span>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Claude for Financial Services,
              <br />
              <span className="text-blue-700">aplicado al ciudadano</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Chispla aplica los tres pilares que Anthropic publica para
              Claude en servicios financieros — pero llevados a la escala
              del microemprendedor latino.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Pilar
              icon={<CheckCircle2 className="h-6 w-6" />}
              titulo="Source attribution"
              descripcion="Cada respuesta del agente cita la URL oficial. Una herramienta verify_citation valida que el pasaje exista antes de responder."
            />
            <Pilar
              icon={<Cpu className="h-6 w-6" />}
              titulo="Agentic workflows"
              descripcion="Tool use sobre nuestro MCP Ciudadano propio. Visible en consola Anthropic en tiempo real durante el demo del pitch."
            />
            <Pilar
              icon={<ShieldCheck className="h-6 w-6" />}
              titulo="Compliance-ready"
              descripcion="Cumple Ley 19.628 hoy y arquitectura conforme a Ley 21.719 cuando entre en vigencia el 1-dic-2026. PII cifrada en reposo."
            />
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
            <p className="text-sm text-slate-600">
              Framework publicado por Anthropic ·{" "}
              <a
                href="https://claude.com/solutions/financial-services"
                target="_blank"
                rel="noopener"
                className="font-medium text-blue-700 underline-offset-2 hover:underline"
              >
                claude.com/solutions/financial-services
              </a>
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Usado por Citadel · BNY Mellon · Citi · Block · Coinbase ·
              Walleye Capital
            </p>
          </div>
        </div>
      </section>

      {/* ─── DATOS OFICIALES ───────────────────────────────── */}
      <section className="border-b border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Cero alucinación regulatoria
            </span>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Datos oficiales que usa
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Chispla nunca responde de memoria. Cada cita lleva URL oficial,
              auditable en un click. Si no hay fuente verificada, lo dice.
            </p>
          </div>

          <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-100">
            {FUENTES.map((f) => (
              <li
                key={f.url}
                className="group flex flex-col gap-3 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:gap-4"
              >
                <span
                  className={`inline-flex w-20 items-center justify-center rounded-lg border px-2.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider ${institutionStyle(
                    f.institucion
                  )}`}
                >
                  {f.institucion}
                </span>
                <span className="flex-1 text-sm text-slate-800">
                  {f.recurso}
                </span>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-800 transition group-hover:border-teal-300 group-hover:bg-teal-100"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verificada
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CÓMO FUNCIONA ─────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Cuatro pasos
            </span>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Cómo funciona
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Sin signup. Sin app que descargar. WhatsApp ya lo tienes en
              tu teléfono.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-4">
            {[
              {
                n: 1,
                icon: <Sparkles className="h-5 w-5" />,
                t: "Escaneas el QR",
                d: "Se abre tu WhatsApp con la conversación lista para empezar.",
              },
              {
                n: 2,
                icon: <MessageCircle className="h-5 w-5" />,
                t: "Cuentas tu situación",
                d: "Lenguaje normal — el agente clasifica tu caso y pregunta lo justo.",
              },
              {
                n: 3,
                icon: <ScrollText className="h-5 w-5" />,
                t: "Recibes pasos + leyes",
                d: "Cada respuesta cita la URL oficial. Sin abogado, sin alucinaciones.",
              },
              {
                n: 4,
                icon: <FileText className="h-5 w-5" />,
                t: "Te llega el F4415",
                d: "PDF pre-rellenado con tus datos, listo para firmar y presentar.",
              },
            ].map((p, idx) => (
              <li
                key={p.n}
                className={`relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  idx < 3 ? "md:step-line" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    {p.icon}
                  </span>
                  <span className="font-heading text-3xl font-bold text-slate-200">
                    {String(p.n).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {p.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── DISCLAIMER LEGAL ──────────────────────────────── */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-red-200 bg-gradient-to-br from-red-50/60 to-white">
            <div className="flex items-start gap-4 p-6 sm:p-7">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-red-100 text-red-700">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-slate-900">
                  No es asesoría legal ni tributaria
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                  Chispla traduce regulación pública chilena con su fuente.{" "}
                  <strong className="text-slate-900">
                    Para tu caso específico, valida con un contador o
                    abogado.
                  </strong>{" "}
                  Los formularios PDF que entregamos son borradores no
                  oficiales — la presentación se hace en{" "}
                  <a
                    href="https://www.sii.cl"
                    target="_blank"
                    rel="noopener"
                    className="font-medium text-blue-700 underline-offset-2 hover:underline"
                  >
                    Mi SII online
                  </a>{" "}
                  o en la municipalidad correspondiente. Cumplimos Ley
                  19.628 vigente y nuestra arquitectura está lista para
                  Ley 21.719 (1-dic-2026).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EQUIPO ────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Equipo Chispla
            </span>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Quién está detrás
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Tres builders. Track 01 · Inclusión Financiera. Construido
              en 48 horas durante el Claude Impact Lab Chile 2026.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {EQUIPO.map((p, idx) => {
              const initials = p.nombre
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("");
              const gradients = [
                "from-blue-400 to-blue-600",
                "from-orange-400 to-orange-600",
                "from-teal-500 to-teal-700",
              ];
              return (
                <article
                  key={p.nombre}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[idx]} font-heading text-lg font-bold text-white shadow-md`}
                  >
                    {initials}
                  </div>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-slate-900 py-14 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-heading text-2xl font-bold text-white">
              Chispla
            </p>
            <p className="mt-1.5 text-sm text-slate-400">
              Track 01 · Inclusión Financiera · Claude Impact Lab Chile 2026
            </p>
            <p className="mt-3 max-w-md text-xs text-slate-500">
              Agente conversacional WhatsApp con datos oficiales del Estado.
              MCP Ciudadano open-source post-Demo Day.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
            <a
              href="https://github.com/domusalbertoni-del/Chispla-Hackathon"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-white"
            >
              <Github className="h-4 w-4" />
              MCP en GitHub
            </a>
            <a
              href="/desarrolladores"
              className="text-slate-300 transition hover:text-white"
            >
              Desarrolladores
            </a>
            <a
              href="/privacidad"
              className="text-slate-300 transition hover:text-white"
            >
              Privacidad
            </a>
            <a
              href="/terminos"
              className="text-slate-300 transition hover:text-white"
            >
              Términos
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function Pilar({
  icon,
  titulo,
  descripcion,
}: {
  icon: React.ReactNode;
  titulo: string;
  descripcion: string;
}) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </span>
      <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-slate-900">
        {titulo}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">
        {descripcion}
      </p>
    </article>
  );
}

function institutionStyle(institucion: string): string {
  switch (institucion) {
    case "CMF":
      return "border-blue-200 bg-blue-50 text-blue-800";
    case "SII":
      return "border-purple-200 bg-purple-50 text-purple-800";
    case "BCN":
      return "border-amber-200 bg-amber-50 text-amber-800";
    case "SERNAC":
      return "border-rose-200 bg-rose-50 text-rose-800";
    case "INE":
      return "border-emerald-200 bg-emerald-50 text-emerald-800";
    default:
      return "border-slate-200 bg-slate-50 text-slate-700";
  }
}
