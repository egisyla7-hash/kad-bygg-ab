import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.legalName,
    short_name: company.shortName,
    description: company.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6f2",
    theme_color: "#2d4a1e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
