"use client";

import { QRCodeSVG } from "qrcode.react";

type Props = {
  url: string;
  size?: number;
};

export function QrButton({ url, size = 160 }: Props) {
  return (
    <QRCodeSVG
      value={url}
      size={size}
      level="M"
      marginSize={0}
      bgColor="#FFFFFF"
      fgColor="#0F172A"
      aria-label="Código QR para iniciar conversación con Chispla en WhatsApp"
    />
  );
}
