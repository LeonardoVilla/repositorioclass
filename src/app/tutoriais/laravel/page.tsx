"use client"; // Marca o arquivo como um Componente Cliente

import { useEffect, useState } from "react";

import SoftwaresGrid from "../../components/softwares/ResourcesGrid"; // Client Component


type Item = { name: string; url: string; };
type SectionData = { description: string; list: Item[] };
type Dados = {
  tutoriallaravel: SectionData[];
};

export default function SoftwaresPage() {
  const [dados, setDados] = useState<Dados>({
    tutoriallaravel: []
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

  return (
    <main className="min-h-screen py-12 px-6 mt-1">
      {/* PERFIL */}
      <div className="flex flex-col items-center mb-16">
        <img
          src="/profile/eu.png"
          alt="Foto de Perfil"
          className="w-32 h-32 rounded-full border-4 border-slate-300 shadow-lg object-cover mb-4"
        />
        <a
          href="https://br.linkedin.com/in/leonardotech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold text-slate-800 hover:text-blue-600 transition-colors mb-4"
        >
          Professor - Leonardo Villa
        </a>
      </div>

      {/* SEÇÕES DINÂMICAS */}
      {[
      { id: 'tutoriallaravel', title: 'Tutoriais e Dicas DEV', data: dados.tutoriallaravel },
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

    </main>
  );
}