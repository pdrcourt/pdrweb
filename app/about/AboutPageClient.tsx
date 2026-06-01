"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  MapPin,
  Scale,
  Handshake,
  ShieldCheck,
  FileCheck,
  Repeat,
  HeartHandshake,
  ArrowRight,
  Compass,
  Mail,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const FACTS = [
  { v: "6", l: "City offices" },
  { v: "12", l: "Languages" },
  { v: "60-day", l: "Resolution" },
];

const POSITIONING = [
  "PDR COURT has carved a unique place in dispute resolution through trust and sincerity — arriving at a clear positioning as a digital platform.",
  "Aligned with technological advancement, it is a forerunner in the digital space — delivering faster, higher-quality resolutions.",
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Get Legally Protected",
    text: "We help individuals and organisations secure their business against any future conflict.",
    span: "lg:col-span-2",
  },
  {
    icon: Scale,
    title: "Impartial & Unbiased Justice",
    text: "Parties select the arbitrator together — ensuring an impartial and unbiased decision.",
    span: "lg:col-span-2",
  },
  {
    icon: FileCheck,
    title: "Secure your Deals",
    text: "An arbitration clause in your agreement resolves future disputes in a timely, cost-effective way.",
    span: "lg:col-span-2",
  },
  {
    icon: Repeat,
    title: "Business Continuity",
    text: "Do what's correct to preserve and protect your business relations — stay organised and out of disputes.",
    span: "lg:col-span-3",
  },
  {
    icon: HeartHandshake,
    title: "Trust & Conviction",
    text: "Effective results that match the claims — steadily building trust within the community.",
    span: "lg:col-span-3",
  },
];

