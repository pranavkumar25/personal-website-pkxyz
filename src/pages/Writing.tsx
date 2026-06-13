import { useMemo, useState } from "react";
import { Reveal } from "../components/Reveal";
import { WriteRow } from "../components/WriteRow";
import { KineticWords, FadeUp } from "../components/Kinetic";
import { ArrowRight } from "../components/icons/Arrow";
import { WRITINGS } from "../lib/data";

export function WritingPage() {
  const cats = useMemo(
    () => ["All", ...Array.from(new Set(WRITINGS.map((w) => w.category)))],
    []
  );
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? WRITINGS : WRITINGS.filter((w) => w.category === cat);
  const featured = WRITINGS[0];
  const rest = list.filter((w) => w.id !== featured.id);

  const dateLabel = new Date(featured.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="animate-page-fade">
      <section className="relative">
        <div className="shell-wide pt-[128px] sm:pt-[160px] pb-[60px]">
          <FadeUp>
            <span className="kicker">Writing</span>
          </FadeUp>
          <h1 className="display-sans display-2xl mt-7 text-balance">
            <KineticWords text="Notes from the" />
            <br />
            <span className="ovo-i text-signal">
              <KineticWords text="in between." delay={140} />
            </span>
          </h1>
          <FadeUp delay={180} className="mt-10 max-w-[60ch]">
            <p className="body-lg muted">
              Short essays on product, design, and what running a small business teaches you about both. Honest, mostly.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="shell-wide pb-[60px]">
        <Reveal>
          <button className="card card-hover w-full text-left p-8 sm:p-12 grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-14 group">
            <div>
              <span className="kicker">Featured · Most read</span>
              <h2 className="display-sans display-lg mt-6 tracking-tight text-balance group-hover:text-signal transition-colors duration-quick">
                {featured.title}
              </h2>
              <p className="body-lg mt-6 max-w-[56ch] muted">{featured.excerpt}</p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 meta">
                <span>{featured.category}</span>
                <span aria-hidden>·</span>
                <span>{dateLabel}</span>
                <span aria-hidden>·</span>
                <span>{featured.read} min read</span>
              </div>
              <span className="ulink mt-8 inline-flex">
                Read essay <ArrowRight size={14} />
              </span>
            </div>
            <div className="relative bg-midnight on-dark rounded-lg overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[320px]">
              <div className="dot-bg-dark absolute inset-0 opacity-60" aria-hidden />
              <div className="noise" aria-hidden />
              <span
                className="absolute right-6 bottom-2 ovo-i text-bone leading-[0.85] tracking-tighter"
                style={{ fontSize: "clamp(140px, 22vw, 260px)" }}
                aria-hidden
              >
                W
              </span>
              <span className="absolute left-5 top-5 status-pill">
                <span className="dot-signal" aria-hidden />
                Essay
              </span>
              <span className="absolute right-5 top-5 meta text-bone/55">
                {featured.read} min
              </span>
            </div>
          </button>
        </Reveal>
      </section>

      <section className="shell-wide pb-[100px] sm:pb-[140px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10 pb-6 border-b border-midnight/10">
          <span className="meta">
            All essays · <span className="ovo-i text-signal">{list.length}</span>
          </span>
          <div className="flex flex-wrap gap-1.5">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={"chip " + (cat === c ? "chip-active" : "")}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {rest.map((w, i) => (
            <Reveal key={w.id} delay={i * 50}>
              <WriteRow w={w} variant="card" />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
