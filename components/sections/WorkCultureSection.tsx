'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Lightbulb, Shield, Handshake } from 'lucide-react';

interface WorkCultureSectionProps {
  variant?: 'default' | 'minimal';
}

const values = [
  { icon: Shield, title: 'Trust', text: 'Built on the pillars of Trust, Honesty, Integrity, Transparency and Empathy.' },
  { icon: Lightbulb, title: 'Innovation', text: 'Constantly challenging ourselves to improve and break new ground with technology.' },
  { icon: Users, title: 'Inclusivity', text: 'Celebrating diversity, ensuring everyone is respected and inspired to excel.' },
  { icon: Heart, title: 'Commitment', text: 'Our dedication to justice drives us beyond our comfort zone for ingenious methods.' },
  { icon: Handshake, title: 'Collaboration', text: 'Fostering an environment where diverse perspectives drive collective success.' },
];

export default function WorkCultureSection({ variant = 'default' }: WorkCultureSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="section-label">Culture</span>
          <h2 className="heading-lg mb-4">Our Work Culture</h2>
          <p className="body-lg max-w-3xl mx-auto">
            PDR COURT strives to establish the highest standard of quality in everything we do. We foster an environment where collaboration, innovation, and inclusivity thrive.
          </p>
        </motion.div>

        {variant === 'default' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl bg-white border border-cream-300 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-gold hover:border-primary/20">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-dark mb-2">{val.title}</h3>
                  <p className="text-xs text-ink-55 leading-relaxed">{val.text}</p>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.slice(0, 4).map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div key={val.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl bg-white border border-cream-300 p-6 transition-all hover:shadow-gold">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">{val.title}</h3>
                    <p className="text-sm text-ink-60 leading-relaxed">{val.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
