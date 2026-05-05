import { ArrowOutgoing } from "./icons/Arrow";
import type { Writing } from "../lib/data";

type Props = {
  w: Writing;
  onClick?: () => void;
};

export function WriteRow({ w, onClick }: Props) {
  const dateLabel = new Date(w.date)
    .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    .toUpperCase();

  return (
    <button
      onClick={onClick}
      data-cursor="READ"
      className="
        group w-full grid items-center gap-3 sm:gap-6 text-left
        grid-cols-[1fr_36px]
        md:grid-cols-[110px_1fr_180px_70px_36px]
        py-5 sm:py-6 border-b border-midnight/10
        transition-[padding] duration-standard ease-editorial hover:pl-2
      "
    >
      <span className="hidden md:block text-[12px] font-medium tracking-wider text-midnight/55">
        {dateLabel}
      </span>
      <h3 className="ovo text-[18px] sm:text-[20px] md:text-[24px] xl:text-[28px] leading-[1.18] tracking-snug group-hover:text-signal transition-colors duration-standard text-balance">
        {w.title}
      </h3>
      <span className="hidden md:block text-[12px] tracking-wider uppercase text-midnight/55 font-medium">
        {w.category}
      </span>
      <span className="hidden md:block text-[12px] text-midnight/55 text-right">
        {w.read} MIN
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
    </button>
  );
}
