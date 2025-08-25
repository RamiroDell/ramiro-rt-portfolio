"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TerminalSquare, Gift, Mail, Crown, Star, FolderGit2, ShieldCheck } from "lucide-react";

export default function UnlockedClient() {
  const [party, setParty] = useState<string[]>([]);

  // confetti ascii simple (no libs)
  useEffect(() => {
    const icons = ["★", "✦", "✧", "✺", "✱", "✸"];
    const arr = new Array(24).fill(0).map(() => icons[Math.floor(Math.random() * icons.length)]);
    setParty(arr);
  }, []);

  return (
    <section className="relative panel p-6 md:p-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[.03] bg-[linear-gradient(transparent_0_50%,#00ff9c22_50%)] bg-[length:1px_4px]" />
      <div className="text-xs text-gray-500 mb-3">/var/secure/vault</div>

      {/* Encabezado */}
      <div className="flex items-center gap-3">
        <TerminalSquare className="text-hacker-green" size={18} />
        <h1 className="text-white font-semibold text-xl">{"> VAULT // UNLOCKED"}</h1>
      </div>

      {/* Confetti emoji */}
      <div className="relative h-8 mt-3">
        {party.map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.02 }}
            className="absolute text-[10px] text-hacker-green/80"
            style={{ left: `${(i / party.length) * 100}%` }}
          >
            {ch}
          </motion.span>
        ))}
      </div>

      {/* Mensaje principal */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mt-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-hacker-green">
          <ShieldCheck size={14} className="text-hacker-green" />
          ACCESS GRANTED — badge: <span className="text-gray-300">vault‑hunter</span>
        </div>
        <p className="text-gray-300 mt-3">
          Bien jugado. Pocos llegan hasta este nodo oculto. Acá irán recursos exclusivos: plantillas,
          checklists, macros y writeups con técnicas ofensivas aplicadas.
        </p>
      </motion.div>

      {/* “Recompensa” placeholder + CTA */}
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-white/10 bg-black/30 p-4">
          <div className="flex items-center gap-2 text-hacker-green">
            <Gift size={16} />
            <h3 className="text-white font-semibold">Recompensa</h3>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Próximamente: <span className="text-gray-200">Red Team checklist (PDF)</span>,
            <span className="text-gray-200"> macros de Burp</span>,
            <span className="text-gray-200"> wordlists</span> y más.
          </p>
          <a className="btn mt-4 inline-flex" href="mailto:contactopersafe@gmail.com?subject=Desbloqueo%20VAULT" title="Hablar ahora">
            <Mail size={16} /> HABLAME: contactopersafe@gmail.com
          </a>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/30 p-4">
          <div className="flex items-center gap-2 text-hacker-green">
            <Crown size={16} />
            <h3 className="text-white font-semibold">Próximos pasos</h3>
          </div>
          <ul className="mt-2 text-sm text-gray-300 list-disc list-inside">
            <li>Agendar mini‑assessment de seguridad ofensiva.</li>
            <li>Enviar una URL para un vistazo rápido de superficie.</li>
            <li>Pedir un writeup exclusivo sobre IDOR/XSS.</li>
          </ul>
          <div className="mt-3 text-xs text-gray-500">[tip] si llegaste hasta acá, contame cómo lo encontraste 😉</div>
        </div>
      </div>

      {/* Perks extra */}
      <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-4">
        <div className="flex items-center gap-2 text-hacker-green">
          <Star size={16} />
          <h3 className="text-white font-semibold">Perks del Vault</h3>
        </div>
        <div className="mt-2 grid sm:grid-cols-2 gap-2 text-sm text-gray-300">
          <div className="panel bg-black/30 p-3">✓ Prioridad para consultas rápidas (mailto directo)</div>
          <div className="panel bg-black/30 p-3">✓ Acceso temprano a nuevos writeups</div>
          <div className="panel bg-black/30 p-3">✓ Descuentos en “Pentest Web Express”</div>
          <div className="panel bg-black/30 p-3">✓ Recursos ofensivos listos para usar</div>
        </div>
      </div>

      {/* CTA final */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a className="btn" href="/projects" title="Ver proyectos">
          <FolderGit2 size={16} /> Ver proyectos
        </a>
        <a className="btn" href="mailto:contactopersafe@gmail.com?subject=Desbloqueo%20VAULT" title="Hablar ahora">
          <Mail size={16} /> HABLAME
        </a>
      </div>
    </section>
  );
}
