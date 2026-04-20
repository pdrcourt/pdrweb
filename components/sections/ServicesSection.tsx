"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { servicesContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesContent.items[activeIndex];

  return (
    <SectionWrapper id="services" background="white">
      {/* Header */}
      <motion.div className="text-center mb-12" variants={itemVariants}>
        <SectionBadge>{servicesContent.badge}</SectionBadge>
        <h2 className="heading-lg mb-4">{servicesContent.headline}</h2>
        <p className="body-lg max-w-2xl mx-auto">{servicesContent.subheading}</p>
      </motion.div>

      {/* Tabs Navigation */}
      <motion.div className="flex justify-center mb-12" variants={itemVariants}>
        <div className="relative flex space-x-2 md:space-x-8 lg:space-x-12 border-b border-cream-300 dark:border-white/10 pb-4 overflow-x-auto no-scrollbar px-4 w-full md:w-auto">
          {servicesContent.items.map((service, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className={`relative pb-2 text-lg md:text-xl font-display font-semibold whitespace-nowrap transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-dark/50 dark:text-white/50 hover:text-dark dark:hover:text-white"
                }`}
              >
                {service.title}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-[17px] left-0 right-0 h-1 bg-gold-gradient rounded-t-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Tab Content */}
      <div className="relative min-h-[500px] w-full max-w-6xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full"
          >
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-1 px-4 lg:px-0">
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-dark dark:text-white mb-6">
                {activeService.title}
              </h3>
              <p className="text-lg text-dark/70 dark:text-white/70 leading-relaxed mb-8">
                {activeService.description}
              </p>
              
              <ul className="space-y-4 mb-10 w-full">
                {activeService.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-dark/80 dark:text-white/80 text-base md:text-lg">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link href={activeService.href} className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-full overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-gold-lg">
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 px-4 lg:px-0">
              <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-cream-300 dark:border-white/10 group">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-3xl pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

export default ServicesSection;
