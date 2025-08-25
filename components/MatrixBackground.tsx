"use client";

import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      const { offsetWidth: w, offsetHeight: h } = canvas;
      if (canvas.width !== w) canvas.width = w;
      if (canvas.height !== h) canvas.height = h;
    };
    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    // Menos densidad en pantallas pequeñas
    const isSmall = typeof window !== "undefined" && window.innerWidth <= 640;
    const font = isSmall ? 12 : 14;
    const opacity = isSmall ? 0.14 : 0.2;

    let columns = Math.floor(canvas.width / font);
    let drops = new Array(columns).fill(1);
    const chars = "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let raf = 0;
    let last = 0;
    const targetFPS = isSmall ? 28 : 45;  // limita FPS en mobile
    const frameInterval = 1000 / targetFPS;

    const draw = (t: number) => {
      if (!last) last = t;
      const delta = t - last;
      if (delta < frameInterval) {
        raf = requestAnimationFrame(draw);
        return;
      }
      last = t;

      ctx.fillStyle = isSmall ? "rgba(8,11,12,0.10)" : "rgba(11,15,16,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff9c";
      ctx.globalAlpha = opacity;
      ctx.font = `${font}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[(Math.random() * chars.length) | 0];
        const x = i * font;
        const y = drops[i] * font;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    // Pausar cuando la pestaña no está visible
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Respeta reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReduced) {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
      <canvas ref={ref} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]" />
    </div>
  );
}
