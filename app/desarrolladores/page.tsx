import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export const metadata = {
  title: "MCP Ciudadano — Chispla para desarrolladores",
  description:
    "Conecta tu agente IA al ecosistema regulatorio chileno. MCP Ciudadano open-source con 4 tools: search_normativa, get_pasos_formalizacion, get_ley_facil, verify_citation.",
};

export default function DesarrolladoresPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <Link href="/" className="text-sm text-blue-700 hover:underline">
        ← Volver a la portada
      </Link>

      <header className="mt-6">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-700">
          Para desarrolladores
        </span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          MCP Ciudadano de Chispla
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          Conecta tu agente IA al ecosistema regulatorio chileno. Es la capa
          de infraestructura que cualquier institución (Caja Los Andes, Clay,
          Coopeuch, ASECH) puede plugar en Claude Desktop, Cursor o su propio
          agente — sin reconstruir la capa de datos.
        </p>
      </header>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-900">
          Quick start (Claude Desktop)
        </h2>
        <p className="mt-2 text-slate-700">
          Agrega esto a tu config de Claude Desktop (
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            ~/Library/Application Support/Claude/claude_desktop_config.json
          </code>
          ):
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-slate-100">
          <code>{`{
  "mcpServers": {
    "chispla": {
      "url": "https://mcp.chispla.app"
    }
  }
}`}</code>
        </pre>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-900">
          Tools disponibles
        </h2>
        <ul className="mt-4 space-y-4">
          {[
            {
              n: "search_normativa",
              d: "pgvector semantic search sobre CMF / SII / SERNAC con chunks citados.",
            },
            {
              n: "get_pasos_formalizacion",
              d: "Checklist estructurado de pasos cruzados SII + municipio + CMF para un perfil dado.",
            },
            {
              n: "get_ley_facil",
              d: "Proxy a la API BCN Ley Fácil — explicaciones oficiales en lenguaje simple.",
            },
            {
              n: "verify_citation",
              d: "Fetch de la URL oficial y confirmación de que el pasaje existe. Anti-alucinación.",
            },
          ].map((t) => (
            <li
              key={t.n}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <code className="font-mono text-base font-semibold text-slate-900">
                {t.n}
              </code>
              <p className="mt-1 text-sm text-slate-700">{t.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border-l-4 border-blue-600 bg-blue-50/40 p-6">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-slate-900">
          Diseño basado en Anthropic FSI
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Chispla MCP aplica los tres patrones que Anthropic publica para
          Claude en servicios financieros:{" "}
          <strong>source attribution</strong>,{" "}
          <strong>agentic workflows</strong>, y{" "}
          <strong>MCP como capa semántica de datos</strong>. Llevados al
          ciudadano en lugar del hedge fund.
        </p>
        <a
          href="https://claude.com/solutions/financial-services"
          target="_blank"
          rel="noopener"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:underline"
        >
          claude.com/solutions/financial-services
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-900">
          Open source
        </h2>
        <p className="mt-2 text-slate-700">
          Liberado bajo licencia MIT después del Demo Day del 7 de mayo
          2026. Issues, PRs y nuevas fuentes regulatorias bienvenidas.
        </p>
        <a
          href="https://github.com/domusalbertoni-del/Chispla-Hackathon"
          target="_blank"
          rel="noopener"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
        >
          <Github className="h-4 w-4" />
          Repositorio en GitHub
          <ExternalLink className="ml-1 h-3.5 w-3.5" />
        </a>
      </section>
    </article>
  );
}
