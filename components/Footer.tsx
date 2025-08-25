import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="container mx-auto max-w-5xl px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            Access Granted // Red Team Portfolio
          </p>

          <div className="text-xs text-gray-400 flex items-center gap-3">
            <span className="opacity-40">|</span>
            <a href="https://github.com/RamiroDell" target="_blank" rel="noopener" className="hover:text-hacker-green">
              GitHub
            </a>
            <span className="opacity-40">|</span>
            <a href="https://www.linkedin.com/in/ramiro-dellorto/" target="_blank" rel="noopener" className="hover:text-hacker-green">
              LinkedIn
            </a>
          </div>
        </div>

        {/* 👇 Hint sutil estilo consola */}
        <div className="text-[10px] text-gray-500 mt-2">
          // <Link href="/root" className="hover:text-hacker-green">access</Link>
        </div>
      </div>
    </footer>
  );
}
