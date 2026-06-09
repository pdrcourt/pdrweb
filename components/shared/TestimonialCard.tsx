'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Building2 } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
  index: number;
}

export default function TestimonialCard({ quote, author, role, company, rating = 5, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 md:p-8 relative"
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
      
      <div className="mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary inline" />
        ))}
      </div>
      
      <p className="text-ink-80 dark:text-paper-80 leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
          <span className="text-lg font-bold text-primary">
            {author.charAt(0)}
          </span>
        </div>
        
        <div>
          <h4 className="font-semibold text-dark dark:text-white">
            {author}
          </h4>
          <p className="text-sm text-ink-60 dark:text-paper-60">
            {role}
          </p>
          {company && (
            <div className="flex items-center gap-1 text-xs text-primary mt-1">
              <Building2 className="w-3 h-3" />
              {company}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
