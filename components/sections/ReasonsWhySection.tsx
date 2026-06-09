'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Shield, Globe, Users, Zap, Lock, FileText, Headphones, Target, TrendingUp, Award, Languages } from 'lucide-react';

const reasons = [
  { text: 'Free from S.16 Arbitration and Conciliation Act and jurisdiction issues.', icon: Shield },
  { text: 'Old disputes are resolved at the lowest price.', icon: Clock },
  { text: 'Immense trust due to our strong brand reputation.', icon: Award },
  { text: 'No cost for conciliation and arbitration proceedings until the award is issued.', icon: Lock },
  { text: 'No formal legal education is required to file and attend sessions.', icon: FileText },
  { text: '60-day timeline to resolve all arbitration cases.', icon: Target },
  { text: 'Timely Management Information System (MIS) and reporting through our advanced software.', icon: TrendingUp },
  { text: 'Technology-driven processes enhance efficiency and transparency.', icon: Zap },
  { text: 'Comprehensive support until the execution of the award.', icon: CheckCircle2 },
  { text: 'User-friendly platform designed for ease of access and navigation.', icon: Users },
  { text: 'Digital records and documentation ensure secure and organized case management.', icon: FileText },
  { text: 'Continuous updates and notifications keep clients informed throughout the process.', icon: Headphones },
  { text: '48 Hours SLA for quick response and resolution initiation.', icon: Clock },
  { text: 'Support in 12 Indian Languages for inclusive access.', icon: Languages },
  { text: 'International Coverage for cross-border dispute resolution.', icon: Globe },
];

interface ReasonsWhySectionProps {
  variant?: 'grid' | 'stacked' | 'numbered';
  columns?: 3 | 4 | 5;
  showTitle?: boolean;
}

export default function ReasonsWhySection({ variant = 'grid', columns = 3, showTitle = true }: ReasonsWhySectionProps) {
  const colClass = {
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
    5: 'md:grid-cols-3 lg:grid-cols-5',
  };

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <span className="section-label">Why PDR COURT</span>
            <h2 className="heading-lg mb-4">
              <span className="gold-text">15</span> Reasons Why PDR COURT
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Discover what makes our platform the preferred choice for dispute resolution across India.
            </p>
          </motion.div>
        )}
        <div className={`grid grid-cols-1 ${colClass[columns]} gap-4`}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold ${
                  variant === 'numbered'
                    ? 'bg-white border border-primary/10 hover:border-primary/30'
                    : index % 5 === 0 ? 'bg-primary/10 border border-primary/20' : 'bg-white/80 border border-cream-300 hover:border-primary/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  {variant === 'numbered' ? (
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                  ) : (
                    <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <p className="text-sm text-ink-75 leading-relaxed">{reason.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
