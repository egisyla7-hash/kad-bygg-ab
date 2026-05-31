"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { IconMenu, IconClose, IconPhone } from "./icons";
import { company, nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHome = pathname === "/";
  // On the homepage the header sits over the dark hero until scrolled.
  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent py-5"
          : "bg-bone/90 py-3 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <Logo variant={transparent ? "light" : "dark"} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Huvudmeny">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white/90 hover:text-white"
                    : active
                    ? "text-amber-600"
                    : "text-ink-soft hover:text-forest-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className={`flex items-center gap-2 text-sm font-semibold ${
              transparent ? "text-white" : "text-forest-800"
            }`}
          >
            <IconPhone className="h-4 w-4" />
            {company.phone}
          </a>
          <Link href="/kontakt" className="btn-primary">
            Begär offert
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`lg:hidden ${transparent ? "text-white" : "text-forest-800"}`}
          aria-label="Öppna meny"
          aria-expanded={open}
        >
          <IconMenu className="h-7 w-7" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-forest-950/98 lg:hidden"
          >
            <div className="container-x flex h-full flex-col">
              <div className="flex items-center justify-between py-5">
                <Logo variant="light" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-white"
                  aria-label="Stäng meny"
                >
                  <IconClose className="h-8 w-8" />
                </button>
              </div>

              <nav
                className="mt-6 flex flex-1 flex-col gap-1"
                aria-label="Mobilmeny"
              >
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-white/10 py-4 font-display text-3xl text-white transition-colors hover:text-amber-400"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-4 py-8">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 text-lg font-semibold text-white"
                >
                  <IconPhone className="h-5 w-5 text-amber-400" />
                  {company.phone}
                </a>
                <Link
                  href="/kontakt"
                  className="btn-primary w-full"
                >
                  Begär offert
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
