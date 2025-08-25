import AboutHero from "@/components/AboutHero";
import AboutStats from "@/components/AboutStats";
import ExecutiveSummary from "@/components/ExecutiveSummary"; // 👈 nuevo
import AnimatedMarkdown from "@/components/AnimatedMarkdown";
import { renderMarkdown } from "@/lib/markdown";

export const metadata = { title: "Sobre mí" };

export default async function Page() {
  const html = await renderMarkdown("about.md");

  return (
    <section className="space-y-6">
      <AboutHero />
      <AboutStats />

      {/* Resumen ejecutivo de 3 bullets */}
      <ExecutiveSummary />

      {/* Resumen extendido (Markdown animado) */}
      <div className="panel p-6 md:p-8">
        <div className="text-xs text-gray-500 mb-2">/content/about.md</div>
        <AnimatedMarkdown html={html} />
      </div>
    </section>
  );
}
