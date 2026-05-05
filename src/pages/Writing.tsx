import { useMemo, useState } from "react";
import { Reveal } from "../components/Reveal";
import { WriteRow } from "../components/WriteRow";
import { WRITINGS } from "../lib/data";

export function WritingPage() {
  const cats = useMemo(
    () => ["All", ...Array.from(new Set(WRITINGS.map((w) => w.category)))],
    []
  );
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? WRITINGS : WRITINGS.filter((w) => w.category === cat);
  const featured = WRITINGS[0];

  const dateLabel = new Date(featured.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="animate-page-fade">
      <section className="shell pt-[112px] sm:pt-[128px] md:pt-[152px] pb-8">
        <Reveal className="eyebrow">Field notes · Essays</Reveal>
        <Reveal
          as="h1"
          className="ovo mt-6 sm:mt-8 leading-[0.92] tracking-tightest"
          style={{ fontSize: "clamp(64px, 12vw, 184px)" } as React.CSSProperties}
        >
          Field
          <br />
          <i>notes.</i>
        </Reveal>
        <Reveal className="body-lg mt-12 sm:mt-14 max-w-[58ch]">
          Honest writing about design, product, business, and the actual mechanics of getting good work shipped.
        </Reveal>
      </section>

      <section className="shell pb-[64px]">
        <Reveal>
          <div
            className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 py-10 md:py-12 border-t border-b border-midnight/15"
            data-cursor="READ"
          >
            <div>
              <div className="meta">Featured · Most read</div>
              <h2
                className="ovo mt-5 leading-[1.0] tracking-tighter text-balance"
                style={{ fontSize: "clamp(32px, 4.6vw, 64px)" } as React.CSSProperties}
              >
                {featured.title}
              </h2>
              <p className="text-[15px] sm:text-[17px] leading-[1.55] mt-7 max-w-[52ch] text-ink">
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 meta">
                <span>{featured.category}</span>
                <span>{dateLabel}</span>
                <span>{featured.read} min read</span>
              </div>
            </div>
            <div className="bg-midnight text-bone aspect-[16/10] md:aspect-auto min-h-[260px] relative overflow-hidden">
              <span
                className="absolute right-6 bottom-2 font-serif italic text-bone/95 leading-[0.85] tracking-tighter"
                style={{ fontSize: "clamp(120px, 14vw, 180px)" } as React.CSSProperties}
              >
                W.
              </span>
              <span className="absolute left-6 top-6 meta text-bone/55">Fig · 04</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="shell pb-[80px] sm:pb-[120px]">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              data-cursor=""
              className={
                "px-4 py-2 border rounded-full text-[13px] transition-colors duration-quick " +
                (cat === c
                  ? "bg-midnight text-bone border-midnight"
                  : "border-midnight/20 hover:border-midnight")
              }
            >
              {c}
            </button>
          ))}
        </div>
        <div className="border-t border-midnight/15 mt-6">
          {list.map((w) => (
            <WriteRow key={w.id} w={w} />
          ))}
        </div>
      </section>
    </div>
  );
}
