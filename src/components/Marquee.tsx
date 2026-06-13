type MarqueeProps = {
  items: string[];
  onDark?: boolean;
};

/**
 * Marquee strip. Ovo italic items with a small Signal dot between.
 */
export function Marquee({ items, onDark = false }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={
        "overflow-hidden py-6 sm:py-8 border-y group " +
        (onDark
          ? "border-bone/15 bg-midnight text-bone"
          : "border-midnight/10 bg-bone text-midnight")
      }
    >
      <div className="marquee-track items-center group-hover:[animation-play-state:paused]">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="ovo-i whitespace-nowrap inline-flex items-center leading-none"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {it}
            <span
              aria-hidden
              className="inline-block mx-7 sm:mx-12 w-1.5 h-1.5 rounded-full bg-signal align-middle"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
