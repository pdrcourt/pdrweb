"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  Printer,
  CreditCard,
  Cloud,
  Layers,
  ShoppingCart,
  Handshake,
  FileSignature,
  Scale,
  Award,
  ArrowRight,
  Smartphone,
  Apple,
  Play,
  Workflow,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const FEATURES = [
  {
    icon: Zap,
    title: "Quick & Easy",
    text: "Every process — from buying an agreement to filing a dispute to proceedings — is done entirely within the app.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    text: "Bank-grade SSL encryption keeps all of your data and payments perfectly secure, end to end.",
  },
  {
    icon: Printer,
    title: "Digital & Print",
    text: "Purchase digital and print agreements alike — the print copy is delivered straight to your address.",
  },
  {
    icon: CreditCard,
    title: "Online Payments",
    text: "Pay online your way — UPI and credit cards supported across 65+ banks.",
  },
  {
    icon: Cloud,
    title: "Saved to Cloud",
    text: "All online proceedings and interactions are securely saved to the cloud, available whenever you need them.",
  },
  {
    icon: Layers,
    title: "One-point Management",
    text: "The application is your single point of control for every process you run with PDR COURT.",
  },
];

const STEPS = [
  {
    icon: ShoppingCart,
    title: "Purchase",
    text: "Choose to purchase the Agreement through our online or offline options — whichever suits you best.",
  },
  {
    icon: Handshake,
    title: "Mutually Agreed",
    text: "All parties involved sign and accept the mutually agreed terms of the Agreement.",
  },
  {
    icon: FileSignature,
    title: "Legally Enforced",
    text: "Both parties are now legally bound by the Dispute Resolution Clause within the Agreement.",
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
    text: "In the event of a dispute, PDR COURT steps in to attain a resolution — amicably and efficiently.",
  },
  {
    icon: Award,
    title: "Award",
    text: "The Award holder can enforce the Award as per the Arbitration & Conciliation Act, 1996 and the Code of Civil Procedure, 1908.",
  },
];

export default function HowItWorksPageClient() {
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
                  <Workflow className="w-3.5 h-3.5" />
                  How It Works
                </span>
                <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                  Decide with a{" "}
                  <span className="gold-text">well-researched mind</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-xl">
                  Get onboard with PDR COURT in just five simple steps — every
                  process, from buying an agreement to the final award, handled
                  in one quick and secure platform.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#steps" className="btn-primary">
                    See the 5 steps
                  </a>
                  <Link href="/lodge-dispute" className="btn-outline">
                    Lodge a dispute
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ PLATFORM FEATURES ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">The Platform</span>
              <h2 className="heading-lg mt-3">
                Built to make resolution{" "}
                <span className="accent-serif">effortless</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                Everything you need to run a dispute — secure, organised, and
                in one place.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease, delay: (i % 3) * 0.08 }}
                  className="group gradient-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
                >
                  <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5 group-hover:bg-royal-gradient group-hover:text-white transition-colors">
                    <f.icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-display font-bold text-dark mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-ink-60 leading-relaxed">
                    {f.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 5-STEP TIMELINE ════════ */}
        <section
          id="steps"
          className="py-20 lg:py-28 bg-white border-y border-cream-300 scroll-mt-20"
        >
          <div className={`${SECTION} max-w-4xl`}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow-royal justify-center">The Journey</span>
              <h2 className="heading-lg mt-3">
                5 simple steps to{" "}
                <span className="accent-serif">dispute resolution</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                A clear, legally-grounded path from agreement to enforceable
                award.
              </p>
            </div>

            <div>
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease }}
                  className="relative flex gap-6 md:gap-8"
                >
                  {/* node + connector */}
                  <div className="flex flex-col items-center">
                    <span className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-royal-gradient text-white flex items-center justify-center shadow-royal">
                      <s.icon className="w-6 h-6" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold-gradient text-white text-[11px] font-display font-bold flex items-center justify-center ring-4 ring-white">
                        {i + 1}
                      </span>
                    </span>
                    {i < STEPS.length - 1 && (
                      <span className="w-px flex-1 my-2 bg-gradient-to-b from-royal/30 to-royal/5" />
                    )}
                  </div>
                  {/* content */}
                  <div className={i < STEPS.length - 1 ? "pb-10" : ""}>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-royal">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-1 text-xl font-display font-bold text-dark">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-ink-60 leading-relaxed">
                      {s.text}
                    </p>
                  </div>
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
                    One App, Every Step
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold leading-tight">
                    The whole process, in your pocket
                  </h2>
                  <p className="mt-4 text-paper-60 leading-relaxed max-w-lg">
                    With PDR COURT as their ADR platform, parties review
                    testimony and evidence in person or through our advanced
                    digital tooling — all from one app.
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
                  <ArrowRight className="w-7 h-7 text-primary" />
                  Ready to get started?
                </h3>
                <p className="text-ink-55 mt-2">
                  Buy an agreement, lodge a dispute, or talk to our team — the
                  first step is yours.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/lodge-dispute" className="btn-primary">
                  Lodge a dispute
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
