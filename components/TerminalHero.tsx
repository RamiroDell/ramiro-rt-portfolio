"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const message = `> Welcome to ${site.name} Red Team Portfolio`;

export default function TerminalHero() {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if (i > message.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="panel p-8 md:p-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="text-sm text-gray-400 mb-3">/bin/portfolio</div>
        <h1 className="text-2xl md:text-4xl font-bold text-white glitch" data-text={message}>
          {text}<span className="cursor" />
        </h1>
        <p className="mt-4 text-gray-300">
          Especialista en Red Team y Seguridad Ofensiva — simulación de amenazas, pentesting y ciberinteligencia.
        </p>
      </motion.div>
    </section>
  );
}
