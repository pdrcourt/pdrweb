"use client";

import { motion } from "framer-motion";
import { featuresContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import { LucideIcon } from "@/components/ui/LucideIcon";
import Image from "next/image";

export function FeaturesSection() {
  return (
    <SectionWrapper id="features" background="white">
      {/* Split Header */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div className="text-left" variants={itemVariants}>
          <SectionBadge align="start">{featuresContent.badge}</SectionBadge>
          <h2 className="heading-lg mb-6 leading-tight text-left">{featuresContent.headline}</h2>
          <p className="body-lg text-dark/60 dark:text-white/60 mb-8 max-w-xl text-left">
            {featuresContent.subheading}
          </p>
          
          {/* Subtle trust signal or accent */}
          <div className="flex items-center gap-4 text-primary font-semibold">
            <div className="w-10 h-1px bg-primary/30" />
            <span className="text-sm uppercase tracking-widest">Enterprise-Ready Infrastructure</span>
          </div>
        </motion.div>

        {featuresContent.mainImage && (
          <motion.div 
            className="relative h-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-gold-lg border border-primary/10"
            variants={itemVariants}
          >
            <Image
              src={featuresContent.mainImage}
              alt={featuresContent.headline}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </motion.div>
        )}
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresContent.items.map((feature, index) => (
          <motion.div
            key={feature.title}
            id={`feature-${index + 1}`}
            className="group relative rounded-3xl bg-cream dark:bg-dark-800/50 border border-cream-300 dark:border-white/10 overflow-hidden hover:bg-white dark:hover:bg-dark-800 hover:shadow-gold-lg hover:border-primary/30 transition-all duration-500"
            variants={itemVariants}
            custom={index}
          >
            {/* Image Header */}
            {feature.image && (
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream dark:from-dark-800 via-transparent to-transparent opacity-60" />
              </div>
            )}

            <div className="p-8 pb-10">
              {/* Metric Bubble */}
              {feature.metric && (
                <div className="absolute top-4 right-6 flex flex-col items-end">
                  <span className="font-display font-bold text-2xl text-primary/70 group-hover:text-primary transition-colors">
                    {feature.metric}
                  </span>
                  <span className="text-[10px] text-dark/40 dark:text-white/40 font-bold uppercase tracking-widest">
                    {feature.metricLabel}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors duration-300">
                <LucideIcon name={feature.iconName} size={22} className="text-primary" strokeWidth={1.75} />
              </div>

              <h3 className="font-display font-bold text-xl text-dark dark:text-white mb-3 group-hover:text-primary transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-sm text-dark/55 dark:text-white/55 leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Bottom gold line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default FeaturesSection;
