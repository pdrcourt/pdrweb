'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  category?: string;
  date?: string;
  index: number;
}

export default function CaseStudyCard({ title, description, category, date, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
    >
      {category && (
        <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-3">
          <Building2 className="w-3 h-3" />
          {category}
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-dark dark:text-white mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-dark/60 dark:text-white/60 leading-relaxed mb-4 line-clamp-3">
        {description}
      </p>
      
      <div className="flex items-center justify-between">
        {date && (
          <div className="flex items-center gap-2 text-xs text-dark/40 dark:text-white/40">
            <Calendar className="w-3 h-3" />
            {date}
          </div>
        )}
        
        <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
          Read
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
