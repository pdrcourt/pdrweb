"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CalendarCheck,
  Handshake,
  Scale,
  Search,
  BookOpen,
  MessageSquare,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const SCHEDULE = [
  { icon: Sparkles, text: "Free expert consultation" },
  { icon: Clock, text: "Mon – Fri · 10 am – 5 pm" },
  { icon: Users, text: "Online or in person" },
];

const NEUTRALS = [
  {
    icon: Handshake,
    title: "Conciliation",
    role: "Appoint a Conciliator",
    text: "A voluntary, collaborative route where a conciliator helps both parties reach a fair settlement — most disputes resolve here.",
  },
  {
    icon: Scale,
    title: "Arbitration",
    role: "Appoint an Arbitrator",
    text: "A binding resolution adjudicated by an arbitrator under the Arbitration & Conciliation Act of India, for matters needing a formal award.",
  },
];

const STEPS = [
  {
    icon: Search,
    title: "Conflict Identification",
    text: "We identify the conflict type from your agreement and gather all supporting evidence.",
  },
  {
    icon: BookOpen,
    title: "Understanding",
    text: "Our experts review and analyse the evidence to understand the case and close any gaps.",
  },
  {
    icon: MessageSquare,
    title: "Convincing",
    text: "We brainstorm the most suitable strategies, with complete transparency throughout.",
  },
  {
    icon: CheckCircle2,
    title: "Resolving",
    text: "A step-by-step plan of action drives the parties to a fair, mutually agreeable outcome.",
  },
];

export default function AppointmentPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-cream pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-royal/10 blur-[130px]" />
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
                  <CalendarCheck className="w-3.5 h-3.5" />
                  Appointment
                </span>
                <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                  Appoint an arbitrator or{" "}
                  <span className="gold-text">conciliator</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-xl">
                  PDR COURT facilitates dispute settlements through mutual
                  agreement — a private, confidential resolution that combines
                  expert professionals with advanced technology.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#book" className="btn-primary">
                    Book appointment
                  </a>
                  <a href="#process" className="btn-outline">
                    See how it works
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ CHOOSE NEUTRAL ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Choose Your Neutral</span>
              <h2 className="heading-lg mt-3">
                Two routes to a{" "}
                <span className="accent-serif">fair outcome</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                Appoint the kind of neutral your dispute calls for — both backed
                by our platform&apos;s technology and expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {NEUTRALS.map((n, i) => (
                <motion.div
                  key={n.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="group gradient-border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
                >
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-royal/10 text-royal items-center justify-center mb-5 group-hover:bg-royal-gradient group-hover:text-white transition-colors">
                    <n.icon className="w-7 h-7" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-royal">
                    {n.role}
                  </span>
                  <h3 className="mt-1 text-xl font-display font-bold text-dark mb-2">
                    {n.title}
                  </h3>
                  <p className="text-sm text-ink-60 leading-relaxed">
                    {n.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ PROCESS STEPPER ════════ */}
        <section
          id="process"
          className="py-20 lg:py-28 bg-white border-y border-cream-300 scroll-mt-20"
        >
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow-royal justify-center">The Process</span>
              <h2 className="heading-lg mt-3">
                Dispute resolution via{" "}
                <span className="accent-serif">best practices</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                A modern, transparent process — four guided stages from conflict
                to closure.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-royal/15 via-royal/40 to-royal/15" />
              <div className="grid md:grid-cols-4 gap-10 md:gap-6">
                {STEPS.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease, delay: i * 0.1 }}
                    className="relative text-center"
                  >
                    <span className="relative mx-auto w-14 h-14 rounded-full bg-royal-gradient text-white flex items-center justify-center shadow-royal ring-8 ring-white">
                      <s.icon className="w-6 h-6" />
                      <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gold-gradient text-white text-[11px] font-display font-bold flex items-center justify-center ring-4 ring-white">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="mt-5 text-lg font-display font-bold text-dark">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-60 leading-relaxed">
                      {s.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ BOOK / SUPPORT ════════ */}
        <section id="book" className="py-20 lg:py-28 scroll-mt-20">
          <div className={SECTION}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="relative overflow-hidden rounded-[2rem] bg-royal-mesh text-white p-8 md:p-12"
            >
              <div className="pointer-events-none absolute -top-24 -right-16 w-96 h-96 rounded-full bg-primary/20 blur-[110px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                    <ShieldCheck className="w-4 h-4" />
                    Ready When You Are
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold leading-tight">
                    Book your appointment
                  </h2>
                  <p className="mt-4 text-paper-60 leading-relaxed max-w-lg">
                    Reach out and our team will guide you through appointing the
                    right neutral for your dispute — start with a free
                    consultation.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <Link href="/contact" className="btn-primary">
                      Book appointment
                    </Link>
                    <Link
                      href="/lodge-dispute"
                      className="btn-outline !text-white"
                    >
                      Lodge a dispute
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
                      <div className="text-xs text-paper-50 mt-0.5">
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
