import { useState, useMemo } from "react";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { WorkRow } from "../components/WorkRow";
import { PROJECTS, CLIENTS, type Project } from "../lib/data";

type Props = {
  openProject: (p: Project) => void;
};

export function WorkPage({ openProject }: Props) {
  const cats = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))],
    []
  );
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);

  return (
    <div className="animate-page-fade">
      <section className="shell pt-[112px] sm:pt-[128px] md:pt-[152px] pb-8">
        <Reveal className="eyebrow">Index of work · 2019 to 2026</Reveal>
        <Reveal
          as="h1"
          className="ovo mt-6 sm:mt-8 leading-[0.92] tracking-tightest"
          style={{ fontSize: "clamp(64px, 12vw, 184px)" } as React.CSSProperties}
        >
          Selected
          <br />
          <i>work.</i>
        </Reveal>
        <Reveal className="body-lg mt-12 sm:mt-14 max-w-[60ch]">
          A small, opinionated set of projects. The constraint was real. The audience was real. The outcome had to land.
        </Reveal>
        <div className="flex flex-wrap gap-1.5 mt-8 sm:mt-10">
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
      </section>

      <section className="shell pt-4 pb-[80px] sm:pb-[120px]">
        <div className="border-t border-midnight/15">
          {filtered.map((p) => (
            <WorkRow key={p.id} p={p} onOpen={openProject} />
          ))}
        </div>
      </section>

      <section className="bg-sand/55">
        <div className="shell py-[80px] sm:py-[120px]">
          <SectionHeader
            num="Beyond the cases"
            title={
              <>
                A few <i>partners.</i>
              </>
            }
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-t border-midnight/15">
            {CLIENTS.map((c, i, arr) => {
              const isLastInRowSm = (i + 1) % 3 === 0;
              const isLastInRowMd = (i + 1) % 4 === 0;
              const isLastInRowMobile = (i + 1) % 2 === 0;
              const rowsMobile = Math.ceil(arr.length / 2);
              const lastRowMobile = Math.floor(i / 2) === rowsMobile - 1;
              return (
                <Reveal
                  key={c}
                  delay={i * 40}
                  className={[
                    "py-10 px-5 sm:px-7 ovo leading-none border-midnight/10",
                    !isLastInRowMobile ? "border-r" : "",
                    !isLastInRowSm ? "sm:border-r" : "sm:border-r-0",
                    !isLastInRowMd ? "md:border-r" : "md:border-r-0",
                    !lastRowMobile ? "border-b" : "",
                  ].filter(Boolean).join(" ")}
                  style={{ fontSize: "clamp(22px, 2.4vw, 30px)" } as React.CSSProperties}
                >
                  {i % 2 ? <i>{c}</i> : c}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
