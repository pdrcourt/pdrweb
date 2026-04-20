"use client";

import { motion } from "framer-motion";
import { partnersContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import Image from "next/image";

export function PartnersSection() {
  // Duplicate for infinite marquee
  const marqueeItems = [...partnersContent.items, ...partnersContent.items];

  return (
    <SectionWrapper id="partners" background="white" padded={false}>
      <div className="py-24 border-y border-cream-200 dark:border-white/5">
        {/* Header */}
        <motion.div className="text-center mb-16 mx-auto px-4" variants={itemVariants}>
          <SectionBadge>{partnersContent.badge}</SectionBadge>
          <h2 className="heading-md mb-4">{partnersContent.headline}</h2>
          {partnersContent.subheading && (
            <p className="text-lg text-dark/60 dark:text-white/60 mb-12">
              {partnersContent.subheading}
            </p>
          )}

          {/* Report Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 text-left">
            {partnersContent.reports?.map((report) => (
              <div 
                key={report.year}
                className="bg-cream-50 dark:bg-dark-900/50 rounded-3xl p-8 border border-cream-200 dark:border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 font-display text-8xl font-bold">
                  {report.year}
                </div>
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                    ANNUAL REPORT {report.year}
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-3xl font-display font-bold text-dark dark:text-white mb-1">
                        {report.cases}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-dark/50 dark:text-white/50 font-semibold">
                        Cases Reported
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-dark dark:text-white mb-1">
                        {report.settled}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-dark/50 dark:text-white/50 font-semibold">
                        Cases Settled
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-cream-200 dark:border-white/5 flex items-center justify-between">
                    <span className="text-sm font-medium text-dark/60 dark:text-white/60">Success Record</span>
                    <span className="text-xl font-bold text-primary">{report.successRate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hero Statistics Marquee */}
          <div className="relative w-full overflow-hidden py-10 my-10 border-t border-b border-cream-200 dark:border-white/5">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent dark:from-dark z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-dark z-10 pointer-events-none" />

            <motion.div
              className="flex gap-20 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: { repeat: Infinity, duration: 25, ease: "linear" },
              }}
            >
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex gap-20 items-center shrink-0">
                  {partnersContent.reachStats
                    ?.filter(s => s.label.includes("Resolution Rate") || s.label.includes("Leading Banks & NBFCs"))
                    .map((stat, i) => (
                      <div key={`${groupIdx}-${i}`} className="flex items-center gap-8 px-12 group">
                        <div className="flex flex-col items-start gap-1">
                          <div className="text-7xl md:text-9xl font-display font-bold gold-text tracking-tighter leading-none group-hover:scale-105 transition-transform duration-500">
                            {stat.value}
                          </div>
                          <div className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-dark/40 dark:text-white/40 pl-2 border-l-2 border-primary/30">
                            {stat.label}
                          </div>
                        </div>
                        {/* Elegant Divider */}
                        <div className="w-12 h-[2px] bg-gold-gradient opacity-20" />
                      </div>
                    ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden pt-8">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-dark/30 dark:text-white/30">
              Trusted Institutional Partners
            </span>
          </div>
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent dark:from-dark z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-dark z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, duration: 35, ease: "linear" },
            }}
          >
            {marqueeItems.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-10 py-6 rounded-2xl bg-white dark:bg-dark-800 border border-cream-200 dark:border-white/10 shadow-sm hover:shadow-gold hover:border-primary/30 transition-all duration-300 group cursor-default min-w-[220px] h-[100px]"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={56}
                    className="max-h-14 max-w-full object-contain transition-all duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-sm font-semibold text-dark/40 dark:text-white/40 group-hover:text-primary transition-colors duration-300 text-center whitespace-nowrap">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default PartnersSection;
