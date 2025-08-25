import Link from "next/link";
import type { Route } from "next";

type Props = {
  title: string;
  desc: string;
  href: string; // puede ser externo (https) o interno (/ruta)
};

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

export default function ProjectCard({ title, desc, href }: Props) {
  const external = isExternal(href);

  return (
    <div className="panel p-6">
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm mt-1">{desc}</p>

      {external ? (
        // Enlace externo: usar <a>
        <a href={href} target="_blank" rel="noopener" className="btn mt-4 w-fit">
          Ver en GitHub →
        </a>
      ) : (
        // Ruta interna: usar <Link> tipado
        <Link href={href as Route} className="btn mt-4 w-fit">
          Ver más →
        </Link>
      )}
    </div>
  );
}
