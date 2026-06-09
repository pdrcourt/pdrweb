"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import PrevNextNav from "@/components/pages/PrevNextNav";
import GrowthStatsCard from "@/components/pages/GrowthStatsCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Newspaper,
  Briefcase,
  ChevronRight,
  Layers,
  Clock,
  ListOrdered,
} from "lucide-react";
import type {
  MigratedPage,
  MigratedCategory,
  ContentBlock,
  HeadingBlock,
} from "@/lib/migrated-content";

interface Props {
  page: MigratedPage;
  related: MigratedPage[];
  prev?: MigratedPage | null;
  next?: MigratedPage | null;
  indexHref: string;
  indexLabel: string;
}

const CATEGORY_META: Record<
  MigratedCategory,
  { eyebrow: string; icon: typeof Newspaper; context: string }
> = {
  articles: { eyebrow: "Article", icon: BookOpen, context: "Insights & Resources" },
  news: { eyebrow: "Newsroom", icon: Newspaper, context: "Newsroom & Updates" },
  "case-studies": { eyebrow: "Case Study", icon: Briefcase, context: "Resolved Cases" },
  core: { eyebrow: "PDR Court", icon: Layers, context: "PDR Court Platform" },
};

const ease = [0.16, 1, 0.3, 1] as const;

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60);
}

function readingTime(blocks: ContentBlock[]): number {
  let words = 0;
  for (const b of blocks) {
    if (b.type === "paragraph" || b.type === "quote") words += b.text.split(/\s+/).length;
    else if (b.type === "list") for (const i of b.items) words += i.text.split(/\s+/).length;
    else if (b.type === "heading") words += b.text.split(/\s+/).length;
  }
  return Math.max(1, Math.round(words / 200));
}

function Block({
  block,
  isFirstParagraph,
}: {
  block: ContentBlock;
  isFirstParagraph: boolean;
}) {
  if (block.type === "stats") {
    return (
      <div className="my-12 -mx-2 sm:-mx-4">
        <GrowthStatsCard />
      </div>
    );
  }

  if (block.type === "heading") {
    const id = slugify(block.text);
    if (block.level <= 2) {
      return (
        <motion.h2
          id={id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease }}
          className="scroll-mt-28 mt-14 mb-5 text-2xl md:text-[2rem] font-display font-bold text-dark leading-tight"
        >
          <span className="block w-10 h-1 rounded-full bg-gold-gradient mb-4" />
          {block.text}
        </motion.h2>
      );
    }
    if (block.level === 3) {
      return (
        <motion.h3
          id={id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease }}
          className="scroll-mt-28 mt-10 mb-3 text-xl md:text-2xl font-display font-bold text-dark leading-snug"
        >
          {block.text}
        </motion.h3>
      );
    }
    return (
      <h4
        id={id}
        className="scroll-mt-28 mt-8 mb-2 text-lg font-display font-semibold text-ink-90"
      >
        {block.text}
      </h4>
    );
  }

  if (block.type === "paragraph") {
    return (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease }}
        className={`my-5 text-[1.06rem] leading-[1.85] text-ink-80 prose-anchor ${
          isFirstParagraph
            ? "first-letter:float-left first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:text-[3.6rem] first-letter:leading-[0.8] first-letter:mr-3 first-letter:mt-1"
            : ""
        }`}
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    );
  }

  if (block.type === "list") {
    if (block.ordered) {
      return (
        <motion.ol
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease }}
          className="my-6 space-y-3"
        >
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span
                className="flex-1 text-[1.04rem] leading-[1.8] text-ink-80 prose-anchor"
                dangerouslySetInnerHTML={{ __html: it.html }}
              />
            </li>
          ))}
        </motion.ol>
      );
    }
    return (
      <motion.ul
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease }}
        className="my-6 space-y-3"
      >
        {block.items.map((it, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-gradient mt-3" />
            <span
              className="flex-1 text-[1.04rem] leading-[1.8] text-ink-80 prose-anchor"
              dangerouslySetInnerHTML={{ __html: it.html }}
            />
          </li>
        ))}
      </motion.ul>
    );
  }

  // quote
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease }}
      className="relative my-9 rounded-2xl rounded-tl-none bg-gradient-to-br from-cream-100 to-cream-200 border border-cream-300 p-7 md:p-9"
    >
      <span className="absolute -top-7 left-5 font-brand text-7xl text-primary/25 select-none leading-none">
        &ldquo;
      </span>
      <div
        className="text-lg md:text-xl text-ink-80 italic leading-relaxed prose-anchor"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    </motion.blockquote>
  );
}

