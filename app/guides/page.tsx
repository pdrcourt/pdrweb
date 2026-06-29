import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Guides & Resources | Dispute Resolution & Debt Recovery | PDR Court",
  description:
    "Practical, plain-English guides to resolving disputes and recovering money in India — cheque bounce, MSME delayed payments, arbitration, and more, from PDR Court.",
  path: "/guides",
});

const GUIDES = [
  {
    slug: "cheque-bounce-recovery",
    category: "Debt Recovery",
    title: "Cheque Bounce in India: How to Recover Your Money Faster",
    dek: "The Section 138 process, the deadlines that decide your case, and how online dispute resolution gets you paid faster than a courtroom.",
    readingTime: "9 min read",
  },
  {
    slug: "recover-msme-delayed-payments",
    category: "MSME",
    title: "Recovering Delayed Payments as an MSME: Your Rights and a Faster Route",
    dek: "The MSMED Act 45-day rule, the interest you're owed, the MSME Samadhaan route, and a faster online alternative.",
    readingTime: "8 min read",
  },
  {
    slug: "arbitration-clause-for-contracts",
    category: "Arbitration",
    title: "The Arbitration Clause: Why Every Contract Needs One",
    dek: "What an arbitration clause is, a sample you can adapt, the key elements, and the mistakes that make clauses fail.",
    readingTime: "7 min read",
  },
  {
    slug: "arbitration-vs-mediation-vs-conciliation",
    category: "ADR Basics",
    title: "Arbitration vs Mediation vs Conciliation: Which One Do You Need?",
    dek: "All three keep you out of court but work very differently — how each works, which is binding, and when to choose which.",
    readingTime: "7 min read",
  },
];

export default function GuidesIndexPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* HERO */}
        <section className="relative overflow-hidden bg-cream pt-28 md:pt-36 pb-14 md:pb-20">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[130px]" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              <span className="inline-block w-7 h-px bg-primary/50" />
              Guides &amp; Resources
            </span>
            <h1 className="mt-5 font-editorial font-medium text-dark text-[clamp(2.4rem,6vw,4rem)] leading-[1.03] tracking-tight">
              Resolve disputes &amp; recover money — explained simply
            </h1>
            <p className="mt-5 text-lg md:text-xl text-ink-60 leading-relaxed max-w-2xl">
              Plain-English guides to the law and the faster, online way to settle
              it — written by the PDR Court team for individuals and businesses
              across India.
            </p>
          </div>
        </section>

        {/* GUIDE GRID */}
        <section className="pb-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {GUIDES.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="group flex flex-col rounded-[1.75rem] border border-cream-300 bg-white p-7 lg:p-9 hover:border-primary/40 hover:shadow-gold transition-all"
                >
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-5">
                    <span className="inline-block w-6 h-px bg-primary/50" />
                    {g.category}
                  </span>
                  <h2 className="font-display font-bold text-dark text-xl lg:text-2xl leading-snug group-hover:text-primary transition-colors">
                    {g.title}
                  </h2>
                  <p className="mt-3 text-ink-60 leading-relaxed flex-1">{g.dek}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-ink-50">
                      <Clock className="w-3.5 h-3.5 text-primary" /> {g.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-dark group-hover:text-primary uppercase tracking-widest transition-colors">
                      Read guide
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
