'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Handshake, Scale, FileCheck, Award, ArrowRight } from 'lucide-react';

const defaultSteps = [
  { number: 1, title: 'Purchase', description: 'Choose to purchase the Agreement via Online/Offline options.', icon: ShoppingCart },
  { number: 2, title: 'Mutually Agreed', description: 'All parties involved must sign and accept the mutually agreed terms.', icon: Handshake },
  { number: 3, title: 'Legally Enforced', description: 'Both parties are legally bound by the Dispute Resolution Clause.', icon: Scale },
  { number: 4, title: 'Dispute Resolution', description: 'In case of a dispute, PDR COURT attains resolution, amicably.', icon: FileCheck },
  { number: 5, title: 'Award', description: 'The Award holder can enforce the Award as per the Arbitration Act, 1996.', icon: Award },
];

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessFlowSectionProps {
  steps?: Step[];
  title?: string;
  subtitle?: string;
  variant?: 'horizontal' | 'zigzag' | 'cards';
  bgColor?: 'white' | 'cream' | 'dark';
}

export default function ProcessFlowSection({
  steps,
  title = '5 Simple Steps towards Dispute Resolution',
  subtitle = 'Our Process',
  variant = 'horizontal',
  bgColor = 'white',
}: ProcessFlowSectionProps) {
  const displaySteps = steps || defaultSteps;
  const icons = [ShoppingCart, Handshake, Scale, FileCheck, Award];
  const bgClasses = { white: 'bg-white', cream: 'bg-cream', dark: 'bg-dark text-white' };

  return (
    <section className={`py-20 lg:py-28 ${bgClasses[bgColor]} relative overflow-hidden`}>
      {bgColor === 'white' && <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-transparent" />}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="section-label">{subtitle}</span>
          <h2 className={`heading-lg mb-4 ${bgColor === 'dark' ? 'text-white' : ''}`}>{title}</h2>
        </motion.div>

        {variant === 'zigzag' ? (
          <div className="space-y-8 max-w-5xl mx-auto">
            {displaySteps.map((step, index) => {
              const Icon = icons[index] || Award;
              const isEven = index % 2 === 0;
              return (
                <motion.div key={step.number}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${isEven ? '' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 rounded-2xl p-6 border transition-all hover:shadow-gold ${
                    bgColor === 'dark' ? 'bg-dark-700 border-white/10' : 'bg-white border-cream-300'
                  }`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className={`text-lg font-bold ${bgColor === 'dark' ? 'text-white' : 'text-dark'}`}>{step.title}</h3>
                    </div>
                    <p className={`text-sm leading-relaxed ${bgColor === 'dark' ? 'text-white/60' : 'text-dark/60'}`}>{step.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center text-white font-display font-bold text-lg shadow-gold">
                    {step.number}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        ) : variant === 'cards' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {displaySteps.map((step, index) => {
              const Icon = icons[index] || Award;
              return (
                <motion.div key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`relative rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-gold ${
                    bgColor === 'dark' ? 'bg-dark-700 border border-white/10' : 'bg-cream border border-cream-300'
                  }`}>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className={`font-semibold mb-2 ${bgColor === 'dark' ? 'text-white' : 'text-dark'}`}>{step.title}</h3>
                  <p className={`text-xs leading-relaxed ${bgColor === 'dark' ? 'text-white/50' : 'text-dark/55'}`}>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-4">
            {displaySteps.map((step, index) => {
              const Icon = icons[index] || Award;
              return (
                <motion.div key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`flex-1 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-gold relative ${
                    bgColor === 'dark' ? 'bg-dark-700 border border-white/10' : 'glass-card'
                  }`}>
                  {index < displaySteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5 text-primary/40" />
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-2xl font-display font-bold text-primary/20">{step.number.toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className={`font-semibold mb-2 ${bgColor === 'dark' ? 'text-white' : 'text-dark'}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${bgColor === 'dark' ? 'text-white/55' : 'text-dark/55'}`}>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
