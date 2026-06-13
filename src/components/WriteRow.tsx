import { ArrowOutgoing } from "./icons/Arrow";
import type { Writing } from "../lib/data";

type Props = {
  w: Writing;
  onClick?: () => void;
  variant?: "card" | "row";
};

export function WriteRow({ w, onClick, variant = "row" }: Props) {
  const dateLabel = new Date(w.date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  if (variant === "card") {
    return (
      <button
        onClick={onClick}
        className="card card-hover group w-full text-left p-6 sm:p-7 flex flex-col gap-5 h-full"
      >
        <div className="flex items-center justify-between">
          <span className="chip" style={{ padding: "5px 12px" }}>
            {w.category}
          </span>
          <span className="meta tabular-nums">{dateLabel}</span>
        </div>
        <h3 className="display-sans text-[22px] sm:text-[24px] leading-[1.2] tracking-tight text-balance group-hover:text-signal transition-colors duration-quick">
          {w.title}
        </h3>
        <p className="body-md muted line-clamp-3">{w.excerpt}</p>
        <div className="mt-auto pt-5 border-t border-midnight/10 flex items-center justify-between">
          <span className="meta">{w.read} min read</span>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-midnight/30 group-hover:bg-midnight group-hover:text-bone group-hover:border-midnight transition-all duration-standard">
            <ArrowOutgoing size={12} />
          </span>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="
        group w-full grid items-center gap-x-4 gap-y-1 sm:gap-x-6 text-left
        grid-cols-[1fr_32px]
        md:grid-cols-[120px_1fr_160px_80px_36px]
        py-5 sm:py-6 border-b border-midnight/10
        transition-[background] duration-standard ease-editorial hover:bg-surface
        rounded-md px-2 sm:px-4
      "
    >
      <span className="hidden md:block text-[18px] font-medium tabular-nums opacity-60">
        {dateLabel}
      </span>
      <div className="min-w-0">
        <h3 className="display-sans text-[20px] sm:text-[22px] leading-[1.25] tracking-tight text-balance group-hover:text-signal transition-colors duration-quick">
          {w.title}
        </h3>
        <div className="md:hidden mt-1 flex flex-wrap gap-x-3 text-[18px] opacity-60">
          <span>{dateLabel}</span>
          <span aria-hidden>·</span>
          <span>{w.category}</span>
          <span aria-hidden>·</span>
          <span>{w.read} min</span>
        </div>
      </div>
      <span className="hidden md:block text-[18px] opacity-60">{w.category}</span>
      <span className="hidden md:block text-[18px] opacity-60 text-right">{w.read} min</span>
      <span
        className="
          hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full
          border border-midnight/30 self-center
          group-hover:bg-midnight group-hover:text-bone group-hover:border-midnight
          transition-all duration-standard
        "
      >
        <ArrowOutgoing size={12} />
      </span>
    </button>
  );
}
