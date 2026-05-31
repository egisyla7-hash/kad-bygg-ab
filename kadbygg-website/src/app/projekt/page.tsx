import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGallery from "@/components/ProjectsGallery";
import BeforeAfter from "@/components/BeforeAfter";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Projekt",
  description:
    "Se ett urval av KAD Byggs projekt i Uppsala – tak, fasad, nybyggnation, kök, golv, badrum och inredningssnickerier. Filtrera och utforska vårt arbete.",
  alternates: { canonical: "/projekt" },
};

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
    beforeAlt: "Golvläggning under arbete med blått underlag.",
    afterAlt: "Färdiglagd ekparkett.",
    title: "Golv – från underlag till parkett",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projekt"
        title="Ett urval av vårt arbete"
        intro="Verkliga projekt från Uppsala med omnejd. Filtrera efter kategori och klicka på ett projekt för att se det större."
        crumbs={[{ label: "Hem", href: "/" }, { label: "Projekt" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <ProjectsGallery />
        </div>
      </section>

      {/* Before / after */}
      <section className="bg-forest-50 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Före &amp; efter"
            title="Se skillnaden steg för steg"
            intro="Dra i reglaget för att jämföra arbete under uppförande med det färdiga resultatet."
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

      <CTA />
    </>
  );
}
