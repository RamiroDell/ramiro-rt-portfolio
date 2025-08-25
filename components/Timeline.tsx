import { ReactNode } from "react";

export function TimelineItem({ title, subtitle, period, children }: { title: string; subtitle: string; period: string; children: ReactNode; }) {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-1 h-2 w-2 bg-hacker-green rounded-full"></div>
      <div className="absolute left-0 top-1 bottom-0 w-px bg-white/10 translate-x-1"></div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{subtitle} • <span className="text-hacker-green">{period}</span></p>
      <div className="mt-2 text-gray-300">{children}</div>
    </div>
  );
}
