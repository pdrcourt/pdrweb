'use client';
import { motion } from 'framer-motion';

interface TimelineItem { date: string; title: string; }

interface TimelineSectionProps {
  items: TimelineItem[];
  title?: string;
  subtitle?: string;
}

export default function TimelineSection({ items, title = 'Our Growth Story', subtitle = 'Journey' }: TimelineSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/30 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="section-label">{subtitle}</span>
          <h2 className="heading-lg">{title}</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block" />
          <div className="space-y-8">
            {items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="rounded-2xl bg-cream border border-cream-300 p-5 inline-block hover:shadow-gold transition-all">
                    <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">{item.date}</p>
                    <p className="text-sm text-dark/70 leading-relaxed">{item.title}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gold-gradient shadow-gold z-10 hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
