'use client';

import { motion } from 'framer-motion';

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
  description?: string;
}

interface StatsGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'gradient' | 'dark';
}

export default function StatsGrid({ stats, columns = 4, variant = 'default' }: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const cardVariants = {
    default: 'glass-card hover:border-primary/30',
    gradient: 'bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30',
    dark: 'bg-dark-800 border border-white/10 hover:border-white/20'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`${cardVariants[variant]} rounded-2xl p-6 md:p-8 transition-all duration-300`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="mb-2">
            <span className="text-4xl md:text-5xl font-display font-bold text-dark dark:text-white">
              {stat.value}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-dark/80 dark:text-white/80 mb-2">
            {stat.label}
          </h3>
          {stat.description && (
            <p className="text-sm text-dark/60 dark:text-white/60">
              {stat.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
