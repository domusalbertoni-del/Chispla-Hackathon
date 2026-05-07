// Single source of truth for landing-page content. Cifras ancladas con URL oficial.

export const WHATSAPP_NUMBER_RAW = "12015342632"; // +1 (201) 534-2632 — Kapso/Twilio number
export const WHATSAPP_DISPLAY = "+1 (201) 534-2632";
export const WHATSAPP_INITIAL_MESSAGE = "Hola Chispla, quiero formalizar mi empresa";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER_RAW}?text=${encodeURIComponent(WHATSAPP_INITIAL_MESSAGE)}`;

export type ConversacionTipo = {
  id: string;
  emoji: string;
  perfil: string;
  pregunta: string;
  respuesta: string;
  cita: { texto: string; url: string };
  entrega?: string; // PDF / link / etc.
};

export const CONVERSACIONES: ConversacionTipo[] = [
  {
    id: "luca",
    emoji: "🇮🇹",
    perfil: "Extranjero residente",
    pregunta:
      "Soy italiano y vivo en Chile hace un año. Quiero abrir mi empresa de servicios, ¿qué necesito?",
    respuesta:
      "Para crear tu SpA necesitas RUT extranjero verificado, Clave Única activa, nombre y objeto social, dirección comercial y capital inicial (puede ser $1). Te paso los pasos en orden y el F4415 pre-rellenado.",
    cita: {
      texto: "Ley 21.210 · inicio actividades por internet",
      url: "https://www.bcn.cl/leychile/navegar?idNorma=1145503",
    },
    entrega: "F4415_PJ pre-rellenado",
  },
  {
    id: "instagram",
    emoji: "📱",
    perfil: "Vendedora informal por Instagram",
    pregunta:
      "Vendo cosméticos por Instagram desde hace 6 meses, ¿tengo que formalizar?",
    respuesta:
      "Si tus ventas superan los umbrales del SII, sí. Régimen Pro Pyme Transparente es lo que más conviene a tu tamaño: tributación simplificada, IVA mensual, patente comercial domiciliaria.",
    cita: {
      texto: "SII Régimen Pro Pyme Letra D Art. 14",
      url: "https://www.sii.cl/normativa_legislacion/",
    },
    entrega: "Checklist + plazos F29",
  },
  {
    id: "almacen",
    emoji: "🏪",
    perfil: "Almacén de barrio",
    pregunta:
      "Quiero abrir un almacén de barrio, ¿qué tengo que hacer primero?",
    respuesta:
      "La secuencia es: escritura de constitución → RUT → iniciación SII → patente comercial municipal → primera boleta. En paralelo evaluamos crédito social Caja Los Andes para capital de partida.",
    cita: {
      texto: "BCN Ley Fácil · Constituir empresa",
      url: "https://www.bcn.cl/leyfacil/recurso/constituir-una-empresa",
    },
    entrega: "Patente municipal F-A1",
  },
];

export type FuenteOficial = {
  institucion: string;
  recurso: string;
  url: string;
};

export const FUENTES: FuenteOficial[] = [
  {
    institucion: "BCN",
    recurso: "API Ley Fácil · explicaciones oficiales en lenguaje simple",
    url: "https://www.bcn.cl/api-leyfacil/",
  },
  {
    institucion: "BCN",
    recurso: "Ley 21.521 (Ley Fintec)",
    url: "https://www.bcn.cl/leychile/navegar?idNorma=1187323",
  },
  {
    institucion: "BCN",
    recurso: "Ley 21.398 (Pro Consumidor Financiero)",
    url: "https://www.bcn.cl/leychile/navegar?idNorma=1170464",
  },
  {
    institucion: "CMF",
    recurso: "NCG 502/2024 · Registro Prestadores Fintec",
    url: "https://www.cmfchile.cl/normativa/ncg_502_2024.pdf",
  },
  {
    institucion: "CMF",
    recurso: "NCG 514/2024 · Sistema de Finanzas Abiertas",
    url: "https://www.cmfchile.cl/normativa/ncg_514_2024.pdf",
  },
  {
    institucion: "SII",
    recurso: "Resolución Ex. 114/2025 · DJ 1964",
    url: "https://www.sii.cl/normativa_legislacion/resoluciones/2025/reso114.pdf",
  },
  {
    institucion: "SII",
    recurso: "Normativa y resoluciones",
    url: "https://www.sii.cl/normativa_legislacion/",
  },
  {
    institucion: "SERNAC",
    recurso: "SERNAC Financiero · derechos y reclamos",
    url: "https://www.sernac.cl/portal/618/w3-propertyvalue-27771.html",
  },
  {
    institucion: "INE",
    recurso: "VIII Encuesta de Microemprendimiento (dic 2024)",
    url: "https://www.ine.gob.cl/eme",
  },
];

export const EQUIPO = [
  {
    nombre: "Luca Marrella",
    rol: "Producto · caso real en escena",
    nota: "Italiano residente. Vivió la formalización hace tres semanas — el dolor que Chispla resuelve.",
  },
  {
    nombre: "Lucas Lobos",
    rol: "MCP server · regulatory data · pitch",
    nota: "Lleva el corazón técnico: el MCP Ciudadano open-source.",
  },
  {
    nombre: "Eduardo Sánchez",
    rol: "WhatsApp + frontend + agente",
    nota: "Vibecoder. Une Kapso, Claude y el agente conversacional.",
  },
];
