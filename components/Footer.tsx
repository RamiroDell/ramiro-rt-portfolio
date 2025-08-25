import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="container mx-auto max-w-5xl px-4 py-6 text-xs flex items-center justify-between">
        <p className="text-gray-400">© {new Date().getFullYear()} {site.name}</p>
        <p className="text-hacker-green">Access Granted // Red Team Portfolio</p>
      </div>
    </footer>
  );
}
