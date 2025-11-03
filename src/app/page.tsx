// app/softwares/page.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen } from "lucide-react"; // BookOpen como ícone do Classroom
import { FaWhatsapp } from "react-icons/fa";
import { CSSProperties } from "react";

import { softwares, servicos, tutoriaisdev, tutoriaisbd } from './utils/data';
import LinkWithIcon from './components/ui/LinkWithIcon';
import { socialLinks } from './utils/links'; // Importe seus links

export default function SoftwaresPage() {
  return (
    <>
      <main className="min-h-screen py-12 px-6 mt-1">

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
        <section id="softwares" className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Softwares para Desenvolvimento</h2>
            <p className="text-slate-600 text-center max-w-3xl">
              {softwares.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {softwares.list.map((s) => (
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
        <section id="servicos" className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Documentações e Serviços</h2>
            <p className="text-slate-600 text-center max-w-3xl">
              {servicos.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {servicos.list.map((s) => (
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


        <section id="tutoriaisdev" className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Tutoriais e Dicas DEV</h2>
            <p className="text-slate-600 text-center max-w-3xl">
              {tutoriaisdev.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {tutoriaisdev.list.map((s) => (
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
        <section id="tutoriaisbd" className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Tutoriais SQL e Banco de Dados</h2>
            <p className="text-slate-600 text-center max-w-3xl">
              {tutoriaisbd.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {tutoriaisbd.list.map((s) => (
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

        {/* Estude comigo */}
        <section id="estude-comigo" className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Estude Comigo</h2>
            <p className="text-slate-600 text-center max-w-3xl">
              Se você está começando ou quer se aprofundar em algumas das tecnologias mais populares do mercado, tenho diversos tutoriais e conteúdos sobre <strong>Laravel</strong>, <strong>Next.js</strong> e <strong>Expo</strong>. Vamos estudar juntos? Confira os links abaixo para cada uma das tecnologias e comece a sua jornada de aprendizado!
            </p>
          </div>

          {/* Grid de links para Laravel, Next.js e Expo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {/* Laravel Link */}
            <motion.a
              href="/aulas/laravel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow p-5 flex items-center justify-between text-slate-700 font-semibold text-xl"
            >
              <div className="flex items-center space-x-4">
                <img src="/icons/laravel.svg" alt="Laravel" className="w-8 h-8" />
                <span>Laravel</span>
              </div>
              <ExternalLink size={18} className="text-slate-400" />
            </motion.a>

            {/* Next.js Link */}
            <motion.a
              href="/aulas/next"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow p-5 flex items-center justify-between text-slate-700 font-semibold text-xl"
            >
              <div className="flex items-center space-x-4">
                <img src="/icons/nextjs.svg" alt="Next.js" className="w-8 h-8" />
                <span>Next.js</span>
              </div>
              <ExternalLink size={18} className="text-slate-400" />
            </motion.a>

            {/* Expo Link */}
            <motion.a
              href="/aulas/expo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow p-5 flex items-center justify-between text-slate-700 font-semibold text-xl"
            >
              <div className="flex items-center space-x-4">
                <img src="/icons/expo.svg" alt="Expo" className="w-8 h-8" />
                <span>Expo</span>
              </div>
              <ExternalLink size={18} className="text-slate-400" />
            </motion.a>
          </div>
        </section>


      </main>
    </>
  );
}