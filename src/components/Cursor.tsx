import { useEffect, useRef } from "react";

/**
 * Custom cursor: a small dot that grows on interactive surfaces.
 * Uses RAF lerp so it tracks with weight, not jitter.
 * Hidden on coarse pointers (touch). Respects mix-blend-mode for global legibility.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const dot = dotRef.current!;
    const lbl = labelRef.current!;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (!t) return;
      dot.classList.add("lg");
      if (t.hasAttribute("data-signal")) dot.classList.add("signal");
      const text = t.getAttribute("data-cursor");
      if (text && text.length > 0) {
        lbl.textContent = text;
        lbl.classList.add("show");
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (!t) return;
      dot.classList.remove("lg");
      dot.classList.remove("signal");
      lbl.classList.remove("show");
    };
    const tick = () => {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      dot.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      lbl.style.transform = `translate3d(${cx}px, ${cy + 38}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="k-cursor" aria-hidden />
      <div ref={labelRef} className="k-cursor-label" aria-hidden />
    </>
  );
}
