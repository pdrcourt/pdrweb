"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Newspaper,
  FileText,
  Package,
  Megaphone,
  HelpCircle,
  ArrowRight,
  Radio,
  Globe,
  Mail,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const PRESS_SIGNALS = [
  { icon: Package, text: "Complete press & media kit" },
  { icon: Megaphone, text: "Announcements & events" },
  { icon: Radio, text: "Breaking ADR news" },
];

const SECONDARY = [
  {
    icon: Package,
    title: "Media Kit",
    href: "/media-kit",
    text: "A comprehensive press kit for reporters and media connections who wish to write about us.",
  },
  {
    icon: Megaphone,
    title: "Press Release",
    href: "/press-release",
    text: "Our latest announcements, events, partnerships, book releases, awards and new hires.",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    href: "/faqs",
    text: "A quick, reliable reference for your concerns — immediate answers about our services.",
  },
];

export default function MediaCenterPageClient() {
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
                  <Newspaper className="w-3.5 h-3.5" />
                  Media Center
                </span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-dark leading-[1.05] tracking-tight">
                  Your passage to{" "}
                  <span className="gold-text">global business</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-dark/55 leading-relaxed max-w-xl">
                  Our ADR platform facilitates connections — paving the way for
                  you to engage with the global business community. Discover,
                  study and research everything we do.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#explore" className="btn-primary">
                    Explore the center
                  </a>
                  <Link href="/newsroom" className="btn-outline">
                    Visit the newsroom
                  </Link>
                </div>
              </motion.div>

              {/* navy press panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="relative rounded-[2rem] bg-royal-mesh text-white p-8 md:p-10 shadow-royal-lg overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                  <Globe className="w-4 h-4" />
                  For the Press
                </span>
                <p className="mt-4 text-xl font-display font-semibold leading-snug">
                  Everything reporters need to write about us.
                </p>
                <div className="mt-7 space-y-2.5">
                  {PRESS_SIGNALS.map((s) => (
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
                <Link
                  href="/media-kit"
                  className="mt-6 w-full btn-primary justify-center pl-2"
                >
                  Get the media kit
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ EXPLORE BENTO ════════ */}
        <section id="explore" className="py-20 lg:py-28 scroll-mt-20">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Explore</span>
              <h2 className="heading-lg mt-3">
                The PDR COURT <span className="accent-serif">newsroom</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                Headlines, insight, press resources and answers — all in one
                place.
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-5">
              {/* Newsroom — featured navy */}
              <Link
                href="/newsroom"
                className="group relative overflow-hidden rounded-3xl bg-royal-mesh text-white lg:col-span-3 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal-lg"
              >
                <div className="pointer-events-none absolute -top-16 -right-12 w-60 h-60 rounded-full bg-primary/25 blur-[80px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex w-12 h-12 rounded-xl bg-gold-gradient text-white items-center justify-center mb-5">
                  <Newspaper className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-2">
                  Headlines & Updates
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Newsroom
                </h3>
                <p className="text-sm text-white/65 leading-relaxed flex-1 max-w-md">
                  Top headlines on ADR from across the globe — latest Supreme
                  Court judgements, awards, settlements and breaking news.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300">
                  Read the latest
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Articles */}
              <Link
                href="/articles"
                className="group gradient-border lg:col-span-3 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5">
                  <FileText className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-display font-bold text-dark mb-2">
                  Articles
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed flex-1">
                  In-depth insight into Alternative Dispute Resolution — a
                  sensible, cost-effective method to sort legal matters.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Browse articles
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
                  <p className="text-sm text-dark/60 leading-relaxed flex-1">
                    {s.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ PRESS CTA ════════ */}
        <section className="pb-20 lg:pb-28">
          <div className={SECTION}>
            <div className="rounded-[2rem] bg-gold-subtle border border-primary/15 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="heading-md flex items-center gap-3">
                  <Mail className="w-7 h-7 text-primary" />
                  Writing about PDR COURT?
                </h3>
                <p className="text-dark/55 mt-2">
                  Reach out for press enquiries, assets and interviews — or grab
                  the full media kit. Write to us at{" "}
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
                <Link href="/media-kit" className="btn-primary">
                  Get the media kit
                </Link>
                <Link href="/contact" className="btn-outline">
                  Connect with us
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
