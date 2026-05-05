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
        "transition-transform duration-[700ms] ease-editorial " +
        (project ? "translate-y-0" : "translate-y-full pointer-events-none")
      }
      aria-hidden={!project}
    >
      {project && (
        <>
          <div className="sticky top-0 z-10 backdrop-blur-md bg-bone/85 border-b border-midnight/10">
            <div className="shell flex items-center justify-between h-16">
              <span className="meta">Case study · Fig {project.num}</span>
              <button
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-midnight transition-all duration-standard hover:bg-midnight hover:text-bone hover:rotate-90"
                onClick={onClose}
                data-cursor="CLOSE"
                aria-label="Close case study"
              >
                <Close size={14} />
              </button>
            </div>
          </div>

          <div className="bg-midnight text-bone min-h-[60vh] flex items-center justify-center relative overflow-hidden h-[440px]">
            <span className="font-serif italic text-[200px] sm:text-[300px] md:text-[440px] leading-none tracking-tight">
              {project.glyph}
            </span>
            <div className="absolute left-[var(--pad)] right-[var(--pad)] bottom-6 flex justify-between text-bone/55 text-[11px] tracking-widest uppercase">
              <span>
                {project.client} · {project.category}
              </span>
              <span>{project.year}</span>
            </div>
          </div>

          <div className="shell">
            <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 py-16 md:py-24">
              <div>
                <h1 className="ovo text-[32px] sm:text-[44px] md:text-[64px] mb-12 text-balance">
                  {project.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <i className="text-signal">
                    {project.title.split(" ").slice(-1)[0]}
                  </i>
                </h1>
                <dl className="space-y-6">
                  <Row k="Client" v={project.client} />
                  <Row k="Role" v={project.role} />
                  <Row k="Category" v={project.category} />
                  <Row k="Year" v={project.year} />
                  <Row k="Tags" v={project.tags.join(", ")} />
                </dl>
              </div>
              <div>
                <Block title="Brief" body={project.excerpt} />
                <Block title="Challenge" body={project.challenge} />
                <Block title="Approach" body={project.approach} />
                <Block title="Outcome" body={project.outcome} />
                {project.metrics.length > 0 && (
                  <div className="mt-14 pt-10 border-t border-midnight/20 grid grid-cols-2 md:grid-cols-3 gap-8">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="ovo text-[44px] sm:text-[56px] md:text-[80px] tracking-tightest">
                          <i className="text-signal">{m.value}</i>
                        </div>
                        <div className="meta mt-2">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="meta">{k}</dt>
      <dd className="mt-1.5 text-[16px] text-ink">{v}</dd>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-12 first:mt-0">
      <h4 className="meta">{title}</h4>
      <p className="ovo mt-4 text-[20px] sm:text-[24px] md:text-[28px] leading-[1.4] tracking-snug max-w-[56ch]">
        {body}
      </p>
    </div>
  );
}
