import { useEffect, useState } from "react";
import { Mark } from "./Mark";
import { Menu, Close } from "./icons/Arrow";
import type { Route } from "../lib/data";

const LINKS: { id: Route; n: string; label: string }[] = [
  { id: "home", n: "01", label: "Index" },
  { id: "work", n: "02", label: "Work" },
  { id: "about", n: "03", label: "About" },
  { id: "writing", n: "04", label: "Writing" },
];

type NavProps = {
  route: Route;
  go: (r: Route) => void;
};

export function Nav({ route, go }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navigate = (r: Route) => {
    setOpen(false);
    go(r);
  };

  return (
    <>
      <header
        className={
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-standard ease-editorial " +
          "backdrop-blur-md backdrop-saturate-150 bg-bone/75 " +
          (scrolled ? "border-b border-midnight/10" : "border-b border-transparent")
        }
      >
        <div className="shell flex items-center justify-between h-[64px] md:h-[72px] gap-4">
          <button
            data-cursor=""
            onClick={() => navigate("home")}
            className="inline-flex items-center gap-3"
            aria-label="Pranav Kumar. Home"
          >
            <Mark size={32} />
            <span className="hidden sm:inline-flex items-baseline gap-2">
              <span className="text-[15px] font-medium tracking-snug">Pranav Kumar</span>
              <span className="text-[12px] text-midnight/55 hidden md:inline">
                · Designer and Maker
              </span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-cursor=""
                onClick={() => navigate(l.id)}
                className={
                  "px-4 py-2 text-[14px] transition-colors duration-quick relative " +
                  (route === l.id ? "text-signal" : "text-midnight hover:text-signal")
                }
              >
                <span className="text-[10px] tracking-widest text-midnight/45 mr-2 align-top -top-[2px] relative">
                  {l.n}
                </span>
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              data-cursor=""
              onClick={() => navigate("contact")}
              className="hidden sm:inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-midnight/20 text-[12px] md:text-[13px] hover:border-midnight transition-colors duration-quick"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-signal animate-pulse-soft" />
              Available May 2026
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-midnight/20"
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? <Close size={16} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={
          "fixed inset-0 z-40 md:hidden transition-opacity duration-standard ease-editorial " +
          (open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
        }
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-bone" />
        <div className="relative h-full flex flex-col pt-[80px] pb-10 shell">
          <div className="eyebrow text-midnight/55 mb-6">Index</div>
          <nav className="flex flex-col gap-1">
            {LINKS.map((l, i) => (
              <button
                key={l.id}
                onClick={() => navigate(l.id)}
                className={
                  "flex items-baseline gap-4 py-4 border-b border-midnight/10 " +
                  "text-left ovo text-[44px] sm:text-[56px] leading-[0.95] " +
                  (route === l.id ? "text-signal" : "text-midnight")
                }
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="text-[11px] tracking-widest text-midnight/45 font-sans">
                  {l.n}
                </span>
                {l.label}
              </button>
            ))}
            <button
              onClick={() => navigate("contact")}
              className={
                "flex items-baseline gap-4 py-4 border-b border-midnight/10 " +
                "text-left ovo text-[44px] sm:text-[56px] leading-[0.95] italic " +
                (route === "contact" ? "text-signal" : "text-midnight")
              }
            >
              <span className="text-[11px] tracking-widest text-midnight/45 font-sans not-italic">
                05
              </span>
              Contact.
            </button>
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-3">
            <span className="meta">Direct</span>
            <a className="text-[18px] font-medium" href="mailto:p@pranavkumar.co">
              p@pranavkumar.co
            </a>
            <span className="meta mt-4">Status</span>
            <span className="text-[15px] inline-flex items-center gap-2.5">
              <span className="w-[7px] h-[7px] rounded-full bg-signal animate-pulse-soft" />
              Available for one engagement, starting May 2026
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
