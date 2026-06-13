import { Reveal } from "./Reveal";
import { ArrowOutgoing } from "./icons/Arrow";
import { Mark } from "./Mark";
import { CONTACT, type Route } from "../lib/data";

type FooterProps = {
  go: (r: Route) => void;
};

export function Footer({ go }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="section-dark on-dark relative overflow-hidden">
      <div className="dot-bg-dark absolute inset-0 opacity-60 pointer-events-none" aria-hidden />
      <div className="noise" aria-hidden />
      <div className="shell-wide relative pt-[100px] sm:pt-[140px] pb-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-end">
          <Reveal>
            <h2 className="display-sans display-lg text-balance">
              Hiring for product?{" "}
              <span className="ovo-i text-signal2">Let&apos;s talk.</span>
            </h2>
            <p className="body-lg mt-7 max-w-[52ch] text-bone/75">
              Best fit is a team that needs someone who can sit between strategy and execution. I read every message myself and reply within twenty four hours.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => go("contact")} className="btn btn-on-dark">
                Get in touch
                <span className="arr">
                  <ArrowOutgoing size={14} />
                </span>
              </button>
              <a href={CONTACT.resume} className="btn btn-on-dark-ghost">
                Download resume
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-on-dark-ghost"
              >
                LinkedIn
                <span className="arr">
                  <ArrowOutgoing size={14} />
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal className="card-dark p-7 sm:p-9">
            <div className="meta">Direct lines</div>
            <ul className="mt-6 space-y-4">
              <FooterRow k="Email" v={CONTACT.email} href={`mailto:${CONTACT.email}`} />
              <FooterRow
                k="Calendar"
                v="cal.com / pranavkumar.co"
                href={CONTACT.calendar}
                external
              />
              <FooterRow k="Location" v={CONTACT.location} />
              <FooterRow k="Response" v="Within 24 hours" />
            </ul>
          </Reveal>
        </div>

        <div className="hr mt-[80px] sm:mt-[110px]" />

        <div className="grid grid-cols-2 sm:grid-cols-12 gap-y-10 gap-x-6 pt-10 sm:pt-12">
          <div className="col-span-2 sm:col-span-5 flex flex-col gap-4">
            <Mark size={32} variant="lockup-bone" />
            <p className="text-[18px] leading-[1.6] text-bone/65 max-w-[36ch]">
              Product manager, designer, and operator. Five years building and shipping software across product, growth, and operations.
            </p>
          </div>

          <div className="sm:col-span-2">
            <h5 className="meta mb-4">Sitemap</h5>
            <ul className="space-y-2 text-[18px]">
              <FooterLink onClick={() => go("home")} label="Home" />
              <FooterLink onClick={() => go("work")} label="Work" />
              <FooterLink onClick={() => go("about")} label="About" />
              <FooterLink onClick={() => go("writing")} label="Writing" />
              <FooterLink onClick={() => go("contact")} label="Contact" />
            </ul>
          </div>
          <div className="sm:col-span-2">
            <h5 className="meta mb-4">Elsewhere</h5>
            <ul className="space-y-2 text-[18px]">
              <FooterLink href={CONTACT.linkedin} label="LinkedIn" external />
              <FooterLink href="https://x.com/itspranav_com" label="X" external />
              <FooterLink
                href="https://www.instagram.com/pranavkumar.co"
                label="Instagram"
                external
              />
              <FooterLink href="https://github.com/pranavkumar25" label="GitHub" external />
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-3">
            <h5 className="meta mb-4">Direct</h5>
            <ul className="space-y-2 text-[18px]">
              <FooterLink href={`mailto:${CONTACT.email}`} label={CONTACT.email} />
              <FooterLink href={CONTACT.calendar} label="Book a call" external />
              <FooterLink href={CONTACT.resume} label="Download resume" />
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-bone/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-[18px] text-bone/55">
            © {year} Pranav Kumar. Built with love and AI in India.
          </span>
          <span className="text-[18px] text-bone/55 ovo-i">2026</span>
        </div>
      </div>
    </footer>
  );
}

function FooterRow({
  k,
  v,
  href,
  external,
}: {
  k: string;
  v: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <li className="flex items-baseline justify-between gap-4">
      <span className="meta">{k}</span>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-[18px] text-bone hover:text-signal2 transition-colors duration-quick text-right"
        >
          {v}
          {external && <span aria-hidden className="text-bone/40 ml-1.5">↗</span>}
        </a>
      ) : (
        <span className="text-[18px] text-bone text-right">{v}</span>
      )}
    </li>
  );
}

type FooterLinkProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
};

function FooterLink({ label, href, onClick, external }: FooterLinkProps) {
  const cls =
    "py-1 inline-flex items-center gap-2 text-bone/75 hover:text-bone transition-colors duration-quick";
  const inner = (
    <>
      <span>{label}</span>
      {external && (
        <span aria-hidden className="text-bone/40">
          ↗
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <li>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cls}
        >
          {inner}
        </a>
      </li>
    );
  }
  return (
    <li>
      <button onClick={onClick} className={cls}>
        {inner}
      </button>
    </li>
  );
}
