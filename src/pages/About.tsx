import { useState, useEffect } from "react";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { TIMELINE, BELIEFS } from "../lib/data";
import { Mark } from "../components/Mark";

const MOODS = ["Operating", "Reading", "Shipping", "Listening", "Thinking"];

const DISCIPLINES = [
  { num: "01", t: "Product", i: "Strategy.", d: "Roadmaps, prioritization, discovery, user research, launch planning. With business context attached." },
  { num: "02", t: "Growth", i: "Design.", d: "Acquisition, activation, retention. Built around real customer behaviour and rigorous experimentation." },
  { num: "03", t: "UX and", i: "Interface.", d: "Design systems, journeys, high fidelity work. Serving the product. Not decorating it." },
  { num: "04", t: "AI and", i: "no code.", d: "Rapid prototyping, lightweight tooling, AI native workflows. Compressing time to value." },
  { num: "05", t: "Brand", i: "system.", d: "Making the product legible, desirable, and strategically distinct before it reaches the market." },
  { num: "06", t: "Operating", i: "rhythm.", d: "Helping teams ship faster by removing the review steps and rituals that are not earning their keep." },
];

export function AboutPage() {
  const [mood, setMood] = useState(0);
  const [moodVisible, setMoodVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoodVisible(false);
      const out = setTimeout(() => {
        setMood((m) => (m + 1) % MOODS.length);
        setMoodVisible(true);
      }, 220);
      return () => clearTimeout(out);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-page-fade">
      <section className="shell pt-[112px] sm:pt-[128px] md:pt-[152px] pb-[64px] sm:pb-[80px]">
        <Reveal className="eyebrow">About · Fig 03</Reveal>
        <Reveal
          as="h1"
          className="ovo mt-6 sm:mt-8 leading-[0.92] tracking-tightest text-balance"
          style={{ fontSize: "clamp(56px, 9.5vw, 152px)" } as React.CSSProperties}
        >
          Pranav <i>Kumar.</i>
          <br />
          <span className="text-midnight/45">
            Currently{" "}
            <i
              className={
                "text-signal inline-block transition-opacity duration-200 ease-editorial " +
                (moodVisible ? "opacity-100" : "opacity-0")
              }
            >
              {MOODS[mood]}.
            </i>
          </span>
        </Reveal>

        <div className="grid md:grid-cols-[5fr_7fr] gap-10 md:gap-16 mt-16 sm:mt-24 items-start">
          <Reveal className="aspect-[4/5] bg-midnight text-bone relative overflow-hidden">
            <span
              className="absolute inset-0 flex items-center justify-center font-serif italic text-bone/95 leading-none"
              style={{ fontSize: "clamp(140px, 22vw, 280px)" } as React.CSSProperties}
            >
              P
            </span>
            <span className="absolute left-4 bottom-4 text-[10px] tracking-widest uppercase text-bone/55">
              Portrait · Placeholder
            </span>
            <span className="absolute right-4 top-4">
              <Mark size={32} />
            </span>
          </Reveal>
          <Reveal>
            <p
              className="ovo leading-[1.4] tracking-snug text-midnight"
              style={{ fontSize: "clamp(22px, 2.6vw, 34px)" } as React.CSSProperties}
            >
              I work as an <i>independent operator</i> with founders and product teams who need range without losing edge. Six years moving between strategy, design, growth, and AI native building.
            </p>
            <p className="text-[16px] sm:text-[17px] leading-[1.65] mt-8 text-ink">
              Before going independent I founded Accuplish. A design and product studio that delivered fifty plus projects across twelve industries. I closed it in 2024 and reset around something tighter. Small, high leverage engagements where I am directly responsible for the outcome.
            </p>
            <p className="text-[16px] sm:text-[17px] leading-[1.65] mt-6 text-ink">
              The thread connecting all of it is a bias for systems over artifacts. Pretty screens age badly. The engine compounds.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-[80px] sm:py-[120px]">
        <SectionHeader
          num="01 / Disciplines"
          title={
            <>
              Six lanes I move <i>between.</i>
            </>
          }
        />
        <div className="grid sm:grid-cols-2 border-t border-midnight/15">
          {DISCIPLINES.map((d, i, arr) => {
            const isLeft = i % 2 === 0;
            const isLastRow = i >= arr.length - 2;
            return (
              <Reveal
                key={d.num}
                delay={i * 50}
                className={[
                  "py-10 sm:py-14 px-6 sm:px-10 transition-colors duration-standard hover:bg-bone",
                  isLeft ? "sm:border-r sm:border-midnight/10" : "",
                  !isLastRow ? "border-b border-midnight/10" : "",
                ].filter(Boolean).join(" ")}
              >
                <span className="meta">{d.num}</span>
                <h3
                  className="ovo mt-5 leading-[1.0] tracking-tight"
                  style={{ fontSize: "clamp(26px, 3vw, 40px)" } as React.CSSProperties}
                >
                  {d.t} <i>{d.i}</i>
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.55] text-slate mt-4 max-w-[44ch]">
                  {d.d}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-sand/55">
        <div className="shell py-[80px] sm:py-[120px]">
          <SectionHeader
            num="02 / Timeline"
            title={
              <>
                How I got <i>here.</i>
              </>
            }
          />
          <div className="border-t border-midnight/15">
            {TIMELINE.map((t, i, arr) => (
              <Reveal
                key={t.year}
                delay={i * 60}
                className={
                  "grid md:grid-cols-[110px_140px_1fr] gap-y-2 md:gap-x-6 py-8 items-baseline " +
                  (i < arr.length - 1 ? "border-b border-midnight/10" : "")
                }
              >
                <span className="ovo text-[22px] text-signal tracking-snug">{t.year}</span>
                <span className="meta">{t.label}</span>
                <p className="text-[15px] sm:text-[17px] leading-[1.55] text-ink max-w-[60ch]">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-[80px] sm:py-[120px]">
        <SectionHeader
          num="03 / Beliefs"
          title={
            <>
              Operating <i>convictions.</i>
            </>
          }
        />
        <div className="grid sm:grid-cols-2 border-t border-midnight/15">
          {BELIEFS.map((b, i, arr) => {
            const isLeft = i % 2 === 0;
            const isLastRow = i >= arr.length - 2;
            return (
              <Reveal
                key={b.title}
                delay={i * 60}
                className={[
                  "py-10 sm:py-14 px-6 sm:px-10",
                  isLeft ? "sm:border-r sm:border-midnight/10" : "",
                  !isLastRow ? "border-b border-midnight/10" : "",
                ].filter(Boolean).join(" ")}
              >
                <h3
                  className="ovo leading-[1.0] tracking-tight"
                  style={{ fontSize: "clamp(24px, 2.6vw, 34px)" } as React.CSSProperties}
                >
                  {b.title} <i className="text-signal">{b.italic}</i>
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.55] text-slate mt-4 max-w-[44ch]">
                  {b.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
