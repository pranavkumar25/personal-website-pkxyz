import { useEffect, useState } from "react";
import { Mark } from "./Mark";
import { Menu, Close, ArrowOutgoing } from "./icons/Arrow";
import type { Route } from "../lib/data";

const LINKS: { id: Route; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "writing", label: "Writing" },
];

type NavProps = {
  route: Route;
  go: (r: Route) => void;
};

export function Nav({ route, go }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(route === "home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onCheck = () => {
      const x = window.innerWidth / 2;
      const y = 12;
      const stack = document.elementsFromPoint(x, y);
      const target = stack.find((el) => !(el as Element).closest("[data-nav]"));
      if (!target) return;
      const dark = !!(target as Element).closest(".section-dark");
      setOverDark(dark);
    };
    onCheck();
    window.addEventListener("scroll", onCheck, { passive: true });
    window.addEventListener("resize", onCheck);
    return () => {
      window.removeEventListener("scroll", onCheck);
      window.removeEventListener("resize", onCheck);
    };
  }, [route]);

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

  const dark = overDark;

  return (
    <>
      <header
        data-nav
        className={
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-standard ease-editorial " +
          (dark ? "text-bone " : "text-midnight ") +
          (scrolled
            ? "backdrop-blur-md backdrop-saturate-150 " +
              (dark
                ? "bg-midnight/75 border-b border-bone/10 "
                : "bg-bone/80 border-b border-midnight/10 ")
            : "bg-transparent border-b border-transparent ")
        }
      >
        <div className="shell-wide flex items-center justify-between h-[64px] md:h-[72px] gap-4">
          <button
            onClick={() => navigate("home")}
            className="inline-flex items-center gap-3"
            aria-label="Pranav Kumar. Home"
          >
            <Mark size={30} variant={dark ? "lockup-bone" : "lockup"} />
          </button>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <div
              className={
                "flex items-center gap-1 rounded-full p-1 border " +
                (dark
                  ? "border-bone/15 bg-midnight/40 backdrop-blur"
                  : "border-midnight/10 bg-bone/60 backdrop-blur")
              }
            >
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => navigate(l.id)}
                  className={
                    "px-4 py-2 text-[18px] rounded-full transition-all duration-quick " +
                    (route === l.id
                      ? dark
                        ? "bg-bone text-midnight"
                        : "bg-midnight text-bone"
                      : dark
                        ? "text-bone/80 hover:text-bone"
                        : "text-midnight/75 hover:text-midnight")
                  }
                >
                  {l.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("contact")}
              className={
                "hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-[18px] transition-all duration-quick " +
                (dark
                  ? "bg-bone text-midnight hover:bg-signal hover:text-bone"
                  : "bg-midnight text-bone hover:bg-signal")
              }
            >
              Get in touch
              <ArrowOutgoing size={12} />
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className={
                "md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full " +
                (dark ? "border border-bone/25" : "border border-midnight/20")
              }
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
        <div className="relative h-full flex flex-col pt-[88px] pb-8 shell overflow-y-auto">
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => navigate(l.id)}
                className={
                  "flex items-center justify-between py-4 border-b border-midnight/10 " +
                  "text-left display-sans text-[36px] " +
                  (route === l.id ? "text-signal" : "text-midnight")
                }
              >
                <span>{l.label}</span>
                <ArrowOutgoing size={18} />
              </button>
            ))}
            <button
              onClick={() => navigate("contact")}
              className={
                "flex items-center justify-between py-4 border-b border-midnight/10 " +
                "text-left display-sans text-[36px] " +
                (route === "contact" ? "text-signal" : "text-midnight")
              }
            >
              <span>Contact</span>
              <ArrowOutgoing size={18} />
            </button>
          </nav>

          <div className="mt-auto pt-8 flex flex-col gap-2.5">
            <span className="meta">Direct</span>
            <a className="text-[18px] font-medium" href="mailto:p@pranavkumar.xyz">
              p@pranavkumar.xyz
            </a>
            <a
              className="text-[18px] font-medium mt-1"
              href="https://www.linkedin.com/in/pranavkumar05/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
