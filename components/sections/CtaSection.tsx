"use client";

import { motion } from "framer-motion";
import { ctaContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Lock, Scale, Star, Globe } from "lucide-react";

const TRUST = [
  { icon: <Lock size={16} className="text-primary-300" />, text: "256-bit Encrypted" },
  { icon: <Scale size={16} className="text-primary-300" />, text: "Legally Compliant" },
  { icon: <Star size={16} className="text-primary-300 fill-primary-300" />, text: "4.9/5 Rating" },
  { icon: <Globe size={16} className="text-primary-300" />, text: "Pan-India Coverage" },
];

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden bg-dark text-white"
    >
      {/* top hairline accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* editorial decor on dark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[34rem] h-[34rem] rounded-full bg-primary/15 blur-[150px]" />
        <div className="absolute -bottom-32 right-1/5 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-[140px]" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <g fill="none" stroke="#db8a2f" strokeWidth="1" opacity="0.1">
            <path d="M-50 160 C 420 40, 900 360, 1490 120" />
            <path d="M-50 440 C 460 540, 980 300, 1490 520" />
            <ellipse cx="720" cy="300" rx="700" ry="240" />
          </g>
        </svg>
        {/* giant clipped wordmark */}
        <div className="absolute -bottom-[3vw] left-0 right-0 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4">
            <span className="block font-editorial font-semibold text-white/[0.04] leading-none whitespace-nowrap text-[clamp(4rem,18vw,18rem)]">
              PDR COURT
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-300/30 bg-primary-300/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-300" />
            {ctaContent.badge}
          </div>

          {/* Headline */}
          <h2 className="font-editorial font-medium text-white text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight mb-6">
            {ctaContent.headline}
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-paper-70 leading-relaxed max-w-2xl mx-auto mb-10">
            {ctaContent.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={ctaContent.primaryCta.href} variant="primary">
              {ctaContent.primaryCta.label}
            </Button>
            <a
              href={ctaContent.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-200 px-7 py-3.5"
            >
              {ctaContent.secondaryCta.label}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mt-12 pt-8 border-t border-white/10 max-w-3xl mx-auto">
            {TRUST.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-sm text-paper-70"
              >
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaSection;
