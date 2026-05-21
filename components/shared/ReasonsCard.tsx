'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Shield, Globe, Users, Zap, Lock, FileText, Headphones, Languages, Award, Target, TrendingUp } from 'lucide-react';

interface ReasonsCardProps {
  reasons: string[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'gradient' | 'numbered';
}

export default function ReasonsCard({ reasons, columns = 3, variant = 'default' }: ReasonsCardProps) {
  const iconMap: Record<string, React.ElementType> = {
    'Free from S.16': Shield,
    'Old disputes': Clock,
    'Immense trust': Award,
    'No cost': Lock,
    'No formal': FileText,
    '60-day': Target,
    'Timely Management': TrendingUp,
    'Technology-driven': Zap,
    'Comprehensive': CheckCircle2,
    'User-friendly': Users,
    'Digital records': FileText,
    'Continuous': Headphones,
    '48 Hours': Clock,
    '12 Indian': Languages,
    'International': Globe
  };

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  const cardVariants = {
    default: 'glass-card hover:border-primary/30 hover:shadow-lg',
    gradient: 'bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30',
    numbered: 'border border-primary/20 hover:border-primary/40 bg-white/50 dark:bg-dark-800/50'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {reasons.map((reason, index) => {
        const Icon = iconMap[reason.split(' ').slice(0, 2).join(' ')] || CheckCircle2;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`${cardVariants[variant]} rounded-xl p-5 transition-all duration-300`}
          >
            <div className="flex items-start gap-3">
              {variant === 'numbered' ? (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
              ) : (
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
              )}
              <p className="text-sm md:text-base text-dark/80 dark:text-white/80 leading-relaxed">
                {reason}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
