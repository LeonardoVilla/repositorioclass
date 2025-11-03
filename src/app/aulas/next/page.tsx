// src/app/conteudos/nextjs/page.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const NextjsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 mt-1">

      {/* Título da Página */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Aprendendo Next.js com React</h1>
        <p className="text-slate-600 text-center max-w-3xl">
          O Next.js é um framework React para criar aplicações web com funcionalidades poderosas como renderização no servidor (SSR), geração de sites estáticos (SSG) e APIs. Ele é altamente otimizado para a criação de sites rápidos e escaláveis.
        </p>
      </div>

      {/* Seção - Características principais */}
      <section id="caracteristicas" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Características principais do Next.js</h2>
        <p className="text-slate-600 text-center mb-6">
          O Next.js é conhecido por sua simplicidade e pelo vasto conjunto de recursos. Aqui estão alguns dos principais recursos que fazem do Next.js uma excelente escolha para suas aplicações React:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Renderização do Lado do Servidor (SSR)</h3>
            <p className="text-slate-600">
              O Next.js permite que você renderize páginas no servidor, garantindo que o conteúdo seja entregue já renderizado para o navegador, o que melhora a performance e o SEO.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Geração de Sites Estáticos (SSG)</h3>
            <p className="text-slate-600">
              Com o Next.js, você pode gerar sites totalmente estáticos em tempo de construção, o que acelera a entrega de páginas e melhora a performance.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Roteamento Automático</h3>
            <p className="text-slate-600">
              O Next.js implementa roteamento baseado no sistema de arquivos, facilitando a navegação entre páginas de forma intuitiva e sem configurações complicadas.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">API Routes</h3>
            <p className="text-slate-600">
              O Next.js permite que você crie rotas de API diretamente dentro do framework, facilitando a criação de backends simples para suas aplicações.
            </p>
          </div>
        </div>
      </section>

      {/* Seção - Benefícios de usar Next.js */}
      <section id="beneficios" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Benefícios de usar o Next.js</h2>
        <p className="text-slate-600 text-center mb-6">
          O Next.js oferece uma série de vantagens para o desenvolvimento de aplicações modernas. Aqui estão alguns dos benefícios de usar Next.js para seu próximo projeto:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Desempenho</h3>
            <p className="text-slate-600">
              A renderização híbrida entre SSR e SSG oferece o melhor dos dois mundos, permitindo a entrega rápida de conteúdo com ótimo desempenho.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">SEO Melhorado</h3>
            <p className="text-slate-600">
              Com a renderização no lado do servidor e a entrega de conteúdo já renderizado, o Next.js ajuda a melhorar a indexação do seu site pelos motores de busca.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Desenvolvimento Rápido</h3>
            <p className="text-slate-600">
              O Next.js simplifica a configuração do projeto e oferece ferramentas como hot reloading, o que acelera o processo de desenvolvimento.
            </p>
          </div>
        </div>
      </section>

      {/* Seção - Recursos Avançados */}
      <section id="recursos-avancados" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Recursos Avançados do Next.js</h2>
        <p className="text-slate-600 text-center mb-6">
          Além das funcionalidades essenciais, o Next.js oferece recursos avançados que permitem a criação de aplicações ainda mais sofisticadas e escaláveis:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Incremental Static Regeneration (ISR)</h3>
            <p className="text-slate-600">
              O ISR permite que você atualize páginas estáticas sem precisar reconstruir o site inteiro, mantendo o desempenho ao mesmo tempo que oferece conteúdo atualizado.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Next.js Image Optimization</h3>
            <p className="text-slate-600">
              O Next.js fornece um componente `next/image` que otimiza automaticamente as imagens, carregando-as de forma eficiente e melhorando a performance.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Next.js Analytics</h3>
            <p className="text-slate-600">
              O Next.js oferece uma análise de performance integrada para monitorar e melhorar o tempo de carregamento das páginas.
            </p>
          </div>
        </div>
      </section>

      {/* Exemplos de Código */}
      <section id="exemplos-codigo" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Exemplos de Código Next.js</h2>
        <p className="text-slate-600 text-center mb-6">
          Aqui estão alguns exemplos de como implementar funcionalidades comuns no Next.js:
        </p>

        {/* Exemplo de Páginas Dinâmicas */}
        <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Criando Páginas Dinâmicas</h3>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code className="text-sm text-slate-600">
              {`import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  
  return <h1>Página com ID: {id}</h1>;
}`}
            </code>
          </pre>
        </div>

        {/* Exemplo de Geração de Páginas Estáticas */}
        <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Geração de Páginas Estáticas</h3>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code className="text-sm text-slate-600">
              {`export async function getStaticProps() {
  return {
    props: {
      message: 'Esta página foi gerada estaticamente!',
    },
  };
}

export default function HomePage({ message }) {
  return <h1>{message}</h1>;
}`}
            </code>
          </pre>
        </div>
      </section>

      {/* Links úteis */}
      <section id="links" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Links Úteis</h2>
        <div className="space-y-4">
          <motion.a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={20} /> Documentação Oficial do Next.js
          </motion.a>
          <motion.a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={20} /> Next.js Learn - Tutorial interativo
          </motion.a>
          <motion.a
            href="https://github.com/vercel/next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={20} /> Repositório Oficial no GitHub
          </motion.a>
        </div>
      </section>

    </main>
  );
};

export default NextjsPage;