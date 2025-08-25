"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="relative pl-8">
      {/* Línea vertical */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10"></div>

      {experience.map((exp, i) => (
        <motion.div
          key={exp.company + i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative mb-10"
        >
          {/* Punto verde */}
          <div className="absolute -left-2 top-1 h-3 w-3 bg-hacker-green rounded-full shadow-glow"></div>

          {/* Header empresa/rol */}
          <div className="flex items-center gap-2 mb-1">
            <Briefcase size={16} className="text-hacker-green" />
            <h3 className="text-white font-semibold">
              {exp.company} — <span className="text-hacker-cyan">{exp.role}</span>
            </h3>
          </div>

          {/* Periodo */}
          <p className="text-xs text-gray-400 mb-3">[{exp.period}]</p>

          {/* Tareas */}
          <ul className="space-y-1 text-sm text-gray-300">
            {exp.tasks.map((t, idx) => (
              <li key={idx} className="before:content-['└──'] before:mr-2 before:text-hacker-green">
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
