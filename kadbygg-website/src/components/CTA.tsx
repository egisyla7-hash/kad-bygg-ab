import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/cta.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-950/85" />
      </div>

      <div className="container-x relative z-10 py-20 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center text-amber-400">
            Redo att börja?
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Låt oss förverkliga ditt nästa byggprojekt
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
            Berätta om dina planer så återkommer vi med en tydlig offert utan
            förpliktelser. Vi finns i {company.address.city} med omnejd.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/kontakt" className="btn-primary">
              Begär offert
              <IconArrow className="h-4 w-4" />
            </Link>
            <a href={company.phoneHref} className="btn-ghost">
              <IconPhone className="h-4 w-4" />
              Ring {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
