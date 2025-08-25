// /data/experience.ts
export type Experience = {
  company: string;
  role: string;
  period: string;
  tasks: string[];
};

export const experience: Experience[] = [
  {
    company: "UNNE",
    role: "Analista de Seguridad Informática",
    period: "Jul 2025 – Presente",
    tasks: [
      "Gestión de riesgos tecnológicos institucionales",
      "Diseño de políticas de ciberseguridad (NIST 800-115, CIS Controls)",
      "Implementación de estrategias de ciberresiliencia",
    ],
  },
  {
    company: "argOS",
    role: "Tool Tester Ciberinteligencia",
    period: "Mar 2025 – Presente",
    tasks: [
      "Evaluación de herramientas OSINT en LATAM",
      "Documentación estructurada e integración en ecosistema de inteligencia",
      "Trazabilidad de amenazas a MITRE ATT&CK",
    ],
  },
  {
    company: "Consultor Independiente",
    role: "Red Team",
    period: "Ene 2022 – Presente",
    tasks: [
      "Pentesting y Red Team con TTPs mapeadas a MITRE ATT&CK y PTES",
      "Pentesting en +15 aplicaciones web (OWASP Top 10)",
      "Elaboración de reportes técnicos y ejecutivos con recomendaciones priorizadas",
    ],
  },
  {
    company: "Mercober",
    role: "Administrador de Sistemas",
    period: "Mar 2023 – Dic 2024",
    tasks: [
      "Monitoreo ofensivo de infraestructura IT",
      "Administración de sistemas Linux/Windows",
      "Gestión de incidentes de seguridad y hardening",
    ],
  },
];
