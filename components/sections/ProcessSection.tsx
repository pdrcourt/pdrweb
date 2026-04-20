"use client";

import { motion } from "framer-motion";
import { processContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { ArrowRight } from "lucide-react";

export function ProcessSection() {
  return (
    <SectionWrapper id="process" background="cream">
      {/* Header */}
      <motion.div className="text-center mb-16 md:mb-20" variants={itemVariants}>
        <SectionBadge>{processContent.badge}</SectionBadge>
        <h2 className="heading-lg mb-4">{processContent.headline}</h2>
        <p className="body-lg max-w-2xl mx-auto">{processContent.subheading}</p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
        {/* Left: Infographic (Slide Image) */}
        <motion.div 
          className="lg:col-span-7 rounded-3xl overflow-hidden border border-cream-200 dark:border-white/5 shadow-gold bg-white dark:bg-dark-900 self-start"
          variants={itemVariants}
        >
          <div className="p-2 bg-cream-50 dark:bg-dark-800 border-b border-cream-100 dark:border-white/5 flex items-center justify-between px-6">
             <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/20" />
             </div>
             <span className="text-[10px] font-bold text-dark/20 dark:text-white/20 uppercase tracking-widest">Digital Flow Engine</span>
          </div>
          <img 
            src="/images/process.png" 
            alt="PDR Court Online Process Flow" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Right: Step Cards */}
        <div className="lg:col-span-5 space-y-4">
          {processContent.steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="group relative bg-white dark:bg-dark-800 rounded-2xl border border-cream-300 dark:border-white/10 p-6 flex items-start gap-5 hover:shadow-gold hover:-translate-x-1 lg:hover:translate-x-1 transition-all duration-300"
              variants={itemVariants}
              custom={index}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <LucideIcon name={step.iconName} size={20} className="text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-black text-primary/30 uppercase tracking-tighter">0{step.step}</span>
                  <h3 className="font-display font-semibold text-lg text-dark dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-dark/55 dark:text-white/55 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom CTA moved into the side column for balance */}
          <motion.div className="pt-6" variants={itemVariants}>
            <a
              href="/#contact"
              id="process-cta"
              className="flex items-center justify-center gap-2 btn-primary text-base px-8 py-4 w-full shadow-gold-lg"
            >
              Start Your Case Today
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ProcessSection;
