"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Zap, Lock, Play, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient dark:bg-dark pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-primary/8 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(189,107,32,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(189,107,32,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {heroContent.badge}
              </div>

              {/* Headline */}
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-dark dark:text-white leading-[1.08] tracking-tight mb-6">
                {heroContent.headline}
                <br />
                <span className="bg-gold-gradient bg-clip-text text-transparent">
                  {heroContent.headlineAccent}
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-dark/60 dark:text-white/60 leading-relaxed max-w-xl mb-10">
                {heroContent.subheading}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Button href={heroContent.primaryCta.href} size="lg" variant="primary">
                {heroContent.primaryCta.label}
                <ArrowRight size={18} className="ml-1" />
              </Button>
              <Button href={heroContent.secondaryCta.href} size="lg" variant="outline">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Play size={12} fill="currentColor" />
                </span>
                {heroContent.secondaryCta.label}
              </Button>
            </motion.div>
          </div>

          {/* Right: Hero Illustration */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                className="relative z-10 w-full"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <div className="rounded-3xl overflow-hidden shadow-gold-lg border border-cream-200 dark:border-white/10 relative h-[480px]">
                  <Image
                    src={heroContent.image}
                    alt={heroContent.headline}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -left-6 bg-white dark:bg-dark-800 rounded-2xl shadow-gold px-4 py-3 flex items-center gap-2 border border-cream-200 dark:border-white/10"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                >
                  <Zap className="text-primary" size={24} />
                  <div>
                    <div className="text-xs font-bold text-dark dark:text-white">Fast Resolution</div>
                    {/* <div className="text-xs text-dark/40 dark:text-white/40">Avg. 72 hours</div> */}
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-800 rounded-2xl shadow-gold px-4 py-3 flex items-center gap-2 border border-cream-200 dark:border-white/10"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                >
                  <Lock className="text-primary" size={24} />
                  <div>
                    <div className="text-xs font-bold text-dark dark:text-white">Fully Encrypted</div>
                    <div className="text-xs text-dark/40 dark:text-white/40">256-bit Security</div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Gold glow behind image */}
              <div className="absolute inset-0 -z-10 bg-primary/10 rounded-3xl blur-3xl scale-110" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream dark:from-dark to-transparent pointer-events-none" />
    </section>
  );
}

export default HeroSection;
