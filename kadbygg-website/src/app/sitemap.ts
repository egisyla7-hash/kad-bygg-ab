import type { MetadataRoute } from "next";
import { company, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/om-oss",
    "/tjanster",
    "/projekt",
    "/omdomen",
    "/kontakt",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/tjanster/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
