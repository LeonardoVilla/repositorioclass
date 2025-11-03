// src/app/conteudos/laravel/page.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react"; // Para ícones de link externo

const LaravelPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 mt-1">

      {/* Título da Página */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Aprendendo Laravel</h1>
        <p className="text-slate-600 text-center max-w-3xl">
          O Laravel é um framework PHP de código aberto, criado por Taylor Otwell. Conhecido por sua sintaxe elegante e rica em recursos, é uma excelente escolha para o desenvolvimento de aplicações web robustas e escaláveis.
        </p>
      </div>

      {/* Seção - Características principais */}
      <section id="caracteristicas" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Características principais do Laravel</h2>
        <p className="text-slate-600 text-center mb-6">
          Laravel é recheado de recursos que tornam o desenvolvimento mais ágil e intuitivo. Aqui estão algumas das principais características que tornam o Laravel tão popular:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Roteamento Fácil</h3>
            <p className="text-slate-600">
              O Laravel possui um sistema de roteamento simples e expressivo, que facilita a definição de URLs e as ações associadas a elas.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Eloquent ORM</h3>
            <p className="text-slate-600">
              O Eloquent é o ORM do Laravel, que facilita o trabalho com bancos de dados relacionais através de uma sintaxe simples e intuitiva.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Blade Template Engine</h3>
            <p className="text-slate-600">
              Blade é o motor de templates do Laravel, permitindo que você crie layouts dinâmicos e reutilizáveis de maneira eficiente e sem complicação.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Testes Automatizados</h3>
            <p className="text-slate-600">
              Laravel torna o processo de testes mais fácil, fornecendo uma variedade de métodos para escrever testes automatizados, garantindo que seu código funcione corretamente.
            </p>
          </div>
        </div>
      </section>

      {/* Seção - Benefícios de usar Laravel */}
      <section id="beneficios" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Benefícios de usar o Laravel</h2>
        <p className="text-slate-600 text-center mb-6">
          O Laravel oferece benefícios significativos que facilitam a criação de aplicações seguras, escaláveis e fáceis de manter:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Segurança</h3>
            <p className="text-slate-600">
              O Laravel oferece proteções integradas contra ataques comuns, como CSRF e SQL Injection, permitindo que você desenvolva aplicações seguras por padrão.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Facilidade de uso</h3>
            <p className="text-slate-600">
              Com uma sintaxe expressiva e documentação clara, o Laravel facilita a curva de aprendizado e acelera o desenvolvimento.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Escalabilidade</h3>
            <p className="text-slate-600">
              O Laravel pode ser utilizado em projetos pequenos ou grandes, graças a sua arquitetura e aos recursos como filas e cache, que permitem uma escalabilidade eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Seção - Recursos avançados */}
      <section id="recursos-avancados" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Recursos Avançados do Laravel</h2>
        <p className="text-slate-600 text-center mb-6">
          Além das funcionalidades básicas, o Laravel possui uma série de recursos avançados que ajudam a construir soluções complexas de forma eficiente:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Laravel Forge</h3>
            <p className="text-slate-600">
              O Laravel Forge é uma ferramenta para gerenciamento de servidores, que facilita o deployment de suas aplicações Laravel para produção.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Laravel Horizon</h3>
            <p className="text-slate-600">
              O Laravel Horizon é uma interface gráfica para monitoramento e controle de filas, permitindo que você gerencie tarefas de background de maneira eficiente.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Laravel Passport</h3>
            <p className="text-slate-600">
              Laravel Passport fornece um sistema completo de autenticação de API usando OAuth2, ideal para aplicações modernas com APIs RESTful.
            </p>
          </div>
        </div>
      </section>

      {/* Seção - Exemplos de código Laravel */}
      <section id="exemplos-codigo" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Exemplos de Código Laravel</h2>
        <p className="text-slate-600 text-center mb-6">
          Aqui estão alguns exemplos de código para você entender como o Laravel facilita o desenvolvimento de aplicações web:
        </p>

        {/* Exemplo de Roteamento */}
        <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Definindo Roteamento</h3>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code className="text-sm text-slate-600">
              {`Route::get('/home', function () {
  return view('home');
});`}
            </code>
          </pre>
        </div>

        {/* Exemplo de Eloquent ORM */}
        <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow mt-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Exemplo de Eloquent ORM</h3>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code className="text-sm text-slate-600">
              {`$user = User::find(1);
$user->name = 'Novo Nome';
$user->save();`}
            </code>
          </pre>
        </div>
      </section>

      {/* Seção de Links úteis */}
      <section id="links" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Links Úteis</h2>
        <div className="space-y-4">
          <motion.a
            href="https://laravel.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={20} /> Documentação Oficial do Laravel
          </motion.a>
          <motion.a
            href="https://laracasts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={20} /> Laracasts - Cursos sobre Laravel
          </motion.a>
          <motion.a
            href="https://laravel-news.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={20} /> Laravel News
          </motion.a>
        </div>
      </section>

    </main>
  );
};

export default LaravelPage;
