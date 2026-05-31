import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { IconPhone, IconMail, IconPin, IconClock } from "@/components/icons";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta KAD Bygg AB i Uppsala. Ring 073-551 07 25, mejla info@kadbygg.se eller fyll i formuläret för en kostnadsfri offert.",
  alternates: { canonical: "/kontakt" },
};

const details = [
  {
    icon: IconPhone,
    label: "Telefon",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: IconMail,
    label: "E-post",
    value: company.email,
    href: company.emailHref,
  },
  {
    icon: IconPin,
    label: "Adress",
    value: `${company.address.street}, ${company.address.postalCode} ${company.address.city}`,
  },
  {
    icon: IconClock,
    label: "Öppettider",
    value: company.openingHours,
  },
];

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(
    `${company.address.street}, ${company.address.postalCode} ${company.address.city}, ${company.address.country}`
  );

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Vi ser fram emot att höra från dig"
        intro="Berätta om ditt projekt så återkommer vi med en tydlig och kostnadsfri offert. Ring, mejla eller fyll i formuläret nedan."
        crumbs={[{ label: "Hem", href: "/" }, { label: "Kontakt" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Details */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {details.map((d, i) => {
                const Icon = d.icon;
                const inner = (
                  <div className="flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-ink/5 transition-shadow hover:shadow-md">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest-100 text-forest-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink-muted">
                      {d.label}
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-forest-900">
                      {d.value}
                    </p>
                  </div>
                );
                return (
                  <Reveal key={d.label} delay={i * 0.05}>
                    {d.href ? (
                      <a href={d.href} className="block h-full">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            {/* Map */}
            <Reveal delay={0.1}>
              <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-ink/5">
                <iframe
                  title={`Karta till ${company.legalName}`}
                  src={`https://maps.google.com/maps?q=${mapsQuery}&z=13&output=embed`}
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-forest-900">
                Begär offert
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Fyll i dina uppgifter så hör vi av oss så snart vi kan.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
