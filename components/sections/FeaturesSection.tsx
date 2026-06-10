"use client";

import { motion } from "framer-motion";
import { featuresContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import { LucideIcon } from "@/components/ui/LucideIcon";
import Image from "next/image";

export function FeaturesSection() {
  return (
    <SectionWrapper id="features" background="warm">
      {/* Split header */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 lg:mb-20">
        <motion.div className="text-left" variants={itemVariants}>
          <SectionBadge align="start">{featuresContent.badge}</SectionBadge>
          <h2 className="font-editorial font-medium text-ink-90 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] mt-4 mb-6">
            {featuresContent.headline}
          </h2>
          <p className="text-lg text-ink-60 mb-8 max-w-xl leading-relaxed">
            {featuresContent.subheading}
          </p>

          <div className="flex items-center gap-4 text-primary font-semibold">
            <div className="w-10 h-px bg-primary/40" />
            <span className="text-sm uppercase tracking-[0.18em]">
              Enterprise-Ready Infrastructure
            </span>
          </div>
        </motion.div>

        {featuresContent.mainImage && (
          <motion.div
            className="relative h-[320px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-gold-lg border border-primary/15"
            variants={itemVariants}
          >
            <Image
              src={featuresContent.mainImage}
              alt={featuresContent.headline}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-dark/25 via-transparent to-transparent" />
          </motion.div>
        )}
      </div>

      {/* Feature cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresContent.items.map((feature, index) => (
          <motion.div
            key={feature.title}
            id={`feature-${index + 1}`}
            variants={itemVariants}
            custom={index}
            className="group relative overflow-hidden rounded-[1.75rem] bg-white border border-cream-300 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-gold-lg"
          >
            {/* corner glow on hover */}
            <div className="pointer-events-none absolute -top-14 -right-14 w-44 h-44 rounded-full bg-primary/[0.07] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* icon + metric */}
            <div className="relative flex items-start justify-between mb-7">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center transition-colors duration-300 group-hover:bg-gold-gradient group-hover:border-transparent">
                <LucideIcon
                  name={feature.iconName}
                  size={24}
                  className="text-primary transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.6}
                />
              </div>
              {feature.metric && (
                <div className="text-right">
                  <div className="font-editorial font-medium text-[1.7rem] text-primary leading-none">
                    {feature.metric}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-45">
                    {feature.metricLabel}
                  </div>
                </div>
              )}
            </div>

            <h3 className="relative font-editorial font-medium text-xl text-ink-90 mb-3">
              {feature.title}
            </h3>
            <p className="relative text-sm text-ink-55 leading-relaxed">
              {feature.description}
            </p>

            {/* bottom gold line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default FeaturesSection;
