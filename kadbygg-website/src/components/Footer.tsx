import Link from "next/link";
import Logo from "./Logo";
import { IconPhone, IconMail, IconPin, IconClock, IconLinkedin } from "./icons";
import { company, nav, services } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-white/80">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" href={null} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {company.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KAD Bygg på LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                <IconLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest2 text-amber-500">
              Meny
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest2 text-amber-500">
              Tjänster
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/tjanster/${s.slug}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest2 text-amber-500">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-start gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-start gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.postalCode} {company.address.city}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                {company.openingHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. Org.nr {company.orgNr}. Alla rättigheter
            förbehållna.
          </p>
          <p>
            {company.legalName} · Bygg &amp; renovering i {company.address.city}{" "}
            med omnejd.
          </p>
        </div>
      </div>
    </footer>
  );
}
