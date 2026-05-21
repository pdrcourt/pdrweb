'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string[];
  description?: string;
  variant?: 'default' | 'gradient' | 'dark' | 'minimal';
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumb,
  description,
  variant = 'default'
}: PageHeaderProps) {
  const variants = {
    default: 'bg-gradient-to-br from-primary/5 via-transparent to-primary/5',
    gradient: 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent',
    dark: 'bg-dark text-white',
    minimal: 'bg-transparent'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${variants[variant]} section-pad`}
    >
      <div className="container-lg">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-primary mb-6"
          >
            <Home className="w-4 h-4" />
            {breadcrumb.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                <span className={index === breadcrumb.length - 1 ? 'font-medium' : ''}>
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl"
        >
          {subtitle && (
            <span className="section-label">
              {subtitle}
            </span>
          )}
          <h1 className="heading-xl mb-6">
            {title}
          </h1>
          {description && (
            <p className="body-lg max-w-3xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
