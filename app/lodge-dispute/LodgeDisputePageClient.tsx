"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Scale,
  Handshake,
  Search,
  BookOpen,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  Smartphone,
  Info,
  FileText,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const MODES = [
  {
    icon: Handshake,
    title: "Conciliation",
    text: "A collaborative, voluntary route where our experts help both parties reach a fair settlement — most disputes are resolved here.",
  },
  {
    icon: Scale,
    title: "Arbitration",
    text: "A binding resolution conducted under the Arbitration & Conciliation Act of India, for matters that need a formal award.",
  },
];

const STEPS = [
  {
    icon: Search,
    title: "Conflict Identification",
    text: "Our team identifies the conflict type as per your agreement details, gathering documents, emails and all correspondence to support evidence for claim submission.",
  },
  {
    icon: BookOpen,
    title: "Understanding",
    text: "Our experts scrutinise, review and analyse all the evidence to understand the case requirement and any gaps — avoiding delays before we proceed.",
  },
  {
    icon: MessageSquare,
    title: "Convincing",
    text: "We brainstorm the most suitable and convincing strategies for every possible scenario, maintaining complete transparency to uphold our committed integrity.",
  },
  {
    icon: CheckCircle2,
    title: "Resolving",
    text: "Our experts follow a step-by-step plan of action to process your case, channelling every effort toward a fair, timely and just outcome.",
  },
];

const FACTS = [
  "PDR COURT is a technical platform providing IT-based infrastructure and expert Dispute Resolution Professionals as a service.",
  "The services are out-of-court proceedings and completely voluntary in nature.",
  "PDR COURT is not a law firm — the relationship with its clients is not an attorney-client relationship.",
  "The Government of India promotes arbitration and has made pre-mediation mandatory before filing in civil court. Our model is less expensive and fast.",
];

const FAQS = [
  {
    q: "How long does it take to resolve a case?",
    a: "It takes 60 to 90 days to resolve a case, subject to the complexity and requirement of that case.",
  },
  {
    q: "Is this process legal?",
    a: "Yes, it is legal. We work under the Arbitration & Conciliation Act of India.",
  },
  {
    q: "What is the PDR COURT Dispute Resolution Paper?",
    a: "It is the dispute resolution consent from both parties. This consent is taken when you execute any agreement, invoice, work order or purchase order.",
  },
  {
    q: "Are there extra fees for the resolution process?",
    a: "When you purchase the PDR COURT Dispute Resolution Paper, it implies you have already paid for the dispute resolution process. There is no need to pay extra fees.",
  },
  {
    q: "How much does it cost?",
    a: "Our charges start from Rs 100 to 2500. It depends upon the type of agreement as well as the value of that agreement.",
  },
  {
    q: "Will my case go to arbitration?",
    a: "We always focus on resolution via conciliation, so disputes are mostly resolved at the conciliation level — there is seldom a need to go for arbitration in most cases.",
  },
  {
    q: "How can I buy the Dispute Resolution Paper?",
    a: "You can purchase the Dispute Resolution Paper online, offline and through our app. It can also be sent to you digitally.",
  },
  {
    q: "Can I buy it for employees and vendors?",
    a: "Yes. There is no need to buy a new agreement — you can refer to the old agreement and attach the paper as an annexure. It works for all kinds of transactions.",
  },
];

