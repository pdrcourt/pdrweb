"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingBag,
  FileSignature,
  Link2,
  Smartphone,
  Printer,
  Building2,
  Handshake,
  Globe,
  ShieldCheck,
  ArrowRight,
  Clock,
  Phone,
  Mail,
  IndianRupee,
  Check,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const SAFEGUARDS = [
  { icon: IndianRupee, text: "Loan agreements" },
  { icon: FileSignature, text: "Employment contracts" },
  { icon: Building2, text: "Commercial agreements" },
];

const FORMATS = [
  {
    icon: Link2,
    title: "Web Link",
    text: "Generate a secure web link and have both parties enter into the agreement instantly.",
  },
  {
    icon: Smartphone,
    title: "Digital",
    text: "A fully digital agreement, e-signed and stored — accessible any time from the app.",
  },
  {
    icon: Printer,
    title: "Printed",
    text: "Prefer paper? A printed copy of your agreement is delivered straight to your address.",
  },
];

const WAYS = [
  {
    icon: Building2,
    title: "Branch Purchase",
    text: "We are present at 12 locations. Visit any authorised branch and speak face-to-face with our support team — they will answer every question and guide you through.",
    badge: "In person",
  },
  {
    icon: Handshake,
    title: "Purchase from Partners",
    text: "Buy through our partners, affiliates, referral and reseller network — each one abides by our principles and philosophy, and is committed to serving you well.",
    badge: "Partner network",
  },
];

export default function BuyPageClient() {
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
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Buy
                </span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-dark leading-[1.05] tracking-tight">
                  Convert your paper into an{" "}
                  <span className="gold-text">executable contract</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-dark/55 leading-relaxed max-w-xl">
                  Subscribe to our ADR platform, where expert professionals use
                  the latest technology to expedite dispute resolution —
                  ensuring a secure, efficient environment for your business.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#ways" className="btn-primary">
                    Ways to buy
                  </a>
                  <Link href="/pricing" className="btn-outline">
                    See pricing
                  </Link>
                </div>
              </motion.div>

              {/* navy DRP panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="relative rounded-[2rem] bg-royal-mesh text-white p-8 md:p-10 shadow-royal-lg overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                  <ShieldCheck className="w-4 h-4" />
                  Dispute Resolution Paper
                </span>
                <p className="mt-4 text-xl font-display font-semibold leading-snug">
                  One document that safeguards what matters.
                </p>
                <div className="mt-7 space-y-2.5">
                  {SAFEGUARDS.map((s) => (
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

        {/* ════════ THE PAPER + FORMATS ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">The Paper</span>
              <h2 className="heading-lg mt-3">
                The Dispute Resolution{" "}
                <span className="accent-serif">Paper</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                It safeguards your loans, employment and commercial agreements —
                backed by expert professionals and our secure, software-driven
                platform. Choose the format that suits you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {FORMATS.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease, delay: i * 0.1 }}
                  className="group gradient-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
                >
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-royal-gradient text-white items-center justify-center mb-5 shadow-royal">
                    <f.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-lg font-display font-bold text-dark mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-dark/60 leading-relaxed">
                    {f.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 3 WAYS TO BUY ════════ */}
        <section
          id="ways"
          className="py-20 lg:py-28 bg-white border-y border-cream-300 scroll-mt-20"
        >
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow-royal justify-center">How to Buy</span>
              <h2 className="heading-lg mt-3">
                Three easy ways to{" "}
                <span className="accent-serif">purchase</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                Buy the Dispute Resolution Paper whichever way works best for
                you — online, in person, or through a partner.
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-5">
              {/* Website — featured navy */}
              <div className="group relative overflow-hidden rounded-3xl bg-royal-mesh text-white lg:col-span-3 p-8 flex flex-col">
                <div className="pointer-events-none absolute -top-16 -right-12 w-60 h-60 rounded-full bg-primary/25 blur-[80px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex w-12 h-12 rounded-xl bg-gold-gradient text-white items-center justify-center mb-5">
                  <Globe className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-2">
                  Fastest · Fully Online
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Website
                </h3>
                <p className="text-sm text-white/65 leading-relaxed flex-1 max-w-md">
                  Simply generate a web link — both parties can enter into the
                  agreement and complete it by e-signing, entirely online.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/80">
                  <Check className="w-4 h-4 text-amber-300" />
                  No branch visit required
                </div>
              </div>

              {/* Branch + Partners stacked */}
              <div className="lg:col-span-3 flex flex-col gap-5">
                {WAYS.map((w, i) => (
                  <motion.div
                    key={w.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease, delay: i * 0.1 }}
                    className="group flex gap-5 rounded-3xl border border-cream-300 bg-cream p-6 hover:border-royal/30 hover:bg-white hover:shadow-royal transition-all duration-300"
                  >
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center">
                      <w.icon className="w-6 h-6" />
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-royal">
                        {w.badge}
                      </span>
                      <h3 className="mt-0.5 text-lg font-display font-bold text-dark">
                        {w.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-dark/60 leading-relaxed">
                        {w.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ SUPPORT + CTA ════════ */}
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
                    <Phone className="w-4 h-4" />
                    Need our Assistance?
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold leading-tight">
                    Our support helpline is here to help
                  </h2>
                  <p className="mt-4 text-white/60 leading-relaxed max-w-lg">
                    Not sure which paper or format you need? Talk to our team —
                    we&apos;ll help you buy with confidence.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <Link href="/talk-to-us" className="btn-primary">
                      Talk to an expert
                    </Link>
                    <Link href="/pricing" className="btn-outline !text-white">
                      View pricing
                    </Link>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 rounded-xl bg-white/[0.06] border border-white/10 p-4">
                    <Clock className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Monday – Friday · 10 am – 5 pm
                      </div>
                      <div className="text-xs text-white/50 mt-0.5">
                        We are off on public holidays.
                      </div>
                    </div>
                  </div>
                  <a
                    href="tel:8976955540"
                    className="flex items-center gap-3.5 rounded-xl bg-white/[0.06] border border-white/10 p-4 hover:border-amber-300/40 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-amber-300 flex-shrink-0" />
                    <span className="text-sm font-semibold text-white">
                      +91 8976955540
                    </span>
                  </a>
                  <a
                    href="mailto:legal@pdrcourt.com"
                    className="flex items-center gap-3.5 rounded-xl bg-white/[0.06] border border-white/10 p-4 hover:border-amber-300/40 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-amber-300 flex-shrink-0" />
                    <span className="text-sm font-semibold text-white">
                      legal@pdrcourt.com
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
