# 🎓 Leonardo Villa — Plataforma de Conteúdos Educacionais

Este é o código-fonte do site [**leonardovilla.com.br**](https://leonardovilla.com.br), desenvolvido em **Next.js** com **TypeScript** e **Tailwind CSS**.  
O objetivo é centralizar e publicar conteúdos didáticos para meus alunos, com integração do **Google AdSense** para exibição de anúncios educacionais.

---

## 🧱 Tecnologias Principais

- ⚛️ [Next.js 16](https://nextjs.org/) — framework React com renderização híbrida e otimização automática  
- 💨 [Tailwind CSS 4](https://tailwindcss.com/) — estilização rápida e responsiva  
- 💡 [TypeScript 5](https://www.typescriptlang.org/) — tipagem estática e segurança no desenvolvimento  
- 🧩 [Framer Motion](https://www.framer.com/motion/) — animações fluidas e acessíveis  
- 🧠 [MongoDB](https://www.mongodb.com/) — persistência de dados (configurada em `src/lib/mongodb.ts`)  
- 💰 [Google AdSense](https://ads.google.com/) — monetização via banners e scripts otimizados  

---

## 📂 Estrutura de Diretórios

```plaintext
my-app/
 ┣ ads.txt                 → Arquivo de verificação do Google AdSense (obrigatório para monetização)
 ┣ public/
 ┃ ┣ icons/
 ┃ ┃ ┣ code.png
 ┃ ┃ ┣ dev.png
 ┃ ┃ ┣ expo.png
 ┃ ┃ ┣ expo.svg
 ┃ ┃ ┣ laravel.png
 ┃ ┃ ┣ laravel.svg
 ┃ ┃ ┣ nextjs.svg
 ┃ ┃ ┣ service.png
 ┃ ┃ ┣ software.png
 ┃ ┃ ┣ sql.png
 ┃ ┃ ┗ tutorial.png
 ┃ ┣ profile/
 ┃ ┃ ┗ eu.png
 ┃ ┣ ads.txt               → Arquivo de teste e redundância para rastreamento do AdSense
 ┃ ┣ file.svg
 ┃ ┣ globe.svg
 ┃ ┣ next.svg
 ┃ ┣ vercel.svg
 ┃ ┗ window.svg
 ┣ src/
 ┃ ┣ app/
 ┃ ┃ ┣ api/               → Rotas de API (dados, sheets, testes)
 ┃ ┃ ┣ aulas/             → Páginas de aulas por tema (Expo, Laravel, Next)
 ┃ ┃ ┣ components/        → Componentes reutilizáveis e layouts
 ┃ ┃ ┃ ┣ adsense/         → Componentes de integração do Google AdSense
 ┃ ┃ ┃ ┣ layout/          → Navbar, Footer e estrutura base
 ┃ ┃ ┃ ┣ scripts/adsense/ → Scripts de consentimento e carregamento dinâmico
 ┃ ┃ ┃ ┣ softwares/       → Grades e recursos
 ┃ ┃ ┃ ┗ ui/              → Blocos de interface (links, tech icons, etc.)
 ┃ ┃ ┣ politica-de-privacidade/
 ┃ ┃ ┣ sheets/
 ┃ ┃ ┣ sobre/
 ┃ ┃ ┣ tutoriais/         → Tutoriais de Git, Laravel, Next e Supabase
 ┃ ┃ ┣ utils/             → Funções utilitárias e listas de dados/links
 ┃ ┃ ┣ favicon.ico
 ┃ ┃ ┣ global.ts
 ┃ ┃ ┣ globals.css
 ┃ ┃ ┣ layout.tsx         → Layout base da aplicação
 ┃ ┃ ┗ page.tsx           → Página inicial
 ┃ ┗ lib/
 ┃   ┗ mongodb.ts         → Conexão com o banco de dados MongoDB
 ┣ package.json
 ┗ tsconfig.json
```

---

## 🚀 Scripts disponíveis

| Comando              | Descrição |
|----------------------|-----------|
| `npm run dev`        | Inicia o servidor de desenvolvimento local |
| `npm run build`      | Gera a versão otimizada de produção |
| `npm start`          | Inicia o servidor com o build de produção |
| `npm run lint`       | Executa o linter para análise de código |

---

## 🌐 Deploy

O projeto está hospedado na [**Vercel**](https://vercel.com/), com integração contínua a partir do repositório GitHub.  
Cada *push* na branch principal gera automaticamente uma nova versão do site em produção.

---

## 💸 Integração com Google AdSense

Os componentes responsáveis pelo carregamento e consentimento de anúncios estão localizados em:

```
src/components/scripts/adsense/
 ┣ GoogleAdSenseScript.tsx
 ┗ GoogleConsent.tsx
```

E as metas de integração (head tags) ficam em:

```
src/components/adsense/GoogleAdSenseMeta.tsx
```

Esses componentes são carregados de forma controlada para respeitar as políticas de privacidade e consentimento do usuário.

---

## 🧩 Outras dependências

| Pacote | Função |
|--------|--------|
| **axios** | Requisições HTTP para APIs internas e externas |
| **lucide-react**, **react-icons**, **react-feather** | Ícones vetoriais modernos |
| **googleapis**, **google-auth-library** | Integração com APIs do Google (ex: Google Sheets) |

---

## ⚙️ Configuração de ambiente

Crie um arquivo `.env.local` na raiz do projeto com as variáveis de ambiente necessárias:

```bash
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<db>
GOOGLE_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://leonardovilla.com.br
```

> ⚠️ Nunca compartilhe essas variáveis em repositórios públicos.

---

## 🧠 Futuras melhorias

- 🔒 Autenticação para área de alunos  
- 📊 Dashboard de visualizações de conteúdo  
- 🗂️ CMS simplificado (inserção de aulas via painel)  
- 🌙 Tema escuro automático  

---

## 📄 Licença

Este projeto é distribuído sob a licença **MIT**.  
Sinta-se livre para usar como referência educacional ou base para projetos didáticos.

---

Feito por **[Leonardo Villa](https://leonardovilla.com.br)**.