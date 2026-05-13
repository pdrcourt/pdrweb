"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import { ArrowRight, Clock, FileText, Shield } from "lucide-react";

export function LegalPageClient({ 
  title, 
  subtitle, 
  lastUpdated, 
  content 
}: { 
  title: string; 
  subtitle: string; 
  lastUpdated: string;
  content: React.ReactNode;
}) {
  return (
    <main className="bg-cream dark:bg-dark pt-24 min-h-screen">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-hero-gradient dark:bg-dark border-b border-cream-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <SectionBadge>Legal Information</SectionBadge>
            <h1 className="heading-xl mb-6">{title}</h1>
            <p className="body-lg text-dark/60 dark:text-white/60 mb-8">
              {subtitle}
            </p>
            <div className="flex items-center gap-6 text-sm text-dark/40 dark:text-white/40">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>Legally Binding</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ─────────────────────────────────────── */}
      <SectionWrapper background="transparent">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Left Sidebar: Navigation/TOC */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-cream-300 dark:border-white/10 shadow-glass">
                <div className="flex items-center gap-3 mb-6 text-primary">
                  <FileText size={20} />
                  <span className="font-bold uppercase tracking-wider text-xs">Quick Links</span>
                </div>
                <nav className="space-y-2">
                  {[
                    "Resources",
                    "Rules",
                    "Terms & Conditions",
                    "Privacy Policy",
                    "Disclaimer",
                    "Cookie Policy"
                  ].map((link) => (
                    <a 
                      key={link} 
                      href={`/${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                      className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                        title.toLowerCase().includes(link.toLowerCase().substring(0, 5))
                        ? "bg-primary/10 text-primary font-bold border border-primary/20"
                        : "text-dark/50 dark:text-white/50 hover:bg-cream-100 dark:hover:bg-dark-700"
                      }`}
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-6 rounded-2xl bg-gold-gradient text-white shadow-gold">
                <h4 className="font-bold mb-2">Need legal help?</h4>
                <p className="text-xs text-white/80 mb-4 leading-relaxed">
                  Our compliance team is available to answer any questions regarding our terms.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-2 text-xs font-bold hover:gap-3 transition-all">
                  Contact Compliance <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Main Content */}
          <div className="lg:col-span-3 prose prose-gold dark:prose-invert max-w-none">
            <div className="bg-white dark:bg-dark-800 rounded-[2.5rem] p-8 md:p-16 border border-cream-300 dark:border-white/10 shadow-glass min-h-[600px]">
              {content}
              
              <div className="mt-16 pt-8 border-t border-cream-200 dark:border-white/5 text-sm text-dark/40 dark:text-white/40">
                <p>If you have any questions about this document, please contact us at <a href="mailto:legal@pdrcourt.com" className="text-primary font-semibold">legal@pdrcourt.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
