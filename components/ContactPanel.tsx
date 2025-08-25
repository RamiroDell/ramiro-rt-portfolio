// components/ContactPanel.tsx
"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

function Card({
  icon: Icon,
  title,
  desc,
  href,
  cta,
}: {
  icon: any;
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35 }}
      whileHover={{ scale: 1.01 }}
      className="panel p-5 group"
    >
      <div className="flex items-center gap-3">
        <Icon className="text-hacker-green" size={18} />
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm mt-2">{desc}</p>

      {/* Enlaces EXTERNOS -> usar <a>, no <Link> */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-4 inline-flex"
      >
        {cta} →
      </a>

      {/* “scan line” al hover */}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-hacker-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  );
}

export default function ContactPanel() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <div className="space-y-6">
      {/* Encabezado con glitch + animación más notoria */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="panel p-6 md:p-8"
      >
        <div className="text-xs text-gray-500 mb-2">/var/contact</div>
        <motion.h2
          className="text-white font-semibold text-xl glitch"
          data-text="> Access Channel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          &gt; Access Channel
        </motion.h2>
        <p className="text-gray-300 mt-2">
          Elegí un canal de contacto. El correo abre tu cliente por default; también
          podés copiar la dirección al portapapeles.
        </p>

        {/* Email + copiar (mailto -> <a>) */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a href={`mailto:${site.email}`} className="btn">
            <Mail size={16} />
            Escribirme → {site.email}
          </a>
          <button onClick={copyEmail} className="btn" title="Copiar email">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copiado" : "Copiar email"}
          </button>
        </div>
      </motion.div>

      {/* Tarjetas LinkedIn / GitHub */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card
          icon={Linkedin}
          title="LinkedIn"
          desc="Conecta profesionalmente: experiencia, recomendaciones y publicaciones."
          href={site.links.linkedin}
          cta="Ir a LinkedIn"
        />
        <Card
          icon={Github}
          title="GitHub"
          desc="Proyectos, PoCs y writeups técnicos. Actividad y contribuciones."
          href={site.links.github}
          cta="Ver GitHub"
        />
      </div>

      {/* Pie tipo log */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="panel p-5 text-xs text-gray-400"
      >
        <span className="text-hacker-green">[STATUS]</span> Channel Ready —{" "}
        <span className="text-gray-300">Access Granted</span>
      </motion.div>
    </div>
  );
}
