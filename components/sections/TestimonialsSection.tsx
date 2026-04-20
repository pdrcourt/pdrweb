"use client";

import { motion } from "framer-motion";
import { testimonialsContent } from "@/data/content";
import { SectionWrapper, itemVariants } from "@/components/ui/SectionWrapper";
import { SectionBadge } from "@/components/ui/Badge";
import { Star } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="text-primary fill-primary w-4 h-4" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" background="cream">
      {/* Header */}
      <motion.div className="text-center mb-14" variants={itemVariants}>
        <SectionBadge>{testimonialsContent.badge}</SectionBadge>
        <h2 className="heading-lg mb-4">{testimonialsContent.headline}</h2>
        <p className="body-lg max-w-2xl mx-auto">{testimonialsContent.subheading}</p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsContent.items.map((t, index) => (
          <motion.div
            key={t.id}
            id={`testimonial-${t.id}`}
            className="group relative rounded-2xl bg-white dark:bg-dark-800 border border-cream-300 dark:border-white/10 shadow-glass p-6 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            variants={itemVariants}
            custom={index}
          >
            {/* Quote mark */}
            <div className="absolute top-4 right-5 text-5xl text-primary/10 font-display font-bold leading-none select-none">
              &ldquo;
            </div>

            {/* Stars */}
            <StarRating rating={t.rating} />

            {/* Quote */}
            <blockquote className="text-sm text-dark/65 dark:text-white/65 leading-relaxed mt-4 mb-6 relative z-10">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-sm text-dark dark:text-white">
                  {t.name}
                </div>
                <div className="text-xs text-dark/40 dark:text-white/40">
                  {t.role}, {t.company}
                </div>
              </div>
            </div>

            {/* Bottom gold accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default TestimonialsSection;
