// app/softwares/page.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen } from "lucide-react"; // BookOpen como ícone do Classroom
import { FaWhatsapp } from "react-icons/fa";
import { CSSProperties } from "react";

const softwares = [
  { name: "Composer", url: "https://getcomposer.org/download/" },
  { name: "Git", url: "https://git-scm.com/install/windows" },
  { name: "XAMPP", url: "https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/" },
  { name: "PHP", url: "https://windows.php.net/downloads/releases/archives/" },
  { name: "Node.js", url: "https://nodejs.org/en/download" },
  { name: "MariaDB", url: "https://mariadb.org/" },
  { name: "MySQL", url: "https://www.oracle.com/mysql/technologies/mysql-enterprise-edition-downloads.html" },
];

const servicos = [
  { name: "Supabase", url: "https://supabase.com/" },
  { name: "Firebase", url: "https://www.firebase.google.com/docs/auth?hl=pt-br" },
  { name: "MongoDB", url: "https://www.mongodb.com/" },
  { name: "React Expo", url: "https://docs.expo.dev/" },
  { name: "Laravel", url: "https://laravel.com/" },
  { name: "Carousel ", url: "https://swiperjs.com/demos/" },
  { name: "Bootstrap ", url: "https://getbootstrap.com/" },
  { name: "Reactnativepaper", url: "https://reactnativepaper.com/" },
  { name: "Mapeador Json", url: "https://jsoncrack.com/editor" },
];

const tutoriaisdev = [
  { name: "W3schools", url: "https://www.w3schools.com/" },
  { name: "Reactnative", url: "https://reactnativepaper.com/" },
  { name: "Medium Laravel", url: "https://medium.com/@leonardovilla.tech/laravel-12-crud-com-livewire-988933f3773b" },
];

const tutoriaisbd = [
  { name: "DB Diagram", url: "https://dbdiagram.io/d" },
  { name: "Runsql", url: "https://dbdiagram.io/" },
  { name: "Hacker Rank SQL", url: "https://www.hackerrank.com/domains/sql/" },
  { name: "LeetCode SQL", url: "hhttps://leetcode.com/problemset/database/" },
  { name: "SQLzoo", url: "https://sqlzoo.net/wiki/SQL_Tutorial" },
  { name: "Mode SQL", url: "https://mode.com/sql-tutorial" },
];

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
          <a
            href="https://classroom.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-blue-600 transition-colors"
          >
            <BookOpen size={36} />
          </a>
          <a
            href="https://github.com/LeonardoVilla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-gray-900 transition-colors"
          >
            <Github size={36} />
          </a>
          <a
            href="https://wa.me/5565981391515"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-green-600 transition-colors"
          >
            <FaWhatsapp size={36} />
          </a>

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
        <ins className="adsbygoogle"
          style={{ display: "block" } as CSSProperties}
          data-ad-client="ca-pub-3767146802364121"
          data-ad-slot="5482225729"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({ });
        </script>
      </div>

    </main>
  );
}