// app/softwares/page.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen } from "lucide-react"; // BookOpen como ícone do Classroom
import { FaWhatsapp } from "react-icons/fa";
import { CSSProperties } from "react";
import Script from "next/script";

import { softwares, servicos, tutoriaisdev, tutoriaisbd } from './utils/data';
import LinkWithIcon from './utils/components/LinkWithIcon';
import { socialLinks } from './utils/links'; // Importe seus links

export default function SoftwaresPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-6">

      {/* PERFIL NO TOPO */}
      <div className="flex flex-col items-center mb-16">
        {/* FOTO REDONDA */}
        <img
          src="/profile/eu.png"
          alt="Foto de Perfil"
          className="w-32 h-32 rounded-full border-4 border-slate-300 shadow-lg object-cover mb-4"
        />

        {/* NOME DO PROFESSOR LINKADO */}
        <a
          href="https://br.linkedin.com/in/leonardotech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold text-slate-800 hover:text-blue-600 transition-colors mb-4"
        >
          Professor - Leonardo Villa
        </a>

        {/* ICONE CLASSROOM E GITHUB */}
        <div className="flex space-x-6">
          {socialLinks.map(link => (
            <LinkWithIcon
              key={link.name}
              href={link.url}
              icon={<link.icon size={36} />}
              label={''}
            />
          ))}
        </div>
      </div>

      {/* SOFTWARES */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-10 text-4xl font-bold text-slate-800">
          <img
            src="/icons/software.png"
            alt="Ícone de Software"
            className="w-10 h-10"
          />
          <h1>Softwares para Desenvolvimento</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {softwares.map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow p-5 flex items-center justify-between text-slate-700 font-semibold text-xl"
            >
              {s.name}
              <ExternalLink size={18} className="text-slate-400" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* SERVIÇOS */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-10 text-4xl font-bold text-slate-800">
          <img
            src="/icons/service.png"
            alt="Ícone de Software"
            className="w-10 h-10"
          />
          <h1>Documentações e Serviços</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicos.map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow p-5 flex items-center justify-between text-slate-700 font-semibold text-xl"
            >
              {s.name}
              <ExternalLink size={18} className="text-slate-400" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Tutoriais e Dicas  DEV*/}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-10 text-4xl font-bold text-slate-800">
          <img
            src="/icons/dev.png"
            alt="Ícone de Software"
            className="w-10 h-10"
          />
          <h1>Tutoriais DEV</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tutoriaisdev.map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow p-5 flex items-center justify-between text-slate-700 font-semibold text-xl"
            >
              {s.name}
              <ExternalLink size={18} className="text-slate-400" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Tutoriais e Dicas  SQL/BD*/}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-10 text-4xl font-bold text-slate-800">
          <img
            src="/icons/sql.png"
            alt="Ícone de Software"
            className="w-10 h-10"
          />
          <h1>Tutoriais SQL</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tutoriaisbd.map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow p-5 flex items-center justify-between text-slate-700 font-semibold text-xl"
            >
              {s.name}
              <ExternalLink size={18} className="text-slate-400" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-16 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" } as React.CSSProperties}
          data-ad-client="ca-pub-3767146802364121"
          data-ad-slot="5482225729"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        {/* Aqui você precisa garantir que o código do adsbygoogle esteja sendo empurrado corretamente */}
        <Script
          strategy="afterInteractive"
          onLoad={() => {
            // Chama o push() corretamente após a biblioteca ter sido carregada
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }}
        />
      </div>

      {/* Script de consentimento */}
      <Script id="google-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });
          gtag('js', new Date());
          gtag('config', 'ca-pub-3767146802364121');
        `}
      </Script>


    </main>
  );
}