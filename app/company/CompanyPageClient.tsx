"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Languages,
  ShieldCheck,
  Sparkles,
  Quote,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

// ─── Curated content (sourced from the migrated company page) ───
const TIMELINE = [
  {
    period: "Mar",
    year: "2019",
    text: "Bootstrapped with an ad-hoc investment of ₹15 Lac — invested in idea creation and brand building.",
  },
  {
    period: "Jan",
    year: "2020",
    text: "Reached break-even and sustained earnings. Formalised SOPs with expert training, hired our first full-time arbitrator, and began operating in 11 languages.",
  },
  {
    period: "Oct",
    year: "2020",
    text: "Applied for Company Registration after extensive market research. Opened communication offices in Mumbai, Delhi, Hyderabad & Bangalore.",
  },
  {
    period: "Dec",
    year: "2020",
    text: "Our website went live and we rolled out long-term Membership plans for applicants.",
  },
  {
    period: "",
    year: "2021",
    text: "Received disputes worth ₹9 Cr and resolved them within our 60-day target. Began publishing our Dispute Resolution paper and crossed ₹20 Cr monthly volume — averaging 10,000 disputes a month.",
  },
  {
    period: "Sep",
    year: "2022",
    text: "Opened physical conciliation centers in Mumbai & Delhi, published our first book “Dispute Resolution Via Negotiation,” and launched a new website.",
  },
  {
    period: "Nov",
    year: "2023",
    text: "Received cases from more than 30 NBFCs & Banks across India.",
  },
  {
    period: "",
    year: "2024",
    text: "Released multiple automations across our software platform.",
  },
];

const PHILOSOPHY = {
  sanskrit:
    "नास्ति सत्यसमो धर्मो न सत्याद्विद्यते परम्। न हि तीव्रतरं किञ्चिद् नृतादिह विद्यते।।",
  transliteration:
    "Nāsti Satyasamo Dharmo Na Satyādvidyate Paraṁ · Na hi Tīvrataraṁ Kiñchid Nr̥tādih Vidyate.",
  english:
    "There is no religion like truth, nothing beyond truth — and nothing more destructive than a lie.",
  hindi: "सत्य जैसा अन्य धर्म नहीं। सत्य से पर कुछ नहीं। असत्य से ज्यादा तीव्रतर कुछ नहीं।",
};

const COO_BIO = [
  "Mr. Mahadev Gitte is an accomplished professional serving as the Chief Operating Officer (COO) at PDR COURT. With a proven track record in operational leadership, he meticulously oversees day-to-day activities, ensuring seamless processes and optimal efficiency — and plays a pivotal role in strategic planning that aligns operational objectives with the organization's vision.",
  "A seasoned team manager, he fosters a positive, collaborative work culture and leads high-performing teams. With a keen eye for financial management, he develops and manages budgets responsibly, and places strong emphasis on quality assurance to uphold PDR COURT's commitment to high-quality ADR services.",
  "Recognising the importance of technology, Mr. Gitte is at the forefront of integrating cutting-edge solutions to streamline operations. He builds robust relationships with clients, partners, and regulatory bodies, and is a strategic risk manager — adept at identifying and mitigating operational risks while ensuring regulatory compliance.",
  "He spearheads comprehensive training programs, establishes key performance indicators, and provides insightful reports to the executive team and board. Through his dynamic leadership, Mr. Gitte propels PDR COURT towards operational excellence.",
];

const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

