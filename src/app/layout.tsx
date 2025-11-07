import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/app/components/layout/Navbar"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// import Footer from "@/app/components/layout/Footer";
import AdBanner from "@/app/components/adsense/GoogleAdBanner";
import GoogleAdSenseMeta from "@/app/components/adsense/GoogleAdSenseMeta";
import GoogleConsent from "@/app/components/scripts/adsense/GoogleConsent";
import GoogleAdSenseScript from "@/app/components/scripts/adsense/GoogleAdSenseScript";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClassProf",
  description: "Conteúdos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta tag do google ads */}
        <GoogleAdSenseMeta />
        {/* script do hed - google ads */}
        <GoogleAdSenseScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Menu de Navegação principal */}
        <Navbar />

        {/* Conteúdo principal */}
        <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-50">{children}</main>

        {/* Banner Google */}
        <AdBanner />

        {/* RODAPÉ */}
        <Footer />

        <GoogleConsent /> {/* Aqui fica global */}
      </body>
    </html>
  );
}
