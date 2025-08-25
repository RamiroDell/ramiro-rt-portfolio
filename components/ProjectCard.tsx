import Link from "next/link";

export default function ProjectCard({ title, desc, href }: { title: string; desc: string; href: string; }) {
  return (
    <div className="panel p-5">
      <div className="text-xs text-gray-500 mb-1">console.log</div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm mt-1">{desc}</p>
      <Link href={href} className="btn mt-4 w-fit">Ver en GitHub →</Link>
    </div>
  );
}
