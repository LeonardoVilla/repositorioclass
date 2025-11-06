// app/components/ui/TechLink.tsx
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type TechLinkProps = {
  name: string;
  href: string;
  icon: string;
};

const TechLink = ({ name, href, icon }: TechLinkProps) => {
  return (
    <motion.a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow p-5 flex items-center justify-between text-slate-700 font-semibold text-xl"
    >
      <div className="flex items-center space-x-4">
        <img src={icon} alt={name} className="w-8 h-8" />
        <span>{name}</span>
      </div>
      <ExternalLink size={18} className="text-slate-400" />
    </motion.a>
  );
};

export default TechLink;