export default function AboutPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-hero-gradient pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-royal/10 blur-[130px]" />
          <div className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-amber-400/10 blur-[120px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(131,64,9,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(131,64,9,.5) 1px,transparent 1px)",
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
                <span className="eyebrow-royal mb-6">
                  <Compass className="w-3.5 h-3.5" />
                  About PDR COURT
                </span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-dark leading-[1.05] tracking-tight">
                  A place of trust, built on{" "}
                  <span className="gold-text">truth</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-dark/55 leading-relaxed max-w-xl">
                  PDR COURT is a premier ADR platform — leading the way with
                  advanced technology to foster effective, impartial dispute
                  resolution in every interaction.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#explore" className="btn-primary">
                    Explore PDR COURT
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Ask us anything
                  </Link>
                </div>
              </motion.div>

              {/* navy mission panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="relative rounded-[2rem] bg-royal-mesh text-white p-8 md:p-10 shadow-royal-lg overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                  <Compass className="w-4 h-4" />
                  Our Mission
                </span>
                <p className="mt-4 text-xl font-display font-semibold leading-snug">
                  To carry the pursuit of{" "}
                  <span className="font-brand italic">Nyaya</span> onto the
                  world stage.
                </p>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">
                  A robust framework for seeking justice — matching words with
                  actions, with care and responsibility.
                </p>
                <div className="mt-7 grid grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/10">
                  {FACTS.map((f) => (
                    <div
                      key={f.l}
                      className="bg-royal-950/40 px-3 py-5 text-center"
                    >
                      <div className="text-2xl font-display font-bold gold-text">
                        {f.v}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-white/45 mt-1">
                        {f.l}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ STORY ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="eyebrow justify-center">Our Story</span>
              <h2 className="heading-lg mt-3">
                Building a place of{" "}
                <span className="accent-serif">trust</span>
              </h2>
              <p className="mt-5 text-lg text-dark/60 leading-relaxed">
                PDR COURT is building a place of trust that ensures everything
                is established in truth — India&apos;s first &ldquo;Indic PDR
                COURT&rdquo;, working on a robust digital system and
                infrastructure for dispute resolution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-14">
              {POSITIONING.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.12 }}
                  className="quote-card"
                >
                  <p className="text-dark/70 leading-relaxed">{p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ VALUE PILLARS ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow-royal justify-center">
                What We Stand For
              </span>
              <h2 className="heading-lg mt-3">
                Principles that guide{" "}
                <span className="accent-serif">every case</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                The commitments that shape how we protect, resolve and serve.
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-5">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease, delay: (i % 3) * 0.08 }}
                  className={`group rounded-2xl border border-cream-300 bg-cream p-7 hover:border-royal/30 hover:bg-white hover:shadow-royal transition-all duration-300 ${p.span}`}
                >
                  <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5 group-hover:bg-royal-gradient group-hover:text-white transition-colors">
                    <p.icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-display font-bold text-dark mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-dark/60 leading-relaxed">
                    {p.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ EXPLORE ════════ */}
        <section id="explore" className="py-20 lg:py-28 scroll-mt-20">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Explore</span>
              <h2 className="heading-lg mt-3">
                Get to know <span className="accent-serif">PDR COURT</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                Our company, our people, and the network that makes resolution
                possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-5">
              {/* Company — featured navy */}
              <Link
                href="/company"
                className="group relative overflow-hidden rounded-3xl bg-royal-mesh text-white lg:col-span-3 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal-lg"
              >
                <div className="pointer-events-none absolute -top-16 -right-12 w-60 h-60 rounded-full bg-primary/25 blur-[80px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex w-12 h-12 rounded-xl bg-gold-gradient text-white items-center justify-center mb-5">
                  <Building2 className="w-6 h-6" />
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Company
                </h3>
                <p className="text-sm text-white/65 leading-relaxed flex-1 max-w-md">
                  India&apos;s first &ldquo;Indic PDR COURT&rdquo; — building a
                  place of trust on a robust digital system and infrastructure.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300">
                  Discover the company
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Investors */}
              <Link
                href="/investors"
                className="group gradient-border lg:col-span-3 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-display font-bold text-dark mb-2">
                  Investors
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed flex-1">
                  Experience, business management and growth that set a record
                  of high performance. Investing in PDR COURT is investing in
                  success.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Offices */}
              <Link
                href="/offices"
                className="group gradient-border lg:col-span-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <MapPin className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-display font-bold text-dark mb-2">
                  Offices
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed flex-1">
                  Present in every city of business — expanding domestically
                  and globally.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Neutrals */}
              <Link
                href="/neutrals"
                className="group gradient-border lg:col-span-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <Scale className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-display font-bold text-dark mb-2">
                  Neutrals
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed flex-1">
                  A skilled, diligent panel of professionals with deep
                  experience in law and business.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Partners */}
              <Link
                href="/partners"
                className="group gradient-border lg:col-span-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <Handshake className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-display font-bold text-dark mb-2">
                  Partners
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed flex-1">
                  Join the new dispute-resolution avenue set to disrupt how the
                  world does business.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ NYAYA PHILOSOPHY ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="relative overflow-hidden rounded-[2rem] bg-royal-mesh text-white p-10 md:p-16 text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-royal/40 blur-[120px]" />
              <span className="relative inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                <ShieldCheck className="w-4 h-4" />
                Why PDR COURT
              </span>
              <h2 className="relative mt-5 text-3xl md:text-5xl font-display font-bold leading-[1.15] max-w-3xl mx-auto">
                On a journey to the place of{" "}
                <span className="font-brand italic font-normal gold-text">
                  Nyaya
                </span>
              </h2>
              <p className="relative mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
                PDR COURT is driving toward justice on the world stage with a
                robust framework for seeking it — pitching words to actions,
                with proper care and responsibility for every member we serve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="pb-20 lg:pb-28">
          <div className={SECTION}>
            <div className="rounded-[2rem] bg-gold-subtle border border-primary/15 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="heading-md flex items-center gap-3">
                  <Mail className="w-7 h-7 text-primary" />
                  Have something to ask us?
                </h3>
                <p className="text-dark/55 mt-2">
                  Any vital information you&apos;d like to know? Write to us at{" "}
                  <a
                    href="mailto:legal@pdrcourt.com"
                    className="font-semibold text-primary hover:underline"
                  >
                    legal@pdrcourt.com
                  </a>{" "}
                  — or send us a quick message.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact us
                </Link>
                <Link href="/talk-to-us" className="btn-outline">
                  Talk to us
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
