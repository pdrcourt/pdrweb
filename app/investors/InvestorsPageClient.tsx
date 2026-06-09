"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";
import GrowthStatsCard from "@/components/pages/GrowthStatsCard";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  FileBarChart,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  BookOpen,
  LineChart,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const TIMELINE = [
  { date: "Mar 2019", text: "Bootstrapped with an ad-hoc investment of ₹15 Lac." },
  {
    date: "Mar 2020",
    text: "Hired our first full-time arbitrator and started working in 11 languages.",
  },
  {
    date: "Mar 2021",
    text: "Received multiple disputes worth INR 9 Cr — set a 60-day resolution target and achieved it.",
  },
  {
    date: "Jan 2022",
    text: "Opened physical conciliation centers in Mumbai & Delhi.",
  },
  {
    date: "Feb 2023",
    text: 'Released "Negotiation Techniques for NBFCs" — specialized insights and case studies in ADR for Non-Banking Financial Companies.',
  },
  {
    date: "Jun 2023",
    text: "Published the Knowledge Centre on our website — a wealth of specialized resources covering all facets of alternative dispute resolution.",
  },
];

const V2_FEATURES = [
  "Enhanced security",
  "User-centric interface",
  "Unparalleled support for MSMEs",
];

const WHY_INVEST = [
  {
    icon: TrendingUp,
    title: "Proven track record",
    text: "A consistent record of high performance at the forefront of technology in the ADR space.",
  },
  {
    icon: FileBarChart,
    title: "Full transparency",
    text: "Access to comprehensive financial reports, business plans, and P&L sheets outlining our trajectory.",
  },
  {
    icon: ShieldCheck,
    title: "Forward-thinking platform",
    text: "Aligned with efficient dispute resolution — a prime opportunity for long-term investment.",
  },
];

export default function InvestorsPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
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
                <span className="eyebrow mb-6">Investor Relations</span>
                <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                  Invest in the leader of{" "}
                  <span className="gold-text">ADR innovation</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-xl">
                  Join PDR COURT, an innovative ADR platform, and discover how
                  your investment can help revolutionize dispute resolution
                  services across India.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Request investor deck
                  </Link>
                  <Link href="/about" className="btn-outline">
                    About PDR COURT
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ INTRO ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease }}
              >
                <span className="eyebrow mb-5">The Opportunity</span>
                <h2 className="heading-md">
                  Tap into a high-performing{" "}
                  <span className="accent-serif">ADR platform</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="space-y-5"
              >
                <p className="text-lg text-ink-75 leading-relaxed">
                  With a proven track record of high performance, PDR COURT
                  stands at the forefront of technology in the ADR space. Our
                  state-of-the-art, user-friendly software enhances the Online
                  Dispute Resolution experience and positions us as industry
                  leaders.
                </p>
                <p className="text-lg text-ink-75 leading-relaxed">
                  Investors benefit from our commitment to transparency — with
                  access to comprehensive financial reports, business plans, and
                  P&amp;L sheets. By investing in PDR COURT, you align with a
                  forward-thinking platform built for efficient dispute
                  resolution and long-term growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ GROWTH STATS ════════ */}
        <div className="border-t border-cream-300">
          <GrowthStatsCard />
        </div>

        {/* ════════ OUR STORY SO FAR — timeline ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow justify-center">Our Journey</span>
              <h2 className="heading-lg mt-3">
                Our story <span className="accent-serif">so far</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                Dedicated to building a global platform of trust that
                revolutionizes the justice-seeking process through
                state-of-the-art technology.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-[26px] sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 sm:-translate-x-1/2" />
              <div className="space-y-10">
                {TIMELINE.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease }}
                    className={`relative flex items-start ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-[26px] sm:left-1/2 sm:-translate-x-1/2 -translate-x-1/2 z-10">
                      <span className="block w-4 h-4 rounded-full bg-gold-gradient ring-4 ring-white" />
                    </div>
                    <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8">
                      <div className="surface-card p-6">
                        <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                          {m.date}
                        </div>
                        <p className="text-sm text-ink-70 leading-relaxed">
                          {m.text}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ PDR COURT 2.0 — card ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 md:p-12"
            >
              <div className="pointer-events-none absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[120px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />

              <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-300">
                    <Sparkles className="w-4 h-4" />
                    What&apos;s Next
                  </span>
                  <h3 className="mt-4 text-3xl md:text-4xl font-display font-bold leading-tight">
                    PDR COURT <span className="gold-text">2.0</span>
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-paper-50 uppercase tracking-wider">
                    Rolling out from March 2024
                  </p>
                  <p className="mt-5 text-paper-65 leading-relaxed">
                    The next generation of our platform — rebuilt around
                    security, usability, and deeper support for the businesses
                    we serve.
                  </p>
                </div>

                <div className="space-y-3">
                  {V2_FEATURES.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, ease, delay: 0.1 + i * 0.1 }}
                      className="flex items-center gap-3 rounded-xl bg-white/[0.06] border border-white/10 px-5 py-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary-300 flex-shrink-0" />
                      <span className="font-semibold text-white">{f}</span>
                    </motion.div>
                  ))}
                  <div className="flex items-center gap-3 rounded-xl bg-gold-gradient px-5 py-4 mt-4">
                    <BookOpen className="w-5 h-5 text-white flex-shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-paper-70">
                        Upcoming Book
                      </div>
                      <div className="font-display font-bold text-white leading-tight">
                        How to Reduce Loan Write-Off
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="pb-24">
          <div className={SECTION}>
            <div className="rounded-[2rem] bg-cream-200 border border-cream-300 p-8 md:p-12 text-center">
              <span className="eyebrow justify-center">Interested?</span>
              <h2 className="heading-md mt-3 max-w-2xl mx-auto">
                Partner with a platform building the future of dispute
                resolution
              </h2>
              <p className="text-ink-55 mt-4 max-w-xl mx-auto">
                Reach out to our team for financial reports, business plans, and
                a detailed investment overview.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Connect with us
                </Link>
                <Link href="/talk-to-us" className="btn-outline">
                  Talk to an expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
