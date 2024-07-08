import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Background } from "./components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deniz-Kaya.de - Mediengestaltung in Bild und Ton",
  description: "Erkunden Sie die Welt der Mediengestaltung in Bild und Ton mit Deniz Kaya und seinen Projekten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen relative`}>
        <Background />
        <div className="relative z-10 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
