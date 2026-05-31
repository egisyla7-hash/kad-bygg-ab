import type { SVGProps, JSX } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPhone(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconMail(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function IconPin(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconClock(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconArrow(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconCheck(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export function IconHome(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

export function IconRoof(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M2 13 12 5l10 8" />
      <path d="M5 12v7h14v-7" />
      <path d="M9 19v-4h6v4" />
    </svg>
  );
}

export function IconFacade(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 3v18M13 3v18M17 3v18" />
    </svg>
  );
}

export function IconWindow(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 3v18M4 12h16" />
    </svg>
  );
}

export function IconWall(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 12h18M8 5v7M16 12v7M12 5v7" />
    </svg>
  );
}

export function IconFloor(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M3 7h18M3 12h18M3 17h18" />
      <path d="M8 7v5M14 12v5M11 17V7" />
    </svg>
  );
}

export function IconKitchen(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 12h16" />
      <path d="M8 7v2M12 7v2M8 15v2M12 15v2" />
    </svg>
  );
}

export function IconBath(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" />
      <path d="M7 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2" />
      <path d="M6 19l-1 2M18 19l1 2" />
    </svg>
  );
}

export function IconCabinet(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M12 3v18" />
      <path d="M10 11h-.5M14 11h.5" />
    </svg>
  );
}

export function IconMenu(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconLinkedin(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4" />
    </svg>
  );
}

// Maps service slug -> icon component
export const serviceIcons: Record<
  string,
  (p: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  "bygga-hus": IconHome,
  tak: IconRoof,
  fasad: IconFacade,
  "fonster-och-dorr": IconWindow,
  "gips-och-regelarbete": IconWall,
  golvlaggning: IconFloor,
  koksmontering: IconKitchen,
  badrum: IconBath,
  byggkomplettering: IconCabinet,
};
