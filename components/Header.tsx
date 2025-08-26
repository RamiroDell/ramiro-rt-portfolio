"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import type { Route } from "next";

const nav: { href: Route; label: string }[] = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre mí" },
  { href: "/experience", label: "Experiencia" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Proyectos" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-hacker-panel/70 backdrop-blur">
      <div className="mx-auto max-w-5xl px-3 sm:px-4">
        <div className="h-14 md:h-16 flex items-center justify-between">
          {/* Brand normal → vuelve a home, sin acceso root */}
          <div className="flex items-center gap-2">
            <Shield className="text-hacker-green shrink-0" size={16} />
            <Link
              href="/"
              className="truncate text-xs sm:text-sm md:text-base text-white hover:text-hacker-green transition-colors"
            >
              &lt;Ramiro Dell’Orto/&gt;
            </Link>
          </div>

          {/* Nav desktop */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-hacker-green transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

         
          <div className="md:hidden">
            <button
              aria-label="Abrir menú"
              className="btn px-3 py-1.5"
              onClick={() => setOpen(true)}
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Panel móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobileMenu"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur"
          >
            <div className="mx-auto max-w-5xl px-3 sm:px-4">
              <div className="h-14 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="text-hacker-green" size={16} />
                  <Link
                    href="/"
                    className="truncate text-sm text-white hover:text-hacker-green transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    &lt;Ramiro Dell’Orto/&gt;
                  </Link>
                </div>
                <button
                  aria-label="Cerrar menú"
                  className="btn px-3 py-1.5"
                  onClick={() => setOpen(false)}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-2">
                <div className="panel p-3">
                  <ul className="flex flex-col divide-y divide-white/5">
                    {nav.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block px-2 py-3 text-sm text-gray-200 hover:text-hacker-green transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
