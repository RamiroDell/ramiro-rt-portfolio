import ProjectsList from "@/components/ProjectsList";

export const metadata = { title: "Proyectos" };

export default function Page() {
  return (
    <section className="space-y-6">
      <div className="panel p-6 md:p-8">
        <h2 className="text-white font-semibold text-xl">Proyectos</h2>
        <p className="text-gray-400 text-sm mt-2">
          Casos reales resumidos — hacé clic en “Detalles” para expandir cada proyecto.
        </p>
      </div>

      <ProjectsList />
    </section>
  );
}
