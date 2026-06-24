import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brand } from "@/content/site";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${brand.name} | Curso Maestro de Bolillo con Chef Juanote`,
  description: "PanaderIA™ es una academia digital premium de panadería con Curso Maestro de Bolillo, videos QR, certificación y futuro asistente virtual Boly™.",
  keywords: ["PanaderIA", "Curso Maestro de Bolillo", "Chef Juanote", "Boly", "panadería", "curso de panadería", "bolillo", "certificación panadera"],
  openGraph: {
    title: `${brand.name} | ${brand.slogan}`,
    description: "Academia digital premium para aprender bolillo profesional desde cero.",
    type: "website",
    locale: "es_MX",
    images: [{ url: "/images/bolillo-placeholder.svg", width: 1200, height: 800, alt: "Curso Maestro de Bolillo PanaderIA™" }]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
