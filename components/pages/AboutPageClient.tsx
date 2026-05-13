"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "@/data/content";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { SectionBadge } from "@/components/ui/Badge";
import { containerVariants, itemVariants } from "@/components/ui/SectionWrapper";
import { ArrowRight } from "lucide-react";

function StatCard({ value, label, iconName }: { value: string; label: string; iconName: string }) {
  return (
    <motion.div
      className="group flex flex-col items-center p-6 rounded-2xl bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
    >
      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3">
        <LucideIcon name={iconName} size={22} className="text-white" strokeWidth={1.75} />
      </div>
      <div className="font-display font-bold text-3xl text-white mb-1">{value}</div>
      <div className="text-sm text-white/60 text-center">{label}</div>
    </motion.div>
  );
}



export function AboutPageClient() {
  return (
    <main className="bg-cream dark:bg-dark">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-hero-gradient dark:bg-dark">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-primary/8 rounded-full blur-2xl" />
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
            <div>
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold rounded-full px-4 py-1.5 mb-6"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {aboutContent.hero.badge}
              </motion.div>

              <motion.h1
                className="font-display font-bold text-5xl md:text-6xl text-dark dark:text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
              >
                {aboutContent.hero.headline}
                <br />
                <span className="bg-gold-gradient bg-clip-text text-transparent">{aboutContent.hero.headlineAccent}</span>
              </motion.h1>

              <motion.p
                className="text-lg text-dark/60 dark:text-white/60 leading-relaxed max-w-xl mb-10"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
              >
                {aboutContent.hero.subheading}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }}
              >
                <a href="/#contact" className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-base">
                  Work With Us <ArrowRight size={18} />
                </a>
                <a href="#mission" className="inline-flex items-center gap-2 btn-outline px-8 py-4 text-base">
                  Our Mission
                </a>
              </motion.div>
            </div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="rounded-3xl overflow-hidden shadow-gold-lg border border-cream-200"
              >
                <Image src={aboutContent.hero.image} alt="PDR Court Team" width={640} height={420} className="w-full h-auto object-cover" priority />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream dark:from-dark to-transparent pointer-events-none" />
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="relative py-16 overflow-hidden bg-gold-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/images/about-stats-bg.png" alt="" fill className="object-cover opacity-10 mix-blend-screen" aria-hidden />
        </div>
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutContent.stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </section>

      {/* ── MISSION ──────────────────────────────────────── */}
      <section id="mission" className="py-24 bg-white dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-gold-lg border border-cream-200 dark:border-white/10">
                <Image src={aboutContent.mission.image} alt="Our Mission" width={600} height={450} className="w-full h-auto object-cover" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <SectionBadge>{aboutContent.mission.badge}</SectionBadge>
              <h2 className="heading-lg mb-6">{aboutContent.mission.headline}</h2>
              <p className="text-dark/60 dark:text-white/60 leading-relaxed text-lg mb-10">{aboutContent.mission.body}</p>

              <div className="grid grid-cols-2 gap-4">
                {aboutContent.mission.values.map((value) => (
                  <div key={value.title} className="p-4 rounded-2xl bg-cream dark:bg-dark-700 border border-cream-300 dark:border-white/10 hover:border-primary/30 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-3 transition-colors">
                      <LucideIcon name={value.iconName} size={20} className="text-primary" strokeWidth={1.75} />
                    </div>
                    <h4 className="font-semibold text-sm text-dark dark:text-white mb-1 group-hover:text-primary transition-colors">{value.title}</h4>
                    <p className="text-xs text-dark/50 dark:text-white/50 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE REMOVED */}

      {/* TEAM REMOVED */}

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-gold-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Join the Justice Revolution
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Thousands of enterprises trust PDR Court to resolve disputes faster, cheaper, and smarter.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Start Your Case <ArrowRight size={18} />
              </a>
              <a
                href="/#services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/50 text-white font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
