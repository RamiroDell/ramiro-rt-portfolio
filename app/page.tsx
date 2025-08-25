import TerminalHero from "@/components/TerminalHero";
import MatrixBackground from "@/components/MatrixBackground";
import HackerMenu from "@/components/HackerMenu"; // 👈 nuevo

export const metadata = { title: "Inicio" };

export default function Page() {
  return (
    <section className="relative">
      {/* Hero con matrix rain detrás */}
      <div className="relative">
        <MatrixBackground />
        <TerminalHero />
      </div>

      {/* Menú/tabla hacker */}
      <div className="mt-8">
        <HackerMenu />
      </div>
    </section>
  );
}
