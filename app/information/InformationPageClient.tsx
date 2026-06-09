"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Info,
  Workflow,
  GraduationCap,
  ScrollText,
  BarChart3,
  Users,
  ArrowRight,
  Clock,
  MonitorPlay,
  Headphones,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const SUPPORT = [
  { icon: Clock, text: "Response within 2 working days" },
  { icon: MonitorPlay, text: "Personalised ADR platform demo" },
  { icon: Headphones, text: "Dedicated support & sales team" },
];

const DIRECTORY = [
  {
    icon: Workflow,
    title: "How it Works",
    href: "/how-it-works",
    text: "Connect with us to understand our ADR services from end to end.",
  },
  {
    icon: GraduationCap,
    title: "Beginner's Guide",
    href: "/beginner-guide",
    text: "A step-by-step approach outlining exactly how to avail our services.",
  },
  {
    icon: ScrollText,
    title: "Our Ethos",
    href: "/ethos",
    text: "Our Constitution — how we exercise our power and stay accountable to those we serve.",
  },
  {
    icon: BarChart3,
    title: "Case Studies",
    href: "/case-studies",
    text: "Review our case studies to evaluate how we deal with actual, real-life cases.",
  },
  {
    icon: Users,
    title: "Member Stories",
    href: "/member-stories",
    text: "Every case is unique in its own way — adding flexibility and exposure to our services.",
  },
];

export default function InformationPageClient() {
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
                  <Info className="w-3.5 h-3.5" />
                  Information
                </span>
                <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                  Know all about our{" "}
                  <span className="gold-text">ADR service</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-xl">
                  For any inquiry, guidance, or a personalised demo of our ADR
                  process, our support and sales team is here — tailored
                  support, whenever you need it.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#directory" className="btn-primary">
                    Browse information
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Contact our team
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ DIRECTORY ════════ */}
        <section id="directory" className="py-20 lg:py-28 scroll-mt-20">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Find What You Need</span>
              <h2 className="heading-lg mt-3">
                Everything, <span className="accent-serif">clearly organised</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                Browse our information hub — guidance, ethos, and proof of how
                we work.
              </p>
            </div>

            <div className="space-y-4">
              {DIRECTORY.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, ease, delay: i * 0.06 }}
                >
                  <Link
                    href={d.href}
                    className="group flex items-center gap-5 md:gap-7 rounded-2xl border border-cream-300 bg-white p-6 md:p-7 hover:border-royal/30 hover:shadow-royal transition-all duration-300"
                  >
                    <span className="hidden sm:flex flex-shrink-0 font-display font-bold text-2xl text-royal/20 w-8 group-hover:text-royal/50 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-shrink-0 w-14 h-14 rounded-2xl bg-royal/10 text-royal flex items-center justify-center group-hover:bg-royal-gradient group-hover:text-white transition-colors">
                      <d.icon className="w-7 h-7" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-display font-bold text-dark group-hover:text-royal transition-colors">
                        {d.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-55 leading-relaxed">
                        {d.text}
                      </p>
                    </div>
                    <ArrowRight className="flex-shrink-0 w-5 h-5 text-ink-25 group-hover:text-royal group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ DEMO CTA ════════ */}
        <section className="pb-20 lg:pb-28">
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
              <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                    <MonitorPlay className="w-4 h-4" />
                    See It In Action
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold leading-tight">
                    Schedule a personalised demo
                  </h2>
                  <p className="mt-4 text-paper-60 leading-relaxed max-w-lg">
                    Want to see how our platform facilitates online and offline
                    dispute resolution? Our team will walk you through it.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
                  <Link
                    href="/talk-to-us"
                    className="btn-primary justify-center"
                  >
                    Request a demo
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-outline !text-white justify-center"
                  >
                    Ask a question
                  </Link>
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
