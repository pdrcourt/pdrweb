"use client";

import { motion } from "framer-motion";
import { faqContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { MessageSquare, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export function FaqPageClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqContent.items.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-cream dark:bg-dark pt-24 min-h-screen">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-hero-gradient dark:bg-dark border-b border-cream-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionBadge>{faqContent.badge}</SectionBadge>
            <h1 className="heading-xl mb-6">Everything You Need to Know</h1>
            <p className="body-lg max-w-2xl mx-auto mb-10">
              Find answers to common questions about Online Dispute Resolution, legal enforceability, and platform security.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-dark/40 dark:text-white/40">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-dark-800 border border-cream-300 dark:border-white/10 shadow-glass focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ LIST ────────────────────────────────────── */}
      <SectionWrapper background="transparent">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left: FAQ Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-3xl bg-white dark:bg-dark-800 border border-cream-300 dark:border-white/10 shadow-glass p-8 sticky top-32">
              <div className="mb-6 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-display font-bold text-xl text-dark dark:text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-dark/60 dark:text-white/60 mb-6 leading-relaxed">
                Our legal experts are available 24/7 to guide you through any step of the ODR process.
              </p>
              <div className="space-y-4">
                <a
                  href="/#contact"
                  className="flex items-center justify-between p-4 rounded-xl bg-cream dark:bg-dark-700 border border-cream-200 dark:border-white/10 group hover:border-primary/30 transition-all"
                >
                  <span className="font-semibold text-dark dark:text-white group-hover:text-primary transition-colors">Contact Support</span>
                  <ArrowRight size={16} className="text-primary" />
                </a>
                <a
                  href="mailto:legal@pdrcourt.com"
                  className="flex items-center justify-between p-4 rounded-xl bg-cream dark:bg-dark-700 border border-cream-200 dark:border-white/10 group hover:border-primary/30 transition-all"
                >
                  <span className="font-semibold text-dark dark:text-white group-hover:text-primary transition-colors">Email Legal Team</span>
                  <ArrowRight size={16} className="text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-2">
            {filteredFaqs.length > 0 ? (
              <Accordion items={filteredFaqs} />
            ) : (
              <div className="text-center py-20 bg-white dark:bg-dark-800 rounded-3xl border border-cream-300 dark:border-white/10 shadow-glass">
                <div className="text-dark/40 dark:text-white/40 mb-4 flex justify-center">
                  <Search size={48} />
                </div>
                <h3 className="font-display font-bold text-xl text-dark dark:text-white mb-2">No results found</h3>
                <p className="text-dark/60 dark:text-white/60">Try searching for different keywords or contact our support.</p>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* ── FOOTER CTA ───────────────────────────────────── */}
      <section className="py-20 bg-gold-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-6">Ready to Experience Digital Justice?</h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">Join 70+ Banks and 500+ Enterprises resolving disputes faster with PDR Court.</p>
          <a href="/#contact" className="btn-secondary bg-white text-primary px-8 py-4 inline-flex items-center gap-2">
            Start Your Case <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
