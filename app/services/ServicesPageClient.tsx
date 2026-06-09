"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Building2,
  Landmark,
  Briefcase,
  Cpu,
  Scale,
  ShieldCheck,
  Clock,
  Gauge,
  Languages,
  Globe,
  Smartphone,
  ArrowRight,
  Check,
  Sparkles,
  Apple,
  Play,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const SIGNALS = [
  { icon: Cpu, text: "Technology-powered platform" },
  { icon: Scale, text: "Expert panel of neutrals" },
  { icon: Clock, text: "60-day resolution timeline" },
  { icon: Globe, text: "International coverage" },
];

const APPROACH = [
  {
    icon: Cpu,
    title: "Technology-powered",
    text: "Advanced software runs every step — from filing to the final award — engineered for speed, accuracy and transparency.",
  },
  {
    icon: Scale,
    title: "Expert neutrals",
    text: "Seasoned arbitrators and conciliators analyse your requirement and brainstorm the best possible outcome.",
  },
  {
    icon: ShieldCheck,
    title: "Built on trust",
    text: "A disciplined, truth-seeking approach that has set industry benchmarks since our very inception.",
  },
];

const METRICS = [
  { icon: Clock, v: "60-day", l: "Resolution timeline" },
  { icon: Gauge, v: "48 hrs", l: "Service-level SLA" },
  { icon: Languages, v: "12", l: "Indian languages" },
  { icon: Globe, v: "Global", l: "International reach" },
];

const REASONS = [
  "Free from S.16 Arbitration & Conciliation Act and jurisdiction issues.",
  "Old disputes are resolved at the lowest possible price.",
  "Immense trust, backed by a strong brand reputation.",
  "No cost for conciliation and arbitration proceedings until the award is issued.",
  "No formal legal education required to file and attend sessions.",
  "A 60-day timeline to resolve all arbitration cases.",
  "Timely MIS and reporting through our advanced software.",
  "Technology-driven processes enhance efficiency and transparency.",
  "Comprehensive support right up to the execution of the award.",
  "A user-friendly platform designed for ease of access and navigation.",
  "Digital records and documentation for secure, organised case management.",
  "Continuous updates and notifications keep you informed throughout.",
  "A guaranteed 48-hour service-level agreement.",
  "Support across 12 Indian languages.",
  "Coverage that extends to international disputes.",
];

