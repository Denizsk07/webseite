import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Background } from "./components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deniz-Kaya.de - Mediengestaltung in Bild und Ton",
  description: "Erkunden Sie die Welt der Mediengestaltung in Bild und Ton mit Deniz Kaya und seinen Projekten.",
  openGraph: {
    title: "Deniz-Kaya.de - Mediengestaltung in Bild und Ton",
    description: "Erkunden Sie die Welt der Mediengestaltung in Bild und Ton mit Deniz Kaya und seinen Projekten.",
    url: "https://deniz-kaya.de",
    type: "website",
    images: [
      {
        url: "favicon.ico",
        width: 800,
        height: 600,
        alt: "Deniz Kaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deniz-Kaya.de - Mediengestaltung in Bild und Ton",
    description: "Erkunden Sie die Welt der Mediengestaltung in Bild und Ton mit Deniz Kaya und seinen Projekten.",
    images: [
      {
        url: "favicon.ico",
        alt: "Deniz Kaya",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Erkunden Sie die Welt der Mediengestaltung in Bild und Ton mit Deniz Kaya und seinen Projekten." />
        <meta property="og:title" content="Deniz-Kaya.de - Mediengestaltung in Bild und Ton" />
        <meta property="og:description" content="Erkunden Sie die Welt der Mediengestaltung in Bild und Ton mit Deniz Kaya und seinen Projekten." />
        <meta property="og:image" content="favicon.ico" />
        <meta property="og:url" content="https://deniz-kaya.de" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deniz-Kaya.de - Mediengestaltung in Bild und Ton" />
        <meta name="twitter:description" content="Erkunden Sie die Welt der Mediengestaltung in Bild und Ton mit Deniz Kaya und seinen Projekten." />
        <meta name="twitter:image" content="favicon.ico" />
        <title>Deniz-Kaya.de - Mediengestaltung in Bild und Ton</title>
      </head>
      <body className={`${inter.className} min-h-screen relative`}>
        <Background />
        <div className="relative z-10 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
