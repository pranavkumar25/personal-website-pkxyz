import { Reveal } from "./Reveal";
import { ArrowOutgoing } from "./icons/Arrow";
import type { Route } from "../lib/data";

type FooterProps = {
  go: (r: Route) => void;
};

export function Footer({ go }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-midnight text-bone pt-[80px] sm:pt-[120px] pb-10 mt-[80px] sm:mt-[120px]">
      <div className="shell">
        <div className="text-bone/45 eyebrow">Let's build</div>
        <Reveal
          as="h2"
          className="ovo leading-[0.92] tracking-tightest mt-5 sm:mt-6 text-balance"
          style={{ fontSize: "clamp(60px, 13vw, 200px)" } as React.CSSProperties}
        >
          A studio of one.
          <br />
          <i className="text-bone/55">Work for many.</i>
        </Reveal>

        <button
          data-cursor="WRITE"
          data-signal=""
          onClick={() => go("contact")}
          className="inline-flex items-center gap-3.5 mt-12 sm:mt-16 px-7 py-5 rounded-full bg-signal text-bone text-[15px] font-medium hover:bg-bone hover:text-midnight transition-all duration-standard ease-editorial hover:-translate-y-0.5"
        >
          Start a project
          <ArrowOutgoing size={16} />
        </button>

        <div className="mt-[80px] sm:mt-[120px] pt-12 border-t border-bone/15 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <h5 className="text-[11px] tracking-widest uppercase font-medium text-bone/45 mb-4">
              Pranav Kumar
            </h5>
            <p className="text-[14px] leading-[1.55] text-bone/70 max-w-[36ch]">
              An independent operator working across product, growth, UX, and AI native building. Selective engagements. Direct outcomes.
            </p>
          </div>
          <div>
            <h5 className="text-[11px] tracking-widest uppercase font-medium text-bone/45 mb-4">
              Sitemap
            </h5>
            <ul className="space-y-1.5 text-[14px]">
              <FooterLink onClick={() => go("home")} label="Index" />
              <FooterLink onClick={() => go("work")} label="Work" />
              <FooterLink onClick={() => go("about")} label="About" />
              <FooterLink onClick={() => go("writing")} label="Writing" />
              <FooterLink onClick={() => go("contact")} label="Contact" />
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] tracking-widest uppercase font-medium text-bone/45 mb-4">
              Elsewhere
            </h5>
            <ul className="space-y-1.5 text-[14px]">
              <FooterLink href="https://linkedin.com" label="LinkedIn" external />
              <FooterLink href="https://read.cv" label="Read.cv" external />
              <FooterLink href="https://substack.com" label="Substack" external />
              <FooterLink href="https://are.na" label="Are.na" external />
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] tracking-widest uppercase font-medium text-bone/45 mb-4">
              Direct
            </h5>
            <ul className="space-y-1.5 text-[14px]">
              <FooterLink href="mailto:p@pranavkumar.co" label="p@pranavkumar.co" />
              <FooterLink href="https://cal.com/pranav" label="cal.com/pranav" external />
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-wrap justify-between gap-4 text-[11px] tracking-wider text-bone/40 uppercase">
          <span>© {year} Pranav Kumar. All rights reserved.</span>
          <span className="hidden sm:inline">Set in Ovo and LT Superior</span>
          <span>v3.0 · Refreshed May 2026</span>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
};

function FooterLink({ label, href, onClick, external }: FooterLinkProps) {
  const cls = "py-1 inline-flex items-center gap-1.5 hover:text-signal transition-colors duration-quick";
  if (href) {
    return (
      <li>
        <a
          data-cursor=""
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cls}
        >
          {label}
          {external && (
            <span aria-hidden className="text-bone/40 text-[10px]">
              ↗
            </span>
          )}
        </a>
      </li>
    );
  }
  return (
    <li>
      <button data-cursor="" onClick={onClick} className={cls}>
        {label}
      </button>
    </li>
  );
}
