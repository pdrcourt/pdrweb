"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import QuestPillars from "@/components/pages/QuestPillars";
import { motion } from "framer-motion";
import Link from "next/link";
import { Scale, Handshake, FolderCheck, Users } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const TEAM = [
  { icon: Scale, value: "25", label: "Arbitrators" },
  { icon: Handshake, value: "24", label: "Conciliators" },
  { icon: FolderCheck, value: "64", label: "Case Managers" },
];

export default function NeutralsPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* HERO */}
        <section className="relative overflow-hidden bg-hero-gradient pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[130px]" />
          <div className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-amber-400/10 blur-[120px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(189,107,32,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(189,107,32,.5) 1px,transparent 1px)",
              backgroundSize: "76px 76px",
            }}
          />
          <div className={`relative ${SECTION}`}>
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span className="eyebrow mb-6">Our Neutrals</span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-dark leading-[1.05] tracking-tight">
                  Our team, <span className="gold-text">our pride</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-dark/55 leading-relaxed max-w-xl">
                  Become a Neutral at PDR COURT and contribute to effective
                  dispute resolution. Join an expert panel that facilitates fair,
                  unbiased outcomes across India.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/join-us" className="btn-primary">
                    Join our panel
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Talk to our team
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="relative rounded-[2rem] bg-dark text-white p-8 md:p-10 shadow-gold-lg overflow-hidden"
              >
                <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-primary/25 blur-[90px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300">
                  <Users className="w-4 h-4" />
                  Our Team
                </span>
                <p className="mt-4 text-xl font-display font-semibold leading-snug">
                  An integrous, diligent panel — skilled across law and business.
                </p>
                <div className="mt-7 grid grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/10">
                  {TEAM.map((t) => (
                    <div key={t.label} className="bg-dark px-3 py-5 text-center">
                      <t.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-3xl font-display font-bold gold-text">
                        {t.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-white/45 mt-1">
                        {t.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease }}
              >
                <span className="eyebrow mb-5">Who they are</span>
                <h2 className="heading-md">
                  An integrous &amp; diligent{" "}
                  <span className="accent-serif">team</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
              >
                <p className="text-lg text-dark/75 leading-relaxed">
                  Our panel of Neutrals comprises highly skilled professionals
                  with years of experience in law and business — domestic and
                  international — working alongside experts across industries.
                  The team is equipped to manage the varied, multi-faceted needs
                  of every member.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <QuestPillars />

        {/* CTA */}
        <section className="py-20 lg:py-24">
          <div className={SECTION}>
            <div className="relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 md:p-14 text-center">
              <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-primary/20 blur-[120px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="relative">
                <span className="eyebrow justify-center text-primary-300">
                  Join Us
                </span>
                <h2 className="mt-3 max-w-2xl mx-auto text-2xl md:text-4xl font-display font-bold text-white leading-tight">
                  Become a Neutral with PDR COURT
                </h2>
                <p className="text-white/60 mt-4 max-w-xl mx-auto leading-relaxed">
                  Lend your expertise to a platform redefining dispute
                  resolution for all of India.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/join-us" className="btn-primary">
                    Explore opportunities
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-200 px-7 py-3.5"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
