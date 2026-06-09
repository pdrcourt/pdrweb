"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Scale,
  FileText,
  ShieldCheck,
  AlertTriangle,
  Cookie,
  Gavel,
  Handshake,
  ClipboardList,
  ArrowRight,
  FileCheck,
  Mail,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const SIGNALS = [
  { icon: ShieldCheck, text: "Privacy, fiercely protected" },
  { icon: FileCheck, text: "Clear, published terms" },
  { icon: Cookie, text: "Strictly cookie-compliant" },
];

const SECONDARY = [
  {
    icon: ShieldCheck,
    title: "Privacy Policy",
    href: "/privacy-policy",
    text: "We respect your privacy and spare no effort to protect your personal information.",
  },
  {
    icon: AlertTriangle,
    title: "Disclaimer",
    href: "/disclaimer",
    text: "Clear on what PDR COURT will — and will not — be held responsible for.",
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    href: "/cookie-policy",
    text: "What data we collect through cookies, and exactly how that data is used.",
  },
];

const PROCEDURE = [
  {
    icon: Gavel,
    title: "Arbitration Rules",
    href: "/arbitration-rules",
    text: "The procedure that governs every arbitration conducted on the PDR COURT platform.",
  },
  {
    icon: Handshake,
    title: "Mediation Rules",
    href: "/mediation-rules",
    text: "How mediations are structured, conducted and brought to a fair settlement.",
  },
  {
    icon: ClipboardList,
    title: "Proceeding Rules",
    href: "/proceeding-rules",
    text: "The rules that frame each proceeding from filing through to the final award.",
  },
];

export default function ResourcesLegalPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO — light editorial ════════ */}
        <section className="relative overflow-hidden bg-cream pt-28 md:pt-36 pb-24 md:pb-32">
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 1440 820"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <g fill="none" stroke="#834009" strokeWidth="1" opacity="0.09">
              <path d="M-50 250 C 420 90, 900 430, 1490 180" />
              <path d="M-50 540 C 460 620, 980 360, 1490 600" />
              <path d="M300 -50 C 380 360, 240 640, 560 980" />
              <ellipse cx="720" cy="410" rx="680" ry="300" />
            </g>
          </svg>
          <span className="absolute top-28 right-8 md:right-14 w-3 h-3 rounded-full bg-dark/70" />

          <div className={`relative ${SECTION}`}>
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-6">
                  <span className="inline-block w-7 h-px bg-primary/60" />
                  <Scale className="w-3.5 h-3.5" />
                  Resources &amp; Legal
                </span>
                <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                  Rules, policies &amp; the{" "}
                  <span className="italic text-ink-55">trust behind them</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-xl">
                  We believe everyone must get the best judgement and follow a
                  just system — so businesses and society remain dispute-free.
                  Read our rules, policies, terms and legal disclaimers.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#documents" className="btn-primary">
                    Browse documents
                  </a>
                  <Link href="/rules" className="btn-outline">
                    Read the rules
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* giant clipped brand word */}
          <div className="pointer-events-none absolute -bottom-[3vw] left-0 right-0 overflow-hidden">
            <div className={SECTION}>
              <span className="block font-editorial font-semibold text-dark/[0.05] leading-none whitespace-nowrap text-[clamp(3.5rem,16vw,16rem)]">
                PDR COURT
              </span>
            </div>
          </div>
        </section>

        {/* ════════ DOCUMENTS BENTO ════════ */}
        <section id="documents" className="py-20 lg:py-28 scroll-mt-20">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Policies &amp; Documents</span>
              <h2 className="mt-3 font-editorial font-medium text-dark leading-[1.05] text-[clamp(2rem,5vw,3.4rem)]">
                Our legal <span className="italic text-ink-65">framework</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                Every policy that governs your use of the PDR COURT platform —
                clearly organised and easy to find.
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-5">
              {/* Rules — featured navy */}
              <Link
                href="/rules"
                className="group relative overflow-hidden rounded-3xl bg-royal-mesh text-white lg:col-span-3 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal-lg"
              >
                <div className="pointer-events-none absolute -top-16 -right-12 w-60 h-60 rounded-full bg-primary/25 blur-[80px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex w-12 h-12 rounded-xl bg-gold-gradient text-white items-center justify-center mb-5">
                  <Scale className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-2">
                  The Cornerstone
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Rules &amp; Guidelines
                </h3>
                <p className="text-sm text-paper-65 leading-relaxed flex-1 max-w-md">
                  Formed to inform everyone involved about the procedure PDR
                  COURT sets for Arbitration, Conciliation and Mediation.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300">
                  Read the rules
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Terms */}
              <Link
                href="/terms-conditions"
                className="group gradient-border lg:col-span-3 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <FileText className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-display font-bold text-dark mb-2">
                  Terms &amp; Conditions
                </h3>
                <p className="text-sm text-ink-60 leading-relaxed flex-1">
                  The terms on which users may make use of our website — whether
                  as a guest or an account holder.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Read document
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* secondary trio */}
              {SECONDARY.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group gradient-border lg:col-span-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
                >
                  <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                    <s.icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-display font-bold text-dark mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-60 leading-relaxed flex-1">
                    {s.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                    Read document
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ RULES OF PROCEDURE ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow-royal justify-center">
                Rules of Procedure
              </span>
              <h2 className="mt-3 font-editorial font-medium text-dark leading-[1.05] text-[clamp(2rem,5vw,3.4rem)]">
                How proceedings <span className="italic text-ink-65">run</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                The detailed procedural rules for each route to resolution.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {PROCEDURE.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease, delay: i * 0.1 }}
                >
                  <Link
                    href={p.href}
                    className="group rounded-2xl border border-cream-300 bg-cream h-full p-7 flex flex-col hover:border-royal/30 hover:bg-white hover:shadow-royal transition-all duration-300"
                  >
                    <span className="inline-flex w-14 h-14 rounded-2xl bg-royal-gradient text-white items-center justify-center mb-5 shadow-royal">
                      <p.icon className="w-7 h-7" />
                    </span>
                    <h3 className="text-lg font-display font-bold text-dark mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-60 leading-relaxed flex-1">
                      {p.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                      View rules
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="rounded-[2rem] bg-gold-subtle border border-primary/15 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="heading-md flex items-center gap-3">
                  <Mail className="w-7 h-7 text-primary" />
                  Need clarity on a policy?
                </h3>
                <p className="text-ink-55 mt-2">
                  Have a question about our rules, terms or disclaimers? Write
                  to us at{" "}
                  <a
                    href="mailto:legal@pdrcourt.com"
                    className="font-semibold text-primary hover:underline"
                  >
                    legal@pdrcourt.com
                  </a>
                  .
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Ask a question
                </Link>
                <Link href="/resources" className="btn-outline">
                  More resources
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
