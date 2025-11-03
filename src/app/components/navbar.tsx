"use client";

import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react"; // ícone de hambúrguer

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 flex justify-end items-center h-16">
        {/* Hamburger menu */}
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-slate-100 transition-colors"
          >
            <Menu size={28} className="text-slate-800" />
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="bg-white shadow-md w-48 absolute right-0 top-full mt-2 rounded-md overflow-hidden">
              <a href="/" className="block px-4 py-2 hover:bg-slate-100">Home</a>
              <a href="#softwares" className="block px-4 py-2 hover:bg-slate-100">Softwares</a>
              <a href="#servicos" className="block px-4 py-2 hover:bg-slate-100">Serviços</a>
              <a href="#tutoriaisdev" className="block px-4 py-2 hover:bg-slate-100">Tutoriais DEV</a>
              <a href="#tutoriaisbd" className="block px-4 py-2 hover:bg-slate-100">Tutoriais SQL</a>
              <a href="/sobre" className="block px-4 py-2 hover:bg-slate-100">Sobre / Contato</a>
              <a href="/politica-de-privacidade" className="block px-4 py-2 hover:bg-slate-100">Política de Privacidade</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
