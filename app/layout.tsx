import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsoleHint from "@/components/ConsoleHint"; // 👈 pista secreta en consola

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Ramiro Dell'Orto - Red Team Portfolio",
  description: "Portfolio ofensivo estilo hacker // Red Team & Pentesting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className={`${jetbrains.variable} min-h-screen flex flex-col`}>
        {/* 👇 Pista secreta en consola (access: /root | pass: ramiro) */}
        <ConsoleHint />

        {/* Header global */}
        <Header />

        {/* Contenido principal */}
        <main className="flex-1 container mx-auto max-w-5xl px-4 py-8">
          {children}
        </main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
