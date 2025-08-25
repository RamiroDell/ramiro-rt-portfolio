"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedMarkdown({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger progresivo por bloque: 0.0s, 0.06s, 0.12s, ...
    const root = ref.current;
    if (!root) return;
    const blocks = Array.from(root.querySelectorAll(":scope > *")) as HTMLElement[];
    blocks.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.06}s`;
    });
  }, [html]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35 }}
      // Clases: 'prose' para tipografía, 'prose-invert' para dark,
      // 'prose-rt' (custom) con look hacker, y 'prose-animated' para las animaciones por bloque
      className="prose prose-invert max-w-none prose-rt prose-animated"
      ref={ref}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
