import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${site.name} — Red Team Portfolio`,
  description: site.meta.description,
  openGraph: {
    title: `${site.name} — Red Team Portfolio`,
    description: site.meta.description,
    images: [site.meta.ogImage],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${jetbrains.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 container mx-auto max-w-5xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
