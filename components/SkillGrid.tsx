import { Shield, Network, Bug, Cog } from "lucide-react";

export default function SkillGrid() {
  const categories = [
    {
      icon: Shield,
      title: "Red Team / Ofensivas",
      items: ["Maltego", "SpiderFoot", "Nmap", "Metasploit", "Mimikatz", "Hydra"]
    },
    {
      icon: Bug,
      title: "Web App Security",
      items: ["Burp Suite Pro", "OWASP ZAP", "sqlmap", "wfuzz", "XSStrike", "SecLists"]
    },
    {
      icon: Network,
      title: "OSINT",
      items: ["GHunt", "Osintgram", "Maltego", "SpiderFoot"]
    },
    {
      icon: Cog,
      title: "Plataformas / Marcos",
      items: ["Kali Linux (experto)", "Windows Server", "Linux", "MITRE ATT&CK", "PTES", "OWASP ASVS", "CIS Controls"]
    }
  ] as const;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {categories.map((cat) => (
        <div key={cat.title} className="panel p-6">
          <div className="flex items-center gap-3">
            <cat.icon className="text-hacker-green" size={20} />
            <h3 className="font-semibold text-white">{cat.title}</h3>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-300">
            {cat.items.map((i) => (
              <li key={i} className="before:content-['[*]'] before:text-hacker-green before:mr-2">{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
