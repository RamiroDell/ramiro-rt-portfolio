import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        hacker: {
          bg: "#0b0f10",
          panel: "#101417",
          green: "#00ff9c",
          red: "#ff3864",
          cyan: "#7df9ff"
        }
      },
      boxShadow: {
        glow: "0 0 10px rgba(0,255,156,0.3)",
      },
      keyframes: {
        cursor: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        },
        glitch: {
          "0%": { clipPath: "inset(0 0 0 0)" },
          "20%": { clipPath: "inset(10% 0 0 0)" },
          "40%": { clipPath: "inset(0 0 15% 0)" },
          "60%": { clipPath: "inset(5% 0 10% 0)" },
          "80%": { clipPath: "inset(0 0 5% 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        }
      },
      animation: {
        cursor: "cursor 1s step-end infinite",
        glitch: "glitch 1.5s ease-in-out infinite alternate"
      }
    },
  },
  plugins: [],
};
export default config;
