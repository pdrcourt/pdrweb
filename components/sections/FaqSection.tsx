"use client";

import { motion } from "framer-motion";
import { faqContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { MessageSquare, ArrowRight } from "lucide-react";

export function FaqSection() {
  return (
    <SectionWrapper id="faq" background="white">
      {/* Header */}
      <motion.div className="text-center mb-14" variants={itemVariants}>
        <SectionBadge>{faqContent.badge}</SectionBadge>
        <h2 className="heading-lg mb-4">{faqContent.headline}</h2>
        <p className="body-lg max-w-2xl mx-auto">{faqContent.subheading}</p>
      </motion.div>

      {/* Two-column Layout */}
      <motion.div
        className="grid lg:grid-cols-3 gap-12 items-start"
        variants={itemVariants}
      >
        {/* Left: FAQ Sidebar Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-2xl bg-gold-subtle border border-primary/20 p-6">
            <div className="mb-4 text-primary">
              <MessageSquare size={32} />
            </div>
            <h3 className="font-display font-semibold text-dark dark:text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-sm text-dark/55 dark:text-white/55 mb-4">
              Our legal experts are available 24/7 to guide you through the process.
            </p>
            <a
              id="faq-support-btn"
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-600 transition-colors"
            >
              Contact Support <ArrowRight size={14} />
            </a>
          </div>

          <div className="rounded-2xl bg-white dark:bg-dark-800 border border-cream-300 dark:border-white/10 shadow-glass p-6">
            <h4 className="font-semibold text-dark dark:text-white text-sm mb-3">Quick Stats</h4>
            <div className="space-y-3">
              {[
                { label: "Avg. response time", value: "< 2 hours" },
                { label: "Support languages", value: "12+" },
                { label: "Expert legal advisors", value: "200+" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-xs text-dark/50 dark:text-white/50">{s.label}</span>
                  <span className="text-xs font-bold text-primary">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Accordion */}
        <div className="lg:col-span-2">
          <Accordion items={faqContent.items} />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export default FaqSection;
