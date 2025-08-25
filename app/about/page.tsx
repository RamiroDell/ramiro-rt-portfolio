import { renderMarkdown } from "@/lib/markdown";
import Markdown from "@/components/Markdown";

export const metadata = { title: "Sobre mí" };

export default async function Page() {
  const html = await renderMarkdown("about.md");
  return (
    <section className="panel p-6 md:p-8">
      <h2 className="text-white font-semibold text-xl mb-4">Sobre mí</h2>
      <Markdown html={html} />
    </section>
  );
}
