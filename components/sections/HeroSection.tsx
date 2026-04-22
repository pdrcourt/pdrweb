"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Zap, Lock, Play, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-cream-gradient dark:bg-dark-gradient pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(189,107,32,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(189,107,32,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
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
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              <div className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {heroContent.badge}
              </div>

              {/* Headline */}
              <h1 className="heading-xl mb-6">
                {heroContent.headline}
                <br />
                <span className="gold-text">
                  {heroContent.headlineAccent}
                </span>
              </h1>

              {/* Subheading */}
              <p className="body-lg max-w-xl mb-10">
                {heroContent.subheading}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button href={heroContent.primaryCta.href} size="lg" variant="primary">
                {heroContent.primaryCta.label}
                <ArrowRight size={18} className="ml-1" />
              </Button>
              <Button href={heroContent.secondaryCta.href} size="lg" variant="outline">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                  <Play size={10} fill="currentColor" />
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
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                className="relative z-10 w-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              >
                <div className="rounded-4xl overflow-hidden shadow-gold-lg border border-white/50 dark:border-white/10 relative h-[520px] glass-card !bg-transparent p-4">
                  <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={heroContent.image}
                      alt={heroContent.headline}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -left-6 bg-white/80 dark:bg-dark-800/80 backdrop-blur-md rounded-2xl shadow-gold px-5 py-4 flex items-center gap-3 border border-white/40 dark:border-white/10"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Zap size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-dark dark:text-white uppercase tracking-wider">Fast Resolution</div>
                    <div className="text-[10px] text-dark/50 dark:text-white/50 font-medium">Industry Leading</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white/80 dark:bg-dark-800/80 backdrop-blur-md rounded-2xl shadow-gold px-5 py-4 flex items-center gap-3 border border-white/40 dark:border-white/10"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Lock size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-dark dark:text-white uppercase tracking-wider">Fully Encrypted</div>
                    <div className="text-[10px] text-dark/50 dark:text-white/50 font-medium">Military Grade</div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Gold glow behind image */}
              <div className="absolute inset-0 -z-10 bg-primary/20 rounded-full blur-[100px] scale-90" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream dark:from-dark to-transparent pointer-events-none" />
    </section>
  );
}

export default HeroSection;
