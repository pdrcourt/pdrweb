"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";
import ContactForm from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import {
  Headphones,
  Lightbulb,
  Target,
  ShieldCheck,
  UserCheck,
  MessageCircle,
  Receipt,
  Network,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const REACH = [
  { icon: Phone, label: "+91 8976955540", href: "tel:8976955540" },
  { icon: Mail, label: "legal@pdrcourt.com", href: "mailto:legal@pdrcourt.com" },
];

const VALUE = [
  {
    icon: Lightbulb,
    title: "A unique perspective",
    text: "Gain genuine insight into your issues from those with valid, undeniable knowledge.",
  },
  {
    icon: Target,
    title: "The right expert",
    text: "Narrow down and define your query to connect with exactly the right person.",
  },
  {
    icon: ShieldCheck,
    title: "Avoid crises",
    text: "Clear up uncertainties early and steer well clear of potential crises.",
  },
];

const TEAMS = [
  {
    icon: UserCheck,
    title: "Case Manager",
    text: "Advice and guidance to build a flawless case on strong, reliable evidence — ensuring the outcome is just.",
  },
  {
    icon: MessageCircle,
    title: "Communication Team",
    text: "Honesty, integrity, understanding, empathy and fairness — building a trusting, long-lasting bond with you.",
  },
  {
    icon: Receipt,
    title: "Billing Team",
    text: "Billing, taxation, invoicing and accounting documentation, handled effortlessly and flawlessly.",
  },
  {
    icon: Network,
    title: "Management Team",
    text: "Ensures efficient operations, resolves roadblocks, shares knowledge and keeps communication effective.",
  },
];

export default function TalkToUsPageClient() {
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
                  <Headphones className="w-3.5 h-3.5" />
                  Talk to an Expert
                </span>
                <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                  Our experts are here to{" "}
                  <span className="gold-text">guide you</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-xl">
                  Our team explores innovative strategies tailored to your
                  needs — they know exactly how to keep your business moving
                  toward more sustainable resolutions.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#callback" className="btn-primary">
                    Request a callback
                  </a>
                  <a href="tel:8976955540" className="btn-outline">
                    Call an expert now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ WHY EXPERT ADVICE ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Why It Matters</span>
              <h2 className="heading-lg mt-3">
                Advice from an expert is an{" "}
                <span className="accent-serif">investment</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                The opinions and advice of an expert matter. To connect with the
                right one, define your query — and avoid a potential crisis
                before it begins.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {VALUE.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease, delay: i * 0.1 }}
                  className="rounded-2xl border border-cream-300 bg-cream p-7"
                >
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-royal-gradient text-white items-center justify-center mb-5 shadow-royal">
                    <v.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-lg font-display font-bold text-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-ink-60 leading-relaxed">
                    {v.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ THE TEAM ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow-royal justify-center">
                The People Behind You
              </span>
              <h2 className="heading-lg mt-3">
                A skilled team, <span className="accent-serif">start to finish</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                PDR COURT is built on the expertise of a team that manages the
                ADR process from the very first step to the last.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAMS.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease, delay: (i % 4) * 0.08 }}
                  className="group gradient-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
                >
                  <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5 group-hover:bg-royal-gradient group-hover:text-white transition-colors">
                    <t.icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-display font-bold text-dark mb-2">
                    {t.title}
                  </h3>
                  <p className="text-sm text-ink-60 leading-relaxed">
                    {t.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ REQUEST A CALLBACK ════════ */}
        <section
          id="callback"
          className="py-20 lg:py-28 bg-white border-y border-cream-300 scroll-mt-20"
        >
          <div className={`${SECTION} max-w-3xl`}>
            <div className="text-center mb-10">
              <span className="eyebrow justify-center">Request a Callback</span>
              <h2 className="heading-md mt-3">
                Reach out — we&apos;ll call you
              </h2>
              <p className="mt-3 text-ink-55">
                Share your query and an expert will get back to you to address
                your case-related questions.
              </p>
            </div>
            <ContactForm
              title="Talk to an Expert"
              subtitle="Advice worth taking, whenever you need it"
              buttonText="Request callback"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
