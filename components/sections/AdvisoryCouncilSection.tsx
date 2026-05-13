"use client";

import { motion } from "framer-motion";
import { councilContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge, Badge } from "@/components/ui/Badge";
import Image from "next/image";



export function AdvisoryCouncilSection() {
  return (
    <SectionWrapper id="council" background="cream">
      {/* Split Header */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {councilContent.mainImage && (
          <motion.div 
            className="relative h-[360px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-gold-lg order-2 lg:order-1"
            variants={itemVariants}
          >
            <Image
              src={councilContent.mainImage}
              alt={councilContent.headline}
              fill
              className="object-cover"
            />
            {/* Overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-dark/20" />
            
            {/* Floating accent badge on the image */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
              <p className="text-white text-xs font-bold uppercase tracking-widest text-center">
                Vetted Excellence • Institutional Trust • Digital Justice
              </p>
            </div>
          </motion.div>
        )}

        <motion.div className="order-1 lg:order-2 text-left" variants={itemVariants}>
          <SectionBadge align="start">{councilContent.badge}</SectionBadge>
          <h2 className="heading-lg mb-6 leading-tight text-left">{councilContent.headline}</h2>
          <p className="body-lg text-dark/60 dark:text-white/60 mb-8 text-left">
            {councilContent.subheading}
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-1 h-12 bg-primary rounded-full mt-1" />
              <p className="text-sm italic text-dark/50 dark:text-white/50">
                &ldquo;Our council provides the strategic foresight needed to bridge the gap between traditional legal wisdom and the speed of the digital age.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Council Grid Hidden per request */}
      {/* <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {councilContent.members.map((member, index) => (
          <AdvisorCard key={member.name} member={member} index={index} />
        ))}
      </motion.div> */}

      {/* Subtle Footer Quote / Trust Indicator */}
      <motion.div 
        className="text-center mt-20 pt-10 border-t border-primary/10"
        variants={itemVariants}
      >
        <p className="text-dark/40 dark:text-white/40 italic text-sm max-w-xl mx-auto">
          &ldquo;The PDR Court Advisory Council ensures that every digital resolution is backed by decades of legal precedent and technological excellence.&rdquo;
        </p>
      </motion.div>
    </SectionWrapper>
  );
}

export default AdvisoryCouncilSection;
