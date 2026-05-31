import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import BeforeAfter from "@/components/BeforeAfter";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import { IconArrow, IconCheck, IconPhone, IconMail, IconPin } from "@/components/icons";
import { services, projects, reasons, processSteps, company } from "@/lib/site";

const featuredServices = services.slice(0, 6);
const featuredProjects = projects.filter((p) =>
  ["bh-4", "tak-1", "fasad-1", "kok-5", "golv-1", "bh-3"].includes(p.id)
);

const beforeAfterPairs = [
  {
    beforeSrc: "/images/projects/kok-2.jpeg",
    afterSrc: "/images/projects/kok-5.jpeg",
    beforeAlt: "Kök under montering med stommar och framdragen el.",
    afterAlt: "Färdigmonterat kök med vitvaror och kakel.",
    title: "Kök – från stomme till färdigt",
  },
  {
    beforeSrc: "/images/projects/golv-2.jpeg",
    afterSrc: "/images/projects/golv-1.jpeg",
    beforeAlt: "Golvläggning under arbete med underlag.",
    afterAlt: "Färdiglagd ekparkett.",
    title: "Golv – från underlag till parkett",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      {/* Intro / About teaser */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/about.jpeg"
                alt="Massivträ takbjälklag byggt av KAD Bygg."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-amber-500 px-8 py-6 text-white shadow-xl sm:block lg:-right-6">
              <p className="font-display text-4xl font-bold">
                {new Date().getFullYear() - company.founded}+
              </p>
              <p className="text-sm font-medium">år av byggande</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Om KAD Bygg"
              title="En helhetsentreprenör du kan lita på"
              intro="KAD Bygg AB är ett registrerat byggföretag i Uppsala med ett erfaret arbetslag. Vi tar oss an hela byggprocessen – från grund, stomme och tak till de inredningsdetaljer som gör huset färdigt."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Ett samlat ansvar för hela projektet",
                "Erfaret och engagerat arbetslag",
                "Tydlig kommunikation och offert",
                "Ren och säker arbetsplats",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/om-oss" className="btn-outline mt-9">
              Mer om oss
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Våra tjänster"
              title="Allt under ett och samma tak"
              intro="Nio tjänsteområden som tillsammans täcker hela byggprocessen – välj en eller låt oss ta hand om helheten."
            />
            <Reveal>
              <Link href="/tjanster" className="btn-outline shrink-0">
                Alla tjänster
                <IconArrow className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Utvalda projekt"
              title="Ett urval av vårt arbete"
              intro="Verkliga projekt från Uppsala med omnejd – tak, fasad, nybyggnation och inredning."
            />
            <Reveal>
              <Link href="/projekt" className="btn-outline shrink-0">
                Se alla projekt
                <IconArrow className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <article className="group relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest2 text-amber-400">
                      {p.categoryLabel}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">{p.location}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section className="bg-forest-50 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Före &amp; efter"
            title="Från byggprocess till färdigt resultat"
            intro="Dra i reglaget för att se skillnaden mellan arbete under uppförande och det färdiga resultatet."
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2">
            {beforeAfterPairs.map((pair, i) => (
              <Reveal key={pair.title} delay={i * 0.1}>
                <div>
                  <BeforeAfter
                    beforeSrc={pair.beforeSrc}
                    afterSrc={pair.afterSrc}
                    beforeAlt={pair.beforeAlt}
                    afterAlt={pair.afterAlt}
                  />
                  <p className="mt-4 text-center font-display text-lg font-semibold text-forest-900">
                    {pair.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Varför KAD Bygg"
              title="Trygghet, bredd och hantverk"
              intro="Vi gör det enkelt att bygga rätt – med ett samlat ansvar och en kvalitet som håller över tid."
            />
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-2xl bg-ink/5 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.05}>
                  <div className="h-full bg-white p-8">
                    <span className="font-display text-2xl font-bold text-amber-500">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold text-forest-900">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {r.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-forest-900 py-20 text-white lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Så arbetar vi"
            title="En tydlig väg från idé till färdigt"
            intro="Fyra enkla steg som gör hela processen trygg och förutsägbar."
            align="center"
            light
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08} className="relative">
                  <span className="font-display text-5xl font-bold text-amber-400/30">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {step.text}
                  </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {/* Contact */}
      <section id="kontakt" className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Kontakta oss"
              title="Berätta om ditt projekt"
              intro="Fyll i formuläret så återkommer vi så snart vi kan. Du kan också ringa eller mejla oss direkt."
            />
            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest-100 text-forest-700">
                  <IconPhone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                    Telefon
                  </p>
                  <a
                    href={company.phoneHref}
                    className="font-display text-lg font-semibold text-forest-900"
                  >
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest-100 text-forest-700">
                  <IconMail className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                    E-post
                  </p>
                  <a
                    href={company.emailHref}
                    className="font-display text-lg font-semibold text-forest-900"
                  >
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest-100 text-forest-700">
                  <IconPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                    Adress
                  </p>
                  <p className="font-display text-lg font-semibold text-forest-900">
                    {company.address.street}, {company.address.postalCode}{" "}
                    {company.address.city}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <Reveal>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
