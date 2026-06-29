import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/seo";
import {
  ChevronRight,
  Clock,
  CalendarDays,
  ShieldCheck,
  ArrowRight,
  Info,
} from "lucide-react";

export interface GuideLink {
  label: string;
  href: string;
  description?: string;
}
export interface GuideFaq {
  q: string;
  a: string;
}
export interface GuideArticleProps {
  title: string;
  dek: string;
  /** slug only, e.g. "cheque-bounce-recovery" */
  slug: string;
  /** eyebrow / topic label, e.g. "Debt Recovery" */
  category: string;
  datePublished: string; // ISO "2026-06-26"
  dateModified?: string;
  readingTime: string; // "9 min read"
  author?: { name: string; role: string };
  faqs?: GuideFaq[];
  related?: GuideLink[];
  children: React.ReactNode;
}

const DEFAULT_AUTHOR = {
  name: "PDR Court Legal Desk",
  role: "Reviewed by our panel of arbitrators & conciliators",
};

function humanDate(iso: string): string {
  // iso = YYYY-MM-DD — formatted without Date() (unavailable in this runtime)
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const [y, m, d] = iso.split("-").map((n) => parseInt(n, 10));
  if (!y || !m || !d) return iso;
  return `${months[m - 1]} ${d}, ${y}`;
}

export default function GuideArticle({
  title,
  dek,
  slug,
  category,
  datePublished,
  dateModified,
  readingTime,
  author = DEFAULT_AUTHOR,
  faqs = [],
  related = [],
  children,
}: GuideArticleProps) {
  const url = `${SITE_URL}/guides/${slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: dek,
    image: `${SITE_URL}/images/hero-illustration.png`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified: dateModified || datePublished,
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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  const faqLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c"),
        }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
          }}
        />
      )}

      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-cream pt-28 md:pt-32 pb-12 md:pb-16">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[130px]" />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* breadcrumb */}
            <nav
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-ink-40 mb-7"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/guides" className="hover:text-primary transition-colors">Guides</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-ink-60 normal-case tracking-normal truncate">{category}</span>
            </nav>

            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              <span className="inline-block w-7 h-px bg-primary/50" />
              {category}
            </span>
            <h1 className="mt-5 font-editorial font-medium text-dark text-[clamp(2.2rem,5.4vw,3.6rem)] leading-[1.05] tracking-tight">
              {title}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-ink-60 leading-relaxed">{dek}</p>

            {/* byline / meta */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-55 border-t border-cream-300 pt-5">
              <span className="font-semibold text-dark">{author.name}</span>
              <span className="hidden sm:inline text-ink-40">·</span>
              <span className="text-ink-55">{author.role}</span>
              <span className="hidden sm:inline text-ink-40">·</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-primary" /> {humanDate(datePublished)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" /> {readingTime}
              </span>
            </div>
          </div>
        </section>

        {/* ════════ BODY ════════ */}
        <section className="pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <article
              className="
                [&_p]:my-5 [&_p]:text-[1.05rem] [&_p]:leading-[1.8] [&_p]:text-ink-80
                [&_h2]:scroll-mt-28 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:md:text-[1.9rem] [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-dark [&_h2]:leading-tight
                [&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-dark
                [&_ul]:my-5 [&_ul]:space-y-2.5 [&_ul]:list-disc [&_ul]:pl-5
                [&_ol]:my-5 [&_ol]:space-y-2.5 [&_ol]:list-decimal [&_ol]:pl-5
                [&_li]:text-[1.03rem] [&_li]:leading-[1.75] [&_li]:text-ink-80 [&_li]:pl-1 [&_li]:marker:text-primary
                [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary-600
                [&_strong]:text-dark [&_strong]:font-semibold
              "
            >
              {children}
            </article>

            {/* disclaimer */}
            <div className="mt-10 flex items-start gap-3.5 rounded-2xl border border-cream-300 bg-cream-100 p-5">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-ink-60 leading-relaxed">
                <strong className="text-dark">General information, not legal advice.</strong>{" "}
                This guide explains the law in plain terms to help you understand your options.
                It is not a substitute for advice from a qualified advocate on your specific
                situation. PDR Court is a technology-driven ADR platform, not a law firm.
              </p>
            </div>
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        {faqs.length > 0 && (
          <section className="py-16 bg-white border-y border-cream-300">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                <span className="inline-block w-7 h-px bg-primary/50" />
                FAQs
              </span>
              <h2 className="mt-4 mb-8 font-editorial font-medium text-dark text-[clamp(1.8rem,4vw,2.6rem)] leading-tight">
                Frequently asked questions
              </h2>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-cream-300 bg-cream overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-display font-semibold text-dark">
                      {f.q}
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="px-6 pb-5 text-[0.98rem] text-ink-65 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════ RELATED / CTA ════════ */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {related.length > 0 && (
              <>
                <h2 className="font-editorial font-medium text-dark text-[clamp(1.6rem,3.4vw,2.2rem)] leading-tight mb-6">
                  Where to go next
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {related.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="group rounded-2xl border border-cream-300 bg-white p-6 hover:border-primary/40 hover:shadow-gold transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-dark group-hover:text-primary transition-colors">
                          {r.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                      {r.description && (
                        <p className="mt-2 text-sm text-ink-60 leading-relaxed">{r.description}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </>
            )}

            <div className="relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 md:p-12 text-center">
              <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[120px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300">
                  <ShieldCheck className="w-4 h-4" /> Resolve it the faster way
                </span>
                <h2 className="mt-4 text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                  Get paid without the years-long wait
                </h2>
                <p className="text-paper-60 mt-4 max-w-xl mx-auto leading-relaxed">
                  PDR Court resolves payment and recovery disputes online through conciliation
                  and arbitration — enforceable outcomes on a fixed timeline.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/lodge-dispute" className="btn-primary">Lodge a dispute</Link>
                  <Link
                    href="/talk-to-us"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold transition-all px-7 py-3.5"
                  >
                    Talk to an expert <ArrowRight className="w-4 h-4" />
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
