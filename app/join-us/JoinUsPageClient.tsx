"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Compass,
  Scale,
  Handshake,
  ClipboardList,
  Boxes,
  Code2,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  Eye,
  Lightbulb,
  Sparkles,
  Mail,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const CULTURE_SIGNALS = [
  { icon: Lightbulb, text: "Independent thinking, valued" },
  { icon: Sparkles, text: "Real talent development" },
  { icon: HeartHandshake, text: "An inclusive, positive culture" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "Lasting connections begin with trust — earned, and carefully kept.",
  },
  {
    icon: HeartHandshake,
    title: "Honesty",
    text: "Genuine, unbiased and straightforward in everything we do.",
  },
  {
    icon: BadgeCheck,
    title: "Integrity",
    text: "We hold ourselves to the highest standards, every single day.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Open communication that lets everyone deliver their best.",
  },
];

export default function JoinUsPageClient() {
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
                <span className="eyebrow-royal mb-6">
                  <Compass className="w-3.5 h-3.5" />
                  Join Us
                </span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-dark leading-[1.05] tracking-tight">
                  Build the future of{" "}
                  <span className="gold-text">dispute resolution</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-dark/55 leading-relaxed max-w-xl">
                  We are on a journey toward the realm of{" "}
                  <span className="font-brand italic text-royal">Nyaya</span> —
                  powered by advanced technology. We hire professionals who
                  believe in independent thinking. If you think like us, come
                  join us.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#roles" className="btn-primary">
                    See open roles
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Get in touch
                  </Link>
                </div>
              </motion.div>

              {/* navy culture panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="relative rounded-[2rem] bg-royal-mesh text-white p-8 md:p-10 shadow-royal-lg overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                  <Sparkles className="w-4 h-4" />
                  Life at PDR COURT
                </span>
                <p className="mt-4 text-xl font-display font-semibold leading-snug">
                  A genuine, unbiased and impactful place to do your best work.
                </p>
                <div className="mt-7 space-y-2.5">
                  {CULTURE_SIGNALS.map((s) => (
                    <div
                      key={s.text}
                      className="flex items-center gap-3.5 rounded-xl bg-white/[0.06] border border-white/10 p-3.5"
                    >
                      <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-gold-gradient text-white flex items-center justify-center">
                        <s.icon className="w-4 h-4" />
                      </span>
                      <span className="text-sm font-semibold text-white/90">
                        {s.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ CULTURE ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Our Culture</span>
              <h2 className="heading-lg mt-3">
                Built on four <span className="accent-serif">pillars</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                We celebrate and embrace our diversity — ensuring everyone is
                respected and inspired to deliver their best, while
                continuously challenging ourselves to reach new heights.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease, delay: (i % 4) * 0.08 }}
                  className="group gradient-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
                >
                  <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5 group-hover:bg-royal-gradient group-hover:text-white transition-colors">
                    <v.icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-display font-bold text-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-dark/60 leading-relaxed">
                    {v.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ OPEN ROLES ════════ */}
        <section
          id="roles"
          className="py-20 lg:py-28 bg-white border-y border-cream-300 scroll-mt-20"
        >
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow-royal justify-center">Open Roles</span>
              <h2 className="heading-lg mt-3">
                Find your place on the <span className="accent-serif">team</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                Five ways to shape independent, technology-driven dispute
                resolution.
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-5">
              {/* Arbitrator — featured navy */}
              <Link
                href="/careers/arbitrator"
                className="group relative overflow-hidden rounded-3xl bg-royal-mesh text-white lg:col-span-3 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal-lg"
              >
                <div className="pointer-events-none absolute -top-16 -right-12 w-60 h-60 rounded-full bg-primary/25 blur-[80px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex w-12 h-12 rounded-xl bg-gold-gradient text-white items-center justify-center mb-5">
                  <Scale className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-2">
                  Neutral · Empanelled
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Arbitrator
                </h3>
                <p className="text-sm text-white/65 leading-relaxed flex-1 max-w-md">
                  Use advanced technology tools to enhance the efficiency of
                  dispute resolution — earning global trust and recognition.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300">
                  Explore the role
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Conciliator */}
              <Link
                href="/careers/conciliator"
                className="group gradient-border lg:col-span-3 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <Handshake className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-display font-bold text-dark mb-2">
                  Conciliator
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed flex-1">
                  Leverage your expertise and our innovative software to
                  facilitate settlements — providing valuable insight and
                  guidance to both parties.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore the role
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Case Manager */}
              <Link
                href="/careers/case-manager"
                className="group gradient-border lg:col-span-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <ClipboardList className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-display font-bold text-dark mb-2">
                  Case Manager
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed flex-1">
                  Ensure streamlined, effective case management throughout the
                  resolution process.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* ERP Management */}
              <Link
                href="/careers/erp-management"
                className="group gradient-border lg:col-span-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <Boxes className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-display font-bold text-dark mb-2">
                  ERP Management
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed flex-1">
                  Optimise resource allocation for efficient, cost-effective
                  service delivery.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* IT Developer */}
              <Link
                href="/careers/it-developers"
                className="group gradient-border lg:col-span-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <Code2 className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-display font-bold text-dark mb-2">
                  IT Developer
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed flex-1">
                  Build innovative software that drives seamless digital
                  transformation.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="relative overflow-hidden rounded-[2rem] bg-royal-mesh text-white p-8 md:p-12 text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-royal/40 blur-[120px]" />
              <span className="relative inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                <Mail className="w-4 h-4" />
                Don&apos;t See Your Role?
              </span>
              <h2 className="relative mt-4 text-3xl md:text-4xl font-display font-bold leading-tight">
                If you think like us, write to us
              </h2>
              <p className="relative mt-4 text-white/60 leading-relaxed max-w-xl mx-auto">
                Tell us where you&apos;d fit. Write to us at{" "}
                <a
                  href="mailto:legal@pdrcourt.com"
                  className="font-semibold text-amber-300 hover:underline"
                >
                  legal@pdrcourt.com
                </a>{" "}
                — or send us a quick message.
              </p>
              <div className="relative mt-7 flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Send a message
                </Link>
                <Link href="/careers" className="btn-outline !text-white">
                  Browse all careers
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
