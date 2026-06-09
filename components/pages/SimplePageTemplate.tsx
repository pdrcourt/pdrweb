"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "@/components/ui/LucideIcon";
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";

interface FeatureBlock {
  title: string;
  description: string;
  iconName?: string;
}

export interface SimplePageProps {
  eyebrow: string;
  heading: string;
  intro: string;
  iconName?: string;
  highlights?: FeatureBlock[];
  sections?: { heading: string; paragraphs: string[] }[];
  ctaLabel?: string;
  ctaHref?: string;
  contactFormSlot?: React.ReactNode;
}

export default function SimplePageTemplate(props: SimplePageProps) {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 bg-cream text-dark overflow-hidden">
          <div className="pointer-events-none absolute -top-24 right-0 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[130px]" />
          <EditorialHeroDecor />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                {props.iconName && <LucideIcon name={props.iconName} className="w-4 h-4" />}
                <span>{props.eyebrow}</span>
              </div>
              <h1 className="font-editorial font-medium text-[clamp(2.6rem,7vw,5.5rem)] text-ink-85 mb-6 leading-[1.0] tracking-tight">
                {props.heading}
              </h1>
              <p className="text-lg md:text-xl text-ink-60 leading-relaxed max-w-3xl mx-auto">
                {props.intro}
              </p>
              {props.ctaLabel && props.ctaHref && (
                <div className="mt-10">
                  <Link href={props.ctaHref} className="btn-primary">
                    {props.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        {props.highlights && props.highlights.length > 0 && (
          <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {props.highlights.map((h, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.05 }}
                    className="p-7 rounded-3xl bg-white border border-cream-300 hover:border-primary/40 hover:shadow-gold transition-all"
                  >
                    {h.iconName && (
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                        <LucideIcon name={h.iconName} className="w-6 h-6" />
                      </div>
                    )}
                    <h3 className="text-xl font-display font-bold text-dark mb-3">
                      {h.title}
                    </h3>
                    <p className="text-ink-70 leading-relaxed">{h.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sections */}
        {props.sections && props.sections.length > 0 && (
          <section className="py-16 lg:py-24 bg-white border-t border-cream-300">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
              {props.sections.map((s, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-5">
                    {s.heading}
                  </h2>
                  <div className="space-y-4">
                    {s.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className="text-base md:text-lg text-ink-80 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact form slot */}
        {props.contactFormSlot && (
          <section className="py-20 lg:py-28 bg-cream-100 border-t border-cream-300">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              {props.contactFormSlot}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
