import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { KineticWords, FadeUp } from "../components/Kinetic";
import { ArrowOutgoing } from "../components/icons/Arrow";
import {
  EXPERIENCE,
  PRINCIPLES,
  TOOLS,
  CONTACT,
  type Route,
} from "../lib/data";

type Props = {
  go: (r: Route) => void;
};

export function AboutPage({ go }: Props) {
  return (
    <div className="animate-page-fade">
      {/* ─── HERO ─── */}
      <section className="relative">
        <div className="shell-wide pt-[128px] sm:pt-[160px] pb-[80px] sm:pb-[100px]">
          <FadeUp>
            <span className="kicker">About</span>
          </FadeUp>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start mt-10">
            <div>
              <h1 className="display-sans display-2xl text-balance">
                <KineticWords text="Hi, I'm" />{" "}
                <span className="ovo-i text-signal">
                  <KineticWords text="Pranav." delay={140} />
                </span>
              </h1>
              <p className="body-lg mt-10 max-w-[60ch]">
                I&apos;m a <span className="ovo-i">product manager and designer</span> who learned both by building a company. Six years in, the move between strategy, interface, growth, and the new way of building has settled into one instinct, not four.
              </p>
              <p className="body-lg mt-6 max-w-[60ch] muted">
                I started Accuplish in 2022. It was a small design and product studio that shipped more than fifty products across twelve industries before I closed it in 2024. The studio taught me how to sell, scope, hire, refund, ship, and start again on Monday. It also taught me what kind of work I actually want to do. Small, sharp, and directly accountable.
              </p>
              <p className="body-lg mt-6 max-w-[60ch] muted">
                Now I&apos;m looking for an APM or PM role on a team that wants someone who can sit between strategy and craft. I&apos;m most useful when the problem is genuinely unclear at the start.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href={CONTACT.resume} className="btn">
                  Download resume
                  <span className="arr">
                    <ArrowOutgoing size={14} />
                  </span>
                </a>
                <button onClick={() => go("contact")} className="btn btn-ghost">
                  Get in touch
                </button>
              </div>
            </div>

            <Reveal className="card overflow-hidden">
              <div className="relative aspect-[4/5] bg-midnight on-dark">
                <div className="dot-bg-dark absolute inset-0 opacity-60" aria-hidden />
                <div className="noise" aria-hidden />
                <span
                  className="absolute inset-0 flex items-center justify-center ovo-i text-bone"
                  style={{ fontSize: "clamp(200px, 30vw, 360px)" }}
                  aria-hidden
                >
                  P
                </span>
                <span className="absolute left-5 top-5 status-pill">
                  <span className="live-dot" aria-hidden />
                  Available
                </span>
                <span className="absolute left-5 bottom-5 text-[18px] text-bone/60">
                  Portrait placeholder
                </span>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <Fact k="Based" v="London, UK" />
                <Fact k="Hours" v="GMT, ±5 hrs" />
                <Fact k="Start" v="Two weeks" />
                <Fact k="Open to" v="Hybrid / Remote" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section className="section-soft">
        <div className="shell-wide py-[100px] sm:py-[140px]">
          <SectionHeader
            kicker="Experience"
            title={
              <>
                How I got <span className="ovo-i text-signal">here.</span>
              </>
            }
            intro="A short version of the resume. The long one is on file."
          />
          <div className="space-y-4 sm:space-y-5">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role} delay={i * 60} className="card p-7 sm:p-9">
                <div className="grid md:grid-cols-[200px_1fr] gap-y-4 md:gap-x-12 items-start">
                  <div>
                    <span className="ovo-i text-signal text-[24px] tabular-nums">
                      {e.period}
                    </span>
                    <div className="mt-2 meta">{e.type}</div>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="display-sans text-[24px] sm:text-[28px] tracking-tight">
                        {e.role}
                      </h3>
                      <span className="text-[18px] muted">
                        at <span className="ovo-i">{e.org}</span>
                      </span>
                    </div>
                    <p className="body-md mt-5 max-w-[64ch]">{e.summary}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {e.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-[18px] muted">
                          <span className="text-signal mt-2.5 flex-shrink-0">
                            <span className="block w-1.5 h-1.5 rounded-full bg-signal" />
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPERATING PRINCIPLES ─── */}
      <section className="shell-wide py-[100px] sm:py-[140px]">
        <SectionHeader
          kicker="Operating principles"
          title={
            <>
              How I actually <span className="ovo-i text-signal">work.</span>
            </>
          }
          intro="Four lines I keep coming back to. None of them are clever. All of them are tested."
        />
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className="card p-7 sm:p-9 h-full">
              <div className="flex items-center justify-between">
                <span className="ovo-i text-signal text-[28px] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="meta">Principle</span>
              </div>
              <div className="hr my-5" />
              <h3 className="display-sans text-[26px] sm:text-[30px] tracking-tight text-balance">
                {p.title}
              </h3>
              <p className="body-md mt-4 muted max-w-[44ch]">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── TOOLBELT ─── */}
      <section className="section-dark on-dark relative overflow-hidden">
        <div className="dot-bg-dark absolute inset-0 opacity-60 pointer-events-none" aria-hidden />
        <div className="noise" aria-hidden />
        <div className="shell-wide relative z-10 py-[100px] sm:py-[140px]">
          <SectionHeader
            kicker="Toolbelt"
            title={
              <>
                Tools I&apos;ve actually <span className="ovo-i text-signal2">used.</span>
              </>
            }
            intro="Practical map of what I reach for when the work shows up. Not a flex. A map."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {TOOLS.map((t, i) => (
              <Reveal key={t.group} delay={i * 60} className="card-dark card-dark-hover p-7">
                <div className="flex items-center justify-between">
                  <span className="display-sans text-[22px] tracking-tight">{t.group}</span>
                  <span className="ovo-i text-signal2 text-[22px]">
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
        </div>
      </section>
    </div>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <span className="meta">{k}</span>
      <div className="text-[18px] mt-1.5">{v}</div>
    </div>
  );
}
