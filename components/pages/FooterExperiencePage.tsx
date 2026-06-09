"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BadgeDollarSign,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  FileCheck,
  FileText,
  FolderOpen,
  Globe,
  Handshake,
  Heart,
  Landmark,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  RefreshCw,
  Scale,
  Share2,
  Shield,
  ShieldCheck,
  Star,
  TrendingUp,
  UserPlus,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { FooterExperiencePage as PageData } from "@/lib/footer-content";

const iconMap: Record<string, LucideIcon> = {
  ArrowRight,
  Award,
  BadgeDollarSign,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  FileCheck,
  FileText,
  FolderOpen,
  Globe,
  Handshake,
  Heart,
  Landmark,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  RefreshCw,
  Scale,
  Share2,
  Shield,
  ShieldCheck,
  Star,
  TrendingUp,
  UserPlus,
  Users,
  Video,
  Zap,
};

const sectionNames = {
  services: "Service Architecture",
  join: "People Network",
  legal: "Governance Layer",
  about: "Institutional Profile",
  information: "Knowledge Base",
  media: "Media Desk",
};

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const Component = iconMap[name] ?? Scale;
  return <Component className={className} strokeWidth={1.8} />;
}

function getParagraphs(page: PageData) {
  const fallback = page.description ? [page.description] : [];
  return page.paragraphs.length ? page.paragraphs : fallback;
}

function getHighlights(page: PageData) {
  const items = page.highlights.length ? page.highlights : page.siblingLinks.map((link) => link.title);
  return items.slice(0, 8);
}

export function FooterExperiencePage({ page }: { page: PageData }) {
  const paragraphs = getParagraphs(page);
  const highlights = getHighlights(page);
  const featureLinks = page.siblingLinks.filter((link) => link.route !== page.route);
  const isEven = page.variant % 2 === 0;

  return (
    <main className="overflow-hidden bg-cream text-dark">
      <section className="relative min-h-[92vh] pt-24">
        <div className={`absolute inset-0 bg-gradient-to-br ${page.accent}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.18),transparent_24%),linear-gradient(120deg,rgba(18,16,14,0.10),rgba(18,16,14,0.62))]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.28) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <a
              href={page.parentRoute ?? "/"}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition hover:bg-white/25"
            >
              <Icon name={page.icon} className="h-4 w-4" />
              {page.eyebrow}
            </a>

            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-paper-82 sm:text-xl">
              {page.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#content" className="btn-primary bg-white text-primary shadow-xl hover:bg-white">
                Explore page <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:legal@pdrcourt.com" className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
                <Mail className="h-4 w-4" />
                legal@pdrcourt.com
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[440px]"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl" />
            <div className="absolute bottom-8 left-0 z-10 max-w-xs rounded-2xl border border-white/20 bg-white/15 p-5 text-white shadow-2xl backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper-60">{sectionNames[page.kind]}</p>
              <p className="mt-3 text-2xl font-bold">{highlights[0] ?? "Structured digital resolution"}</p>
            </div>
            <div className="relative ml-auto mt-8 h-[430px] overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 shadow-2xl backdrop-blur">
              <Image src={page.image} alt="" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover opacity-90 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />
              <div className="absolute bottom-6 right-6 grid grid-cols-2 gap-3">
                {["Secure", "Digital", "Neutral", "Fast"].map((label) => (
                  <span key={label} className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="content" className="relative bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div className={isEven ? "lg:order-2" : ""}>
            <p className="section-label">Overview</p>
            <h2 className="heading-lg mb-6">Built into a clear, guided digital experience.</h2>
            <div className="space-y-5 text-base leading-8 text-ink-65">
              {paragraphs.slice(0, 4).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={`grid gap-4 sm:grid-cols-2 ${isEven ? "lg:order-1" : ""}`}>
            {highlights.slice(0, 6).map((item, index) => (
              <motion.div
                key={`${item}-${index}`}
                className={`group rounded-2xl border p-6 shadow-glass transition hover:-translate-y-1 hover:shadow-gold ${
                  index === 0 || index === 3
                    ? "border-primary/20 bg-primary/10"
                    : "border-cream-300 bg-cream"
                }`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <Icon name={index % 2 ? "ShieldCheck" : page.icon} />
                </div>
                <h3 className="text-lg font-bold leading-snug text-dark">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-cream py-20 lg:py-28">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-cream-300 bg-white p-6 shadow-glass">
              <div className="grid gap-5 md:grid-cols-3">
                {paragraphs.slice(4, 7).concat(highlights.slice(6, 9)).slice(0, 3).map((item, index) => (
                  <div key={`${item}-${index}`} className="rounded-2xl bg-cream p-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">0{index + 1}</span>
                    <p className="mt-4 text-sm leading-6 text-ink-70">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl bg-dark p-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">PDR COURT Standard</p>
                <p className="mt-4 text-2xl font-bold leading-tight">
                  Every journey is structured for clarity, evidence, collaboration, and enforceable outcomes.
                </p>
              </div>
            </div>

            <div>
              <p className="section-label">Experience Design</p>
              <h2 className="heading-lg mb-6">A premium route through the content, not a document dump.</h2>
              <p className="text-lg leading-8 text-ink-60">
                The source material has been reorganized into decision-ready sections, visual cards, process moments, and navigable routes while preserving its core legal and business meaning.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Responsive", "Accessible", "Trust-led", "Actionable"].map((label) => (
                  <div key={label} className="rounded-2xl border border-primary/15 bg-white p-5 text-center shadow-glass">
                    <CheckCircle className="mx-auto mb-3 h-5 w-5 text-primary" />
                    <p className="font-semibold">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {featureLinks.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="section-label">Related Routes</p>
                <h2 className="heading-lg">Continue exploring {page.kind === "legal" ? "governance" : page.title}</h2>
              </div>
              {page.parentRoute && (
                <a href={page.parentRoute} className="btn-outline">
                  Back to parent
                </a>
              )}
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featureLinks.slice(0, 6).map((link, index) => (
                <a
                  key={link.route}
                  href={link.route}
                  className="group rounded-2xl border border-cream-300 bg-cream p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-gold"
                >
                  <span className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white">
                    <Icon name={index % 2 ? "ArrowRight" : page.icon} />
                  </span>
                  <h3 className="text-xl font-bold text-dark group-hover:text-primary">{link.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-55">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`relative bg-gradient-to-br ${page.accent} px-4 py-20 text-white sm:px-6 lg:px-8`}>
        <div className="absolute inset-0 bg-dark/25" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-paper-65">Ready for the next step?</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
            Move from uncertainty to structured resolution with PDR COURT.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="rounded-xl bg-white px-8 py-4 font-bold text-primary shadow-xl transition hover:-translate-y-0.5">
              Start a case
            </a>
            <a href="mailto:legal@pdrcourt.com" className="rounded-xl border border-white/35 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              Contact legal team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FooterExperiencePage;
