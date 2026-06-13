import { useEffect, useRef, useState } from "react";
import { CAPABILITIES } from "../lib/data";

/**
 * Sticky scroll capabilities. The numeral on the left pins while the lanes
 * on the right scroll. This is the "Practice / 04 lanes" pattern preserved
 * from the previous design.
 */
export function StickyDisciplines() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-lane]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = items.indexOf(e.target as HTMLElement);
            if (idx >= 0) setActive(idx);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, []);

  const total = CAPABILITIES.length;

  return (
    <div ref={ref} className="grid md:grid-cols-12 md:gap-14">
      <aside className="hidden md:block md:col-span-5 md:sticky md:top-[120px] md:self-start">
        <div className="meta">Capabilities · 04 lanes</div>
        <div className="mt-7 relative">
          <div
            className="ovo-i leading-[0.85] tracking-tightest"
            style={{ fontSize: "clamp(128px, 18vw, 224px)" }}
            aria-hidden
          >
            <span className="text-signal">{String(active + 1).padStart(2, "0")}</span>
            <span className="opacity-20">/{String(total).padStart(2, "0")}</span>
          </div>

          <div className="mt-10 space-y-3">
            {CAPABILITIES.map((s, i) => (
              <div
                key={s.num}
                className={`flex items-baseline gap-4 transition-all duration-standard ${
                  i === active ? "opacity-100 translate-x-0" : "opacity-30 -translate-x-1"
                }`}
              >
                <span className="meta tabular-nums w-7">{s.num}</span>
                <span
                  className={
                    "display-sans text-[24px] sm:text-[28px] tracking-tight " +
                    (i === active ? "text-midnight" : "text-midnight")
                  }
                >
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="md:col-span-7 flex flex-col">
        {CAPABILITIES.map((s, i) => (
          <article
            key={s.num}
            data-lane
            className="min-h-0 md:min-h-[42vh] flex flex-col justify-center py-7 sm:py-9"
          >
            <div className="flex items-center gap-3">
              <span className="ovo-i text-signal text-[26px] tabular-nums">{s.num}</span>
              <span className="hr flex-1" />
              <span className="meta tabular-nums">
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
            <h3 className="display-sans display-md mt-6 tracking-tight whitespace-nowrap">
              {s.name}
            </h3>
            <p className="ovo-i text-signal text-[22px] sm:text-[26px] mt-4">
              {s.intent}
            </p>
            <p className="body-md mt-6 max-w-[48ch] muted">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-7">
              {s.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