export default function ServicesPageClient() {
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
                <span className="eyebrow-royal mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  Our Services
                </span>
                <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                  ADR solutions for{" "}
                  <span className="gold-text">every kind of dispute</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-xl">
                  We drive success by addressing your ADR needs through a
                  cutting-edge, technology-powered platform — from our first
                  handshake to the final outcome, we stand by you.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#segments" className="btn-primary">
                    Explore solutions
                  </a>
                  <Link href="/talk-to-us" className="btn-outline">
                    Talk to our team
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ SEGMENTS BENTO ════════ */}
        <section id="segments" className="py-20 lg:py-28 scroll-mt-20">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Who We Serve</span>
              <h2 className="heading-lg mt-3">
                Built for every kind of{" "}
                <span className="accent-serif">business</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                Whatever your scale, our platform adapts to the way you resolve
                disputes.
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-5">
              {/* Individuals */}
              <Link
                href="/individuals"
                className="group gradient-border lg:col-span-3 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-display font-bold text-dark mb-2">
                  Individuals
                </h3>
                <p className="text-sm text-ink-60 leading-relaxed flex-1">
                  Dispute resolution tailored for individuals — a seamless
                  experience for sole proprietors and independent contractors
                  navigating business challenges.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* MSMEs */}
              <Link
                href="/msmes"
                className="group gradient-border lg:col-span-3 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <Building2 className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-display font-bold text-dark mb-2">
                  MSMEs
                </h3>
                <p className="text-sm text-ink-60 leading-relaxed flex-1">
                  Software-driven dispute resolution that empowers MSMEs and
                  lifts productivity — built around the sector&apos;s vast
                  contribution to the economy.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Financial Institutions */}
              <Link
                href="/financial-institutions"
                className="group gradient-border lg:col-span-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <Landmark className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-display font-bold text-dark mb-2">
                  Financial Institutions
                </h3>
                <p className="text-sm text-ink-60 leading-relaxed flex-1">
                  Banks and NBFCs resolve disputes quickly and efficiently,
                  supporting the financial framework that growth depends on.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Enterprises — featured navy */}
              <Link
                href="/enterprise"
                className="group relative overflow-hidden rounded-3xl bg-royal-mesh text-white lg:col-span-4 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal-lg"
              >
                <div className="pointer-events-none absolute -top-16 -right-12 w-60 h-60 rounded-full bg-primary/25 blur-[80px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex w-12 h-12 rounded-xl bg-gold-gradient text-white items-center justify-center mb-5">
                  <Briefcase className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-2">
                  Enterprise Grade
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Enterprises
                </h3>
                <p className="text-sm text-paper-65 leading-relaxed flex-1 max-w-md">
                  An ADR platform that lets enterprises collaborate seamlessly —
                  extending market presence while safeguarding brand identity
                  and business relationships.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300">
                  Explore enterprise
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ APPROACH ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow-royal justify-center">Our Approach</span>
              <h2 className="heading-lg mt-3">
                A disciplined, <span className="accent-serif">tech-driven</span>{" "}
                method
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                PDR COURT combines technology and expertise to analyse your
                requirements and deliver the best possible results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {APPROACH.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="rounded-2xl border border-cream-300 bg-cream p-7"
                >
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-royal-gradient text-white items-center justify-center mb-5 shadow-royal">
                    <a.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-lg font-display font-bold text-dark mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-ink-60 leading-relaxed">
                    {a.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ METRICS BAND ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="relative overflow-hidden rounded-[2rem] bg-royal-mesh text-white p-8 md:p-14"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                  <Gauge className="w-4 h-4" />
                  By the Numbers
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold leading-tight">
                  Outcomes you can plan around
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10">
                {METRICS.map((m) => (
                  <div
                    key={m.l}
                    className="bg-royal-950/40 px-5 py-8 text-center"
                  >
                    <m.icon className="w-6 h-6 text-amber-300 mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-display font-bold gold-text">
                      {m.v}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-paper-45 mt-1.5">
                      {m.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ 15 REASONS ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Why PDR COURT</span>
              <h2 className="heading-lg mt-3">
                15 reasons to <span className="accent-serif">resolve</span> with
                us
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                A disciplined, tech-driven platform that has set industry
                benchmarks since inception.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {REASONS.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, ease, delay: (i % 3) * 0.06 }}
                  className="group flex gap-4 rounded-2xl border border-cream-300 bg-cream p-5 hover:border-royal/30 hover:bg-white transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-royal/10 text-royal flex items-center justify-center font-display font-bold text-sm group-hover:bg-royal-gradient group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                  <p className="text-sm text-ink-70 leading-relaxed">{r}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ THE APP ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 md:p-12"
            >
              <div className="pointer-events-none absolute -top-24 -right-16 w-96 h-96 rounded-full bg-royal/30 blur-[110px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                    <Smartphone className="w-4 h-4" />
                    The PDR COURT App
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold leading-tight">
                    Dispute resolution, in your pocket
                  </h2>
                  <p className="mt-4 text-paper-60 leading-relaxed max-w-lg">
                    Buy an agreement, file a dispute, attend proceedings and
                    track your award — every step, in one app, powered by
                    advanced digital tooling.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-3.5 rounded-xl bg-white/[0.06] border border-white/10 p-4 hover:border-amber-300/40 transition-colors"
                  >
                    <Apple className="w-7 h-7 text-white flex-shrink-0" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-wider text-paper-45">
                        Download on the
                      </span>
                      <span className="block text-sm font-semibold text-white">
                        App Store
                      </span>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3.5 rounded-xl bg-white/[0.06] border border-white/10 p-4 hover:border-amber-300/40 transition-colors"
                  >
                    <Play className="w-7 h-7 text-white flex-shrink-0" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-wider text-paper-45">
                        Get it on
                      </span>
                      <span className="block text-sm font-semibold text-white">
                        Google Play
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="pb-20 lg:pb-28">
          <div className={SECTION}>
            <div className="rounded-[2rem] bg-gold-subtle border border-primary/15 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="heading-md flex items-center gap-3">
                  <Check className="w-7 h-7 text-primary" />
                  Not sure which service fits?
                </h3>
                <p className="text-ink-55 mt-2">
                  Our team will help you find the right path — and the right
                  price — for your dispute.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/talk-to-us" className="btn-primary">
                  Talk to us
                </Link>
                <Link href="/pricing" className="btn-outline">
                  See pricing
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
