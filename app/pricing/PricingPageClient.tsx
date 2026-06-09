"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ShoppingCart,
  FileSignature,
  ShieldCheck,
  Scale,
  Award,
  Building2,
  Users,
  Globe,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const INCLUDED = [
  "Legally enforceable Dispute Resolution Clause",
  "No proceeding cost until the award is issued",
  "60-day resolution timeline",
  "Full support until execution of the award",
];

const STEPS = [
  { icon: ShoppingCart, title: "Purchase", text: "Choose to purchase the agreement via online or offline options." },
  { icon: FileSignature, title: "Mutually Agreed", text: "All parties involved sign and accept the agreed terms." },
  { icon: ShieldCheck, title: "Legally Enforced", text: "Both parties are legally bound by the Dispute Resolution Clause." },
  { icon: Scale, title: "Dispute Resolution", text: "In case of a dispute, PDR COURT attains resolution, amicably." },
  { icon: Award, title: "Award", text: "The award holder enforces it under the Arbitration & Conciliation Act, 1996." },
];

const WAYS = [
  { icon: Building2, title: "Branch Purchase", text: "Visit any of our authorised branches across 12 locations and speak face-to-face with our support team." },
  { icon: Users, title: "From Partners", text: "Purchase our Dispute Resolution Paper through our affiliates, referral partners, and reseller network." },
  { icon: Globe, title: "Website", text: "Generate a weblink and both parties can enter into an agreement instantly by e-signing online." },
];

const REASONS = [
  "Free from S.16 Arbitration & Conciliation Act and jurisdiction issues",
  "Old disputes resolved at the lowest price",
  "Immense trust from a strong brand reputation",
  "No cost for proceedings until the award is issued",
  "No formal legal education required to file or attend",
  "60-day timeline to resolve all arbitration cases",
  "Timely MIS and reporting via advanced software",
  "Technology-driven efficiency and transparency",
  "Comprehensive support until execution of the award",
  "User-friendly platform, easy to access and navigate",
  "Secure, organised digital records and documentation",
  "Continuous updates and notifications throughout",
  "48-hour SLA on every request",
  "Available in 12 Indian languages",
  "International coverage",
];

export default function PricingPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-cream pt-28 md:pt-36 pb-20 md:pb-24">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[130px]" />
          <EditorialHeroDecor />
          <div className={`relative ${SECTION} text-center`}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="eyebrow justify-center mb-6">Pricing</span>
              <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                We believe in <span className="gold-text">value pricing</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-2xl mx-auto">
                High-quality, valuable, and cost-effective dispute resolution —
                starting as low as ₹500 per agreement, invoice, purchase order,
                work order, or contract.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════ PRICING SECTION ════════ */}
        <section className="-mt-12 pb-20 lg:pb-28 relative">
          <div className={SECTION}>
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-7">
              {/* Featured plan */}
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 md:p-10"
              >
                <div className="pointer-events-none absolute -top-24 -right-16 w-[380px] h-[380px] rounded-full bg-primary/25 blur-[110px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300">
                      <Sparkles className="w-4 h-4" />
                      Simple Pricing
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-gold-gradient text-white rounded-full px-3 py-1">
                      Most chosen
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl font-display font-semibold text-paper-90">
                    Dispute Resolution Paper
                  </h2>
                  <div className="mt-4 flex items-end gap-3">
                    <span className="text-6xl md:text-7xl font-display font-bold gold-text leading-none">
                      ₹500
                    </span>
                    <span className="text-paper-55 text-sm mb-2">
                      per agreement / invoice / PO / WO / contract
                    </span>
                  </div>
                  <p className="mt-4 text-paper-60 text-sm">
                    For a contract worth up to{" "}
                    <span className="text-white font-semibold">₹5,00,000</span>.
                  </p>
                  <ul className="mt-7 space-y-3">
                    {INCLUDED.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 text-primary-300 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-sm text-paper-75">{it}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/buy" className="btn-primary mt-9">
                    Buy an agreement
                  </Link>
                </div>
              </motion.div>

              {/* Custom plan */}
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="rounded-[2rem] bg-white border border-cream-300 p-8 md:p-10 flex flex-col"
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  <Building2 className="w-4 h-4" />
                  Have different needs?
                </span>
                <h2 className="mt-5 text-2xl font-display font-bold text-dark">
                  Custom & Enterprise
                </h2>
                <p className="mt-3 text-ink-60 leading-relaxed">
                  Stay one step ahead — fortify your enterprise against future
                  conflicts with a plan tailored to your volume and industry.
                  Talk to our sales team for a custom quote.
                </p>
                <div className="mt-7 space-y-3 text-sm">
                  <a
                    href="mailto:legal@pdrcourt.com"
                    className="flex items-center gap-3 rounded-xl bg-cream-100 border border-cream-300 px-4 py-3 hover:border-primary/40 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-ink-70">legal@pdrcourt.com</span>
                  </a>
                  <a
                    href="tel:8976955540"
                    className="flex items-center gap-3 rounded-xl bg-cream-100 border border-cream-300 px-4 py-3 hover:border-primary/40 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-ink-70">+91 89769 55540</span>
                  </a>
                </div>
                <Link href="/contact" className="btn-outline mt-auto pt-7">
                  Contact our sales team
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ PROCESS ════════ */}
        <section className="py-20 lg:py-24 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">The Process</span>
              <h2 className="heading-lg mt-3">
                Simple steps to <span className="accent-serif">resolution</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease, delay: i * 0.08 }}
                  className="surface-card p-6 text-center"
                >
                  <div className="relative inline-flex mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-gold-gradient text-white flex items-center justify-center">
                      <s.icon className="w-6 h-6" />
                    </span>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-dark mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-ink-55 leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 3 WAYS TO BUY ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Flexible Purchase</span>
              <h2 className="heading-lg mt-3">
                Buy an agreement in{" "}
                <span className="accent-serif">three ways</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-7">
              {WAYS.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="surface-card p-8"
                >
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-primary/10 text-primary items-center justify-center mb-6">
                    <w.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-xl font-display font-bold text-dark mb-3">
                    {w.title}
                  </h3>
                  <p className="text-sm text-ink-60 leading-relaxed">
                    {w.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 15 REASONS ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Why PDR COURT</span>
              <h2 className="heading-lg mt-3">
                15 reasons to <span className="accent-serif">choose us</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {REASONS.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: (i % 3) * 0.06 }}
                  className="flex items-start gap-3 py-2"
                >
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-gold-gradient text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[15px] text-ink-75 leading-snug">
                    {r}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="py-20 lg:py-24">
          <div className={SECTION}>
            <div className="relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 md:p-14 text-center">
              <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-primary/20 blur-[120px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="relative">
                <h2 className="max-w-2xl mx-auto text-2xl md:text-4xl font-display font-bold text-white leading-tight">
                  Secure your rights from just ₹500
                </h2>
                <p className="text-paper-60 mt-4 max-w-xl mx-auto leading-relaxed">
                  Protect every deal with a legally enforceable agreement —
                  affordable, fast, and built on trust.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/buy" className="btn-primary">
                    Buy an agreement
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-200 px-7 py-3.5"
                  >
                    Talk to our experts
                    <ArrowRight className="w-4 h-4" />
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
