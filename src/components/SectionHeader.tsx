import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  right?: ReactNode;
  align?: "default" | "centered";
};

export function SectionHeader({ kicker, title, intro, right, align = "default" }: Props) {
  if (align === "centered") {
    return (
      <div className="text-center max-w-[42ch] mx-auto mb-12 sm:mb-16">
        <Reveal>
          <span className="kicker justify-center">{kicker}</span>
        </Reveal>
        <Reveal as="h2" delay={60} className="display-sans display-lg mt-5 text-balance">
          {title}
        </Reveal>
        {intro && (
          <Reveal delay={120}>
            <p className="body-lg mt-5 muted text-balance">{intro}</p>
          </Reveal>
        )}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-[1.05fr_1fr] gap-y-7 md:gap-12 items-end mb-12 sm:mb-16">
      <div>
        <Reveal>
          <span className="kicker">{kicker}</span>
        </Reveal>
        <Reveal as="h2" delay={60} className="display-sans display-lg mt-5 text-balance">
          {title}
        </Reveal>
      </div>
      <div className="md:self-end flex flex-col md:items-end gap-5">
        {intro && (
          <Reveal delay={120}>
            <p className="body-lg max-w-[44ch] muted md:text-right">{intro}</p>
          </Reveal>
        )}
        {right && <Reveal delay={160}>{right}</Reveal>}
      </div>
    </div>
  );
}
