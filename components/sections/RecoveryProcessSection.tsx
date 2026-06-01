'use client';

import { motion } from 'framer-motion';
import { Eye, FileSearch, Handshake, MessageSquare, FileText, Award } from 'lucide-react';

const defaultSteps = [
  { number: 1, title: 'Study', description: 'A complete study of all documents.', icon: Eye },
  { number: 2, title: 'Assessment', description: 'Assessment of the payment history of the client to establish intent.', icon: FileSearch },
  { number: 3, title: 'Negotiation', description: 'Negotiations based on legal grounds applicable on a case-to-case basis.', icon: Handshake },
  { number: 4, title: 'Discussions', description: 'Pre-negotiation discussions with both sides to assess possible settlement terms.', icon: MessageSquare },
  { number: 5, title: 'Documentation', description: 'Professional teams ensure proper documentation and acceptance of settlement.', icon: FileText },
  { number: 6, title: 'Award', description: 'Follow-up and implementation of the award.', icon: Award },
];

interface RecoveryStep {
  number: number;
  title: string;
  description: string;
}

interface RecoveryProcessSectionProps {
  steps?: RecoveryStep[];
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function RecoveryProcessSection({
  steps,
  title = 'Our 360-Degree Recovery Process',
  subtitle = 'Our Methodology',
  description = 'We understand that resolving disputes involves complex, multifaceted strategies that prioritize human needs. The PDR COURT team has developed a unique, step-by-step process designed for quick and effective settlements.',
}: RecoveryProcessSectionProps) {
  const displaySteps = steps || defaultSteps;
  const icons = [Eye, FileSearch, Handshake, MessageSquare, FileText, Award];

  return (
    <section className="py-20 lg:py-28 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(131,64,9,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(131,64,9,0.3), transparent 40%)',
      }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(131,64,9,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(131,64,9,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            {subtitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">{description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySteps.map((step, index) => {
            const Icon = icons[index] || Award;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-primary/40 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { text: 'Our solution-based methodology consists of three to five stages, tailored to each dispute\'s specifics.' },
            { text: 'With intensive training, our team cultivates empathetic insights to address complex scenarios.' },
            { text: 'Leveraging advanced technology, our platform provides seamless support and transparency at every stage.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-primary/10 border border-primary/20 p-5">
              <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