export default function LodgeDisputePageClient() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
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
                <span className="eyebrow mb-6">
                  <FileText className="w-3.5 h-3.5" />
                  Lodge a Dispute
                </span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-dark leading-[1.05] tracking-tight">
                  Lodge your dispute —{" "}
                  <span className="gold-text">save time and money</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-dark/55 leading-relaxed max-w-xl">
                  Easily file your dispute with PDR COURT, where our experts
                  ensure quick resolutions with guaranteed TATs for timely
                  negotiations and settlements. Rely on us for a fair and just
                  outcome.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/appointment" className="btn-primary">
                    File a dispute
                  </Link>
                  <a href="tel:8976955540" className="btn-outline">
                    Talk to an expert
                  </a>
                </div>
              </motion.div>

              {/* right — guaranteed snapshot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="relative rounded-[2rem] bg-dark text-white p-8 md:p-10 shadow-gold-lg overflow-hidden"
              >
                <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-primary/25 blur-[90px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300">
                  <ShieldCheck className="w-4 h-4" />
                  Why file with us
                </span>
                <p className="mt-4 text-xl font-display font-semibold leading-snug">
                  A fair and just outcome, backed by guaranteed turnaround
                  times.
                </p>
                <div className="mt-7 grid grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/10">
                  {[
                    { v: "60–90", l: "Days to resolve" },
                    { v: "₹100+", l: "Starting fee" },
                    { v: "100%", l: "Voluntary" },
                  ].map((s) => (
                    <div key={s.l} className="bg-dark px-3 py-5 text-center">
                      <div className="text-2xl font-display font-bold gold-text">
                        {s.v}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-white/45 mt-1">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ RESOLUTION MODES ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">How We Resolve</span>
              <h2 className="heading-lg mt-3">
                Two routes, <span className="accent-serif">one resolution</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                Download our application for seamless access to conciliation and
                arbitration services — powered by cutting-edge software for
                efficient dispute resolution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {MODES.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="surface-card p-8"
                >
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-primary/10 text-primary items-center justify-center mb-5">
                    <m.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-xl font-display font-bold text-dark mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-dark/60 leading-relaxed">
                    {m.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-dark text-white px-6 py-5">
              <Smartphone className="w-5 h-5 text-primary-300 flex-shrink-0" />
              <span className="text-sm text-white/70">
                PDR COURT is driven by advanced technology — committed to being
                the best ADR platform to enhance your experience.
              </span>
            </div>
          </div>
        </section>

        {/* ════════ PROCESS ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">The Process</span>
              <h2 className="heading-lg mt-3">
                Dispute resolution via{" "}
                <span className="accent-serif">best practices</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                A modern, effective and transparent ADR process — four clear
                stages from conflict to closure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-cream-300 bg-cream p-6"
                >
                  <span className="absolute top-5 right-5 text-4xl font-display font-bold text-primary/15">
                    {i + 1}
                  </span>
                  <span className="inline-flex w-12 h-12 rounded-xl bg-gold-gradient text-white items-center justify-center mb-5">
                    <s.icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-display font-bold text-dark mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-dark/60 leading-relaxed">
                    {s.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ GOOD TO KNOW ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <span className="eyebrow mb-5">
                  <Info className="w-3.5 h-3.5" />
                  Good to Know
                </span>
                <h2 className="heading-md">
                  Before you{" "}
                  <span className="accent-serif">file a dispute</span>
                </h2>
                <p className="mt-4 text-dark/55 leading-relaxed">
                  Wait. Prepare. A clear understanding of the dispute resolution
                  process helps you get the most out of it.
                </p>
              </motion.div>

              <div className="space-y-4">
                {FACTS.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease, delay: i * 0.07 }}
                    className="flex items-start gap-4 rounded-2xl border border-cream-300 bg-white p-5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-dark/65 leading-relaxed">{f}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={`${SECTION} max-w-3xl`}>
            <div className="text-center mb-12">
              <span className="eyebrow justify-center">FAQs</span>
              <h2 className="heading-lg mt-3">
                Answers to your <span className="accent-serif">ADR queries</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                Compiled by our expert professionals to enhance your
                understanding of the dispute resolution process.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-cream-300 bg-cream overflow-hidden"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display font-semibold text-dark">
                        {f.q}
                      </span>
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isOpen
                            ? "bg-gold-gradient text-white"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3, ease }}
                      >
                        <p className="px-6 pb-5 text-sm text-dark/60 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════ DECIDED + SUPPORT CTA ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 md:p-12"
            >
              <div className="pointer-events-none absolute -top-24 -right-16 w-96 h-96 rounded-full bg-primary/20 blur-[110px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300">
                    <Sparkles className="w-4 h-4" />
                    Ready when you are
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold leading-tight">
                    Decided to file a dispute?
                  </h2>
                  <p className="mt-4 text-white/60 leading-relaxed max-w-lg">
                    Our support team is here to guide you through every step.
                    Reach out and we&apos;ll help you get started.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <Link href="/appointment" className="btn-primary">
                      File a dispute
                    </Link>
                    <Link href="/contact" className="btn-outline !text-white">
                      Contact support
                    </Link>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 rounded-xl bg-white/[0.06] border border-white/10 p-4">
                    <Clock className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
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
                    className="flex items-center gap-3.5 rounded-xl bg-white/[0.06] border border-white/10 p-4 hover:border-primary/40 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary-300 flex-shrink-0" />
                    <span className="text-sm font-semibold text-white">
                      +91 8976955540
                    </span>
                  </a>
                  <a
                    href="mailto:legal@pdrcourt.com"
                    className="flex items-center gap-3.5 rounded-xl bg-white/[0.06] border border-white/10 p-4 hover:border-primary/40 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary-300 flex-shrink-0" />
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
