import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs?: Crumb[];
};

export default function PageHero({ eyebrow, title, intro, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-forest-900 pt-32 pb-16 text-white lg:pt-40 lg:pb-24">
      {/* Decorative grain + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] grain" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative z-10">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Brödsmulor"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/50"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span aria-hidden>/</span>}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span className="eyebrow text-amber-400">
            <span className="h-px w-8 bg-amber-400" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
