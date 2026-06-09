'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, FileText, Handshake, Scale, Award } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: React.ElementType;
}

interface ProcessStepsProps {
  steps: Step[];
  layout?: 'horizontal' | 'vertical' | 'grid';
  variant?: 'default' | 'gradient' | 'minimal';
}

export default function ProcessSteps({ steps, layout = 'horizontal', variant = 'default' }: ProcessStepsProps) {
  const iconMap: Record<number, React.ElementType> = {
    1: FileText,
    2: Handshake,
    3: Scale,
    4: CheckCircle,
    5: Award
  };

  const layoutClasses = {
    horizontal: 'flex flex-col md:flex-row gap-6 md:gap-4',
    vertical: 'flex flex-col gap-6',
    grid: 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'
  };

  const cardVariants = {
    default: 'glass-card hover:border-primary/30',
    gradient: 'bg-gradient-to-br from-primary/5 to-transparent border border-primary/10',
    minimal: 'border border-primary/20 bg-white/50 dark:bg-dark-800/50'
  };

  return (
    <div className={layoutClasses[layout]}>
      {steps.map((step, index) => {
        const Icon = step.icon || iconMap[step.number] || CheckCircle;
        
        return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${cardVariants[variant]} rounded-2xl p-6 flex-1 transition-all duration-300 relative`}
          >
            {layout === 'horizontal' && index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-primary/40" />
              </div>
            )}
            
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-3xl font-display font-bold text-primary/20">
                  {step.number.toString().padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-ink-60 dark:text-paper-60 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
