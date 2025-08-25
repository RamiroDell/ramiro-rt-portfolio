"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, KeyRound, AlertTriangle, TerminalSquare, Shield, Sparkles } from "lucide-react";

const PASS = "ramiro";

// ✅ ASCII seguro (sin literales problemáticos)
const asciiLines = [
  "  ____            _        __           ",
  " |  _ \\ __ _  ___| | _____ / _| ___ _ __ ",
  " | |_) / _` |/ __| |/ / _ \\ |_ / _ \\ '__|",
  " |  _ < (_| | (__|   <  __/  _|  __/ |   ",
  " |_| \\_\\__,_|\\___|_|\\_\\___|_|  \\___|_|   ",
];

const logsBase = [
  "[scanner] buscando vectores de acceso...",
  "[osint] pista encontrada en robots.txt",
  "[console] hint: access /root | pass: ramiro",
  "[shell] preparando superficie de ataque...",
  "[rt] elevando privilegios visuales...",
];

export default function Page() {
  const [val, setVal] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const ticker = useRef<number | null>(null);

  // logs animados (solo visual)
  useEffect(() => {
    let i = 0;
    setLogs([]);
    if (ticker.current) window.clearInterval(ticker.current);
    ticker.current = window.setInterval(() => {
      setLogs((prev) => (i < logsBase.length ? [...prev, logsBase[i++]] : prev));
      if (i >= logsBase.length) window.clearInterval(ticker.current!);
    }, 700);
    return () => {
      if (ticker.current) window.clearInterval(ticker.current);
    };
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (val.trim().toLowerCase() === PASS) {
      setError("");
      setOk(true);
      setTimeout(() => (location.href = "/root/unlocked"), 750);
    } else {
      setOk(false);
      setError("INVALID TOKEN // ACCESS DENIED");
    }
  };

  return (
    <section className="relative panel p-6 md:p-8 overflow-hidden">
      {/* Scanline y glow de borde */}
      <div className="pointer-events-none absolute inset-0 opacity-[.035] bg-[linear-gradient(transparent_0_50%,#00ff9c22_50%)] bg-[length:1px_4px]" />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5 shadow-[0_0_60px_rgba(0,255,156,0.08)_inset]" />

      {/* Banner secreto */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 flex items-center gap-2 text-xs font-mono text-hacker-green"
      >
        <Shield size={14} className="text-hacker-green" />
        SECRET PATH DETECTED — <span className="text-gray-400">/root</span>
      </motion.div>

      {/* Título */}
      <div className="flex items-center gap-3">
        <Lock className="text-hacker-green" size={18} />
        <h1 className="text-white font-semibold text-xl">{"> ACCESS NODE"}</h1>
      </div>

      {/* ✅ ASCII seguro */}
      <pre className="mt-3 text-[10px] leading-3 text-hacker-green/80 select-none">
        {asciiLines.join("\n")}
      </pre>

      {/* Formulario */}
      <motion.form
        onSubmit={onSubmit}
        className="mt-6 space-y-4 max-w-md"
        animate={error ? { x: [-4, 4, -3, 3, 0] } : { x: 0 }}
        transition={{ duration: 0.25 }}
      >
        <label className="block text-sm text-gray-300">
          {"> enter pass:"}
          <div className="mt-2 flex items-center gap-2">
            <input
              type="password"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-gray-200 outline-none focus:border-hacker-green/50"
              placeholder="•••••••"
              aria-label="password"
            />
            <button
              type="submit"
              className={`btn ${ok ? "ring-1 ring-hacker-green/50" : ""}`}
              title="validar token"
            >
              <KeyRound size={16} /> validate
            </button>
          </div>
        </label>

        <AnimatePresence mode="wait" initial={false}>
          {error ? (
            <motion.div
              key="err"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-sm text-hacker-red flex items-center gap-2"
            >
              <AlertTriangle size={14} /> {error}
            </motion.div>
          ) : ok ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-sm text-hacker-green flex items-center gap-2"
            >
              <Sparkles size={14} /> ACCESS GRANTED // redirecting...
            </motion.div>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-xs text-gray-500"
            >
              [hint] OSINT lo revela todo. Probá algo obvio…
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>

      {/* Logs animados */}
      <div className="mt-8">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <TerminalSquare size={14} /> /var/log/access
        </div>
        <div className="rounded-lg border border-white/10 bg-black/30 p-3 font-mono text-[11px] text-gray-300">
          <AnimatePresence mode="popLayout">
            {logs.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-2"
              >
                <span className="text-hacker-green">~$</span>
                <span>{l}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Nota de descubrimiento */}
      <div className="mt-6 text-xs text-gray-400">
        <span className="text-hacker-green">[nota]</span> encontraste una ruta secreta. No todos llegan hasta acá.
      </div>
    </section>
  );
}