export default function CompanyPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO — SaaS style ════════ */}
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
              {/* left */}
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span className="eyebrow mb-6">About the Company</span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-dark leading-[1.05] tracking-tight">
                  Your Partner in{" "}
                  <span className="gold-text">Seamless Resolutions</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-dark/55 leading-relaxed max-w-xl">
                  PDR COURT is a leading ADR platform dedicated to efficient
                  dispute resolution — built on innovation, trust, and India's
                  first &ldquo;Indic Digital Court.&rdquo;
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/lodge-dispute" className="btn-primary">
                    Resolve a dispute
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Talk to our team
                  </Link>
                </div>
              </motion.div>

              {/* right — floating fact panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="relative"
              >
                <div className="relative rounded-[2rem] bg-dark text-white p-8 md:p-10 shadow-gold-lg overflow-hidden">
                  <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-primary/25 blur-[90px]" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300">
                    <Sparkles className="w-4 h-4" />
                    Since 2019
                  </span>
                  <p className="mt-4 text-xl font-display font-semibold leading-snug">
                    A technology-first dispute resolution company, serving every
                    corner of India.
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/10">
                    {[
                      { icon: Building2, v: "4+", l: "Office cities" },
                      { icon: Languages, v: "11", l: "Languages" },
                      { icon: ShieldCheck, v: "30+", l: "NBFCs & Banks" },
                    ].map((s) => (
                      <div key={s.l} className="bg-dark px-4 py-5 text-center">
                        <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-display font-bold gold-text">
                          {s.v}
                        </div>
                        <div className="text-[11px] uppercase tracking-wider text-white/45 mt-1">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl bg-white border border-cream-300 shadow-gold px-5 py-3">
                  <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-semibold text-dark leading-tight">
                    India&apos;s first
                    <br />
                    Indic Digital Court
                  </span>
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
                <span className="eyebrow mb-5">Who we are</span>
                <h2 className="heading-md">
                  Cultivating a trustworthy platform for{" "}
                  <span className="accent-serif">every resolution</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="space-y-5"
              >
                <p className="text-lg text-dark/75 leading-relaxed">
                  PDR COURT is cultivating a trustworthy platform that ensures
                  clarity and efficiency. As India&apos;s first &ldquo;Indic
                  Digital Court,&rdquo; we harness cutting-edge software and
                  robust infrastructure for smooth dispute resolution and swift
                  enforcement.
                </p>
                <p className="text-lg text-dark/75 leading-relaxed">
                  Our logo is a signature, an identifier, and a stamp of
                  quality — it illustrates our vision and identity, and remains
                  the most consistent component of everything we communicate.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ TIMELINE — Our growth over the last 5 years ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow justify-center">Our Journey</span>
              <h2 className="heading-lg mt-3">
                Our growth over the last{" "}
                <span className="accent-serif">5 years</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                We created a one-of-a-kind tech platform with Dispute Resolution
                at its core — evolving into a company that serves multiple
                verticals with an unbiased, honest approach.
              </p>
            </div>

            {/* vertical timeline */}
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
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* node */}
                    <div className="absolute left-[26px] sm:left-1/2 sm:-translate-x-1/2 -translate-x-1/2 z-10">
                      <span className="block w-4 h-4 rounded-full bg-gold-gradient ring-4 ring-cream" />
                    </div>
                    {/* card */}
                    <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8">
                      <div className="surface-card p-6">
                        <div className="flex items-baseline gap-2 mb-2">
                          {m.period && (
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">
                              {m.period}
                            </span>
                          )}
                          <span className="text-2xl font-display font-bold text-dark">
                            {m.year}
                          </span>
                        </div>
                        <p className="text-sm text-dark/65 leading-relaxed">
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

        {/* ════════ OUR PHILOSOPHY — decent dark background ════════ */}
        <section className="relative py-24 lg:py-32 bg-dark text-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/40 via-dark to-dark" />
          </div>
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[140px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />

          <div className={`relative ${SECTION}`}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="eyebrow justify-center text-primary-300">
                Our Philosophy
              </span>
              <Quote className="w-10 h-10 text-primary/50 mx-auto mt-6" />
              <p className="mt-6 font-brand text-2xl md:text-4xl leading-[1.5] text-white">
                {PHILOSOPHY.sanskrit}
              </p>
              <div className="mt-8 h-px w-24 bg-gold-gradient mx-auto" />
              <p className="mt-8 text-base md:text-lg italic text-primary-200/90">
                {PHILOSOPHY.transliteration}
              </p>
              <p className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed">
                &ldquo;{PHILOSOPHY.english}&rdquo;
              </p>
              <p className="mt-4 text-sm text-white/45">{PHILOSOPHY.hindi}</p>
            </div>
          </div>
        </section>

        {/* ════════ MANAGEMENT ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="mb-12">
              <span className="eyebrow">Leadership</span>
              <h2 className="heading-lg mt-3">
                Meet the team driving <span className="accent-serif">PDR COURT</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="surface-card overflow-hidden grid md:grid-cols-[280px_1fr]"
            >
              {/* portrait panel */}
              <div className="relative bg-dark text-white p-8 flex flex-col justify-end min-h-[240px]">
                <div className="pointer-events-none absolute -top-16 -right-12 w-56 h-56 rounded-full bg-primary/25 blur-[80px]" />
                <div className="relative">
                  <span className="inline-flex w-16 h-16 rounded-2xl bg-gold-gradient items-center justify-center text-2xl font-display font-bold text-white mb-5">
                    MG
                  </span>
                  <h3 className="text-2xl font-display font-bold">
                    Mahadev Gitte
                  </h3>
                  <p className="text-primary-300 font-semibold text-sm mt-1">
                    Chief Operating Officer (COO)
                  </p>
                </div>
              </div>
              {/* bio */}
              <div className="p-8 md:p-10 space-y-4">
                {COO_BIO.map((para, i) => (
                  <p
                    key={i}
                    className="text-[15px] md:text-base text-dark/70 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <div className="mt-14 rounded-[2rem] bg-cream-200 border border-cream-300 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="heading-md">Want to work with us?</h3>
                <p className="text-dark/55 mt-2">
                  Explore careers, partnerships, and ways to connect with PDR
                  COURT.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/join-us" className="btn-primary">
                  Join the team
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact us
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
