import { useEffect, useRef, type CSSProperties, type ReactNode, type ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Reveal-on-scroll wrapper. Applies the .rev class and adds .in when the
 * element enters the viewport. Honors prefers-reduced-motion via CSS.
 */
export function Reveal({
  children,
  as: As = "div",
  delay = 0,
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const merged: CSSProperties = {
    ...(style || {}),
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  };
  return (
    <As ref={ref as never} className={`rev ${className}`} style={merged}>
      {children}
    </As>
  );
}
