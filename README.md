# Ramiro Dell’Orto — Red Team Portfolio (Next.js + Tailwind + Framer Motion)

**Tema:** hacker/terminal, modo oscuro por defecto, tipografía monoespaciada.  
**Stack:** Next.js (App Router), TailwindCSS, Framer Motion, Markdown (editable), API contact con Nodemailer.

## 🚀 Rápido inicio

```bash
# 1) Instalar dependencias
pnpm i    # o npm i / yarn

# 2) Variables de entorno (crear .env.local)
cp .env.example .env.local
# Completa SMTP_HOST/PORT/USER/PASS y CONTACT_TO/CONTACT_FROM

# 3) Ejecutar en local
pnpm dev  # o npm run dev / yarn dev

# 4) Build & start
pnpm build && pnpm start

# 5) Deploy en Vercel
# - Subir repo a GitHub
# - Importar en Vercel
# - Configurar variables de entorno en Settings > Environment Variables
```

## ✏️ Editar tu CV (Markdown)

Todo el contenido está en `/content/*.md`. Solo edita esos archivos para actualizar tu CV:
- `about.md` — Sobre mí / Resumen profesional
- `experience.md` — Experiencia en formato Markdown
- `skills.md` — Matriz de habilidades
- `projects.md` — Proyectos con links

También puedes ajustar enlaces y metadatos en `/data/site.ts`.

## 📩 Formulario de Contacto (Nodemailer)

El endpoint está en `/app/api/contact/route.ts` y utiliza **SMTP**. Define:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `CONTACT_TO` (destinatario)
- `CONTACT_FROM` (remitente)
- Opcional: `RECAPTCHA_SECRET` si quieres integrar reCAPTCHA (no incluido por defecto).

> En Vercel, ve a *Project Settings → Environment Variables* y agrega estas claves.

## 🧪 Tecnologías

- Next.js (App Router, Server Components)
- TailwindCSS (dark mode por clase)
- Framer Motion (animaciones sutiles)
- Remark + remark-html (render de Markdown)
- Lucide-react (iconos minimalistas)

## 🛠️ Estructura de carpetas

```
app/                # Rutas (App Router), layout y páginas
  api/contact/      # Endpoint del formulario
components/         # Componentes UI (Terminal, Timeline, Cards, etc.)
content/            # Markdown editable
data/               # Config del sitio (links, nombre, etc.)
public/             # Assets estáticos (favicon, og)
styles/             # (opcional) estilos adicionales
```

## 🔒 Seguridad

- Validación básica con `zod` no requerida; aquí se hace validación manual simple.
- HoneyPot `website` para bots.
- Recomendado: agregar rate limiting (middleware) o reCAPTCHA si recibes spam.

## 📄 Licencia

MIT — úsalo y modifícalo libremente.
