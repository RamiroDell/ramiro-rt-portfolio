"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Shield, Download, Mail, Github, Linkedin } from "lucide-react";
import TypewriterTagline from "@/components/TypewriterTagline";

export default function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
      className="panel p-6 md:p-8 overflow-hidden"
    >
      <div className="text-xs text-gray-500 mb-2">/etc/profile</div>

      <div className="flex items-start gap-5 flex-col md:flex-row md:items-center">
        {/* Avatar ASCII / ícono hacker */}
        <div className="shrink-0 grid place-items-center h-16 w-16 rounded-xl border border-white/10 shadow-glow bg-hacker-panel/60">
          <Shield className="text-hacker-green" size={24} />
        </div>

        <div className="flex-1">
          <h1 className="text-white font-semibold text-2xl glitch" data-text="> whoami">
            &gt; whoami
          </h1>

          {/* Tagline animado */}
          <TypewriterTagline />

          {/* Acciones */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a className="btn" href="/CV_RamiroDellOrto.pdf" target="_blank" rel="noopener">
              <Download size={16} /> Descargar CV
            </a>
            <a className="btn" href={`mailto:${site.email}`}>
              <Mail size={16} /> Contacto
            </a>
            <a className="btn" href={site.links.github} target="_blank" rel="noopener">
              <Github size={16} /> GitHub
            </a>
            <a className="btn" href={site.links.linkedin} target="_blank" rel="noopener">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Línea de scan sutil */}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-hacker-green/40 to-transparent"></div>
    </motion.section>
  );
}
