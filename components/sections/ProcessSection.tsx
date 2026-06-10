"use client";

import { motion } from "framer-motion";
import { processContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import { LucideIcon } from "@/components/ui/LucideIcon";

export function ProcessSection() {
  return (
    <SectionWrapper id="process" background="warm">
      {/* Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        variants={itemVariants}
      >
        <SectionBadge>{processContent.badge}</SectionBadge>
        <h2 className="font-editorial font-medium text-ink-90 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] mt-4 mb-5">
          {processContent.headline}
        </h2>
        <p className="text-lg text-ink-60 leading-relaxed">
          {processContent.subheading}
        </p>
      </motion.div>

      {/* Connected step flow */}
      <div className="relative max-w-6xl mx-auto">
        {/* connector line behind the nodes (desktop) */}
        <div className="hidden lg:block absolute top-[2.75rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

        <div className="grid gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {processContent.steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              custom={index}
              className="group relative text-center"
            >
              {/* icon node */}
              <div className="relative z-10 mx-auto w-[5.5rem] h-[5.5rem] rounded-full bg-white border border-primary/15 shadow-gold flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1.5">
                <LucideIcon
                  name={step.iconName}
                  size={30}
                  className="text-primary"
                  strokeWidth={1.6}
                />
                <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-gold-gradient text-white text-xs font-bold flex items-center justify-center ring-4 ring-cream">
                  {step.step}
                </span>
              </div>

              <h3 className="mt-7 font-editorial font-medium text-xl text-ink-90">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-ink-55 leading-relaxed max-w-[15rem] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div className="mt-16 md:mt-20 text-center" variants={itemVariants}>
        <a
          href="/#contact"
          id="process-cta"
          className="btn-primary text-base px-8 py-4 shadow-gold-lg"
        >
          Start Your Case Today
        </a>
      </motion.div>
    </SectionWrapper>
  );
}

export default ProcessSection;
