import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata = { title: "Experiencia" };

export default function Page() {
  return (
    <section className="panel p-6 md:p-8">
      <h2 className="text-white font-semibold text-xl mb-6">Experiencia</h2>
      <ExperienceTimeline />
    </section>
  );
}
