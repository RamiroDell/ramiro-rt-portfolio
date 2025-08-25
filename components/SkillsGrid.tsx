"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bug, Network, TerminalSquare, Search, FolderSearch,
  Globe, KeySquare, ShieldAlert, Eye, LockKeyhole,
  Server, Database, Radar
} from "lucide-react";

type Skill = { label: string; icon: any; color: string };
type Category = { name: string; items: Skill[]; extra?: Skill[] };

function useCountUp(end: number, durationMs = 800) {
  const [val, setVal] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const step = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const p = Math.min(1, (t - startRef.current) / durationMs);
      setVal(Math.round(p * end));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, durationMs]);

  return val;
}

const categories: Category[] = [
  // Pentesting: 8 +6
  {
    name: "[pentesting]",
    items: [
      { label: "Burp Suite Pro", icon: Bug, color: "text-hacker-green border-hacker-green/40" },
      { label: "OWASP ZAP", icon: Bug, color: "text-hacker-cyan border-hacker-cyan/40" },
      { label: "Nmap", icon: Network, color: "text-hacker-green border-hacker-green/40" },
      { label: "sqlmap", icon: Database, color: "text-hacker-red border-hacker-red/40" },
      { label: "Nikto", icon: Search, color: "text-hacker-green border-hacker-green/40" },
      { label: "Metasploit", icon: TerminalSquare, color: "text-hacker-cyan border-hacker-cyan/40" },
      { label: "Hydra", icon: KeySquare, color: "text-hacker-green border-hacker-green/40" },
      { label: "JohnTheRipper", icon: LockKeyhole, color: "text-hacker-red border-hacker-red/40" },
    ],
    extra: [
      { label: "wpscan", icon: Bug, color: "text-hacker-green border-hacker-green/40" },
      { label: "dirb", icon: FolderSearch, color: "text-hacker-cyan border-hacker-cyan/40" },
      { label: "Netcat", icon: TerminalSquare, color: "text-hacker-green border-hacker-green/40" },
      { label: "wfuzz", icon: Bug, color: "text-hacker-red border-hacker-red/40" },
      { label: "Aircrack-ng", icon: Network, color: "text-hacker-cyan border-hacker-cyan/40" },
      { label: "hashcat", icon: LockKeyhole, color: "text-hacker-red border-hacker-red/40" },
    ],
  },
  // Tooling Web / Exploits: 8 +5
  {
    name: "[tooling web / exploits]",
    items: [
      { label: "ffuf", icon: FolderSearch, color: "text-hacker-green border-hacker-green/40" },
      { label: "gobuster", icon: FolderSearch, color: "text-hacker-cyan border-hacker-cyan/40" },
      { label: "dirsearch", icon: Search, color: "text-hacker-green border-hacker-green/40" },
      { label: "wfuzz", icon: Bug, color: "text-hacker-red border-hacker-red/40" },
      { label: "WhatWeb", icon: Globe, color: "text-hacker-cyan border-hacker-cyan/40" },
      { label: "Sublist3r", icon: Eye, color: "text-hacker-green border-hacker-green/40" },
      { label: "Amass", icon: Eye, color: "text-hacker-green border-hacker-green/40" },
      { label: "wpscan", icon: Bug, color: "text-hacker-red border-hacker-red/40" },
    ],
    extra: [
      { label: "Aquatone", icon: Globe, color: "text-hacker-cyan border-hacker-cyan/40" },
      { label: "Arjun", icon: Search, color: "text-hacker-green border-hacker-green/40" },
      { label: "nuclei", icon: Radar, color: "text-hacker-green border-hacker-green/40" },
      { label: "XSStrike", icon: Bug, color: "text-hacker-red border-hacker-red/40" },
      { label: "DalFox", icon: Bug, color: "text-hacker-cyan border-hacker-cyan/40" },
    ],
  },
  // Red Team / Post-Exploitation: 8 +2
  {
    name: "[red team / post-exploitation]",
    items: [
      { label: "Cobalt Strike / Sliver", icon: ShieldAlert, color: "text-hacker-red border-hacker-red/40" },
      { label: "Empire", icon: TerminalSquare, color: "text-hacker-green border-hacker-green/40" },
      { label: "BloodHound", icon: Network, color: "text-hacker-cyan border-hacker-cyan/40" },
      { label: "SharpHound", icon: Network, color: "text-hacker-green border-hacker-green/40" },
      { label: "Mimikatz", icon: KeySquare, color: "text-hacker-green border-hacker-green/40" },
      { label: "CrackMapExec", icon: TerminalSquare, color: "text-hacker-red border-hacker-red/40" },
      { label: "Responder", icon: Bug, color: "text-hacker-green border-hacker-green/40" },
      { label: "Evil-WinRM", icon: TerminalSquare, color: "text-hacker-cyan border-hacker-cyan/40" },
    ],
    extra: [
      { label: "Impacket", icon: Server, color: "text-hacker-green border-hacker-green/40" },
      { label: "Rubeus", icon: KeySquare, color: "text-hacker-red border-hacker-red/40" },
    ],
  },
  // OSINT: 7 fijos (incluye Shodan premium)
  {
    name: "[osint]",
    items: [
      { label: "GHunt", icon: Eye, color: "text-hacker-green border-hacker-green/40" },
      { label: "Osintgram", icon: Eye, color: "text-hacker-cyan border-hacker-cyan/40" },
      { label: "Maltego", icon: Network, color: "text-hacker-green border-hacker-green/40" },
      { label: "SpiderFoot", icon: Bug, color: "text-hacker-red border-hacker-red/40" },
      { label: "theHarvester", icon: Search, color: "text-hacker-green border-hacker-green/40" },
      { label: "Recon-ng", icon: TerminalSquare, color: "text-hacker-cyan border-hacker-cyan/40" },
      { label: "Shodan (premium)", icon: Globe, color: "text-hacker-green border-hacker-green/40" },
    ],
  },
];

export default function SkillsGrid() {
  const [openCat, setOpenCat] = useState<Record<string, boolean>>({});
  const toggle = (name: string) => setOpenCat((s) => ({ ...s, [name]: !s[name] }));

  return (
    <div className="space-y-8">
      {categories.map((cat, ci) => {
        const total = cat.items.length + (cat.extra?.length ?? 0);
        const count = useCountUp(total, 700 + ci * 150);

        return (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
            className="panel p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">{cat.name}</h3>
              <div className="text-xs font-mono text-hacker-green/90">
                [{count} tools]
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {cat.items.map((it, i) => (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded border ${it.color} bg-hacker-panel/70 relative group`}
                >
                  <it.icon size={16} className={`${it.color.split(" ")[0]}`} />
                  <span className="text-xs text-gray-200">{it.label}</span>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-hacker-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            {cat.extra && (
              <div className="mt-4">
                <button onClick={() => toggle(cat.name)} className="btn text-sm">
                  {openCat[cat.name] ? "Ver menos" : "Ver más"}
                </button>

                <AnimatePresence initial={false}>
                  {openCat[cat.name] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4 flex flex-wrap gap-3"
                    >
                      {cat.extra.map((it, i) => (
                        <motion.div
                          key={it.label}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: i * 0.03 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={`flex items-center gap-2 px-3 py-2 rounded border ${it.color} bg-hacker-panel/70 relative group`}
                        >
                          <it.icon size={16} className={`${it.color.split(" ")[0]}`} />
                          <span className="text-xs text-gray-200">{it.label}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
