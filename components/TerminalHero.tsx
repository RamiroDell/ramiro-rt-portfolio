"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FileDown, FolderGit2, Mail, TerminalSquare } from "lucide-react";

const lines = [
  "> Welcome to Ramiro Dell’Orto // Red Team Portfolio",
  "> whoami: Hacker | Red Team | Pentester Ofensivo",
  "> hint: usa [1]=Sobre mí  [2]=Proyectos  [3]=Contacto",
];

function useHotkeys() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "1") location.assign("/about");
      if (e.key === "2") location.assign("/projects");
      if (e.key === "3") location.assign("/contact");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
}

export default function TerminalHero() {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const timer = useRef<number | null>(null);
  useHotkeys();

  // cursor verde (línea 0 y 2) / rojo (línea 1)
  const cursorClass = idx === 1 ? "rt-cursor rt-cursor--red" : "rt-cursor rt-cursor--green";

  // efecto typewriter línea por línea
  useEffect(() => {
    const current = lines[idx];
    let i = 0;
    setTyped("");
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      i++;
      setTyped(current.slice(0, i));
      if (i >= current.length) {
        window.clearInterval(timer.current!);
        setTimeout(() => setIdx((p) => (p + 1) % lines.length), 1400);
      }
    }, 18);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [idx]);

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/5 shadow-glow bg-gradient-to-b from-hacker-panel/70 to-hacker-panel/40">
      {/* overlay de scanline */}
      <div className="pointer-events-none absolute inset-0 opacity-[.03] bg-[linear-gradient(transparent_0_50%,#00ff9c22_50%)] bg-[length:1px_4px]" />

      {/* encabezado tipo barra de terminal */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="inline-block h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="inline-block h-2 w-2 rounded-full bg-[#ffbd2e]" />
          <span className="inline-block h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2">/bin/rt-shell</span>
        </div>
        <div className="text-xs text-gray-500 hidden sm:block">Press [1] [2] [3]</div>
      </div>

      {/* contenido terminal */}
      <div className="relative p-6 md:p-10">
        {/* 👇 H1 clickeable que lleva a /root */}
        <Link href="/root" title="access node: /root">
          <h1
            className="glitch text-2xl md:text-3xl text-white font-semibold cursor-pointer"
            data-text="> Ramiro Dell’Orto"
          >
            &gt; Ramiro Dell’Orto
          </h1>
        </Link>

        <div className="mt-3 font-mono text-hacker-green">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="whitespace-pre-wrap"
            >
              <span>{typed}</span>
              <span className={cursorClass} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="btn"
            href="/CV_RamiroDellOrto.pdf"
            target="_blank"
            rel="noopener"
            title="Descargar CV (PDF)"
          >
            <FileDown size={16} /> Descargar CV
          </a>
          <Link className="btn" href="/projects" title="Ver proyectos">
            <FolderGit2 size={16} /> Proyectos
          </Link>
          <Link className="btn" href="/contact" title="Ir a contacto">
            <Mail size={16} /> Contacto
          </Link>
          <Link className="btn" href="/about" title="Sobre mí">
            <TerminalSquare size={16} /> Sobre mí
          </Link>
        </div>

        {/* ayuda/atajos */}
        <div className="mt-6 text-xs text-gray-400">
          <span className="text-hacker-green">[help]</span> Atajos: <kbd>1</kbd> Sobre mí ·{" "}
          <kbd>2</kbd> Proyectos · <kbd>3</kbd> Contacto
        </div>
      </div>
    </div>
  );
}
