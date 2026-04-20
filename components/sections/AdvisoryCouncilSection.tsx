"use client";

import { motion } from "framer-motion";
import { councilContent } from "@/data/content";
import { SectionWrapper, itemVariants, containerVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge, Badge } from "@/components/ui/Badge";
import Image from "next/image";

function AdvisorCard({ 
  member, 
  index 
}: { 
  member: typeof councilContent.members[0]; 
  index: number 
}) {
  return (
    <motion.div
      className="group relative h-full flex flex-col p-8 rounded-3xl bg-white dark:bg-dark-800 border border-cream-300 dark:border-white/10 shadow-glass hover:shadow-gold-lg hover:-translate-y-2 transition-all duration-500 overflow-hidden"
      variants={itemVariants}
      custom={index}
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:bg-primary/10 transition-colors" />

      {/* Top Section: Avatar & Identity */}
      <div className="flex items-start gap-5 mb-6 relative z-10">
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-gold group-hover:scale-110 transition-transform duration-500">
          {member.headshot ? (
            <Image
              src={member.headshot}
              alt={member.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gold-gradient flex items-center justify-center text-white font-bold text-xl">
              {member.avatar}
            </div>
          )}
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-dark dark:text-white group-hover:text-primary transition-colors leading-tight mb-1">
            {member.name}
          </h3>
          <p className="text-primary text-sm font-semibold mb-0.5">{member.role}</p>
          <p className="text-xs text-dark/40 dark:text-white/40 font-medium">{member.affiliation}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-dark/60 dark:text-white/60 leading-relaxed mb-6 flex-grow relative z-10">
        {member.bio}
      </p>

      {/* Expertise Badges */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-cream-200 dark:border-white/5 relative z-10">
        {member.expertise.map((exp) => (
          <Badge key={exp} variant="gold" className="text-[10px] uppercase tracking-wider px-2.5 py-0.5">
            {exp}
          </Badge>
        ))}
      </div>

      {/* Interactive Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

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

      {/* Council Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {councilContent.members.map((member, index) => (
          <AdvisorCard key={member.name} member={member} index={index} />
        ))}
      </motion.div>

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
