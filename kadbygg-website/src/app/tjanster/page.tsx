import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "KAD Bygg erbjuder nybyggnation, tak, fasad, fönster & dörr, gips, golvläggning, köksmontering, badrum och byggkomplettering i Uppsala med omnejd.",
  alternates: { canonical: "/tjanster" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Våra tjänster"
        title="Bygg- och renoveringstjänster för hela projektet"
        intro="Nio tjänsteområden som täcker hela byggprocessen. Välj en enskild tjänst eller låt oss ta hand om helheten."
        crumbs={[{ label: "Hem", href: "/" }, { label: "Tjänster" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
