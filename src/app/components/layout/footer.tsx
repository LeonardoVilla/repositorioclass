// components/layout/footer.tsx
"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-6 mt-2 text-center text-gray-700 dark:text-slate-300 text-sm transition-colors duration-300">
      <p className="mb-2">
        © {new Date().getFullYear()} Professor Leonardo Villa. Todos os direitos reservados.
      </p>
      <div className="space-x-4">
        <Link
          href="/sobre"
          className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        >
          Sobre / Contato
        </Link>
        <Link
          href="/politica-de-privacidade"
          className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        >
          Política de Privacidade
        </Link>
      </div>
    </footer>
  );
};

export default Footer;