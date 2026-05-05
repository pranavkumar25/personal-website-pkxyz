import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { WorkRow } from "../components/WorkRow";
import { WriteRow } from "../components/WriteRow";
import { Marquee } from "../components/Marquee";
import { ArrowOutgoing, ArrowRight } from "../components/icons/Arrow";
import { Mark } from "../components/Mark";
import { PROJECTS, WRITINGS, SERVICES, MARQUEE, type Project, type Route } from "../lib/data";

type Props = {
  go: (r: Route) => void;
  openProject: (p: Project) => void;
};

export function HomePage({ go, openProject }: Props) {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const recent = WRITINGS.slice(0, 3);

  return (
    <div className="animate-page-fade">
      {/* HERO */}
      <section className="shell pt-[112px] sm:pt-[128px] md:pt-[152px] pb-[72px] sm:pb-[96px] md:pb-[120px]">
        <Reveal className="flex items-center justify-between gap-6 mb-10 sm:mb-14 flex-wrap">
          <span className="inline-flex items-center gap-3.5">
            <Mark size={36} />
            <span className="text-[13px] tracking-widest uppercase font-medium text-midnight/85">
              Pranav Kumar / Independent
            </span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-midnight/15 text-[12px] tracking-snug">
            <span className="w-[7px] h-[7px] rounded-full bg-signal animate-pulse-soft" />
            Available May 2026
          </span>
        </Reveal>

        <Reveal
          as="h1"
          className="ovo leading-[0.92] tracking-tighter text-balance"
          style={{ fontSize: "clamp(54px, 10.5vw, 184px)" } as React.CSSProperties}
        >
          A studio of one.
          <br />
          <i>Work</i> for <span className="text-midnight/40">many.</span>
        </Reveal>

        <div className="mt-14 sm:mt-20 md:mt-24 pt-7 border-t border-midnight/15 grid md:grid-cols-12 gap-y-8 gap-x-10">
          <Reveal className="md:col-span-3 flex flex-col gap-3.5">
            <div className="label">Role</div>
            <p className="text-[15px] sm:text-[16px] leading-[1.55] text-ink max-w-[34ch]">
              Independent operator, cross disciplinary. Working across product, growth, UX, and AI native building.
            </p>
          </Reveal>
          <Reveal delay={70} className="md:col-span-3 flex flex-col gap-3.5">
            <div className="label">Operating</div>
            <p className="text-[15px] sm:text-[16px] leading-[1.55] text-ink max-w-[34ch]">
              One engagement per quarter. Teams that want strategic range and execution quality from the same person.
            </p>
          </Reveal>
          <Reveal delay={140} className="md:col-span-3 flex flex-col gap-3.5">
            <div className="label">Next</div>
            <p className="text-[15px] sm:text-[16px] leading-[1.55] text-ink max-w-[34ch]">
              Available for one engagement starting May 2026.
            </p>
          </Reveal>
          <Reveal
            delay={210}
            className="md:col-span-3 flex flex-row md:flex-col flex-wrap gap-3 md:items-end md:justify-end"
          >
            <button className="btn" data-cursor="VIEW" onClick={() => go("work")}>
              Selected work
              <span className="arr">
                <ArrowOutgoing size={14} />
              </span>
            </button>
            <button className="btn btn-ghost" data-cursor="WRITE" onClick={() => go("contact")}>
              Start a project
            </button>
          </Reveal>
        </div>
      </section>

      <Marquee items={MARQUEE} />

      {/* SELECTED WORK */}
      <section className="shell py-[80px] sm:py-[120px]">
        <SectionHeader
          num="01 / Selected work"
          title={
            <>
              Work that <i>moved</i> the metric.
            </>
          }
          right={
            <button
              data-cursor="ALL"
              onClick={() => go("work")}
              className="ulink text-[14px] font-medium"
            >
              All work
              <ArrowRight size={14} />
            </button>
          }
        />
        <div className="border-t border-midnight/15">
          {featured.map((p) => (
            <WorkRow key={p.id} p={p} onOpen={openProject} />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="shell pb-[80px] sm:pb-[120px]">
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-midnight/15">
          {[
            { v: "6+", l: "Years shipping" },
            { v: "50+", l: "Products in market" },
            { v: "12", l: "Industries crossed" },
            { v: "1", l: "Studio closed" },
          ].map((s, i, arr) => (
            <Reveal
              key={s.l}
              delay={i * 70}
              className={[
                "py-10 sm:py-14 px-6 sm:px-8",
                // mobile 2-col vertical separator on left cells
                i % 2 === 0 ? "border-r border-midnight/10" : "",
                // mobile horizontal separator after first row, removed on md
                i < 2 ? "border-b border-midnight/10 md:border-b-0" : "",
                // desktop vertical separators on cells 0..n-2
                i < arr.length - 1 ? "md:border-r md:border-midnight/10" : "",
              ].filter(Boolean).join(" ")}
            >
              <div
                className="ovo leading-[0.9] tracking-tightest"
                style={{ fontSize: "clamp(56px, 8.5vw, 116px)" } as React.CSSProperties}
              >
                {s.v.includes("+") ? (
                  <>
                    <i className="text-signal">{s.v.replace("+", "")}</i>
                    <span className="text-midnight/40">+</span>
                  </>
                ) : (
                  <i className="text-signal">{s.v}</i>
                )}
              </div>
              <div className="meta mt-3 sm:mt-4">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="bg-sand/55">
        <div className="shell py-[80px] sm:py-[120px]">
          <SectionHeader
            num="02 / What I do"
            title={
              <>
                Broad enough to see the system. <i>Precise</i> where it counts.
              </>
            }
          />
          <div className="grid sm:grid-cols-2 border-t border-midnight/15">
            {SERVICES.map((s, i, arr) => {
              const isLeft = i % 2 === 0;
              const isLastRow = i >= arr.length - 2;
              return (
                <Reveal
                  key={s.num}
                  delay={i * 60}
                  className={[
                    "py-10 sm:py-14 px-6 sm:px-10 transition-colors duration-standard hover:bg-bone/45",
                    isLeft ? "sm:border-r sm:border-midnight/10" : "",
                    !isLastRow ? "border-b border-midnight/10" : "",
                  ].filter(Boolean).join(" ")}
                >
                  <span className="meta">{s.num}</span>
                  <h3
                    className="ovo mt-5 leading-[1.0] tracking-tight"
                    style={{ fontSize: "clamp(26px, 3vw, 40px)" } as React.CSSProperties}
                  >
                    {s.name} <i>{s.italic}</i>
                  </h3>
                  <p className="text-[15px] sm:text-[16px] leading-[1.55] text-slate mt-4 max-w-[44ch]">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-6">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 border border-midnight/15 rounded-full text-[12px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SLAB QUOTE */}
      <section className="bg-midnight text-bone py-[112px] sm:py-[160px] slab">
        <div className="shell">
          <div className="eyebrow">Operating principle</div>
          <Reveal
            as="blockquote"
            className="ovo mt-6 sm:mt-8 leading-[1.0] tracking-tighter max-w-[18ch] text-balance"
            style={{ fontSize: "clamp(40px, 6.5vw, 104px)" } as React.CSSProperties}
          >
            <i className="text-bone/55">Insight</i> and{" "}
            <span className="text-signal">execution</span> are not separate jobs.
          </Reveal>
          <div className="flex items-center gap-4 mt-12 sm:mt-16 text-bone/55 text-[12px] tracking-wider">
            <span className="w-12 h-px bg-bone/30" />
            <span>Pranav Kumar · Independent · 2024 onward</span>
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section className="shell py-[80px] sm:py-[120px]">
        <SectionHeader
          num="03 / Field notes"
          title={
            <>
              Notes from the <i>overlap.</i>
            </>
          }
          right={
            <button
              data-cursor="ALL"
              onClick={() => go("writing")}
              className="ulink text-[14px] font-medium"
            >
              All essays
              <ArrowRight size={14} />
            </button>
          }
        />
        <div className="border-t border-midnight/15">
          {recent.map((w) => (
            <WriteRow key={w.id} w={w} onClick={() => go("writing")} />
          ))}
        </div>
      </section>
    </div>
  );
}
