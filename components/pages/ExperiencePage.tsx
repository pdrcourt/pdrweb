"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import GrowthStatsCard from "@/components/pages/GrowthStatsCard";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ContentBlock } from "@/lib/migrated-content";
import type { ExperienceConfig } from "@/lib/experience-config";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60);
}

interface Props {
  cfg: ExperienceConfig;
  intro: string;
  blocks: ContentBlock[];
}

function Block({ block, first }: { block: ContentBlock; first: boolean }) {
  if (block.type === "stats") {
    return (
      <div className="my-12 -mx-2 sm:-mx-4">
        <GrowthStatsCard />
      </div>
    );
  }
  if (block.type === "heading") {
    const id = slugify(block.text);
    if (block.level <= 2)
      return (
        <h2 id={id} className="scroll-mt-28 mt-12 mb-4 text-2xl md:text-[1.9rem] font-display font-bold text-dark leading-tight">
          <span className="block w-9 h-1 rounded-full bg-gold-gradient mb-3.5" />
          {block.text}
        </h2>
      );
    if (block.level === 3)
      return (
        <h3 id={id} className="scroll-mt-28 mt-9 mb-3 text-xl font-display font-bold text-dark leading-snug">
          {block.text}
        </h3>
      );
    return (
      <h4 id={id} className="scroll-mt-28 mt-7 mb-2 text-lg font-display font-semibold text-dark/90">
        {block.text}
      </h4>
    );
  }
  if (block.type === "paragraph")
    return (
      <p
        className={`my-4 text-[1.05rem] leading-[1.8] text-dark/80 prose-anchor ${
          first
            ? "first-letter:float-left first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:text-[3.4rem] first-letter:leading-[0.8] first-letter:mr-3 first-letter:mt-1"
            : ""
        }`}
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    );
  if (block.type === "list")
    return (
      <ul className="my-5 space-y-2.5">
        {block.items.map((it, i) => (
          <li key={i} className="flex gap-3.5">
            <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-gold-gradient flex-shrink-0" />
            <span
              className="flex-1 text-[1.02rem] leading-[1.75] text-dark/80 prose-anchor"
              dangerouslySetInnerHTML={{ __html: it.html }}
            />
          </li>
        ))}
      </ul>
    );
  // quote
  return (
    <blockquote
      className="my-7 rounded-2xl rounded-tl-none bg-cream-100 border border-cream-300 p-6 text-lg italic text-dark/75 prose-anchor"
      dangerouslySetInnerHTML={{ __html: block.html }}
    />
  );
}

export default function ExperiencePage({ cfg, intro, blocks }: Props) {
  const dark = cfg.hero === "dark";
  const firstParaIdx = blocks.findIndex(
    (b) => b.type === "paragraph" && b.text.length >= 120,
  );

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
        <section
          className={`relative overflow-hidden ${
            dark
              ? "bg-dark text-white pt-32 md:pt-40 pb-24 md:pb-28"
              : "bg-hero-gradient pt-28 md:pt-36 pb-20 md:pb-28"
          }`}
        >
          {dark ? (
            <>
              <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/50 via-dark to-dark" />
              </div>
              <div className="pointer-events-none absolute -top-24 right-[-10%] w-[640px] h-[640px] rounded-full bg-primary/15 blur-[150px]" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-50" />
            </>
          ) : (
            <>
              <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[130px]" />
              <div className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-amber-400/10 blur-[120px]" />
            </>
          )}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: dark ? 0.05 : 0.04,
              backgroundImage:
                "linear-gradient(rgba(131,64,9,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(131,64,9,.6) 1px,transparent 1px)",
              backgroundSize: "78px 78px",
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
                <span
                  className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] ${
                    dark ? "text-primary-300" : "text-primary"
                  }`}
                >
                  <span
                    className={`inline-block w-7 h-px ${
                      dark ? "bg-primary/60" : "bg-primary/50"
                    }`}
                  />
                  <LucideIcon name={cfg.icon} className="w-3.5 h-3.5" />
                  {cfg.eyebrow}
                </span>
                <h1
                  className={`mt-6 text-4xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight ${
                    dark ? "text-white" : "text-dark"
                  }`}
                >
                  {cfg.headline} <span className="gold-text">{cfg.accent}</span>
                </h1>
                <p
                  className={`mt-6 text-lg md:text-xl leading-relaxed max-w-xl ${
                    dark ? "text-white/65" : "text-dark/55"
                  }`}
                >
                  {intro}
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href={cfg.primary.href} className="btn-primary">
                    {cfg.primary.label}
                  </Link>
                  {dark ? (
                    <Link
                      href={cfg.secondary.href}
                      className="inline-flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-200 px-7 py-3.5"
                    >
                      {cfg.secondary.label}
                    </Link>
                  ) : (
                    <Link href={cfg.secondary.href} className="btn-outline">
                      {cfg.secondary.label}
                    </Link>
                  )}
                </div>
              </motion.div>

              {/* right — situational panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className={`relative rounded-[2rem] p-8 md:p-10 overflow-hidden ${
                  dark
                    ? "bg-white/[0.04] border border-white/10 backdrop-blur-sm"
                    : "bg-dark text-white shadow-gold-lg"
                }`}
              >
                <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-primary/20 blur-[90px]" />
                {!dark && <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />}
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300">
                  <LucideIcon name={cfg.icon} className="w-4 h-4" />
                  {cfg.panelTitle}
                </span>
                <p className="mt-4 text-lg font-display font-semibold leading-snug text-white">
                  {cfg.panelLead}
                </p>
                <div className="mt-6 space-y-3">
                  {cfg.highlights.map((h) => (
                    <div
                      key={h.title}
                      className="flex items-start gap-3.5 rounded-xl bg-white/[0.06] border border-white/10 p-3.5"
                    >
                      <span className="w-9 h-9 flex-shrink-0 rounded-lg bg-primary/15 text-primary-300 flex items-center justify-center">
                        <LucideIcon name={h.icon} className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {h.title}
                        </div>
                        <div className="text-xs text-white/55 leading-relaxed mt-0.5">
                          {h.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ BODY ════════ */}
        <section className="py-16 lg:py-24">
          <div className={SECTION}>
            <article className="max-w-3xl mx-auto">
              {blocks.length === 0 && (
                <p className="text-lg text-dark/70">{intro}</p>
              )}
              {blocks.map((b, i) => (
                <Block key={i} block={b} first={i === firstParaIdx} />
              ))}
            </article>
          </div>
        </section>

        {/* ════════ CLOSING CTA ════════ */}
        <section className="pb-24">
          <div className={SECTION}>
            <div className="relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 md:p-14 text-center">
              <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-primary/20 blur-[120px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="relative">
                <h2 className="max-w-2xl mx-auto text-2xl md:text-4xl font-display font-bold text-white leading-tight">
                  {cfg.closeHeading}
                </h2>
                <p className="text-white/60 mt-4 max-w-xl mx-auto leading-relaxed">
                  {cfg.closeText}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href={cfg.primary.href} className="btn-primary">
                    {cfg.primary.label}
                  </Link>
                  <Link
                    href={cfg.secondary.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-200 px-7 py-3.5"
                  >
                    {cfg.secondary.label}
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
