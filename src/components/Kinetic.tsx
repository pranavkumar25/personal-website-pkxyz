import { useEffect, useRef, useState, type ReactNode } from "react";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type WordsProps = {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
  once?: boolean;
};

/**
 * Kinetic word reveal: each word slides up from below the line.
 * Uses CSS via the .kw class so reduced-motion takes effect cleanly.
 */
export function KineticWords({
  text,
  className = "",
  delay = 0,
  step = 60,
  once = true,
}: WordsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          if (once) io.disconnect();
        } else if (!once) {
          setOn(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const tokens = text.split(/(\s+)/);
  return (
    <span ref={ref} className={className}>
      {tokens.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        return (
          <span key={i} className={`kw ${on ? "in" : ""}`}>
            <span style={{ transitionDelay: `${delay + i * step}ms` }}>{w}</span>
          </span>
        );
      })}
    </span>
  );
}

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function FadeUp({ children, className = "", delay = 0, distance = 24 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `transform 800ms cubic-bezier(.2,.8,.2,1) ${delay}ms, opacity 800ms cubic-bezier(.2,.8,.2,1) ${delay}ms`,
        transform: on ? "translateY(0px)" : `translateY(${distance}px)`,
        opacity: on ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
