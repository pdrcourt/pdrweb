"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SanctumSection from "@/components/pages/SanctumSection";
import { motion } from "framer-motion";
import Link from "next/link";
import { Asterisk, ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-10";

// Media frames — numbered, mixed circle/pill, linking to the rulebooks.
type Frame = {
  no: string;
  label: string;
  shape: "circle" | "pill";
  img: string;
  href: string;
};

const GROUP_A: Frame[] = [
  { no: "01", label: "Arbitration", shape: "circle", img: "/images/pdr-court-arbitrator.jpg", href: "/arbitration-rules" },
  { no: "02", label: "Mediation", shape: "circle", img: "/images/business-people-converstation.jpg", href: "/mediation-rules" },
];

const GROUP_B: Frame[] = [
  { no: "01", label: "Proceedings", shape: "pill", img: "/images/business-board-meeting.jpg", href: "/proceeding-rules" },
  { no: "02", label: "Conciliation", shape: "circle", img: "/images/happy-professionals-shaking-hands.jpg", href: "/arbitration-rules" },
];

const RULEBOOKS = [
  {
    no: "01",
    title: "Arbitration Rules",
    text: "The procedure that governs every arbitration conducted on the PDR COURT platform — appointment, conduct, and the enforceable award.",
    href: "/arbitration-rules",
  },
  {
    no: "02",
    title: "Mediation Rules",
    text: "How mediations are structured, conducted, and brought to a fair, mutually agreeable settlement.",
    href: "/mediation-rules",
  },
  {
    no: "03",
    title: "Rules of ODR Proceedings",
    text: "The rules that frame each online proceeding from filing through to the final, binding outcome.",
    href: "/proceeding-rules",
  },
];

function MediaFrame({ f }: { f: Frame }) {
  const isPill = f.shape === "pill";
  return (
    <Link href={f.href} className="group flex flex-col items-center">
      <span className="font-editorial italic text-sm text-ink-45 mb-3 tracking-wide">
        {f.no}
      </span>
      <span
        className={`relative overflow-hidden bg-cream-200 ring-1 ring-dark/[0.06] transition-all duration-500 group-hover:ring-primary/40 group-hover:-translate-y-1 ${
          isPill
            ? "rounded-full w-56 sm:w-72 lg:w-80 h-28 sm:h-32 lg:h-36"
            : "rounded-full w-28 sm:w-32 lg:w-40 h-28 sm:h-32 lg:h-40"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={f.img}
          alt={`${f.label} — PDR COURT`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale-[.35] sepia-[.18] contrast-[1.03] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105"
        />
        {/* warm editorial duotone tint + hover lift */}
        <span className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent mix-blend-multiply" />
        <span className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-500" />
        <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow z-10" />
      </span>
      <span className="mt-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-55 group-hover:text-primary transition-colors">
        {f.label}
      </span>
    </Link>
  );
}

export default function RulesPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream text-dark">
        {/* ════════════════ EDITORIAL POSTER ════════════════ */}
        <section className="relative overflow-hidden min-h-screen pt-24 md:pt-28 pb-[18vw] md:pb-[14vw]">
          {/* faint construction line-art */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <g fill="none" stroke="#834009" strokeWidth="1" opacity="0.1">
              <path d="M-50 250 C 360 120, 760 380, 1490 160" />
              <path d="M-50 470 C 380 560, 820 360, 1490 600" />
              <path d="M250 -50 C 360 360, 240 620, 520 950" />
              <path d="M980 -50 C 880 320, 1140 560, 980 950" />
              <ellipse cx="720" cy="450" rx="640" ry="300" />
            </g>
          </svg>
          {/* top-right dot accent */}
          <span className="absolute top-24 right-8 md:right-14 w-3.5 h-3.5 rounded-full bg-dark/70" />

          <div className={`relative ${SECTION}`}>
            {/* ── TOP HEADLINE ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="relative"
            >
              <h1 className="font-editorial font-medium text-ink-75 leading-[0.9] tracking-tight text-[clamp(2.9rem,10vw,10rem)]">
                The Art of Resolution
              </h1>
              <span className="font-editorial italic text-ink-45 text-[clamp(1rem,2.4vw,2.2rem)] block text-right -mt-2 md:-mt-4 pr-1">
                procedure
              </span>
            </motion.div>

            {/* ── NUMBERED MEDIA ROW ── */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
              className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-10 sm:gap-x-10 lg:gap-x-12"
            >
              {GROUP_A.map((f) => (
                <MediaFrame key={f.label} f={f} />
              ))}

              {/* asterisk divider */}
              <span className="hidden sm:flex flex-col items-center text-primary/70 self-center mt-6">
                <Asterisk className="w-5 h-5" />
              </span>

              {GROUP_B.map((f) => (
                <MediaFrame key={f.label} f={f} />
              ))}
            </motion.div>

            {/* ── CAPTION / TAGLINE ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease, delay: 0.4 }}
              className="mt-10 md:mt-12 max-w-4xl"
            >
              <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-ink-45 leading-relaxed">
                Under the Arbitration &amp; Conciliation Act, 1996 · Code of Civil
                Procedure, 1908
              </p>
              <p className="mt-2 text-[11px] sm:text-xs italic font-semibold uppercase tracking-[0.14em] text-ink-55 leading-relaxed">
                How clear, consistent rules free every party from uncertainty —
                and deliver a fair, enforceable outcome.
              </p>
            </motion.div>

            {/* ── ITALIC DATE-STYLE ACCENT ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.5 }}
              className="mt-12 md:mt-16 flex justify-end"
            >
              <span className="font-editorial italic text-ink-55 text-[clamp(1.4rem,3.4vw,2.6rem)]">
                Three Rulebooks, One Standard
              </span>
            </motion.div>
          </div>

          {/* ── GIANT CLIPPED BRAND NAME ── */}
          <div className="pointer-events-none absolute -bottom-[2.5vw] left-0 right-0 overflow-hidden">
            <div className={SECTION}>
              <span className="block font-editorial font-semibold text-dark/[0.08] leading-none whitespace-nowrap text-[clamp(4rem,19vw,19rem)]">
                PDR COURT
              </span>
            </div>
          </div>
        </section>

        {/* ════════════════ EDITORIAL RULEBOOK INDEX ════════════════ */}
        <section className="relative py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                  The Rulebooks
                </span>
                <h2 className="mt-4 font-editorial font-medium text-dark text-[clamp(2rem,5vw,3.6rem)] leading-[1.05]">
                  Choose a rulebook
                </h2>
              </div>
              <p className="max-w-sm text-sm text-ink-55 leading-relaxed">
                Each set of rules governs a distinct resolution pathway. Select
                one to read its full guidelines.
              </p>
            </div>

            {/* index rows */}
            <div className="border-t border-cream-300">
              {RULEBOOKS.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                >
                  <Link
                    href={r.href}
                    className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[5rem_1fr_1.4fr_auto] items-center gap-5 md:gap-8 py-7 md:py-9 border-b border-cream-300 hover:border-primary/40 transition-colors"
                  >
                    <span className="font-editorial italic text-2xl md:text-3xl text-ink-35 group-hover:text-primary transition-colors">
                      {r.no}
                    </span>
                    <h3 className="font-editorial font-medium text-2xl md:text-4xl text-dark leading-tight group-hover:translate-x-1 transition-transform duration-300">
                      {r.title}
                    </h3>
                    <p className="hidden md:block text-sm text-ink-55 leading-relaxed">
                      {r.text}
                    </p>
                    <span className="flex-shrink-0 w-11 h-11 rounded-full border border-dark/15 flex items-center justify-center text-ink-50 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ SANCTUM (reusable) ════════════════ */}
        <SanctumSection variant="editorial" />
      </main>
      <Footer />
    </>
  );
}
