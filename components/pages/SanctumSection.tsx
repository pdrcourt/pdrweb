"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Quote, ArrowRight, ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

interface SanctumProps {
  /** "editorial" → magazine/poster styling (matches the Rules page) */
  variant?: "default" | "editorial";
}

/**
 * Reusable "A Sanctum of Rewarding Experiences" section.
 * Drop it on any page — collaboration / partnership messaging + Let's Connect CTA.
 */
export default function SanctumSection({ variant = "default" }: SanctumProps) {
  if (variant === "editorial") return <EditorialSanctum />;
  return <DefaultSanctum />;
}

/* ───────────────────── EDITORIAL (magazine) ───────────────────── */
function EditorialSanctum() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-cream">
      {/* faint construction line-art */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g fill="none" stroke="#834009" strokeWidth="1" opacity="0.08">
          <path d="M-50 180 C 420 60, 900 360, 1490 140" />
          <path d="M-50 420 C 460 520, 980 300, 1490 520" />
          <ellipse cx="720" cy="300" rx="700" ry="240" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="relative rounded-[2rem] border border-primary/15 bg-white shadow-gold p-8 md:p-14"
        >
          <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-16 items-center">
            {/* left — title block */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                A Rewarding Partnership
              </span>
              <h2 className="mt-5 font-editorial font-medium text-dark leading-[1.04] text-[clamp(2rem,4.6vw,3.5rem)]">
                A Sanctum of{" "}
                <span className="italic text-ink-70">Rewarding Experiences</span>
              </h2>
              <p className="mt-6 text-ink-60 leading-relaxed max-w-md">
                At PDR COURT, our success is driven by a team of expert
                professionals who execute the entire ADR process — harnessing
                cutting-edge technology to enhance efficiency and deliver the
                benefits of a modern platform.
              </p>
              <Link href="/contact" className="group mt-9 inline-flex items-center gap-4">
                <span className="w-12 h-12 rounded-full border border-dark/15 flex items-center justify-center text-ink-55 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-dark group-hover:text-primary transition-colors">
                  Let&apos;s Connect
                </span>
              </Link>
            </div>

            {/* vertical hairline (desktop) */}
            <div className="hidden lg:block w-px h-full bg-primary/15" />

            {/* right — editorial pull-quote */}
            <div className="relative">
              <span className="font-editorial text-[5rem] leading-[0.6] text-primary/25 select-none">
                &ldquo;
              </span>
              <p className="mt-2 font-editorial italic text-ink-80 leading-[1.25] text-[clamp(1.5rem,2.6vw,2.25rem)]">
                Our success is driven by our ability to collaborate and enable
                others to win.
              </p>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                — If you succeed, we succeed.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── DEFAULT (original) ───────────────────── */
function DefaultSanctum() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden rounded-[2rem] bg-gold-subtle border border-primary/15 p-8 md:p-14"
        >
          <div className="pointer-events-none absolute -top-16 -right-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <span className="eyebrow mb-5">A Rewarding Partnership</span>
              <h2 className="heading-md">
                A Sanctum of{" "}
                <span className="accent-serif">Rewarding Experiences</span>
              </h2>
              <p className="mt-5 text-ink-70 leading-relaxed">
                At PDR COURT, our success is driven by a team of expert
                professionals who execute the entire ADR process. We harness
                cutting-edge technology to enhance efficiency and deliver the
                benefits of a modern platform.
              </p>
              <Link href="/contact" className="btn-primary btn-sm mt-8">
                Let&apos;s Connect
              </Link>
            </div>

            {/* pull-quote */}
            <div className="relative rounded-3xl bg-dark text-white p-8 md:p-10 overflow-hidden">
              <div className="pointer-events-none absolute -top-16 -right-12 w-56 h-56 rounded-full bg-primary/25 blur-[80px]" />
              <Quote className="w-9 h-9 text-primary/60" />
              <p className="mt-4 text-2xl md:text-3xl font-display font-semibold leading-snug">
                Our success is driven by our ability to collaborate and enable
                others to win.
              </p>
              <p className="mt-4 text-primary-300 font-semibold">
                If you succeed, we succeed.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-paper-80 hover:text-primary-300 hover:gap-3 transition-all"
              >
                Start a conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
