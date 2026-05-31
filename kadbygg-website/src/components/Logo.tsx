import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  withText?: boolean;
  className?: string;
  href?: string | null;
};

/**
 * KAD Bygg logomark — an angular house/roof monogram inspired by the company
 * logo, rendered as crisp SVG so it scales perfectly at any size.
 */
export function LogoMark({
  variant = "dark",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const stroke = variant === "light" ? "#ffffff" : "#2d4a1e";
  const accent = "#d98e3d";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="KAD Bygg"
      fill="none"
    >
      {/* Outer house silhouette */}
      <path
        d="M32 6 L56 26 V56 H8 V26 Z"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Inner angular "K"-like strokes echoing the roofline */}
      <path
        d="M22 56 V30 L40 48"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M22 40 L42 22"
        stroke={accent}
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Small doorway */}
      <path
        d="M30 56 V46 H34 V56"
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  withText = true,
  className = "",
  href = "/",
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-forest-800";

  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark variant={variant} className="h-10 w-10 shrink-0" />
      {withText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-lg font-bold tracking-tight ${textColor}`}
          >
            KAD Bygg
          </span>
          <span
            className={`text-[0.6rem] font-semibold uppercase tracking-widest2 ${
              variant === "light" ? "text-white/70" : "text-amber-600"
            }`}
          >
            Bygg &amp; Renovering
          </span>
        </span>
      )}
    </span>
  );

  if (href === null) return content;

  return (
    <Link href={href} aria-label="KAD Bygg AB — till startsidan">
      {content}
    </Link>
  );
}
