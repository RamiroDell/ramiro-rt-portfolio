"use client";

import { motion } from "framer-motion";
import { ShieldAlert, UserCheck, LifeBuoy, TerminalSquare } from "lucide-react";

/* Mensaje menos técnico y más cercano al usuario final */
const items = [
  {
    icon: ShieldAlert,
    title: "Hacker",
    desc: "Hago trabajos de todo tipo (Etico), pideme lo que necesites...",
  },
  {
    icon: UserCheck,
    title: "Recuperación y soporte",
    desc: "Ayudo a recuperar cuentas, proteger accesos y resolver inconvenientes informáticos del día a día.",
  },
  {
    icon: LifeBuoy,
    title: "Acompaño víctimas de estafa",
    desc: "Guío pasos urgentes, reúno evidencias y doy recomendaciones claras para actuar de inmediato.",
  },
];

export default function ExecutiveSummary() {
  return (
    <div className="space-y-6">
      <section className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
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
              <h3 className="text-white font-semibold text-sm">{it.title}</h3>
            </div>

            <p className="text-gray-300 text-sm mt-3">{it.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Call to Action hacker style */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="flex justify-center"
      >
        <a
          href="mailto:ramirodellorto@gmail.com?subject=Asistencia%20urgente"
          className="btn text-lg px-6 py-3"
        >
          <TerminalSquare size={18} className="text-hacker-green" />
          ¿Necesitás ayuda ahora?
        </a>
      </motion.div>
    </div>
  );
}
