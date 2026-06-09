"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SanctumSection from "@/components/pages/SanctumSection";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Link from "next/link";
import {
  ScrollText,
  ListOrdered,
  ShieldCheck,
  Lock,
  Shield,
  Cookie,
  Scale,
  ArrowRight,
  Handshake,
  Gavel,
  BookText,
} from "lucide-react";
import type { ContentBlock } from "@/lib/migrated-content";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

// All legal documents — the hero panel shows every doc except the current one.
const LEGAL_DOCS = [
  { slug: "terms-conditions", icon: ScrollText, label: "Terms & Conditions", href: "/terms-conditions" },
  { slug: "privacy-policy", icon: Lock, label: "Privacy Policy", href: "/privacy-policy" },
  { slug: "disclaimer", icon: Shield, label: "Disclaimer", href: "/disclaimer" },
  { slug: "cookie-policy", icon: Cookie, label: "Cookie Policy", href: "/cookie-policy" },
  { slug: "rules", icon: Scale, label: "Rules & Guidelines", href: "/rules" },
];

const RULE_DOCS = [
  { slug: "rules", icon: BookText, label: "Rules Overview", href: "/rules" },
  { slug: "arbitration-rules", icon: Scale, label: "Arbitration Rules", href: "/arbitration-rules" },
  { slug: "mediation-rules", icon: Handshake, label: "Mediation Rules", href: "/mediation-rules" },
  { slug: "proceeding-rules", icon: Gavel, label: "Rules of ODR Proceedings", href: "/proceeding-rules" },
];

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60);
}

export interface LegalDocPageProps {
  /** current page slug — excluded from the side panel */
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  blocks: ContentBlock[];
  /** "legal" → policy docs panel · "rules" → rulebooks panel */
  variant?: "legal" | "rules";
}

interface DocSection {
  title: string;
  blocks: ContentBlock[];
}

