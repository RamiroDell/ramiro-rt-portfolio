import TerminalHero from "@/components/TerminalHero";

export default function Page() {
  return (
    <div className="space-y-8">
      <TerminalHero />
      <section className="grid md:grid-cols-3 gap-6">
        <div className="panel p-6">
          <h3 className="text-white font-semibold">whoami</h3>
          <p className="text-sm text-gray-300 mt-2">
            Analista de Ciberseguridad con más de 3 años en Red Team, pentesting y ciberinteligencia. Enfoque en simulación de amenazas mapeadas a MITRE ATT&CK y PTES.
          </p>
        </div>
        <div className="panel p-6">
          <h3 className="text-white font-semibold">skills</h3>
          <p className="text-sm text-gray-300 mt-2">Kali Linux, Burp Suite Pro, Nmap, Metasploit, OSINT (GHunt, Osintgram), OWASP, CIS.</p>
        </div>
        <div className="panel p-6">
          <h3 className="text-white font-semibold">contact</h3>
          <p className="text-sm text-gray-300 mt-2">¿Colaboremos? Visita la sección Contacto para escribirme.</p>
        </div>
      </section>
    </div>
  );
}
