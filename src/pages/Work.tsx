import { useMemo, useState } from "react";
import { Reveal } from "../components/Reveal";
import { WorkRow } from "../components/WorkRow";
import { KineticWords, FadeUp } from "../components/Kinetic";
import { PROJECTS, type Project } from "../lib/data";

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
      <section className="relative">
        <div className="shell-wide pt-[128px] sm:pt-[160px] pb-[40px] sm:pb-[56px]">
          <FadeUp>
            <span className="kicker">Selected work · 2020 to 2026</span>
          </FadeUp>
          <h1 className="display-sans display-2xl mt-7 text-balance max-w-[16ch]">
            <KineticWords text="The work" />
            <br />
            <span className="ovo-i text-signal">
              <KineticWords text="behind the role." delay={140} />
            </span>
          </h1>
          <FadeUp delay={180} className="mt-10 max-w-[60ch]">
            <p className="body-lg muted">
              A small, opinionated set. Real constraints, real audiences. Outcomes I can still defend on a Tuesday morning when nobody is watching.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="shell-wide pb-[100px] sm:pb-[140px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12 pb-6 border-b border-midnight/10">
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
          <span className="meta">
            <span className="ovo-i text-signal">{filtered.length}</span> projects
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 50}>
                <WorkRow p={p} onOpen={openProject} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center meta">No projects in this lane yet.</div>
        )}
      </section>
    </div>
  );
}
