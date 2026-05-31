"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { company, services } from "@/lib/site";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  display?: string; // override for non-numeric
};

const stats: Stat[] = [
  { value: company.founded, label: "Grundat", display: String(company.founded) },
  { value: company.employees, suffix: "", label: "Medarbetare" },
  { value: services.length, suffix: "", label: "Tjänster" },
  { value: 0, label: "Verksamma i", display: "Uppsala" },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative z-20 -mt-1 bg-forest-900 text-white">
      <div className="container-x py-12 lg:py-16">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-bold text-amber-400 sm:text-5xl">
                {s.display ? (
                  s.display
                ) : (
                  <Counter to={s.value} suffix={s.suffix} />
                )}
              </dd>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
