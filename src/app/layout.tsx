import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import AdBanner from "./components/ui/AdBanner";
import GoogleConsent from "./components/scripts/GoogleConsent";

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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3767146802364121" crossOrigin="anonymous"></script>
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
