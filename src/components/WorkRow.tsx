import { useRef } from "react";
import { ArrowOutgoing } from "./icons/Arrow";
import type { Project } from "../lib/data";

type Props = {
  p: Project;
  onOpen: (p: Project) => void;
};

const PREVIEW_W = 260;
const PREVIEW_H = 180;

export function WorkRow({ p, onOpen }: Props) {
  const rowRef = useRef<HTMLButtonElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const r = rowRef.current?.getBoundingClientRect();
    if (!r || !previewRef.current) return;
    // Clamp the preview position so it stays inside the row.
    const margin = 16;
    const x = Math.min(
      Math.max(e.clientX - r.left, PREVIEW_W / 2 + margin),
      r.width - PREVIEW_W / 2 - margin
    );
    const y = Math.min(
      Math.max(e.clientY - r.top, PREVIEW_H / 2 + margin),
      r.height - PREVIEW_H / 2 - margin
    );
    previewRef.current.style.left = x + "px";
    previewRef.current.style.top = y + "px";
  };

  return (
    <button
      ref={rowRef}
      onMouseMove={onMove}
      onClick={() => onOpen(p)}
      data-cursor="OPEN"
      className="
        group w-full grid items-center gap-4 sm:gap-6 text-left relative
        grid-cols-[40px_1fr_36px]
        md:grid-cols-[60px_1fr_180px_180px_60px_36px]
        py-6 sm:py-7 md:py-8 border-b border-midnight/10
        transition-[padding] duration-editorial ease-editorial
        hover:pl-3
      "
    >
      <span className="text-[12px] sm:text-[13px] font-medium tracking-wider text-midnight/55 tabular-nums">
        {p.num}
      </span>
      <h3
        className="ovo leading-[1.0] tracking-tighter group-hover:text-signal transition-colors duration-standard"
        style={{ fontSize: "clamp(22px, 3.4vw, 50px)" } as React.CSSProperties}
      >
        {p.title}
      </h3>
      <span className="hidden md:block text-[14px] truncate">{p.client}</span>
      <span className="hidden md:block text-[13px] text-midnight/55 truncate">{p.role}</span>
      <span className="hidden md:block text-[13px] text-midnight/55 text-right tracking-wide font-medium tabular-nums">
        {p.year}
      </span>
      <span
        className="
          inline-flex items-center justify-center w-9 h-9 rounded-full
          border border-midnight transition-all duration-editorial ease-editorial
          group-hover:bg-midnight group-hover:text-bone group-hover:-rotate-45
        "
      >
        <ArrowOutgoing size={12} />
      </span>

      <div
        ref={previewRef}
        className="hidden md:block absolute pointer-events-none opacity-0 group-hover:opacity-100 z-10 -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100 transition-[opacity,transform] duration-editorial ease-editorial overflow-hidden bg-midnight text-bone shadow-[0_24px_60px_rgba(0,0,35,0.25)]"
        style={{ width: PREVIEW_W + "px", height: PREVIEW_H + "px" }}
        aria-hidden
      >
        <span className="absolute inset-0 flex items-center justify-center font-serif italic text-[120px] leading-none tracking-tight">
          {p.glyph}
        </span>
        <span className="absolute left-3.5 top-3 text-[10px] tracking-widest uppercase text-bone/55">
          {p.category} · {p.year}
        </span>
        <span className="absolute left-3.5 bottom-3 text-[10px] tracking-widest uppercase text-bone/55">
          Fig · {p.num}
        </span>
      </div>
    </button>
  );
}
