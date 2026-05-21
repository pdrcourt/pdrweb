"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Library,
  Search,
  GraduationCap,
  Workflow,
  BookOpen,
  ArrowRight,
  Newspaper,
  Compass,
  ChevronRight,
} from "lucide-react";

interface Item {
  slug: string;
  title: string;
  excerpt: string;
  image: string | null;
}

interface Props {
  topArticles: Item[];
  recentNews: Item[];
}

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const PATHS = [
  {
    icon: GraduationCap,
    title: "Beginner's Guide",
    desc: "Start here. Understand the building blocks of ADR in fifteen minutes.",
    href: "/beginner-guide",
  },
  {
    icon: Workflow,
    title: "How It Works",
    desc: "An end-to-end walk-through of the PDR COURT dispute resolution journey.",
    href: "/how-it-works",
  },
  {
    icon: BookOpen,
    title: "Article Library",
    desc: "Browse the complete catalogue of ADR insights and explainers.",
    href: "/articles",
  },
];

const TOPICS = [
  { label: "Arbitration", href: "/solutions/arbitration" },
  { label: "Conciliation", href: "/solutions/conciliation" },
  { label: "Mediation", href: "/solutions/mediation" },
  { label: "Negotiation", href: "/solutions/negotiation" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Beginner's Guide", href: "/beginner-guide" },
  { label: "Rules & Procedure", href: "/rules" },
  { label: "FAQs", href: "/faqs" },
];

const POPULAR = ["Arbitration", "Conciliation", "Mediation", "Settlement"];

export default function KnowledgeCenterClient({
  topArticles,
  recentNews,
}: Props) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = q
    ? topArticles.filter((a) => a.title.toLowerCase().includes(q))
    : topArticles;

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-royal-mesh text-white pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
          <div className="pointer-events-none absolute -top-20 right-10 w-[460px] h-[460px] rounded-full bg-royal/40 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 -left-24 w-[380px] h-[380px] rounded-full bg-primary/20 blur-[120px]" />
          <div className={`relative ${SECTION} text-center`}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                <Library className="w-4 h-4" />
                Knowledge Center
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.08] max-w-3xl mx-auto">
                Master Alternative{" "}
                <span className="gold-text">Dispute Resolution</span>
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
                Foundational guides, in-depth articles and the latest courtroom
                updates — curated for individuals, businesses and legal
                professionals.
              </p>

              {/* search */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-9 max-w-xl mx-auto"
              >
                <div className="flex items-center gap-3 rounded-2xl bg-white p-2 shadow-royal-lg">
                  <Search className="w-5 h-5 text-dark/40 ml-3 flex-shrink-0" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles and guides…"
                    className="flex-1 min-w-0 bg-transparent text-dark placeholder:text-dark/40 outline-none text-sm"
                  />
                  <span className="flex-shrink-0 pill-cta text-sm">
                    Search
                  </span>
                </div>
              </form>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs text-white/40 uppercase tracking-wider">
                  Popular:
                </span>
                {POPULAR.map((p) => (
                  <button
                    key={p}
                    onClick={() => setQuery(p)}
                    className="text-xs font-semibold rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-white/70 hover:border-amber-300/40 hover:text-white transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ LEARNING PATHS ════════ */}
        <section className="py-20 lg:py-24">
          <div className={SECTION}>
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="eyebrow-royal justify-center">
                Start Learning
              </span>
              <h2 className="heading-md mt-3">Choose your path</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {PATHS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease, delay: i * 0.1 }}
                >
                  <Link
                    href={p.href}
                    className="group gradient-border h-full p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
                  >
                    <span className="inline-flex w-12 h-12 rounded-xl bg-royal/10 text-royal items-center justify-center mb-5 group-hover:bg-royal-gradient group-hover:text-white transition-colors">
                      <p.icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl font-display font-bold text-dark mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-dark/60 leading-relaxed flex-1">
                      {p.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal">
                      Explore
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ ARTICLES + SIDEBAR ════════ */}
        <section className="py-16 lg:py-20 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-14">
              {/* sidebar */}
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <span className="eyebrow-royal mb-5">
                  <Compass className="w-3.5 h-3.5" />
                  Browse Topics
                </span>
                <nav className="flex flex-col gap-1">
                  {TOPICS.map((t) => (
                    <Link
                      key={t.label}
                      href={t.href}
                      className="group flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-dark/65 hover:bg-royal/[0.06] hover:text-royal transition-colors"
                    >
                      {t.label}
                      <ChevronRight className="w-4 h-4 text-dark/20 group-hover:text-royal group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </nav>
              </aside>

              {/* article grid */}
              <div>
                <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
                  <div>
                    <span className="section-label">Most Read</span>
                    <h2 className="heading-md mt-1">Foundational reading</h2>
                  </div>
                  <span className="text-sm text-dark/45">
                    {filtered.length}{" "}
                    {filtered.length === 1 ? "article" : "articles"}
                    {q && (
                      <>
                        {" "}
                        for &ldquo;
                        <span className="text-royal font-semibold">
                          {query}
                        </span>
                        &rdquo;
                      </>
                    )}
                  </span>
                </div>

                {filtered.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-cream-300 bg-cream p-12 text-center">
                    <Search className="w-8 h-8 text-dark/20 mx-auto mb-3" />
                    <p className="text-dark/55">
                      No articles match &ldquo;{query}&rdquo;.
                    </p>
                    <button
                      onClick={() => setQuery("")}
                      className="mt-3 text-sm font-semibold text-royal hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {filtered.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/articles/${a.slug}`}
                        className="group flex flex-col bg-cream rounded-2xl overflow-hidden border border-cream-300 hover:border-royal/30 hover:shadow-royal transition-all duration-300"
                      >
                        <div className="aspect-[16/9] overflow-hidden bg-cream-200">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={a.image || "/images/hero-illustration.png"}
                            alt={a.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (
                                e.currentTarget as HTMLImageElement
                              ).src = "/images/hero-illustration.png";
                            }}
                          />
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-base font-display font-bold text-dark group-hover:text-royal transition-colors leading-snug mb-2 line-clamp-2">
                            {a.title}
                          </h3>
                          <p className="text-sm text-dark/55 leading-relaxed line-clamp-2">
                            {a.excerpt}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ LATEST NEWS ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="eyebrow-royal">
                  <Newspaper className="w-3.5 h-3.5" />
                  Newsroom
                </span>
                <h2 className="heading-md mt-2">Latest from the courts</h2>
              </div>
              <Link
                href="/newsroom"
                className="inline-flex items-center gap-2 text-sm font-semibold text-royal hover:gap-3 transition-all"
              >
                View all updates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentNews.map((n) => (
                <Link
                  key={n.slug}
                  href={`/newsroom/${n.slug}`}
                  className="group gradient-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-royal"
                >
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-royal bg-royal/10 px-3 py-1 rounded-full mb-4">
                    <Newspaper className="w-3 h-3" />
                    Newsroom
                  </span>
                  <h3 className="text-base font-display font-bold text-dark group-hover:text-royal transition-colors leading-snug mb-2 line-clamp-2">
                    {n.title}
                  </h3>
                  <p className="text-sm text-dark/55 leading-relaxed line-clamp-3">
                    {n.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="pb-20 lg:pb-28">
          <div className={SECTION}>
            <div className="rounded-[2rem] bg-gold-subtle border border-primary/15 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="heading-md flex items-center gap-3">
                  <GraduationCap className="w-7 h-7 text-primary" />
                  Still have questions?
                </h3>
                <p className="text-dark/55 mt-2">
                  Move from learning to resolving — our experts will guide you
                  the rest of the way.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/talk-to-us" className="btn-primary">
                  Talk to an expert
                </Link>
                <Link href="/faqs" className="btn-outline">
                  Read the FAQs
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
