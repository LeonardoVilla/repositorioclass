// app/politica-de-privacidade/page.tsx

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <main className="max-w-4xl mx-auto py-16 px-6 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
        <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>

        <p className="mb-4">
          Esta Política de Privacidade descreve como as informações dos visitantes são tratadas
          no site <strong>Professor Leonardo Villa</strong> (doravante denominado “site”).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Coleta de informações</h2>
        <p className="mb-4">
          Este site não coleta informações pessoais dos visitantes, exceto quando o usuário
          entra em contato voluntariamente por e-mail, WhatsApp ou outras formas de comunicação listadas.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cookies e anúncios do Google</h2>
        <p className="mb-4">
          Este site pode exibir anúncios do <strong>Google AdSense</strong>, que utilizam cookies
          para exibir anúncios personalizados com base nas visitas anteriores do usuário a este e a outros sites.
          O usuário pode optar por desativar a personalização de anúncios acessando:{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          >
            adssettings.google.com
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Links externos</h2>
        <p className="mb-4">
          Este site contém links para outros sites de terceiros. Não somos responsáveis
          pelo conteúdo ou pelas práticas de privacidade desses sites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Alterações nesta política</h2>
        <p className="mb-4">
          Esta política pode ser atualizada periodicamente. Recomendamos verificar esta página
          de tempos em tempos para estar ciente de quaisquer mudanças.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contato</h2>
        <p>
          Para dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail:{" "}
          <a
            href="mailto:leonardovilla.tech@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          >
            leonardovilla.tech@gmail.com
          </a>.
        </p>

        <p className="mt-10 text-sm text-slate-500 dark:text-slate-400">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
      </main>
    </>
  );
}