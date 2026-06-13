import { useEffect, useState } from "react";
import DarkVeil from "./DarkVeil";
import { KineticWords, FadeUp } from "./Kinetic";
import { ArrowOutgoing } from "./icons/Arrow";
import { CONTACT, type Route } from "../lib/data";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const BARS = [30, 46, 40, 58, 52, 76, 100];

type Fmt = "pctUp" | "pctDown" | "rating" | "plus";
type VizKind = "bars" | "sdown" | "sup" | "ring" | "none";

interface CardCfg {
  n: string;
  label: string;
  client: string;
  value: number;
  fmt: Fmt;
  viz: VizKind;
  ring?: number;
}

/* Real, measurable outcomes arranged around the statement */
const C: Record<string, CardCfg> = {
  workflow: { n: "01", label: "Workflow completion", client: "CloudTailor · 3D editor", value: 40, fmt: "pctUp", viz: "bars" },
  cycle: { n: "02", label: "Cycle time", client: "Vistaprint · internal tools", value: 41, fmt: "pctDown", viz: "sdown" },
  onboarding: { n: "03", label: "Onboarding completion", client: "Plentiful · mobile", value: 27, fmt: "pctUp", viz: "sup" },
  rating: { n: "04", label: "App Store rating", client: "Ausmate · early access", value: 47, fmt: "rating", viz: "ring", ring: 0.94 },
  weekly: { n: "05", label: "Weekly active families", client: "Ausmate · care app", value: 38, fmt: "pctUp", viz: "bars" },
  shipped: { n: "06", label: "Products shipped", client: "12 industries · 5+ years", value: 50, fmt: "plus", viz: "none" },
};
const STACK = [C.workflow, C.cycle, C.onboarding, C.rating, C.weekly, C.shipped];

/* ─── Mount trigger: hero is the first screen, so proof animates on load ─── */
function useStarted(delay = 600) {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), prefersReduced ? 0 : delay);
    return () => clearTimeout(t);
  }, [delay]);
  return started;
}

/* ─── Eased count-up; snaps to target under reduced motion ─── */
function useCountUp(target: number, run: boolean, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (prefersReduced) {
      setVal(target);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return val;
}

/* ─── Micro-visuals (solid fills, no gradients) ─── */
function BarChart({ run }: { run: boolean }) {
  return (
    <div className="flex items-end gap-[4px] h-[46px]" aria-hidden>
      {BARS.map((h, i) => {
        const last = i === BARS.length - 1;
        return (
          <div
            key={i}
            className={"w-[6px] rounded-[2px] " + (last ? "bg-signal2" : "bg-bone/20")}
            style={{
              height: run ? `${h}%` : "8%",
              transition: `height 800ms cubic-bezier(.2,.8,.2,1) ${260 + i * 70}ms`,
            }}
          />
        );
      })}
    </div>
  );
}

function Spark({ run, dir }: { run: boolean; dir: "up" | "down" }) {
  const pts =
    dir === "down"
      ? "2,8 20,15 38,12 56,26 74,31 92,41 106,47"
      : "2,47 20,40 38,42 56,28 74,23 92,12 106,6";
  const end = dir === "down" ? { x: 106, y: 47 } : { x: 106, y: 6 };
  return (
    <svg viewBox="0 0 108 54" className="w-[86px] h-[46px]" fill="none" preserveAspectRatio="none" aria-hidden>
      <polyline
        points={pts}
        stroke="#5C95FF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: run ? 0 : 1,
          transition: "stroke-dashoffset 1100ms cubic-bezier(.2,.8,.2,1) 320ms",
        }}
      />
      <circle cx={end.x} cy={end.y} r="3" fill="#5C95FF" style={{ opacity: run ? 1 : 0, transition: "opacity 280ms ease 1320ms" }} />
    </svg>
  );
}

function Ring({ run, pct }: { run: boolean; pct: number }) {
  const r = 21;
  const c = 2 * Math.PI * r;
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" aria-hidden>
      <circle cx="27" cy="27" r={r} stroke="rgba(253,253,248,0.14)" strokeWidth="4" />
      <circle
        cx="27"
        cy="27"
        r={r}
        stroke="#5C95FF"
        strokeWidth="4"
        strokeLinecap="round"
        transform="rotate(-90 27 27)"
        strokeDasharray={c}
        style={{
          strokeDashoffset: run ? c * (1 - pct) : c,
          transition: "stroke-dashoffset 1100ms cubic-bezier(.2,.8,.2,1) 320ms",
        }}
      />
    </svg>
  );
}

function Viz({ kind, ring, run }: { kind: VizKind; ring?: number; run: boolean }) {
  if (kind === "bars") return <BarChart run={run} />;
  if (kind === "sdown") return <Spark run={run} dir="down" />;
  if (kind === "sup") return <Spark run={run} dir="up" />;
  if (kind === "ring") return <Ring run={run} pct={ring ?? 1} />;
  return null;
}

