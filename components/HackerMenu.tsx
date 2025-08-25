"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Route } from "next";
import { TerminalSquare, Briefcase, Wrench, FolderGit2, Mail } from "lucide-react";

type Row = {
  key: "1" | "2" | "3" | "4" | "5";
  title: string;
  href: Route;
  desc: string;
  icon: any;
};

const rows: Row[] = [
  { key: "1", title: "Sobre mí",     href: "/about",      desc: "Quién soy, mentalidad Hacker y enfoque ofensivo", icon: TerminalSquare },
  { key: "2", title: "Experiencia",  href: "/experience", desc: "Trayectoria, roles y log de entregables reales",   icon: Briefcase },
  { key: "3", title: "Skills",       href: "/skills",     desc: "Especialidades, metodologías y tooling clave",    icon: Wrench },
  { key: "4", title: "Proyectos",    href: "/projects",   desc: "Casos reales y writeups con hallazgos",           icon: FolderGit2 },
  { key: "5", title: "Contacto",     href: "/contact",    desc: "Email directo, LinkedIn y GitHub",                icon: Mail },
] as const;

function useMenuHotkeys() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "1": location.assign("/about"); break;
        case "2": location.assign("/experience"); break;
        case "3": location.assign("/skills"); break;
        case "4": location.assign("/projects"); break;
        case "5": location.assign("/contact"); break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
}

export default function HackerMenu() {
  useMenuHotkeys();

  return (
    <div className="panel p-0 overflow-hidden">
      <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="text-xs text-gray-500">/usr/menu</div>
        <div className="text-xs text-gray-500 hidden sm:block">Atajos: [1] [2] [3] [4] [5]</div>
      </div>

      <div className="divide-y divide-white/10">
        {rows.map((r, i) => (
          <Link
            key={r.key}
            href={r.href}
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-hacker-green/60"
          >
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              whileHover={{ scale: 1.005 }}
              className="relative"
            >
              <div className="px-5 py-4 grid grid-cols-[auto,1fr,auto] items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-hacker-green font-mono text-xs px-2 py-0.5 rounded border border-hacker-green/40">
                    [{r.key}]
                  </span>
                  <r.icon size={16} className="text-hacker-green" />
                  <span className="text-white font-semibold">{r.title}</span>
                </div>
                <div className="text-sm text-gray-400">{r.desc}</div>
                <div className="text-hacker-green font-mono text-xs opacity-80 group-hover:opacity-100 transition-opacity">
                  &gt; {r.href}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hacker-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-hacker-green/0 group-hover:bg-hacker-green/40 transition-colors" />
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="px-5 py-3 text-xs text-gray-500 border-t border-white/10">
        <span className="text-hacker-green">[STATUS]</span> Navigation console ready —{" "}
        <span className="text-gray-300">Access Granted</span>
      </div>
    </div>
  );
}
