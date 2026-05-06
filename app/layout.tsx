import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chispla — Tu guía para formalizar tu negocio en Chile",
  description:
    "Agente conversacional que te ayuda paso a paso a abrir tu empresa en Chile, con citación de leyes reales del SII, CMF y BCN.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
