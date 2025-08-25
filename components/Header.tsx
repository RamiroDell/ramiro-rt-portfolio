"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre mí" },
  { href: "/experience", label: "Experiencia" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Proyectos" },
  { href: "/contact", label: "Contacto" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between gap-4">
        {/* Branding que lleva directo al secreto */}
        <Link
          href="/root"
          title="access node: /root"
          className="font-mono text-sm md:text-base text-white hover:text-hacker-green transition-colors cursor-pointer"
        >
          &lt;Ramiro Dell’Orto/&gt;
        </Link>

        {/* Navegación */}
        <nav className="flex items-center gap-3 md:gap-5 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`hover:text-hacker-green transition-colors ${
                  active ? "text-hacker-green" : "text-gray-300"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
