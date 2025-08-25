# Portfolio Red Team — Ramiro Dell’Orto

Sitio personal orientado a seguridad ofensiva (Red Teaming, pentesting y OSINT) con estética “hacker”. Construido con Next.js (App Router), Tailwind CSS (v4) y Framer Motion. Incluye Inicio, Sobre mí, Experiencia, Skills, Proyectos y Contacto, más un apartado opcional oculto.

## Tecnologías

- Next.js 15 (App Router, `typedRoutes`)
- React 18
- Tailwind CSS v4
- Framer Motion
- lucide-react
- Deploy recomendado: Vercel

## Características

- Tema oscuro, tipografía monoespaciada, acentos verde/rojo.
- Animaciones sutiles (glitch, scanlines, micro‑interacciones).
- Contenido editable en `/content` (Markdown).
- Experiencia en línea de tiempo, proyectos expandibles, skills con “ver más”.
- Contacto por correo/LinkedIn/GitHub.
- Separación correcta server/client y rutas tipadas.

## Estructura

```
app/                # Rutas (App Router)
  about/            # Sobre mí
  experience/       # Experiencia
  skills/           # Skills
  projects/         # Proyectos
  contact/          # Contacto
  root/             # Apartado oculto (opcional)
components/         # UI: Hero, Timeline, Panels, Cards, etc.
content/            # Markdown editable (sobre mí, experiencia, skills, proyectos)
data/               # Datos tipados (proyectos, experiencia, site)
lib/                # Utilidades (Markdown, etc.)
public/             # Estáticos (favicon, og, CV)
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

Producción:

```bash
npm run build
npm run start
```

## Deploy en Vercel

1. Crear proyecto → importar repositorio de GitHub.
2. Node.js 20; Build Command: `next build`. Sin variables de entorno.
3. Probar rutas (`/`, `/about`, `/experience`, `/skills`, `/projects`, `/contact`) y, si corresponde, `/root` → `/root/unlocked`.

## Personalización

- Datos del sitio: `data/site.ts` (nombre, tagline, enlaces).
- Markdown: `/content` (sobre mí, experiencia, skills, proyectos).
- Estilos: `app/globals.css`.
- Favicon/OG: `public/`.
- Apartado “root”: ajustable o desactivable.

## Licencia

Uso personal. Reutilización permitida respetando licencias de dependencias.
