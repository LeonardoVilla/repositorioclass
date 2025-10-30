import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Conteúdo principal */}
        <main className="flex-grow">{children}</main>

        {/* RODAPÉ */}
        <footer className="bg-slate py-6 mt-2 text-center text-slate-700 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Professor Leonardo Villa</p>
          <div className="space-x-4">
            <Link href="/sobre" className="hover:text-blue-600">Sobre / Contato</Link>
            <Link href="/politica-de-privacidade" className="hover:text-blue-600">Política de Privacidade</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
