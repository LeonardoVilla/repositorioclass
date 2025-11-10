"use client"; // Marca o arquivo como um Componente Cliente

import { useEffect, useState } from "react";
import LinkWithIcon from './components/ui/LinkWithIcon';
import { socialLinks } from './utils/links';
import SoftwaresGrid from "./components/softwares/ResourcesGrid"; // Client Component
import TechLink from './components/ui/TechLink'; // Importando o novo componente
import Link from "next/link";
import { SiGithub, SiLaravel, SiReact, SiSupabase } from "react-icons/si";

type Item = { name: string; url: string; };
type SectionData = { description: string; list: Item[] };
type Dados = {
  servicos: SectionData[];
  softwares: SectionData[];
  tutoriaisBD: SectionData[];
  tutoriaisDev: SectionData[];
};

export default function SoftwaresPage() {
  const [dados, setDados] = useState<Dados>({
    servicos: [],
    softwares: [],
    tutoriaisBD: [],
    tutoriaisDev: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define a URL base dependendo do ambiente
        const baseUrl =
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : process.env.NEXT_PUBLIC_BASE_URL;

        const res = await fetch(`${baseUrl}/api/dados`, { cache: 'no-store' });

        if (res.ok) {
          const data = await res.json();
          setDados(data);
        } else {
          console.error("Erro ao buscar dados:", res.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);
  // A lista de dependências está vazia para que só rode uma vez ao carregar
  const tutorialLinks = [
    {
      name: "Git e GitHub",
      href: "/tutoriais/git/",
      icon: <SiGithub size={28} className="text-slate-700 hover:text-blue-600 transition-colors" />,
    },
    {
      name: "Laravel",
      href: "/tutoriais/laravel",
      icon: <SiLaravel size={28} className="text-red-500 hover:text-red-600 transition-colors" />,
    },
    {
      name: "React Native",
      href: "/tutoriais/react-native",
      icon: <SiReact size={28} className="text-sky-500 hover:text-sky-600 transition-colors" />,
    },
    {
      name: "Supabase",
      href: "/tutoriais/supabase",
      icon: <SiSupabase size={28} className="text-emerald-600 hover:text-emerald-700 transition-colors" />,
    },
  ];

  return (
    <main className="min-h-screen py-12 px-6 mt-1">
      {/* PERFIL */}
      <section className="flex flex-col items-center mb-16">
        <img
          src="/profile/eu.png"
          alt="Foto de Perfil"
          className="w-32 h-32 rounded-full border-4 border-slate-300 shadow-lg object-cover mb-4"
        />
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold text-slate-800 hover:text-blue-600 transition-colors mb-4"
        >
          Professor - Leonardo Villa
        </a>
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

        {/* 🔗 Links estilizados para tutoriais */}
        <span className="text-2xl font-semibold text-slate-800 hover:text-blue-600 transition-colors mb-2 mt-5">
          Tutorais rápidos
        </span>
        <div className="flex space-x-4 mt-0">
          {tutorialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:scale-110 transition-transform"
              title={link.name}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </section>

      {/* SEÇÕES DINÂMICAS */}
      {[{ id: 'softwares', title: 'Softwares para Desenvolvimento', data: dados.softwares },
      { id: 'servicos', title: 'Documentações e Serviços', data: dados.servicos },
      { id: 'tutoriaisdev', title: 'Tutoriais e Dicas DEV', data: dados.tutoriaisDev },
      { id: 'tutoriaisbd', title: 'SQL e Banco de Dados', data: dados.tutoriaisBD },
      ].map(section => (
        section.data.map((sec, idx) => (
          <section key={sec.description + idx} id={section.id} className="max-w-6xl mx-auto mb-16">
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">{section.title}</h2>
              <p className="text-slate-600 text-center max-w-3xl">{sec.description}</p>
            </div>
            <SoftwaresGrid list={sec.list} />
          </section>
        ))
      ))}

      {/* Estude Comigo */}
      <section id="estude-comigo" className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Estude Comigo</h2>
          <p className="text-slate-600 text-center max-w-3xl">
            Se você está começando ou quer se aprofundar em algumas das tecnologias mais populares do mercado, tenho diversos tutoriais e conteúdos sobre <strong>Laravel</strong>, <strong>Next.js</strong> e <strong>Expo</strong>. Vamos estudar juntos? Confira os links abaixo para cada uma das tecnologias e comece a sua jornada de aprendizado!
          </p>
        </div>

        {/* Grid de links para Laravel, Next.js e Expo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {[
            { name: "Laravel", href: "/aulas/laravel", icon: "/icons/laravel.svg" },
            { name: "Next.js", href: "/aulas/next", icon: "/icons/nextjs.svg" },
            { name: "Expo", href: "/aulas/expo", icon: "/icons/expo.svg" },
          ].map((tech) => (
            <TechLink
              key={tech.name}
              name={tech.name}
              href={tech.href}
              icon={tech.icon}
            />
          ))}
        </div>
      </section>

    </main>
  );
}