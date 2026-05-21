"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "75%", label: "growth in Y22-23" },
  { value: "5 Lac", label: "disputes resolved" },
  { value: "1000+", label: "enterprise customers" },
];

const NOTE = "Tied up with 33+ NBFCs & 1000+ MSMEs";
const ease = [0.16, 1, 0.3, 1] as const;

export default function GrowthStatsCard() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 md:p-12"
      >
        {/* ambient gold glow */}
        <div className="pointer-events-none absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 w-[360px] h-[360px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gold-gradient" />

        <div className="relative">
          {/* header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-300">
                <TrendingUp className="w-4 h-4" />
                We Are Growing
              </span>
              <h3 className="mt-3 text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                Trusted at scale, growing every year
              </h3>
            </div>
            <span className="inline-flex items-center self-start sm:self-auto rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold text-white/70">
              {NOTE}
            </span>
          </div>

          {/* stat tiles */}
          <div className="grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/10">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.12 }}
                className="bg-dark px-6 py-8 text-center sm:text-left"
              >
                <div className="font-display font-bold leading-none text-5xl md:text-6xl bg-gold-gradient bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-wider text-white/55">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
