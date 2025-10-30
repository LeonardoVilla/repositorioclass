export default function SobrePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-slate-800">
      <h1 className="text-4xl font-bold mb-6">Sobre o Professor Leonardo Villa</h1>
      <p className="mb-6 leading-relaxed">
        Olá! Meu nome é <strong>Leonardo Villa</strong> e sou professor e desenvolvedor de software.
        Criei este site para compartilhar ferramentas, tutoriais e documentações úteis
        para estudantes e profissionais de tecnologia.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contato</h2>
      <p className="mb-4">
        Caso queira entrar em contato, você pode me encontrar pelos seguintes canais:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a href="leonardovilla.tech@gmail.com" className="text-blue-600 hover:underline">
            leonardovilla.tech@gmail.com
          </a>
        </li>
        <li>
          <a href="https://wa.me/5565981391515" target="_blank" className="text-blue-600 hover:underline">
            WhatsApp: (65) 98139-1515
          </a>
        </li>
        <li>
          <a href="https://br.linkedin.com/in/leonardotech" target="_blank" className="text-blue-600 hover:underline">
            LinkedIn: @leonardotech
          </a>
        </li>
      </ul>

      <p className="mt-10 text-sm text-slate-500">
        Este site não coleta dados pessoais sensíveis e é mantido apenas com fins educacionais e de divulgação de conhecimento.
      </p>
    </main>
  );
}
