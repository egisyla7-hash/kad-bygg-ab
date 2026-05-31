import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: Props) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-forest-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/70" : "text-ink-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
