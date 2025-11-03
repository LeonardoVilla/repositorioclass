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
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Softwares para Desenvolvimento</h2>
          <p className="text-slate-600 text-center max-w-3xl">
            Esta lista reúne os principais softwares utilizados nas aulas de programação e banco de dados.
            São ferramentas gratuitas ou acessíveis, ideais para quem está começando na área de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {softwares.map((s) => (
            <motion.a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow p-5 flex items-center justify-between text-slate-700 font-semibold text-xl"
            >
              {s.name}
              <ExternalLink size={18} className="text-slate-400" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Documentações e Serviços</h2>
          <p className="text-slate-600 text-center max-w-3xl">
            Esta seção reúne as principais documentações oficiais, guias e plataformas
            de suporte utilizadas no desenvolvimento de sistemas e aplicações web.
            Aqui você encontra recursos técnicos, referências de API, ambientes de hospedagem
            e ferramentas de produtividade que facilitam o aprendizado e o trabalho diário
            com tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
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
      </section>


      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Tutoriais e Dicas DEV</h2>
          <p className="text-slate-600 text-center max-w-3xl">
            Nesta seção estão reunidos tutoriais e dicas voltadas ao desenvolvimento de software,
            abordando desde fundamentos de programação até práticas avançadas de integração entre
            tecnologias. O conteúdo é voltado para estudantes e profissionais que desejam aprender
            sobre frameworks modernos, ferramentas de front-end e back-end, e boas práticas de código.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
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
      </section>


      {/* Tutoriais e Dicas  SQL/BD*/}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Tutoriais SQL e Banco de Dados</h2>
          <p className="text-slate-600 text-center max-w-3xl">
            Explore tutoriais sobre SQL e gerenciamento de bancos de dados, com conteúdos que abordam
            desde consultas básicas até modelagem relacional e integração com aplicações. Ideal para
            estudantes e desenvolvedores que desejam dominar a linguagem SQL, aprender sobre
            normalização e entender o funcionamento dos principais SGBDs do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
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
      </section>


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