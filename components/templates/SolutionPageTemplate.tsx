"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { SectionBadge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { itemVariants, containerVariants } from "@/components/ui/SectionWrapper";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { SolutionBenefit, FAQ } from "@/data/content";

interface ProcessStep {
  step: number;
  iconName: string;
  title: string;
  description: string;
}

interface UseCase {
  iconName: string;
  title: string;
  description: string;
}

interface SolutionPageProps {
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    subheading: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: string;
    stats: { value: string; label: string }[];
  };
  whatIs: {
    headline: string;
    body: string;
    points: string[];
  };
  benefits: SolutionBenefit[];
  process: ProcessStep[];
  useCases: UseCase[];
  faqs: FAQ[];
  showcaseImage?: string;
}

export function SolutionPageTemplate({
  hero,
  whatIs,
  benefits,
  process,
  useCases,
  faqs,
  showcaseImage,
}: SolutionPageProps) {
  return (
    <main className="bg-cream dark:bg-dark">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-hero-gradient dark:bg-dark">
        {/* Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/8 rounded-full blur-2xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(189,107,32,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(189,107,32,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {hero.badge}
              </motion.div>

              <motion.h1
                className="font-display font-bold text-5xl md:text-6xl text-dark dark:text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {hero.headline}
                <br />
                <span className="bg-gold-gradient bg-clip-text text-transparent">
                  {hero.headlineAccent}
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-dark/60 dark:text-white/60 leading-relaxed max-w-xl mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {hero.subheading}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button href={hero.primaryCta.href} size="lg" variant="primary">
                  {hero.primaryCta.label} <ArrowRight size={18} />
                </Button>
                <Button href={hero.secondaryCta.href} size="lg" variant="outline">
                  {hero.secondaryCta.label}
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
              >
                {hero.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/80 dark:bg-dark-800/80 border border-cream-300 dark:border-white/10 shadow-glass backdrop-blur-sm"
                  >
                    <div className="font-display font-bold text-xl text-primary mb-0.5">{stat.value}</div>
                    <div className="text-xs text-dark/50 dark:text-white/50">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="rounded-3xl overflow-hidden shadow-gold-lg border border-cream-200"
              >
                <Image src={hero.image} alt={hero.badge} width={640} height={420} className="w-full h-auto object-cover" priority />
              </motion.div>
              <div className="absolute inset-0 -z-10 bg-primary/10 rounded-3xl blur-3xl scale-110 pointer-events-none" />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream dark:from-dark to-transparent pointer-events-none" />
      </section>

      {/* ── WHAT IS ──────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="heading-lg mb-6">{whatIs.headline}</h2>
              <p className="text-dark/60 dark:text-white/60 leading-relaxed text-lg mb-8">{whatIs.body}</p>
              <ul className="space-y-3">
                {whatIs.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-dark/70 dark:text-white/70 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((b) => (
                  <div key={b.title} className="p-5 rounded-2xl bg-cream dark:bg-dark-700 border border-cream-300 dark:border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <LucideIcon name={b.iconName} size={20} className="text-primary" strokeWidth={1.75} />
                    </div>
                    <h4 className="font-semibold text-sm text-dark dark:text-white mb-1">{b.title}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────── */}
      <section id="benefits" className="py-20 bg-cream dark:bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <SectionBadge>Key Benefits</SectionBadge>
              <h2 className="heading-lg mb-4">Why Choose This Pathway?</h2>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="group p-6 rounded-2xl bg-white dark:bg-dark-800 border border-cream-300 dark:border-white/10 shadow-glass hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
                variants={itemVariants}
                custom={i}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <LucideIcon name={benefit.iconName} size={22} className="text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-semibold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-dark/55 dark:text-white/55 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section id="process" className="py-20 bg-white dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <SectionBadge>The Process</SectionBadge>
              <h2 className="heading-lg mb-4">Step-by-Step Walkthrough</h2>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {process.map((step, i) => (
              <motion.div key={step.step} className="flex flex-col items-center text-center" variants={itemVariants} custom={i}>
                <div className="relative w-14 h-14 rounded-full bg-cream dark:bg-dark-700 border-2 border-primary shadow-gold flex items-center justify-center mb-4">
                  <LucideIcon name={step.iconName} size={22} className="text-primary" strokeWidth={1.75} />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold-gradient text-white text-[10px] font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-dark dark:text-white mb-1">{step.title}</h4>
                <p className="text-xs text-dark/50 dark:text-white/50 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────── */}
      <section className="py-20 bg-cream dark:bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <SectionBadge>Use Cases</SectionBadge>
              <h2 className="heading-lg mb-4">Ideal For These Dispute Types</h2>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-cream-300 dark:border-white/10 shadow-glass text-center hover:shadow-gold hover:-translate-y-1 transition-all duration-300 group"
                variants={itemVariants}
                custom={i}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <LucideIcon name={uc.iconName} size={26} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors">{uc.title}</h3>
                <p className="text-sm text-dark/50 dark:text-white/50">{uc.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SHOWCASE ───────────────────────────────────────── */}
      {showcaseImage && (
        <section className="py-20 bg-white dark:bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-14"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <SectionBadge>Platform in Action</SectionBadge>
                <h2 className="heading-lg mb-4">Digitally Advanced ADR Interface</h2>
                <p className="body-lg max-w-2xl mx-auto">
                  Experience a streamlined, legally-compliant interface designed for speed and security.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="rounded-3xl overflow-hidden border border-cream-200 dark:border-white/5 shadow-gold max-w-5xl mx-auto bg-white dark:bg-dark-900"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img 
                src={showcaseImage} 
                alt="PDR Court Platform Showcase" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* ── FAQs ─────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <SectionBadge>FAQs</SectionBadge>
              <h2 className="heading-lg mb-4">Common Questions</h2>
            </motion.div>
          </motion.div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-gold-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              File your first case today and experience the future of dispute resolution — fast, secure, and legally binding.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
              >
                Start Your Case <ArrowRight size={18} />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/50 text-white font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Learn About PDR Court
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default SolutionPageTemplate;
