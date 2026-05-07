import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chispla — Formaliza tu empresa en Chile, con la ley citada",
  description:
    "Agente conversacional en WhatsApp para microemprendedores formalizando empresa por primera vez en Chile. Cita la ley con URL oficial. Entrega el formulario F4415 pre-rellenado. Construido en Claude Impact Lab Chile 2026 · Track 1 Inclusión Financiera.",
  metadataBase: new URL("https://chispla.vercel.app"),
  openGraph: {
    title: "Chispla — Formaliza tu empresa con la ley citada",
    description:
      "Agente WhatsApp con datos oficiales del SII, CMF y BCN. Cero alucinación regulatoria.",
    locale: "es_CL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${lexend.variable} ${sourceSans.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased font-body">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white focus:rounded"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
