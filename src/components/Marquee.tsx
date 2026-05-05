type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-midnight/15 py-6 sm:py-8">
      <div className="marquee-track items-center text-midnight/85">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="ovo whitespace-nowrap leading-none inline-flex items-center"
            style={{ fontSize: "clamp(40px, 6.4vw, 84px)" } as React.CSSProperties}
          >
            {it}
            <span
              aria-hidden
              className="inline-block mx-7 sm:mx-9 w-2 h-2 rounded-full bg-signal align-middle"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
