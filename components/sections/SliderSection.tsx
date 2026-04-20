"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { sliderContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContent.slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = sliderContent.slides[currentSlide];

  return (
    <SectionWrapper id="platform-tour" background="cream" className="overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Discover PDR Court
          </motion.div>
          <h2 className="heading-lg mb-4">The Future of Dispute Resolution</h2>
          <p className="body-lg max-w-2xl mx-auto">See how our platform empowers enterprises to resolve disputes seamlessly.</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-dark-800 shadow-glass border border-cream-300 dark:border-white/10 min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="absolute inset-0 grid md:grid-cols-2 group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Image Side */}
              <div className="relative h-64 md:h-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  priority={currentSlide === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90 dark:to-dark-800/90 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-dark-800/90 to-transparent md:hidden" />
              </div>

              {/* Text Side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm md:backdrop-blur-none md:bg-transparent">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                  {slide.badge}
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark dark:text-white leading-[1.1] mb-4">
                  {slide.headline}{" "}
                  <span className="bg-gold-gradient bg-clip-text text-transparent">
                    {slide.headlineAccent}
                  </span>
                </h3>
                <p className="text-base md:text-lg text-dark/70 dark:text-white/70 leading-relaxed">
                  {slide.subheading}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {sliderContent.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-500 shadow-sm ${
                  currentSlide === i ? "w-8 bg-primary" : "w-2 bg-dark/20 dark:bg-white/20 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default SliderSection;
