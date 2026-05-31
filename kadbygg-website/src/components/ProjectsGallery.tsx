"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectCategories } from "@/lib/site";
import { IconClose, IconArrow } from "./icons";

export default function ProjectsGallery() {
  const [active, setActive] = useState("alla");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "alla"
      ? projects
      : projects.filter((p) => p.category === active);

  const open = lightbox !== null ? filtered[lightbox] : null;

  function go(dir: number) {
    if (lightbox === null) return;
    const next = (lightbox + dir + filtered.length) % filtered.length;
    setLightbox(next);
  }

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2.5">
        {projectCategories.map((cat) => {
          const isActive = active === cat.slug;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => {
                setActive(cat.slug);
                setLightbox(null);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-forest-800 text-white shadow-sm"
                  : "border border-ink/10 bg-white text-ink-soft hover:border-forest-800/40 hover:text-forest-800"
              }`}
              aria-pressed={isActive}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.button
              type="button"
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.04 }}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              aria-label={`Visa ${p.title}`}
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-xs font-semibold uppercase tracking-widest2 text-amber-400">
                  {p.categoryLabel}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-white/70">{p.location}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/95 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
          >
            <button
              type="button"
              className="absolute right-5 top-5 z-10 text-white/80 transition-colors hover:text-white"
              onClick={() => setLightbox(null)}
              aria-label="Stäng"
            >
              <IconClose className="h-8 w-8" />
            </button>

            <button
              type="button"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Föregående"
            >
              <IconArrow className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Nästa"
            >
              <IconArrow className="h-5 w-5" />
            </button>

            <motion.div
              key={open.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={open.image}
                  alt={open.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs font-semibold uppercase tracking-widest2 text-amber-400">
                  {open.categoryLabel}
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold text-white">
                  {open.title}
                </h3>
                <p className="mt-1 text-white/70">{open.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
