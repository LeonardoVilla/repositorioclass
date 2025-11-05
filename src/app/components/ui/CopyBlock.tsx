"use client";

import { useState } from "react";

interface CopyBlockProps {
  code: string;
  language?: string; // se quiser destacar sintaxe futuramente
}

export default function CopyBlock({ code }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // feedback por 2s
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-gray-700 hover:bg-gray-600 text-white text-sm px-2 py-1 rounded transition"
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
    </div>
  );
}