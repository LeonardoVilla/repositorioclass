// components/SoftwaresGrid.tsx
"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Item = { name: string; url: string };

interface SoftwaresGridProps {
  list: Item[];
}

export default function SoftwaresGrid({ list }: SoftwaresGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {list.map((s, index) => (
        <motion.a
          key={`${s.url}-${index}`}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow p-5 flex items-center justify-between text-slate-700 font-semibold text-xl"
        >
          {s.name}
          <ExternalLink size={18} className="text-slate-400" />
        </motion.a>
      ))}
    </div>
  );
}