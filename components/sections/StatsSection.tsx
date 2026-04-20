"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { statsContent } from "@/data/content";
import { itemVariants, containerVariants } from "@/components/ui/SectionWrapper";

// Extracts numerical value and animates counting up!
function AnimatedNumber({ value }: { value: string }) {
  const match = value.match(/^([^0-9]*)([0-9\.]+)(.*)$/);
  const isValid = !!match;
  
  const prefix = isValid ? match[1] : "";
  const numValue = isValid ? parseFloat(match[2]) : 0;
  const suffix = isValid ? match[3] : "";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return latest % 1 === 0 || latest > 100 ? Math.round(latest).toString() : latest.toFixed(1);
  });

  useEffect(() => {
    if (isValid && isInView) {
      animate(count, numValue, { duration: 2.5, ease: "easeOut" });
    }
  }, [count, numValue, isInView, isValid]);

  if (!isValid) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 bg-dark dark:bg-black overflow-hidden z-10 border-t border-b border-primary/20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary rounded-full blur-[100px] -translate-y-1/2" />
      </div>
      
      {/* Subtle Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {statsContent.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="text-center group"
            >
              <h3 className="font-display font-bold text-5xl md:text-6xl text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                <span className="bg-gold-gradient bg-clip-text text-transparent drop-shadow-sm">
                  <AnimatedNumber value={stat.value} />
                </span>
              </h3>
              <p className="text-sm md:text-base text-white/70 font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;
