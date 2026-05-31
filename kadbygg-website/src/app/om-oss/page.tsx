import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { IconCheck } from "@/components/icons";
import { company, reasons, processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "KAD Bygg AB är ett byggföretag i Uppsala grundat 2022 med ett erfaret arbetslag. Lär känna oss, våra värderingar och vårt sätt att arbeta.",
  alternates: { canonical: "/om-oss" },
};

const values = [
  {
    title: "Kvalitet",
    text: "Vi gör jobbet rätt från början. Hållbara material, fackmässigt utförande och en finish vi kan stå för.",
  },
  {
    title: "Ansvar",
    text: "Vi håller vad vi lovar, kommunicerar tydligt och tar ansvar för hela projektet från start till överlämning.",
  },
  {
    title: "Omtanke",
    text: "Vi värnar om din bostad, vår arbetsplats och de människor som arbetar och bor där.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title="Byggföretaget i Uppsala som tar helhetsansvar"
        intro={company.tagline}
        crumbs={[{ label: "Hem", href: "/" }, { label: "Om oss" }]}
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/projects/tak-2.jpeg"
                alt="KAD Byggs arbetslag reser takstolar på en byggarbetsplats."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Vår historia"
              title="Grundat 2022 – byggt på hantverk"
              intro="KAD Bygg AB grundades 2022 och har vuxit till ett lag på 13 medarbetare. Vi är ett registrerat aktiebolag med säte i Uppsala och inriktning på snickeri, kök, renovering och nybyggnation."
            />
            <div className="mt-6 space-y-4 text-ink-muted">
              <p>
                Det som började som ett mindre snickeriföretag har utvecklats
                till en bred byggentreprenör. Idag arbetar vi i hela
                byggprocessen – från grund, stomme och tak till fasad, fönster,
                golv, kök och badrum.
              </p>
              <p>
                Vi tror på enkelheten i att ha en partner som tar ansvar för
                helheten. Det ger färre kontaktytor, en tydligare tidsplan och
                ett slutresultat där allt hänger ihop.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <div>
                <dt className="text-sm text-ink-muted">Grundat</dt>
                <dd className="font-display text-2xl font-bold text-forest-900">
                  {company.founded}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-muted">Medarbetare</dt>
                <dd className="font-display text-2xl font-bold text-forest-900">
                  {company.employees}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-muted">Org.nr</dt>
                <dd className="font-display text-base font-bold text-forest-900">
                  {company.orgNr}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-muted">Ort</dt>
                <dd className="font-display text-2xl font-bold text-forest-900">
                  {company.address.city}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Våra värderingar"
            title="Det här står vi för"
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink/5 bg-bone p-8">
                  <h3 className="font-display text-xl font-bold text-forest-900">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why + process condensed */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Varför välja oss"
            title="Fördelar med en samlad entreprenör"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <div className="flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-ink/5">
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-forest-900">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {r.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-forest-900 py-20 text-white lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Så arbetar vi"
            title="Fyra steg från idé till färdigt"
            align="center"
            light
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                  <span className="font-display text-5xl font-bold text-amber-400/30">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold">
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
    </>
  );
}
