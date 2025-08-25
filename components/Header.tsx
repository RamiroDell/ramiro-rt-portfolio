"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre mí" },
  { href: "/experience", label: "Experiencia" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Proyectos" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-white/5 bg-black/40 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-hacker-green font-bold tracking-wide">{"<"}{site.name}{"/>"} </Link>
        <nav className="flex gap-4 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-white transition-colors ${pathname === item.href ? "text-hacker-green" : "text-gray-300"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
