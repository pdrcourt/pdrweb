"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ctaContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Lock, Scale, Star, Globe, ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-dark/60" />
      </div>

      {/* Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/15 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(189,107,32,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary text-sm font-semibold rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {ctaContent.badge}
          </div>

          {/* Headline */}
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {ctaContent.headline}
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            {ctaContent.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={ctaContent.primaryCta.href} size="lg" variant="primary">
              <span className="flex items-center gap-2">
                {ctaContent.primaryCta.label} <ArrowRight size={18} />
              </span>
            </Button>
            <Button
              href={ctaContent.secondaryCta.href}
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm rounded-xl font-semibold transition-all duration-200"
            >
              {ctaContent.secondaryCta.label}
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[
              { icon: <Lock size={16} className="text-primary" />, text: "256-bit Encrypted" },
              { icon: <Scale size={16} className="text-primary" />, text: "Legally Compliant" },
              { icon: <Star size={16} className="text-primary fill-primary" />, text: "4.9/5 Rating" },
              { icon: <Globe size={16} className="text-primary" />, text: "Pan-India Coverage" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-sm text-white/60"
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
