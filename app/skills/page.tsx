import SkillsGrid from "@/components/SkillsGrid";

export const metadata = { title: "Skills" };

export default function Page() {
  return (
    <section className="space-y-6">
      <SkillsGrid />
    </section>
  );
}
