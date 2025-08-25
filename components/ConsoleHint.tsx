// components/ConsoleHint.tsx
"use client";
import { useEffect } from "react";

export default function ConsoleHint() {
  useEffect(() => {
    // mensaje vistoso en consola
    // eslint-disable-next-line no-console
    console.log("%caccess: /root | pass: ramiro", "color:#00ff9c;font-weight:bold");
  }, []);
  return null;
}
