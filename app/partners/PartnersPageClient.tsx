"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";
import QuestPillars from "@/components/pages/QuestPillars";
import GrowthStatsCard from "@/components/pages/GrowthStatsCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { Handshake, Megaphone, Award, ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const MODELS = [
  {
    icon: Megaphone,
    title: "Brand-Partnering",
    text: "Double your reach by joining hands with us — diversify your services, cater to uncharted territories, and get in front of a broader audience in the most cost-effective manner.",
  },
  {
    icon: Award,
    title: "Sponsorship",
    text: "Leverage commercial advantage with our Company Sponsorship offer — be part of our events, webinars, seminars, and conferences, and engage a live audience to achieve your goals.",
  },
];

export default function PartnersPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* HERO */}
        <section className="relative overflow-hidden bg-cream pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[130px]" />
          <div className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-amber-400/10 blur-[120px]" />
          <EditorialHeroDecor />
          <div className={`relative ${SECTION}`}>
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span className="eyebrow mb-6">Partnerships</span>
                <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                  Partner in our <span className="gold-text">growth story</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-xl">
                  Partner with us to transform dispute resolution. Harness
                  advanced ADR technology and innovative solutions to reshape
                  conflict management for sustainable success.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Become a partner
                  </Link>
                  <Link href="/about" className="btn-outline">
                    About PDR COURT
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GROWTH STATS */}
        <div className="border-t border-cream-300">
          <GrowthStatsCard />
        </div>

        {/* PARTNERSHIP MODELS */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Ways to Collaborate</span>
              <h2 className="heading-lg mt-3">
                Two ways to <span className="accent-serif">partner</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                Whatever your scale, there&apos;s a model designed to grow your
                reach alongside ours.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-7">
              {MODELS.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="surface-card p-8 h-full"
                >
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-gold-gradient text-white items-center justify-center mb-6">
                    <m.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-2xl font-display font-bold text-dark mb-3">
                    {m.title}
                  </h3>
                  <p className="text-ink-65 leading-relaxed">{m.text}</p>
                </motion.div>
              ))}
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
                  Interested?
                </span>
                <h2 className="mt-3 max-w-2xl mx-auto text-2xl md:text-4xl font-display font-bold text-white leading-tight">
                  Let&apos;s build the future of dispute resolution together
                </h2>
                <p className="text-paper-60 mt-4 max-w-xl mx-auto leading-relaxed">
                  Reach out to explore brand partnerships, sponsorships, and
                  tech-driven collaboration opportunities.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Connect with us
                  </Link>
                  <Link
                    href="/talk-to-us"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-200 px-7 py-3.5"
                  >
                    Talk to an expert
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
