// /data/projects.ts
export type Project = {
  title: string;
  scope: string;        // Alcance
  methodology: string;  // Metodología (texto libre para descripción)
  findings: string;     // Hallazgos
  outcome: string;      // Resultado
  tags: string[];       // ← Etiquetas para filtros (normalizadas)
};

export const projects: Project[] = [
  {
    title: "Evaluación de Web Universitaria",
    scope: "Página web",
    methodology: "OWASP Top 10 + pruebas específicas sobre exposición de datos",
    findings: "Exposición de información sensible en endpoints que revelaban datos de la base de datos",
    outcome: "Actualización e implementación de nuevas medidas de seguridad",
    tags: ["OWASP"],
  },
  {
    title: "Prueba de autenticación en aplicación de gestión de usuarios",
    scope: "Aplicación interna con login y perfiles básicos",
    methodology: "PTES (fase de pruebas de autenticación)",
    findings: "Uso de contraseñas débiles sin políticas de complejidad",
    outcome: "Implementación propuesta de MFA y políticas de password hardening",
    tags: ["PTES"],
  },
  {
    title: "Auditoría web arGOS",
    scope: "Página web",
    methodology: "OWASP",
    findings: "Ausencia de cabeceras de seguridad (X-Frame-Options, CSP)",
    outcome: "Recomendaciones varias para endurecer cabeceras",
    tags: ["OWASP"],
  },
  {
    title: "Revisión de seguridad en panel administrativo",
    scope: "Panel web con CRUD de datos",
    methodology: "Caja gris con credenciales de usuario estándar",
    findings: "Escalamiento horizontal al modificar IDs en URL (IDOR)",
    outcome: "Validación de autorización a nivel backend",
    tags: ["Caja gris"],
  },
  {
    title: "Pentest en aplicación de reservas simples",
    scope: "Sistema de reservas online (turnos)",
    methodology: "NIST SP 800-115 (testing dinámico)",
    findings: "Falta de protección contra ataques de fuerza bruta",
    outcome: "Rate limiting, lockout y CAPTCHA propuestos",
    tags: ["NIST 800-115"],
  },
  {
    title: "Evaluación de seguridad de portal institucional",
    scope: "Sitio público con formulario de contacto",
    methodology: "OWASP Top 10",
    findings: "Validación insuficiente de entradas → riesgo de XSS reflejado",
    outcome: "Sanitización de datos y librerías de escape seguras",
    tags: ["OWASP"],
  },
  {
    title: "Análisis de seguridad en aplicación educativa",
    scope: "Portal de alumnos para ver notas",
    methodology: "PTES (fase de control de accesos)",
    findings: "Sesiones sin expiración, riesgo de hijacking",
    outcome: "Cookies HttpOnly y Secure; expiración de sesión",
    tags: ["PTES"],
  },
  {
    title: "Auditoría de aplicación en CMS genérico",
    scope: "Sitio corporativo montado en CMS popular",
    methodology: "OWASP Top 10",
    findings: "Plugins desactualizados con riesgo de XSS",
    outcome: "Plan de actualización y eliminación de plugins innecesarios",
    tags: ["OWASP"],
  },
  {
    title: "Pentest de aplicación de seguimiento básico",
    scope: "Web para seguimiento de pedidos",
    methodology: "Caja negra",
    findings: "IDs predecibles en URLs que exponían información",
    outcome: "Identificadores aleatorios y controles de autorización",
    tags: ["Caja negra"],
  },
];
