import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { IconCheck, IconArrow } from "@/components/icons";
import { services, projects, company } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.title} i ${company.address.city} – ${service.short} ${service.description.slice(0, 90)}`,
    alternates: { canonical: `/tjanster/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = projects
    .filter((p) => p.category === service.slug)
    .slice(0, 3);

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Tjänst"
        title={service.title}
        intro={service.short}
        crumbs={[
          { label: "Hem", href: "/" },
          { label: "Tjänster", href: "/tjanster" },
          { label: service.title },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
              Vad vi erbjuder
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              {service.description}
            </p>

            <ul className="mt-8 space-y-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-ink-soft">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/kontakt" className="btn-primary">
                Begär offert
                <IconArrow className="h-4 w-4" />
              </Link>
              <Link href="/projekt" className="btn-outline">
                Se projekt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <h2 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
              Projekt inom {service.title.toLowerCase()}
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.05}>
                  <article className="group relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display text-lg font-bold text-white">
                        {p.title}
                      </h3>
                      <p className="text-sm text-white/70">{p.location}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
            Andra tjänster
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/tjanster/${s.slug}`}
                className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-amber-500 hover:text-amber-600"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
