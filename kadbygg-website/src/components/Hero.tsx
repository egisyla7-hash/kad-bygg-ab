"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpeg"
          alt="KAD Bygg AB lägger tak på ett flerbostadshus i Uppsala i gryningsljus."
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/70 to-forest-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-950/30" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 pt-28">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-amber-400"
          >
            <span className="h-px w-8 bg-amber-400" />
            Bygg &amp; renovering i {company.address.city}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Vi bygger med
            <span className="block text-amber-400">omsorg och precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Från stomme och tak till kök, golv och badrum. KAD Bygg är din
            helhetsentreprenör i Uppsala med omnejd – ett erfaret arbetslag som
            tar ansvar hela vägen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/kontakt" className="btn-primary">
              Begär offert
              <IconArrow className="h-4 w-4" />
            </Link>
            <a href={company.phoneHref} className="btn-ghost">
              <IconPhone className="h-4 w-4" />
              {company.phone}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
