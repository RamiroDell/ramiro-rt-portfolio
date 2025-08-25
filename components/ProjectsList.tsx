"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, TerminalSquare, Filter, X } from "lucide-react";
import { projects } from "@/data/projects";

const TAG_ORDER = ["OWASP", "PTES", "NIST 800-115", "Caja negra", "Caja gris"] as const;

function sortTags(a: string, b: string) {
  const ia = TAG_ORDER.indexOf(a as any);
  const ib = TAG_ORDER.indexOf(b as any);
  return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib) || a.localeCompare(b);
}

function Badge({ tag }: { tag: string }) {
  const base = "inline-flex items-center px-2 py-0.5 rounded border text-xs";
  const variant =
    tag === "OWASP" ? "border-hacker-green/40 text-hacker-green"
    : tag === "PTES" ? "border-hacker-cyan/40 text-hacker-cyan"
    : tag === "NIST 800-115" ? "border-hacker-red/40 text-hacker-red"
    : "border-white/20 text-gray-300";
  return <span className={`${base} ${variant}`}>{tag}</span>;
}

export default function ProjectsList() {
  // Estado de filtro y acordeones abiertos
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => s.add(t)));
    return Array.from(s).sort(sortTags);
  }, []);

  const filtered = useMemo(() => {
    if (!selected) return projects;
    return projects.filter(p => p.tags.includes(selected));
  }, [selected]);

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    projects.forEach(p => p.tags.forEach(t => m.set(t, (m.get(t) || 0) + 1)));
    return m;
  }, []);

  const toggle = (i: number) => setOpen(s => ({ ...s, [i]: !s[i] }));

  return (
    <div className="space-y-4">
      {/* Barra de filtros */}
      <div className="panel p-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Filter size={16} className="text-hacker-green" />
            <span>Filtrar por metodología</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelected(null)}
              className={`btn ${!selected ? "bg-hacker-green/10" : ""}`}
              title="Ver todo"
            >
              Todos
              {!selected && <X size={16} />}
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelected(tag === selected ? null : tag)}
                className={`btn ${selected === tag ? "bg-hacker-green/10" : ""}`}
                title={`Filtrar: ${tag}`}
              >
                <Badge tag={tag} />
                <span className="text-xs opacity-70">×{counts.get(tag) || 0}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de proyectos filtrados */}
      {filtered.length === 0 && (
        <div className="panel p-6 text-sm text-gray-400">
          No hay proyectos para el filtro seleccionado.
        </div>
      )}

      {filtered.map((p, i) => {
        const idx = projects.indexOf(p); // índice estable del proyecto en la fuente
        return (
          <div key={p.title} className="panel p-0 overflow-hidden">
            {/* Header tipo “terminal” */}
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <TerminalSquare size={18} className="text-hacker-green" />
                <h3 className="text-white font-semibold">{p.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                {/* Badges */}
                <div className="hidden md:flex gap-2 mr-2">
                  {p.tags.sort(sortTags).map(t => <Badge key={t} tag={t} />)}
                </div>

                <button
                  onClick={() => toggle(idx)}
                  className="btn"
                  aria-expanded={!!open[idx]}
                  aria-controls={`proj-${idx}`}
                >
                  Detalles
                  <ChevronDown
                    className={`transition-transform ${open[idx] ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
              </div>
            </div>

            {/* Cuerpo con animación */}
            <AnimatePresence initial={false}>
              {open[idx] && (
                <motion.div
                  id={`proj-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-5 pb-5 border-t border-white/10"
                >
                  {/* Badges visibles también en mobile */}
                  <div className="flex md:hidden gap-2 mt-4">
                    {p.tags.sort(sortTags).map(t => <Badge key={t} tag={t} />)}
                  </div>

                  <ul className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <li>
                      <span className="text-hacker-green">[alcance]</span> {p.scope}
                    </li>
                    <li>
                      <span className="text-hacker-green">[metodología]</span> {p.methodology}
                    </li>
                    <li className="md:col-span-2">
                      <span className="text-hacker-green">[hallazgos]</span> {p.findings}
                    </li>
                    <li className="md:col-span-2">
                      <span className="text-hacker-green">[resultado]</span> {p.outcome}
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
