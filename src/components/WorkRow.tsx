import { ArrowOutgoing } from "./icons/Arrow";
import type { Project } from "../lib/data";

type Props = {
  p: Project;
  onOpen: (p: Project) => void;
  variant?: "card" | "row";
};

export function WorkRow({ p, onOpen, variant = "card" }: Props) {
  if (variant === "row") {
    return (
      <button
        onClick={() => onOpen(p)}
        className="
          group w-full grid items-center gap-x-4 gap-y-1 sm:gap-x-6 text-left relative
          grid-cols-[52px_1fr_32px]
          md:grid-cols-[80px_1.4fr_1fr_140px_120px_36px]
          py-6 sm:py-7 border-b border-midnight/10
          transition-[background] duration-standard ease-editorial hover:bg-surface
          rounded-md px-2 sm:px-4
        "
      >
        <span className="ovo-i text-signal text-[24px] tabular-nums">{p.num}</span>
        <div className="min-w-0">
          <h3 className="display-sans text-[22px] sm:text-[24px] leading-[1.15] tracking-tight group-hover:text-signal transition-colors duration-quick text-balance">
            {p.title}
          </h3>
          <div className="md:hidden mt-1.5 flex flex-wrap gap-x-3 text-[18px] opacity-60">
            <span>{p.client}</span>
            <span aria-hidden>·</span>
            <span>{p.category}</span>
            <span aria-hidden>·</span>
            <span>{p.year}</span>
          </div>
        </div>
        <span className="hidden md:block text-[18px]">{p.client}</span>
        <span className="hidden md:block text-[18px] opacity-60">{p.category}</span>
        <span className="hidden md:block text-[18px] opacity-60 text-right tabular-nums">
          {p.year}
        </span>
        <span
          className="
            hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full border border-midnight/30
            group-hover:bg-midnight group-hover:text-bone group-hover:border-midnight
            transition-all duration-standard self-center
          "
        >
          <ArrowOutgoing size={12} />
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={() => onOpen(p)}
      className="card card-hover group w-full text-left overflow-hidden flex flex-col"
    >
      {/* Preview block — solid midnight with big Ovo italic letterform */}
      <div className="relative aspect-[16/10] overflow-hidden bg-midnight on-dark">
        <div className="dot-bg-dark absolute inset-0 opacity-60" aria-hidden />
        <div className="noise" aria-hidden />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="ovo-i text-bone leading-none tracking-tight"
            style={{ fontSize: "clamp(120px, 16vw, 200px)" }}
          >
            {p.glyph}
          </span>
        </div>
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <span className="status-pill" style={{ padding: "6px 12px 6px 10px" }}>
            <span className="dot-signal" aria-hidden />
            <span className="text-[18px]">{p.category}</span>
          </span>
          <span className="text-[18px] text-bone/70 tabular-nums">{p.year}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-[18px] text-bone/70">
          <span className="truncate">{p.client}</span>
          <span className="tabular-nums">{p.duration}</span>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        <h3 className="display-sans text-[24px] sm:text-[28px] leading-[1.15] tracking-tight text-balance group-hover:text-signal transition-colors duration-quick">
          {p.title}
        </h3>
        <p className="body-md mt-3 muted line-clamp-3">{p.summary}</p>

        {p.metrics.length > 0 && (
          <div className="mt-6 pt-6 border-t border-midnight/10 grid grid-cols-3 gap-3">
            {p.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <div className="ovo-i text-signal text-[32px] sm:text-[36px] leading-none">
                  {m.value}
                </div>
                <div className="text-[18px] mt-2.5 muted leading-[1.3]">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.slice(0, 2).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-midnight/30 group-hover:bg-midnight group-hover:text-bone group-hover:border-midnight transition-all duration-standard">
            <ArrowOutgoing size={12} />
          </span>
        </div>
      </div>
    </button>
  );
}
