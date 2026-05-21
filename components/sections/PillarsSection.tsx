'use client';
import { motion } from 'framer-motion';
import { Eye, Shield, BarChart3, Target } from 'lucide-react';

const pillars = [
  { number: 1, title: 'Digital Transparency', description: 'State-of-the-art tech tools and clear communication ensure members are informed about every detail.', icon: Eye },
  { number: 2, title: 'Integrity', description: 'Achieving fair and unbiased outcomes is vital for acceptance and long-term success.', icon: Shield },
  { number: 3, title: 'Data-Driven Prudence', description: 'Our expert team utilizes technology to analyze potential impact on your business outcomes.', icon: BarChart3 },
  { number: 4, title: 'Precision Meticulousness', description: 'Every facet of a transaction is carefully examined and clearly understood for optimal results.', icon: Target },
];

export default function PillarsSection({ bgColor = 'white' }: { bgColor?: 'white' | 'cream' }) {
  const bg = bgColor === 'white' ? 'bg-white' : 'bg-cream';
  return (
    <section className={`py-20 lg:py-28 ${bg} relative overflow-hidden`}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="section-label">Our Foundation</span>
          <h2 className="heading-lg mb-4"><span className="gold-text">4</span> Pillars of Our Quest</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group rounded-2xl bg-white border border-cream-300 p-7 transition-all hover:-translate-y-1 hover:shadow-gold hover:border-primary/20">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-3xl font-display font-bold text-primary/15">{String(p.number).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">{p.title}</h3>
                <p className="text-sm text-dark/55 leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
