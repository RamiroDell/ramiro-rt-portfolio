"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Network,
  Bug,
  KeySquare,
  ScanLine,
  LockKeyhole,
  FileCode2,
  TerminalSquare,
  Globe,
  Database,
  FolderSearch,
  Target,
  Wrench,
  Search,
} from "lucide-react";
import { useState } from "react";

/* KPIs arriba (sin cambios grandes) */
const kpis = [
  {
    icon: ShieldAlert,
    label: "Operaciones Ofensivas",
    value: "Red Team",
    desc: "Simulación de adversario end-to-end",
  },
  {
    icon: Bug,
    label: "Hallazgos Críticos",
    value: "15+",
    desc: "OWASP Top 10 en entornos reales",
  },
  {
    icon: FileCode2,
    label: "Frameworks",
    value: "ATT&CK · PTES · OWASP · NIST",
    desc: "Metodologías trazables",
  },
];

/* Especialidades (primer bloque) */
const specialties = [
  { icon: ShieldAlert, label: "Simulación de Adversario (Red Team)", color: "text-hacker-green border-hacker-green/40" },
  { icon: Network,      label: "OSINT & Reconocimiento Avanzado",    color: "text-hacker-cyan border-hacker-cyan/40" },
  { icon: Bug,          label: "Explotación Web (OWASP Top 10)",      color: "text-hacker-green border-hacker-green/40" },
  { icon: KeySquare,    label: "Privilege Escalation",                color: "text-hacker-red border-hacker-red/40" },
  { icon: ScanLine,     label: "Broken Access / IDOR",                color: "text-hacker-green border-hacker-green/40" },
  { icon: LockKeyhole,  label: "Ataques de Autenticación",            color: "text-hacker-cyan border-hacker-cyan/40" },
  { icon: FileCode2,    label: "CSP & Security Headers",              color: "text-hacker-red border-hacker-red/40" },
];

/* Herramientas TOP (segundo bloque, aparece con toggle)
   Nota: elegidas por uso típico en hacking web / recon / fuzzing / explotación */
const tools = [
  { icon: TerminalSquare, label: "Burp Suite",            color: "text-hacker-green border-hacker-green/40" },
  { icon: Bug,            label: "OWASP ZAP",             color: "text-hacker-cyan border-hacker-cyan/40" },
  { icon: Network,        label: "Nmap",                  color: "text-hacker-green border-hacker-green/40" },
  { icon: Database,       label: "sqlmap",                color: "text-hacker-red border-hacker-red/40" },
  { icon: Search,         label: "ffuf",                  color: "text-hacker-green border-hacker-green/40" },
  { icon: FolderSearch,   label: "gobuster",              color: "text-hacker-cyan border-hacker-cyan/40" },
  { icon: Globe,          label: "WhatWeb",               color: "text-hacker-green border-hacker-green/40" },
  { icon: Target,         label: "Sublist3r / Amass",     color: "text-hacker-cyan border-hacker-cyan/40" },
  { icon: Wrench,         label: "Nikto",                 color: "text-hacker-red border-hacker-red/40" },
  { icon: TerminalSquare, label: "Kali Tooling (suite)",  color: "text-hacker-green border-hacker-green/40" },
];

export default function AboutStats() {
  const [showTools, setShowTools] = useState(false);

  return (
    <section className="space-y-6">
      {/* KPIs / Métricas */}
      <div className="grid md:grid-cols-3 gap-6">
        {kpis.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            whileHover={{ scale: 1.01 }}
            className="panel p-5 relative overflow-hidden group"
          >
            {/* scan line en hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hacker-green/40 to-transparent" />
            </div>

            <div className="flex items-center gap-3">
              <it.icon className="text-hacker-green" size={18} />
              <p className="text-gray-400 text-sm">{it.label}</p>
            </div>
            <div className="text-white font-semibold text-xl mt-2">{it.value}</div>
            <p className="text-gray-400 text-xs mt-1">{it.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Especialidades */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="panel p-5"
      >
        <div className="text-xs text-gray-500 mb-3">[especialidades]</div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {specialties.map((sp, i) => (
            <motion.div
              key={sp.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <div className={`flex items-center gap-2 px-3 py-2 rounded border ${sp.color} bg-hacker-panel/70`}>
                <sp.icon size={16} className={`${sp.color.split(" ")[0]}`} />
                <span className="text-xs text-gray-200">{sp.label}</span>
              </div>
              {/* glitch/scan sutil */}
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-hacker-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* ruido leve */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(transparent_0_50%,#00ff9c22_50%)] bg-[length:1px_4px]" />
            </motion.div>
          ))}
        </div>

        {/* Toggle herramientas */}
        <div className="mt-5">
          <button
            onClick={() => setShowTools((v) => !v)}
            className="btn"
            aria-expanded={showTools}
            aria-controls="tools-grid"
          >
            {showTools ? "Ver menos" : "Ver más"} (herramientas)
          </button>
        </div>

        {/* Bloque de herramientas con animación */}
        <AnimatePresence initial={false}>
          {showTools && (
            <motion.div
              id="tools-grid"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    className="relative group"
                  >
                    <div className={`flex items-center gap-2 px-3 py-2 rounded border ${tool.color} bg-hacker-panel/70`}>
                      <tool.icon size={16} className={`${tool.color.split(" ")[0]}`} />
                      <span className="text-xs text-gray-200">{tool.label}</span>
                    </div>
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-hacker-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(transparent_0_50%,#00ff9c22_50%)] bg-[length:1px_4px]" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
