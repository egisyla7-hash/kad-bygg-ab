import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { IconMail, IconPhone, IconArrow, IconCheck } from "@/components/icons";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Omdömen",
  description:
    "Omdömen om KAD Bygg AB i Uppsala. Vi bygger vårt rykte med varje projekt – dela gärna din upplevelse av vårt arbete.",
  alternates: { canonical: "/omdomen" },
};

const promises = [
  "Vi lyssnar på dina behov och återkopplar tydligt.",
  "Vi håller tider och kommunicerar om något ändras.",
  "Vi lämnar en ren och säker arbetsplats.",
  "Vi går igenom resultatet tillsammans med dig.",
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Omdömen"
        title="Vårt rykte byggs med varje projekt"
        intro="Vi är ett ungt företag som växer genom nöjda kunder. Här samlar vi framåt omdömen från dem vi arbetat med."
        crumbs={[{ label: "Hem", href: "/" }, { label: "Omdömen" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          {/* Honest empty-state, premium presentation.
              TODO: När riktiga omdömen finns – ersätt detta block med en lista
              av kundcitat (namn, projekt, betyg). */}
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-white">
                <IconCheck className="h-8 w-8" />
              </div>
              <h2 className="font-display text-3xl font-bold text-forest-900 sm:text-4xl">
                Bli en av våra första att lämna ett omdöme
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                Har du anlitat KAD Bygg? Vi blir glada om du delar din
                upplevelse – det hjälper både oss att bli bättre och andra att
                känna sig trygga med att välja oss. Hör av dig på telefon eller
                e-post så lägger vi upp ditt omdöme här.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href={company.emailHref} className="btn-primary">
                  <IconMail className="h-4 w-4" />
                  Lämna ett omdöme
                </a>
                <a href={company.phoneHref} className="btn-outline">
                  <IconPhone className="h-4 w-4" />
                  {company.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our promise to customers */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Vårt löfte"
            title="Det här kan du förvänta dig av oss"
            intro="Tills omdömena fyller den här sidan står vårt löfte till varje kund kvar."
          />
          <div>
            <div className="space-y-5">
              {promises.map((p, i) => (
                <Reveal key={p} delay={i * 0.05} className="flex items-start gap-4 rounded-2xl bg-bone p-5">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-ink-soft">{p}</span>
                </Reveal>
              ))}
            </div>
            <Link href="/projekt" className="btn-outline mt-8">
              Se våra projekt
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
