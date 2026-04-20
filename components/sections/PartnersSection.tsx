"use client";

import { motion } from "framer-motion";
import { partnersContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import Image from "next/image";
import { Building2, ShieldCheck } from "lucide-react";

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

          {/* Quick Metrics */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 border-t border-cream-200 dark:border-white/5">
            {partnersContent.reachStats?.map((stat, i) => {
              const isHighlight = stat.label.includes("Resolution Rate") || stat.label.includes("Leading Banks & NBFCs");
              const Icon = stat.label.includes("Resolution Rate") ? ShieldCheck : Building2;
              
              return (
                <motion.div 
                  key={i} 
                  className={`relative group px-10 py-8 rounded-[2.5rem] transition-all duration-500 overflow-hidden ${
                    isHighlight 
                      ? "glass-card shadow-gold border-primary/20 min-w-[280px]" 
                      : "bg-transparent border-transparent"
                  }`}
                  animate={isHighlight ? { y: [0, -8, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: i * 0.5 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  {/* Decorative Background Accent */}
                  {isHighlight && (
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  )}
                  
                  <div className="relative z-10 flex flex-col items-center">
                    {isHighlight && (
                      <div className="mb-4 p-3 rounded-2xl bg-primary/10 text-primary transform group-hover:rotate-12 transition-transform duration-500">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                    )}
                    <div className={`font-display font-bold leading-none mb-2 ${
                      isHighlight ? "text-4xl gold-text" : "text-2xl text-dark dark:text-white"
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-xs uppercase tracking-[0.2em] font-bold ${
                      isHighlight ? "text-primary/70" : "text-dark/40 dark:text-white/40"
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Bottom animated border for high-end feel */}
                  {isHighlight && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </motion.div>
              );
            })}
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
