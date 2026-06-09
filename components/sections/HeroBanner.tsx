'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';
import { Mail, ChevronRight, Home } from 'lucide-react';
import EditorialHeroDecor from '@/components/ui/EditorialHeroDecor';

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
  /** kept for API compatibility; backgrounds are now uniformly cream */
  accentColor?: string;
  tags?: string[];
}

const H1_CLASS =
  'font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5rem)]';

function Crumbs({ items, center = false }: { items?: string[]; center?: boolean }) {
  if (!items) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-2 text-sm text-ink-45 mb-7 ${center ? 'justify-center' : ''}`}
    >
      <Home className="w-4 h-4 text-primary" />
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-2">
          <ChevronRight className="w-3 h-3" />
          <span className={i === items.length - 1 ? 'font-semibold text-ink-70' : ''}>{item}</span>
        </span>
      ))}
    </motion.div>
  );
}

function Badge({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-7 ${
        center ? '' : ''
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      {children}
    </motion.span>
  );
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
  tags,
}: HeroBannerProps) {
  /* ───────── CENTERED ───────── */
  if (variant === 'centered') {
    return (
      <section className="relative flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-cream">
        <EditorialHeroDecor />
        <div className="pointer-events-none absolute -top-24 right-0 w-[560px] h-[560px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Crumbs items={breadcrumb} center />
          {badge && <Badge center>{badge}</Badge>}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className={`${H1_CLASS} mx-auto max-w-4xl`}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="gold-text">{titleAccent}</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-7 text-lg sm:text-xl text-ink-60 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a href={ctaPrimary.href} className="btn-primary">
              {ctaPrimary.label}
            </a>
            <a href={ctaSecondary.href} className="btn-outline">
              <Mail className="h-4 w-4" /> {ctaSecondary.label}
            </a>
          </motion.div>
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {stats.map((stat, i) => (
                <div key={i} className="rounded-2xl border border-cream-300 bg-white p-5 text-center shadow-gold">
                  <div className="text-3xl font-display font-bold gold-text">{stat.value}</div>
                  <div className="text-xs text-ink-50 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  /* ───────── OVERLAY (image hero, light) ───────── */
  if (variant === 'overlay') {
    return (
      <section className="relative pt-32 pb-16 lg:pt-40 overflow-hidden bg-cream">
        <EditorialHeroDecor />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 w-full">
          <Crumbs items={breadcrumb} />
          {badge && <Badge>{badge}</Badge>}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${H1_CLASS} max-w-4xl`}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="gold-text">{titleAccent}</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-7 text-lg text-ink-60 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href={ctaPrimary.href} className="btn-primary">
              {ctaPrimary.label}
            </a>
          </motion.div>
          {image && (
            <div className="relative mt-12 h-[300px] md:h-[360px] rounded-[2rem] overflow-hidden border border-cream-300 shadow-gold-lg">
              <Image src={image} alt="" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
            </div>
          )}
        </div>
      </section>
    );
  }

  /* ───────── MINIMAL (already light) ───────── */
  if (variant === 'minimal') {
    return (
      <section className="relative pt-32 pb-20 bg-cream overflow-hidden">
        <EditorialHeroDecor />
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Crumbs items={breadcrumb} />
          {badge && (
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-6">
              {badge}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className={`${H1_CLASS} max-w-4xl`}
          >
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="gold-text">{titleAccent}</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-ink-60 max-w-3xl leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </section>
    );
  }

  /* ───────── SPLIT / DIAGONAL (two-column with image) ───────── */
  return (
    <section className="relative pt-28 md:pt-32 pb-16 overflow-hidden bg-cream">
      <EditorialHeroDecor />
      <div className="pointer-events-none absolute -top-24 -right-20 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Crumbs items={breadcrumb} />
          {badge && <Badge>{badge}</Badge>}
          <h1 className={`${H1_CLASS} max-w-4xl`}>
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="gold-text">{titleAccent}</span>
              </>
            )}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-60 sm:text-xl">{description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={ctaPrimary.href} className="btn-primary">
              {ctaPrimary.label}
            </a>
            <a href={ctaSecondary.href} className="btn-outline">
              <Mail className="h-4 w-4" /> {ctaSecondary.label}
            </a>
          </div>
          {stats && stats.length > 0 && (
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div key={i} className="rounded-xl border border-cream-300 bg-white p-4 shadow-gold">
                  <div className="text-2xl font-display font-bold gold-text">{stat.value}</div>
                  <div className="text-xs text-ink-50">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
