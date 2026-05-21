"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SanctumSection from "@/components/pages/SanctumSection";
import { motion } from "framer-motion";
import Link from "next/link";
import { Scale, Handshake, Gavel, ArrowRight, BookText } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const RULEBOOKS = [
  {
    icon: Scale,
    title: "Arbitration Rules",
    text: "PDR COURT is building a place of trust that ensures everything is established in truth. India's first 'Indic PDR Court' — built on a robust digital system and infrastructure for effective dispute resolution and efficient enforcement.",
    href: "/arbitration-rules",
  },
  {
    icon: Handshake,
    title: "Mediation Rules",
    text: "Our experience, business management plans, and growth have set a record of high performance. Investing in PDR COURT is investing in success, bottom line & profit.",
    href: "/mediation-rules",
  },
  {
    icon: Gavel,
    title: "Rules of ODR Proceedings",
    text: "We aim to be present in every city of business. In keeping with this approach, we plan to expand our presence domestically and globally over the coming months.",
    href: "/proceeding-rules",
  },
];

export default function RulesPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-dark text-white pt-32 md:pt-40 pb-24 md:pb-32">
          <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/50 via-dark to-dark" />
          </div>
          <div className="pointer-events-none absolute -top-24 right-[-10%] w-[640px] h-[640px] rounded-full bg-primary/15 blur-[150px]" />
          <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-[460px] h-[460px] rounded-full bg-amber-500/10 blur-[130px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(189,107,32,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(189,107,32,.6) 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-50" />

          <div className={`relative ${SECTION}`}>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-300">
                  <span className="inline-block w-7 h-px bg-primary/60" />
                  Rules &amp; Guidelines
                </span>
                <h1 className="mt-6 text-4xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight">
                  The framework behind{" "}
                  <span className="gold-text">every fair resolution</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/65 leading-relaxed max-w-xl">
                  PDR COURT&apos;s rules and guidelines inform every party of the
                  procedure set for Arbitration, Mediation, and Online Dispute
                  Resolution — clear, consistent, and built on trust.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#rulebooks" className="btn-primary">
                    Explore the rulebooks
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-200 px-7 py-3.5"
                  >
                    Got any questions?
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="relative rounded-[2rem] bg-white/[0.04] border border-white/10 backdrop-blur-sm p-7 md:p-8"
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300">
                  <BookText className="w-4 h-4" />
                  Three Rulebooks
                </span>
                <div className="mt-5 space-y-2.5">
                  {RULEBOOKS.map((r) => (
                    <Link
                      key={r.title}
                      href={r.href}
                      className="group flex items-center gap-4 rounded-xl bg-white/[0.05] border border-white/10 px-4 py-3.5 hover:border-primary/40 hover:bg-white/[0.08] transition-all"
                    >
                      <span className="w-9 h-9 flex-shrink-0 rounded-lg bg-primary/15 text-primary-300 flex items-center justify-center">
                        <r.icon className="w-4 h-4" />
                      </span>
                      <span className="flex-1 text-sm font-semibold text-white">
                        {r.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-primary-300 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ RULEBOOK CARDS ════════ */}
        <section id="rulebooks" className="py-20 lg:py-28 scroll-mt-20">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">The Rulebooks</span>
              <h2 className="heading-lg mt-3">
                Choose a <span className="accent-serif">rulebook</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                Each set of rules governs a distinct resolution pathway. Select
                one to read the full guidelines.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-7">
              {RULEBOOKS.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                >
                  <Link
                    href={r.href}
                    className="surface-card group flex flex-col h-full p-8"
                  >
                    <span className="inline-flex w-14 h-14 rounded-2xl bg-gold-gradient text-white items-center justify-center mb-6">
                      <r.icon className="w-7 h-7" />
                    </span>
                    <h3 className="text-xl font-display font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-dark/60 leading-relaxed flex-1">
                      {r.text}
                    </p>
                    <span className="mt-6 pt-5 border-t border-cream-300 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                      View rules
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ SANCTUM (reusable) ════════ */}
        <div className="bg-white border-y border-cream-300">
          <SanctumSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
