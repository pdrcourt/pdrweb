"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { statsContent } from "@/data/content";
import { itemVariants, containerVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";

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
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white border-y border-cream-300 overflow-hidden z-10">
      {/* soft warm glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* eyebrow */}
        <div className="mb-10 md:mb-14">
          <SectionBadge>Trusted at Scale</SectionBadge>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {statsContent.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`relative text-center group px-4 sm:px-6 ${
                i > 0 ? "lg:border-l lg:border-cream-300" : ""
              }`}
            >
              <div className="font-editorial font-medium text-[clamp(2.8rem,5.5vw,4rem)] text-primary leading-none tracking-tight">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="mx-auto mt-4 mb-4 h-px w-8 bg-primary/30 transition-all duration-300 group-hover:w-14 group-hover:bg-primary" />
              <p className="text-xs md:text-sm text-ink-55 font-semibold uppercase tracking-[0.16em] leading-snug">
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
