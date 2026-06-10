"use client";

import { motion } from "framer-motion";
import { councilContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import Image from "next/image";

export function AdvisoryCouncilSection() {
  return (
    <SectionWrapper id="council" background="white">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        {/* Image */}
        {councilContent.mainImage && (
          <motion.div
            className="relative order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="relative h-[380px] md:h-[460px] rounded-[2rem] overflow-hidden border border-primary/15 shadow-gold-lg">
              <Image
                src={councilContent.mainImage}
                alt={councilContent.headline}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-dark/5 to-transparent" />

              {/* clean solid label strip */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white border border-cream-300 px-5 py-3.5 shadow-gold">
                <p className="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                  Vetted Excellence · Institutional Trust · Digital Justice
                </p>
              </div>
            </div>

            {/* faint offset frame for depth */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 hidden md:block w-full h-full rounded-[2rem] border border-primary/15" />
          </motion.div>
        )}

        {/* Text */}
        <motion.div className="order-1 lg:order-2" variants={itemVariants}>
          <SectionBadge align="start">{councilContent.badge}</SectionBadge>
          <h2 className="font-editorial font-medium text-ink-90 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] mt-4 mb-6">
            {councilContent.headline}
          </h2>
          <p className="text-lg text-ink-60 leading-relaxed mb-9">
            {councilContent.subheading}
          </p>

          {/* editorial pull-quote */}
          <div className="relative rounded-[1.75rem] border border-primary/15 bg-white shadow-gold p-7 md:p-8 overflow-hidden">
            <div className="pointer-events-none absolute -top-10 -right-6 font-editorial text-[9rem] leading-none text-primary/[0.06] select-none">
              &rdquo;
            </div>
            <span className="relative font-editorial text-6xl leading-[0.5] text-primary/30 select-none">
              &ldquo;
            </span>
            <p className="relative mt-3 font-editorial italic text-lg md:text-xl text-ink-80 leading-snug">
              Our council provides the strategic foresight needed to bridge the
              gap between traditional legal wisdom and the speed of the digital
              age.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Closing trust line */}
      <motion.div
        className="text-center mt-16 md:mt-20 pt-10 border-t border-cream-300 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        <p className="font-editorial italic text-ink-55 text-base md:text-lg leading-relaxed">
          &ldquo;The PDR Court Advisory Council ensures that every digital
          resolution is backed by decades of legal precedent and technological
          excellence.&rdquo;
        </p>
      </motion.div>
    </SectionWrapper>
  );
}

export default AdvisoryCouncilSection;
