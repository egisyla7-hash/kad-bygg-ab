import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/site";
import { serviceIcons, IconArrow } from "./icons";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.slug] ?? serviceIcons["bygga-hus"];
  return (
    <Link
      href={`/tjanster/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/10 to-transparent" />
        <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-amber-500 text-white shadow-lg">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-forest-900">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {service.short}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-600">
          Läs mer
          <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
