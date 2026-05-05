import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  num: string;
  title: ReactNode;
  right?: ReactNode;
};

export function SectionHeader({ num, title, right }: Props) {
  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-y-4 md:gap-12 items-end pb-6 mb-10 md:mb-16 border-b border-midnight/15">
      <div>
        <div className="meta">{num}</div>
        <Reveal
          as="h2"
          className="ovo mt-3 text-balance"
          style={{ fontSize: "clamp(34px, 5.4vw, 84px)" } as React.CSSProperties}
        >
          {title}
        </Reveal>
      </div>
      {right && <div className="md:text-right md:self-end">{right}</div>}
    </div>
  );
}
