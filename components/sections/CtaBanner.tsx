'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'gradient' | 'dark' | 'light' | 'split';
}

export default function CtaBanner({
  title,
  subtitle,
  description,
  primaryCta = { label: 'Start a Case', href: '/#contact' },
  secondaryCta = { label: 'Contact Legal Team', href: 'mailto:legal@pdrcourt.com' },
  variant = 'gradient',
}: CtaBannerProps) {
  const variants = {
    gradient: 'bg-gold-gradient text-white',
    dark: 'bg-dark text-white',
    light: 'bg-cream border-t border-b border-primary/10 text-dark',
    split: 'bg-gradient-to-r from-dark via-dark to-primary-800 text-white',
  };

  return (
    <section className={`relative py-20 ${variants[variant]} overflow-hidden`}>
      {variant === 'gradient' && (
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2), transparent 40%)',
        }} />
      )}
      {variant === 'dark' && (
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(189,107,32,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189,107,32,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      )}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {subtitle && (
            <p className={`text-sm font-bold uppercase tracking-[0.24em] mb-4 ${variant === 'light' ? 'text-primary' : 'text-white/65'}`}>
              {subtitle}
            </p>
          )}
          <h2 className={`font-display text-4xl md:text-5xl font-bold leading-tight mb-6 ${variant === 'light' ? 'text-dark' : ''}`}>
            {title}
          </h2>
          {description && (
            <p className={`text-lg mb-10 max-w-2xl mx-auto ${variant === 'light' ? 'text-dark/60' : 'text-white/80'}`}>
              {description}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <a href={primaryCta.href}
              className={`inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold shadow-xl transition hover:-translate-y-0.5 ${
                variant === 'light'
                  ? 'bg-gold-gradient text-white'
                  : 'bg-white text-primary hover:shadow-2xl'
              }`}>
              {primaryCta.label} <ArrowRight className="h-4 w-4" />
            </a>
            <a href={secondaryCta.href}
              className={`inline-flex items-center gap-2 rounded-xl border px-8 py-4 font-semibold transition hover:bg-white/10 ${
                variant === 'light'
                  ? 'border-primary/30 text-primary hover:bg-primary/5'
                  : 'border-white/35 text-white'
              }`}>
              <Mail className="h-4 w-4" /> {secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