export default function MigratedDetailTemplate({
  page,
  related,
  prev = null,
  next = null,
  indexHref,
  indexLabel,
}: Props) {
  const meta = CATEGORY_META[page.category];
  const Icon = meta.icon;
  const heroImage = page.heroImage || "/images/hero-illustration.png";

  const headings = useMemo(
    () =>
      page.blocks.filter(
        (b): b is HeadingBlock => b.type === "heading" && b.level <= 3,
      ),
    [page.blocks],
  );
  const showToc = headings.length >= 4;
  const minutes = useMemo(() => readingTime(page.blocks), [page.blocks]);
  // drop-cap only a substantial opening paragraph (skip short labels)
  const firstParaIdx = page.blocks.findIndex(
    (b) => b.type === "paragraph" && b.text.length >= 120,
  );

  // Structured data — Article / NewsArticle for rich search results.
  const SITE_URL = "https://www.pdrcourt.in";
  const pageUrl = `${SITE_URL}${indexHref}/${page.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": page.category === "news" ? "NewsArticle" : "Article",
    headline: page.title,
    description: page.description || page.excerpt,
    image: heroImage.startsWith("http")
      ? heroImage
      : `${SITE_URL}${heroImage}`,
    url: pageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: "PDR Court", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "PDR Court",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/PDR_LOGO_WITH_BG_-_Color_Dark-removebg-preview.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main className="bg-cream">
        {/* CONTEXT BAR */}
        <div className="pt-16 md:pt-20">
          <div className="border-b border-cream-300 bg-cream/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 overflow-hidden">
              <span className="eyebrow flex-shrink-0">{meta.context}</span>
              <nav
                className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-widest text-ink-40"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                {indexHref !== "/" && (
                  <>
                    <ChevronRight className="w-3 h-3" />
                    <Link href={indexHref} className="hover:text-primary transition-colors">
                      {indexLabel}
                    </Link>
                  </>
                )}
                <ChevronRight className="w-3 h-3" />
                <span className="text-primary truncate max-w-[200px]">{page.title}</span>
              </nav>
            </div>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute -top-4 right-0 watermark">{meta.eyebrow}</div>
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-14 pb-10 lg:pt-20 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="eyebrow mb-6">
                <Icon className="w-3.5 h-3.5" />
                {meta.eyebrow}
              </div>
              <h1 className="font-editorial font-medium text-[clamp(2.4rem,6vw,3.6rem)] text-dark leading-[1.05] tracking-tight max-w-4xl text-balance">
                {page.title}
              </h1>
              {page.excerpt && (
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-2xl">
                  {page.excerpt}
                </p>
              )}
              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink-45">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {minutes} min read
                </span>
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  {page.blocks.length} sections
                </span>
              </div>
            </motion.div>
          </div>

          {/* cover */}
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="oval-soft aspect-[16/6.5] border border-cream-300 shadow-gold-lg bg-cream-200"
            >
              <img
                src={heroImage}
                alt={page.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/images/hero-illustration.png";
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* BODY + TOC */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={showToc ? "lg:grid lg:grid-cols-[1fr_240px] lg:gap-16" : ""}>
              {/* article */}
              <article className="max-w-[44rem] mx-auto lg:mx-0 w-full">
                {page.blocks.length === 0 && (
                  <p className="text-lg text-ink-70">{page.description}</p>
                )}
                {page.blocks.map((block, idx) => (
                  <Block
                    key={idx}
                    block={block}
                    isFirstParagraph={idx === firstParaIdx}
                  />
                ))}

                {/* bottom nav */}
                <div className="mt-16 pt-9 border-t border-cream-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <Link
                    href={indexHref}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to {indexLabel}
                  </Link>
                  <Link href="/contact" className="btn-primary btn-sm">
                    Talk to PDR Court
                  </Link>
                </div>
              </article>

              {/* ToC rail */}
              {showToc && (
                <aside className="hidden lg:block">
                  <div className="sticky top-28 space-y-6">
                    <div className="rounded-2xl border border-cream-300 bg-white p-6">
                      <div className="flex items-center gap-2 mb-4 text-primary">
                        <ListOrdered className="w-4 h-4" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                          On this page
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {headings.slice(0, 14).map((h, i) => (
                          <li key={i}>
                            <a
                              href={`#${slugify(h.text)}`}
                              className={`block text-sm leading-snug text-ink-55 hover:text-primary transition-colors ${
                                h.level === 3 ? "pl-3" : ""
                              }`}
                            >
                              {h.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-dark text-white p-6">
                      <h4 className="font-display font-bold mb-2">Have a dispute?</h4>
                      <p className="text-sm text-paper-55 leading-relaxed mb-4">
                        Resolve it online in 60 days — first consultation is free.
                      </p>
                      <Link
                        href="/lodge-dispute"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Lodge a dispute <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>

        {/* GROWTH STATS CARD — fallback at page end when content has no inline marker */}
        {!page.blocks.some((b) => b.type === "stats") && (
          <div className="border-t border-cream-300">
            <GrowthStatsCard />
          </div>
        )}

        {/* PREVIOUS / NEXT */}
        {(prev || next) && (
          <div className="border-t border-cream-300">
            <PrevNextNav
              prev={prev}
              next={next}
              basePath={indexHref === "/" ? "" : indexHref}
            />
          </div>
        )}

        {/* RELATED */}
        {related.length > 0 && (
          <section className="relative py-20 lg:py-24 bg-white border-t border-cream-300 overflow-hidden">
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between mb-11">
                <div>
                  <span className="eyebrow">Keep Exploring</span>
                  <h2 className="heading-md mt-3">
                    Related <span className="accent-serif">{indexLabel}</span>
                  </h2>
                </div>
                <Link
                  href={indexHref}
                  className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-7">
                {related.map((r, i) => (
                  <motion.div
                    key={r.slug}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                  >
                    <Link
                      href={`${indexHref}/${r.slug}`}
                      className="surface-card group flex flex-col h-full overflow-hidden"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-cream-100">
                        <img
                          src={r.heroImage || "/images/hero-illustration.png"}
                          alt={r.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              "/images/hero-illustration.png";
                          }}
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-base font-display font-bold text-dark leading-snug mb-2.5 group-hover:text-primary transition-colors line-clamp-2">
                          {r.title}
                        </h3>
                        <p className="text-sm text-ink-55 leading-relaxed line-clamp-3 flex-1">
                          {r.excerpt}
                        </p>
                        <div className="mt-4 pt-4 border-t border-cream-300 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                          Read full
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
