import { FC } from 'react';
import { ExternalLink } from 'react-feather'; // Ou qualquer ícone de sua escolha

interface LinkWithIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const LinkWithIcon: FC<LinkWithIconProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-700 hover:text-blue-600 transition-colors"
  >
    {icon}
    {label}
  </a>
);

export default LinkWithIcon;