function ProofCard({ c, run }: { c: CardCfg; run: boolean }) {
  const v = useCountUp(c.value, run);
  const num =
    c.fmt === "pctUp" ? `+${v}%` : c.fmt === "pctDown" ? `−${v}%` : c.fmt === "rating" ? (v / 10).toFixed(1) : `${v}+`;
  return (
    <div className="hero-panel flex flex-col justify-between p-5 min-h-[136px] gap-5">
      <div className="flex items-start justify-between gap-3">
        <span className="meta leading-tight">{c.label}</span>
        <span className="meta text-bone/30 tabular-nums">{c.n}</span>
      </div>
      <div className="flex items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="ovo-i text-signal2 leading-[0.8] tabular-nums text-[40px] sm:text-[42px]">
            {num}
            {c.fmt === "rating" && <span className="meta align-baseline"> / 5</span>}
          </div>
          <div className="meta mt-2.5 leading-snug text-bone/55">{c.client}</div>
        </div>
        <div className="flex-shrink-0">
          <Viz kind={c.viz} ring={c.ring} run={run} />
        </div>
      </div>
    </div>
  );
}

type Props = { go: (r: Route) => void };

export function Hero({ go }: Props) {
  const started = useStarted();

  return (
    <section className="section-dark on-dark relative overflow-hidden">
      {/* Animated dark veil — bottom layer, frozen under reduced motion. */}
      <div className="absolute inset-0 opacity-[0.7]" aria-hidden>
        <DarkVeil
          hueShift={360}
          noiseIntensity={prefersReduced ? 0 : 0.2}
          scanlineIntensity={0}
          speed={prefersReduced ? 0 : 2}
          scanlineFrequency={0.5}
          warpAmount={2}
        />
      </div>

      {/* Depth: faint grid · one soft disc behind the statement · grain. No gradients. */}
      <div className="line-grid-dark absolute inset-0 opacity-[0.18] pointer-events-none" aria-hidden />
      <div
        className="accent-disc-soft absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] pointer-events-none"
        aria-hidden
      />
      <div className="noise" aria-hidden />

      <div className="shell-wide relative z-10 min-h-[100svh] flex items-center pt-[118px] sm:pt-[128px] pb-16">
        <div className="w-full">
          <div className="mx-auto w-full max-w-[1180px] grid xl:grid-cols-[minmax(0,290px)_minmax(0,560px)_minmax(0,290px)] items-center gap-x-8 2xl:gap-x-10">
            {/* ── Left cards — equal size, column lifted to interlock asymmetrically (xl+) ── */}
            <div className="hidden xl:flex flex-col justify-center items-stretch gap-5 -mt-8">
              <FadeUp delay={620} distance={26} className="w-full">
                <ProofCard c={C.workflow} run={started} />
              </FadeUp>
              <FadeUp delay={740} distance={26} className="w-full">
                <ProofCard c={C.onboarding} run={started} />
              </FadeUp>
              <FadeUp delay={860} distance={26} className="w-full">
                <ProofCard c={C.cycle} run={started} />
              </FadeUp>
            </div>

            {/* ── Center statement ── */}
            <div className="flex flex-col items-center text-center">
              <FadeUp delay={40} distance={16}>
                <span className="status-pill">
                  <span className="live-dot" aria-hidden />
                  Open to APM / PM roles · June 2026
                </span>
              </FadeUp>

              <h1
                className="display-sans text-balance mt-6 sm:mt-7 max-w-[16ch]"
                style={{ fontSize: "clamp(38px, 5.4vw, 64px)", lineHeight: "1.02", letterSpacing: "-0.03em" }}
              >
                <span className="block">
                  <KineticWords text="I design and ship" delay={140} step={60} />
                </span>
                <span className="block">
                  <KineticWords text="products that" delay={300} step={60} />{" "}
                  <span className="ovo-i hero-jewel text-signal2">
                    <KineticWords text="endure." delay={360} step={60} />
                  </span>
                </span>
              </h1>

              <p
                className="display-sans mt-6 text-balance max-w-[40ch] text-bone/65"
                style={{ fontSize: "clamp(18px, 1.4vw, 21px)", lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: 400 }}
              >
                <KineticWords
                  text="A senior product builder shaping AI-native tools — from the first spec to the second loop."
                  delay={520}
                  step={20}
                />
              </p>

              <FadeUp delay={700} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                <button onClick={() => go("work")} className="btn btn-on-dark">
                  See selected work
                  <span className="arr">
                    <ArrowOutgoing size={14} />
                  </span>
                </button>
                <a
                  href={CONTACT.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ulink text-bone/70 hover:text-bone transition-colors"
                >
                  Resume
                </a>
              </FadeUp>
            </div>

            {/* ── Right cards — equal size, column dropped a half-card to interlock with the left (xl+) ── */}
            <div className="hidden xl:flex flex-col justify-center items-stretch gap-5 mt-12">
              <FadeUp delay={680} distance={26} className="w-full">
                <ProofCard c={C.rating} run={started} />
              </FadeUp>
              <FadeUp delay={800} distance={26} className="w-full">
                <ProofCard c={C.weekly} run={started} />
              </FadeUp>
              <FadeUp delay={920} distance={26} className="w-full">
                <ProofCard c={C.shipped} run={started} />
              </FadeUp>
            </div>
          </div>

          {/* ── Stacked cards (below xl) ── */}
          <div className="xl:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STACK.map((c, i) => (
              <FadeUp key={c.n} delay={640 + i * 80} distance={24}>
                <ProofCard c={c} run={started} />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
