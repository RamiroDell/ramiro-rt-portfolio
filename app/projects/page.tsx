import { renderMarkdown } from "@/lib/markdown";
import Markdown from "@/components/Markdown";

export const metadata = { title: "Proyectos" };

export default async function Page() {
  const html = await renderMarkdown("projects.md");
  return (
    <section className="panel p-6 md:p-8">
      <h2 className="text-white font-semibold text-xl mb-4">Proyectos</h2>
      <Markdown html={html} />
    </section>
  );
}
