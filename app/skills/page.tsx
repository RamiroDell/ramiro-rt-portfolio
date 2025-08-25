import SkillGrid from "@/components/SkillGrid";

export const metadata = { title: "Skills" };

export default function Page() {
  return (
    <section className="space-y-6">
      <SkillGrid />
    </section>
  );
}
