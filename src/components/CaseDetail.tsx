import { useEffect } from "react";
import { Close } from "./icons/Arrow";
import type { Project } from "../lib/data";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function CaseDetail({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <div
      className={
        "fixed inset-0 z-[150] bg-bone overflow-y-auto " +
        "transition-transform duration-[600ms] ease-editorial " +
        (project ? "translate-y-0" : "translate-y-full pointer-events-none")
      }
      aria-hidden={!project}
    >
      {project && (
        <>
          <div className="sticky top-0 z-10 backdrop-blur-md bg-bone/85 border-b border-midnight/10">
            <div className="shell-wide flex items-center justify-between h-14 sm:h-16 gap-3">
              <span className="meta truncate flex items-center gap-3">
                <span className="ovo-i text-signal text-[22px]">{project.num}</span>
                <span>Case study · {project.client}</span>
              </span>
              <button
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-midnight/30 transition-all duration-standard hover:bg-midnight hover:text-bone hover:border-midnight flex-shrink-0"
                onClick={onClose}
                aria-label="Close case study"
              >
                <Close size={14} />
              </button>
            </div>
          </div>

          <section className="section-dark on-dark relative overflow-hidden">
            <div className="dot-bg-dark absolute inset-0 opacity-60" aria-hidden />
            <div className="noise" aria-hidden />
            <div className="shell-wide relative pt-16 sm:pt-24 pb-16 sm:pb-24">
              <span className="status-pill">
                <span className="dot-signal" aria-hidden />
                {project.category}
                <span className="opacity-50">·</span>
                <span>{project.year}</span>
              </span>
              <h1 className="display-sans display-2xl mt-7 sm:mt-9 max-w-[20ch] text-balance">
                {project.title}
              </h1>
              <p className="body-lg mt-7 max-w-[60ch] text-bone/80">{project.summary}</p>

              <div className="hr mt-12" />

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6">
                <Meta k="Client" v={project.client} />
                <Meta k="Role" v={project.role} />
                <Meta k="Duration" v={project.duration} />
                <Meta k="Team" v={project.team} />
              </div>
            </div>
          </section>

          <section className="shell-wide py-16 sm:py-24">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
                <span className="kicker">Snapshot</span>
                <h2 className="display-sans display-md mt-5 text-balance">
                  What <span className="ovo-i text-signal">changed.</span>
                </h2>
                <div className="mt-8 space-y-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="card p-5 flex items-baseline justify-between gap-4"
                    >
                      <span className="text-[18px] muted leading-tight">{m.label}</span>
                      <span className="ovo-i text-signal text-[32px] sm:text-[36px] leading-none">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-8 space-y-14 sm:space-y-16">
                <Block num="01" title="Challenge" body={project.challenge} />
                <Block num="02" title="Approach" body={project.approach} />
                <Block num="03" title="Outcome" body={project.outcome} />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="meta">{k}</div>
      <div className="text-[18px] mt-2 text-bone">{v}</div>
    </div>
  );
}

function Block({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="ovo-i text-signal text-[22px] tabular-nums">{num}</span>
        <span className="hr flex-1" />
        <span className="meta">{title}</span>
      </div>
      <h3 className="display-sans display-sm mt-4 tracking-tight">{title}</h3>
      <p className="body-lg mt-4 max-w-[64ch]">{body}</p>
    </div>
  );
}
