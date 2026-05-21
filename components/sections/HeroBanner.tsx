'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Mail, ChevronRight, Home } from 'lucide-react';

type HeroVariant = 'split' | 'centered' | 'diagonal' | 'overlay' | 'minimal';

interface HeroBannerProps {
  variant?: HeroVariant;
  title: string;
  titleAccent?: string;
  description: string;
  breadcrumb?: string[];
  image?: string;
  badge?: string;
  stats?: { value: string; label: string }[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  accentColor?: string;
  tags?: string[];
}

export default function HeroBanner({
  variant = 'split',
  title,
  titleAccent,
  description,
  breadcrumb,
  image,
  badge,
  stats,
  ctaPrimary = { label: 'Get Started', href: '#content' },
  ctaSecondary = { label: 'Contact Us', href: 'mailto:legal@pdrcourt.com' },
  accentColor = 'from-primary-500 via-primary-400 to-amber-300',
  tags,
}: HeroBannerProps) {
  if (variant === 'centered') {
    return (
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${accentColor}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pb-20">
          {breadcrumb && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
              <Home className="w-4 h-4" />
              {breadcrumb.map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" />
                  <span className={i === breadcrumb.length - 1 ? 'font-semibold text-white' : ''}>{item}</span>
                </span>
              ))}
            </motion.div>
          )}
          {badge && (
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {badge}
            </motion.span>
          )}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            {title}
            {titleAccent && <><br /><span className="text-white/80">{titleAccent}</span></>}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {description}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4">
            <a href={ctaPrimary.href} className="btn-primary bg-white text-primary shadow-xl hover:bg-white">
              {ctaPrimary.label} <ArrowRight className="h-4 w-4" />
            </a>
            <a href={ctaSecondary.href} className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
              <Mail className="h-4 w-4" /> {ctaSecondary.label}
            </a>
          </motion.div>
          {stats && stats.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 text-center">
                  <div className="text-3xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  if (variant === 'diagonal') {
    return (
      <section className="relative min-h-[88vh] pt-24 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${accentColor}`} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, transparent 45%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.2) 55%, transparent 55%)',
        }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.4) 75%)',
          backgroundSize: '60px 60px',
        }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              {breadcrumb && (
                <div className="flex items-center gap-2 text-sm text-white/70 mb-6">
                  <Home className="w-4 h-4" />
                  {breadcrumb.map((item, i) => (
                    <span key={item} className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3" />
                      <span className={i === breadcrumb.length - 1 ? 'font-semibold text-white' : ''}>{item}</span>
                    </span>
                  ))}
                </div>
              )}
              {badge && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl mb-6">
                  {badge}
                </span>
              )}
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                {title}
                {titleAccent && <><br /><span className="bg-white/20 px-4 py-1 rounded-xl inline-block mt-2">{titleAccent}</span></>}
              </h1>
              <p className="text-lg text-white/80 max-w-xl mb-10 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-4">
                <a href={ctaPrimary.href} className="btn-primary bg-white text-primary shadow-xl hover:bg-white">
                  {ctaPrimary.label} <ArrowRight className="h-4 w-4" />
                </a>
                <a href={ctaSecondary.href} className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
                  {ctaSecondary.label}
                </a>
              </div>
            </motion.div>
            {image && (
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block">
                <div className="relative h-[480px] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                  <Image src={image} alt="" fill className="object-cover opacity-90" sizes="(min-width: 1024px) 48vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                {tags && (
                  <div className="absolute -bottom-4 -left-4 flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span key={tag} className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'overlay') {
    return (
      <section className="relative min-h-[80vh] flex items-end pt-24 overflow-hidden">
        {image && (
          <div className="absolute inset-0">
            <Image src={image} alt="" fill className="object-cover" sizes="100vw" />
            <div className={`absolute inset-0 bg-gradient-to-t ${accentColor} opacity-85`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>
        )}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-32 w-full">
          {breadcrumb && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-white/70 mb-6">
              <Home className="w-4 h-4" />
              {breadcrumb.map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" />
                  <span className={i === breadcrumb.length - 1 ? 'font-semibold text-white' : ''}>{item}</span>
                </span>
              ))}
            </motion.div>
          )}
          {badge && (
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl mb-6">
              {badge}
            </motion.span>
          )}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl mb-6">
            {title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed">{description}</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4">
            <a href={ctaPrimary.href} className="btn-primary bg-white text-primary shadow-xl hover:bg-white">
              {ctaPrimary.label} <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === 'minimal') {
    return (
      <section className="relative pt-32 pb-20 bg-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {breadcrumb && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-primary/70 mb-6">
              <Home className="w-4 h-4" />
              {breadcrumb.map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" />
                  <span className={i === breadcrumb.length - 1 ? 'font-semibold text-primary' : ''}>{item}</span>
                </span>
              ))}
            </motion.div>
          )}
          {badge && (
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="section-label mb-6">{badge}</motion.span>
          )}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="heading-xl max-w-4xl mb-6">{title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="body-lg max-w-3xl">{description}</motion.p>
        </div>
      </section>
    );
  }

  // Default: split variant
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${accentColor}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.18),transparent_24%)]" />
      <div className="absolute inset-0 opacity-[0.1]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.28) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {breadcrumb && (
            <div className="flex items-center gap-2 text-sm text-white/70 mb-6">
              <Home className="w-4 h-4" />
              {breadcrumb.map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" />
                  <span className={i === breadcrumb.length - 1 ? 'font-semibold text-white' : ''}>{item}</span>
                </span>
              ))}
            </div>
          )}
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />{badge}
            </span>
          )}
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
            {titleAccent && <><br /><span className="text-white/85">{titleAccent}</span></>}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">{description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={ctaPrimary.href} className="btn-primary bg-white text-primary shadow-xl hover:bg-white">
              {ctaPrimary.label} <ArrowRight className="h-4 w-4" />
            </a>
            <a href={ctaSecondary.href} className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
              <Mail className="h-4 w-4" /> {ctaSecondary.label}
            </a>
          </div>
          {stats && stats.length > 0 && (
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div key={i} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl p-4">
                  <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
        {image && (
          <motion.div className="relative min-h-[440px] hidden lg:block"
            initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.15 }}>
            <div className="absolute right-0 top-0 h-32 w-32 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl" />
            <div className="relative ml-auto mt-8 h-[430px] overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 shadow-2xl backdrop-blur">
              <Image src={image} alt="" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover opacity-90 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />
              {tags && (
                <div className="absolute bottom-6 right-6 grid grid-cols-2 gap-3">
                  {tags.map(tag => (
                    <span key={tag} className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
