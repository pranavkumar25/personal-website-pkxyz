import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { WorkRow } from "../components/WorkRow";
import { WriteRow } from "../components/WriteRow";
import { Marquee } from "../components/Marquee";
import { StickyDisciplines } from "../components/StickyDisciplines";
import { ArrowOutgoing, ArrowRight } from "../components/icons/Arrow";
import { Hero } from "../components/Hero";
import {
  PROJECTS,
  WRITINGS,
  STATS,
  INDUSTRIES,
  TOOLS,
  CURRENTLY,
  MARQUEE,
  PRINCIPLES,
  RECOMMENDATIONS,
  type Project,
  type Route,
} from "../lib/data";

type Props = {
  go: (r: Route) => void;
  openProject: (p: Project) => void;
};

export function HomePage({ go, openProject }: Props) {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const recent = WRITINGS.slice(0, 3);

  return (
    <div className="animate-page-fade">
      {/* ─── HERO ─── */}
      <Hero go={go} />

      {/* ─── Marquee ─── */}
      <Marquee items={MARQUEE} />

      {/* ─── CURRENTLY ─── */}
      <section className="shell-wide pt-[100px] sm:pt-[140px] pb-[60px] sm:pb-[80px]">
        <SectionHeader
          kicker="Currently"
          title={
            <>
              Here&apos;s what&apos;s on my desk{" "}
              <span className="ovo-i text-signal">right now.</span>
            </>
          }
          intro="A short, honest snapshot of what is occupying my head this month. Refreshed roughly every other week."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CURRENTLY.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 60}
              className="card card-hover p-7 h-full flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <span className="live-dot" aria-hidden />
                  <span className="meta">{c.label}</span>
                </span>
                <span className="meta tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="body-md mt-5 text-ink">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CAPABILITIES — Practice 04 lanes ─── */}
      <section className="section-soft relative">
        <div className="shell-wide py-[100px] sm:py-[140px]">
          <SectionHeader
            kicker="Capabilities"
            title={
              <>
                Four lanes I move <span className="ovo-i text-signal">between.</span>
              </>
            }
            intro="The lanes overlap more than they separate. Most of the leverage I&apos;ve seen comes from holding two at once."
          />
          <StickyDisciplines />
        </div>
      </section>

      {/* ─── OPERATING MANUAL (light manifesto rows) ─── */}
      <section className="bg-bone relative overflow-hidden">
        <div className="shell-wide py-[100px] sm:py-[140px]">
          <SectionHeader
            kicker="Operating manual"
            title={
              <>
                Four lines I keep <span className="ovo-i text-signal">coming back to.</span>
              </>
            }
            intro="None of these are clever. All of them are tested. The thread running underneath them is the same one running underneath the work."
          />

          <div className="border-t border-midnight/10">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.num}
                delay={i * 80}
                className="border-b border-midnight/10 py-10 sm:py-14"
              >
                <div className="grid md:grid-cols-[88px_1fr_1fr] gap-y-6 md:gap-x-10 lg:gap-x-14 items-start">
                  <span className="ovo-i text-signal text-[44px] sm:text-[56px] leading-none tabular-nums">
                    {p.num}
                  </span>

                  <div>
                    <h3 className="display-sans text-[26px] sm:text-[32px] md:text-[36px] tracking-tight text-midnight leading-[1.1] text-balance">
                      {p.lead}{" "}
                      <span className="ovo-i text-signal">{p.accent}</span>
                    </h3>
                    <p className="body-md mt-4 sm:mt-5 muted max-w-[50ch]">
                      {p.body}
                    </p>
                  </div>

                  <div className="md:border-l md:border-midnight/12 md:pl-10 lg:pl-14">
                    <span className="meta">In practice</span>
                    <p className="ovo-i text-[20px] sm:text-[24px] text-midnight mt-3 leading-[1.35] max-w-[36ch]">
                      {p.practice}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORK ─── */}
      <section className="shell-wide pt-[100px] sm:pt-[140px] pb-[60px] sm:pb-[80px]">
        <SectionHeader
          kicker="Selected work"
          title={
            <>
              Work I&apos;d still <span className="ovo-i text-signal">defend</span> in a room.
            </>
          }
          intro="A small set. Real constraints, real audiences, outcomes I could be measured on long after the engagement was over."
          right={
            <button onClick={() => go("work")} className="ulink text-[18px]">
              View all work
              <ArrowRight size={14} />
            </button>
          }
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <WorkRow p={p} onOpen={openProject} variant="card" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── RECOMMENDATIONS ─── */}
      <section className="section-soft relative overflow-hidden">
        <div className="shell-wide py-[100px] sm:py-[140px]">
          <SectionHeader
            kicker="Recommendations"
            title={
              <>
                What people <span className="ovo-i text-signal">say.</span>
              </>
            }
            intro="A few public recommendations from people I've worked with directly. Every one of these is verifiable on LinkedIn."
            right={
              <a
                href={RECOMMENDATIONS[0].verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ulink text-[18px]"
              >
                All on LinkedIn
                <ArrowOutgoing size={12} />
              </a>
            }
          />

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {RECOMMENDATIONS.map((r, i) => (
              <Reveal
                key={r.id}
                delay={i * 80}
                className="card p-7 sm:p-8 flex flex-col h-full"
              >
                {/* Quote (top) */}
                <div>
                  <span
                    aria-hidden
                    className="ovo-i text-signal leading-none block"
                    style={{ fontSize: "52px" }}
                  >
                    &ldquo;
                  </span>
                  <p className="body-md mt-3 text-ink">{r.quote}</p>
                </div>

                {/* Footer (pinned to bottom) */}
                <div className="mt-auto pt-8 sm:pt-10">
                  <div className="hr" />

                  <div className="mt-6 sm:mt-7">
                    <div className="display-sans text-[19px] tracking-tight text-midnight leading-tight">
                      {r.name}
                    </div>
                    <div className="text-[18px] muted mt-1 leading-snug">
                      {r.role}
                    </div>
                  </div>

                  <a
                    href={r.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ulink text-[18px] text-signal mt-6 inline-flex"
                  >
                    Verify this
                    <ArrowOutgoing size={12} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BACKGROUND — Stats ─── */}
      <section className="section-dark on-dark relative overflow-hidden">
        <div className="dot-bg-dark absolute inset-0 opacity-60 pointer-events-none" aria-hidden />
        <div className="noise" aria-hidden />
        <div className="shell-wide relative z-10 py-[100px] sm:py-[140px]">
          <SectionHeader
            kicker="By the numbers"
            title={
              <>
                Five years.
                <br />
                <span className="ovo-i text-signal2">Plain arithmetic.</span>
              </>
            }
            intro="A short version of the resume. Range that has been pressure tested, not just listed."
          />
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i, arr) => (
              <Reveal
                key={s.label}
                delay={i * 70}
                className={
                  "py-8 sm:py-12 px-4 sm:px-6 " +
                  (i % 2 === 0 ? "border-r border-bone/10 " : "") +
                  (i < 2 ? "border-b border-bone/10 md:border-b-0 " : "") +
                  (i < arr.length - 1 ? "md:border-r md:border-bone/10 " : "md:border-r-0 ") +
                  (i === arr.length - 1 ? "border-r-0 " : "")
                }
              >
                <div className="stat-num">{s.value}</div>
                <div className="mt-5 text-[18px] text-bone">{s.label}</div>
                <div className="mt-2 text-[18px] text-bone/55 leading-snug max-w-[24ch]">
                  {s.footnote}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="hr mt-14 sm:mt-16" />

          <div className="mt-10 grid lg:grid-cols-[1fr_2fr] gap-y-6 gap-x-10 items-baseline">
            <span className="meta">Industries crossed</span>
            <div className="flex flex-wrap gap-1.5">
              {INDUSTRIES.map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOOLBELT ─── */}
      <section className="shell-wide py-[100px] sm:py-[140px]">
        <SectionHeader
          kicker="Toolbelt"
          title={
            <>
              What I <span className="ovo-i text-signal">reach for.</span>
            </>
          }
          intro="Tools are commodity. Judgment about when to reach for which is the actual job."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {TOOLS.map((t, i) => (
            <Reveal key={t.group} delay={i * 60} className="card card-hover p-7 h-full">
              <div className="flex items-center justify-between">
                <span className="display-sans text-[22px] tracking-tight">{t.group}</span>
                <span className="ovo-i text-signal text-[22px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="hr my-5" />
              <div className="flex flex-wrap gap-1.5">
                {t.items.map((x) => (
                  <span key={x} className="chip">
                    {x}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── WRITING ─── */}
      <section className="section-soft">
        <div className="shell-wide py-[100px] sm:py-[140px]">
          <SectionHeader
            kicker="Writing"
            title={
              <>
                Notes from the <span className="ovo-i text-signal">in between.</span>
              </>
            }
            intro="Short essays on product, design, and what running a small business teaches you about both."
            right={
              <button onClick={() => go("writing")} className="ulink text-[18px]">
                Read all essays
                <ArrowRight size={14} />
              </button>
            }
          />
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {recent.map((w, i) => (
              <Reveal key={w.id} delay={i * 80}>
                <WriteRow w={w} variant="card" onClick={() => go("writing")} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}