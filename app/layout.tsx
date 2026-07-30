import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("host") || "kriptouyumpusulasi.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    title: "Kripto Uyum Pusulası | Türkiye Kripto Mevzuatı",
    description: "Türkiye’de kripto borsaları ve saklama kuruluşları için SPK, MASAK ve operasyonel uyum rehberi.",
    metadataBase: new URL(origin),
    openGraph: {
      title: "Kripto işinizi mevzuatla uyumlu büyütün.",
      description: "SPK, MASAK, saklama ve operasyonel uyum başlıkları tek yerde.",
      type: "website",
      locale: "tr_TR",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "Kripto Uyum Pusulası" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Kripto Uyum Pusulası",
      description: "Türkiye kripto ekosistemi için güncel uyum rehberi.",
      images: [`${origin}/og.png`],
    },
    icons: { icon: "/og.png" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