export default function LegalDocPage({
  slug,
  eyebrow,
  title,
  titleAccent,
  intro,
  blocks,
  variant = "legal",
}: LegalDocPageProps) {
  const { preamble, sections } = useMemo(() => {
    const clean = blocks.filter((b, i) => {
      if (i === 0 && b.type === "heading") return false;
      if (b.type === "heading" && /^got any questions/i.test(b.text)) return false;
      if (b.type === "paragraph" && /^write to us\.?$/i.test(b.text)) return false;
      return true;
    });
    const pre: ContentBlock[] = [];
    const secs: DocSection[] = [];
    let cur: DocSection | null = null;
    for (const b of clean) {
      if (b.type === "heading") {
        cur = { title: b.text, blocks: [] };
        secs.push(cur);
      } else if (cur) {
        cur.blocks.push(b);
      } else {
        pre.push(b);
      }
    }
    return { preamble: pre, sections: secs };
  }, [blocks]);

  const showToc = sections.length >= 3;
  const isRules = variant === "rules";
  const docs = (isRules ? RULE_DOCS : LEGAL_DOCS).filter((d) => d.slug !== slug);
  const panelTitle = isRules ? "The Rulebooks" : "Legal Documents";
  const panelLead = isRules
    ? "Every rulebook that governs resolution on the PDR COURT platform."
    : "Everything that governs your use of the PDR COURT platform.";

  // fill legacy blank placeholders with real links
  function fixPlaceholders(html: string, text: string): string {
    let out = html;
    // "Kindly visit ____ for our privacy policy" → link to the Privacy Policy page
    if (/privacy policy/i.test(text) && /_{3,}/.test(out)) {
      out = out.replace(
        /_{3,}/,
        '<a href="/privacy-policy">our Privacy Policy page</a>',
      );
    }
    return out;
  }

  function renderBlock(b: ContentBlock, key: number) {
    if (b.type === "paragraph") {
      return (
        <p
          key={key}
          className="my-4 text-[15px] md:text-base text-ink-70 leading-relaxed prose-anchor"
          dangerouslySetInnerHTML={{ __html: fixPlaceholders(b.html, b.text) }}
        />
      );
    }
    if (b.type === "list") {
      return (
        <ul key={key} className="my-4 space-y-2.5">
          {b.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
              <span
                className="flex-1 text-[15px] text-ink-70 leading-relaxed prose-anchor"
                dangerouslySetInnerHTML={{ __html: it.html }}
              />
            </li>
          ))}
        </ul>
      );
    }
    if (b.type === "quote") {
      return (
        <blockquote
          key={key}
          className="my-4 border-l-4 border-primary pl-5 italic text-ink-65"
          dangerouslySetInnerHTML={{ __html: b.html }}
        />
      );
    }
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO — light editorial ════════ */}
        <section className="relative overflow-hidden bg-cream pt-28 md:pt-36 pb-24 md:pb-32">
          {/* faint construction line-art */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 1440 820"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <g fill="none" stroke="#834009" strokeWidth="1" opacity="0.09">
              <path d="M-50 250 C 420 90, 900 430, 1490 180" />
              <path d="M-50 540 C 460 620, 980 360, 1490 600" />
              <path d="M300 -50 C 380 360, 240 640, 560 980" />
              <ellipse cx="720" cy="410" rx="680" ry="300" />
            </g>
          </svg>
          <span className="absolute top-28 right-8 md:right-14 w-3 h-3 rounded-full bg-dark/70" />

          <div className={`relative ${SECTION}`}>
            <div className="max-w-3xl">
              {/* left */}
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                  <span className="inline-block w-7 h-px bg-primary/60" />
                  {eyebrow}
                </span>
                <h1 className="mt-6 font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                  {title}
                  {title && " "}
                  <span className="italic text-ink-55">{titleAccent}</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-xl">
                  {intro}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink-50">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    Governed by the laws of India
                  </span>
                  {sections.length > 0 && (
                    <span className="flex items-center gap-2">
                      <ListOrdered className="w-4 h-4 text-primary" />
                      {sections.length} sections
                    </span>
                  )}
                </div>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#sections" className="btn-primary">
                    Read the document
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Got any questions?
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* giant clipped brand word */}
          <div className="pointer-events-none absolute -bottom-[3vw] left-0 right-0 overflow-hidden">
            <div className={SECTION}>
              <span className="block font-editorial font-semibold text-dark/[0.05] leading-none whitespace-nowrap text-[clamp(3.5rem,16vw,16rem)]">
                PDR COURT
              </span>
            </div>
          </div>
        </section>

        {/* ════════ DOCUMENT ════════ */}
        <section id="sections" className="py-16 lg:py-24 scroll-mt-20">
          <div className={SECTION}>
            <div className={showToc ? "lg:grid lg:grid-cols-[260px_1fr] lg:gap-14" : ""}>
              {/* ToC */}
              {showToc && (
                <aside className="hidden lg:block">
                  <div className="sticky top-28">
                    <div className="rounded-2xl border border-cream-300 bg-white p-6 max-h-[80vh] overflow-y-auto no-scrollbar">
                      <div className="flex items-center gap-2 mb-4 text-primary">
                        <ListOrdered className="w-4 h-4" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                          On this page
                        </span>
                      </div>
                      <ol className="space-y-2">
                        {sections.map((s, i) => (
                          <li key={i}>
                            <a
                              href={`#${slugify(s.title)}`}
                              className="flex gap-2.5 text-sm text-ink-55 hover:text-primary transition-colors leading-snug"
                            >
                              <span className="font-editorial italic text-primary/50 tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span>{s.title}</span>
                            </a>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </aside>
              )}

              {/* body */}
              <article className={showToc ? "max-w-[46rem]" : "max-w-3xl mx-auto"}>
                {preamble.length > 0 && (
                  <div className="rounded-2xl bg-white border border-cream-300 p-7 md:p-8 mb-10">
                    {preamble.map((b, i) => renderBlock(b, i))}
                  </div>
                )}
                <div className="space-y-10">
                  {sections.map((s, i) => (
                    <motion.section
                      key={i}
                      id={slugify(s.title)}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, ease }}
                      className="scroll-mt-28"
                    >
                      <div className="flex items-baseline gap-3.5 mb-3">
                        <span className="font-editorial italic text-lg text-primary/50 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-editorial font-medium text-2xl md:text-[1.9rem] text-dark leading-snug">
                          {s.title}
                        </h2>
                      </div>
                      <div className="pl-0 sm:pl-8 border-l-0 sm:border-l border-cream-300">
                        {s.blocks.map((b, bi) => renderBlock(b, bi))}
                      </div>
                    </motion.section>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ════════ SANCTUM (reusable) ════════ */}
        <div className="border-t border-cream-300">
          <SanctumSection variant="editorial" />
        </div>
      </main>
      <Footer />
    </>
  );
}
