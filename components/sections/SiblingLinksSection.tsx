'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { FooterPageLink } from '@/lib/footer-content';

interface SiblingLinksSectionProps {
  links: FooterPageLink[];
  parentRoute?: string;
  currentRoute: string;
  kind: string;
}

export default function SiblingLinksSection({ links, parentRoute, currentRoute, kind }: SiblingLinksSectionProps) {
  const filtered = links.filter(l => l.route !== currentRoute);
  if (filtered.length === 0) return null;
  
  return (
    <section className="py-20 lg:py-28 bg-cream border-t border-cream-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-10">
          <div>
            <span className="section-label">Related</span>
            <h2 className="heading-lg">Explore More in {kind}</h2>
          </div>
          {parentRoute && (
            <a href={parentRoute} className="btn-outline border-dark/20 text-dark hover:bg-dark hover:text-white">
              <ChevronRight className="w-4 h-4 rotate-180" /> Back to Overview
            </a>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.slice(0, 6).map((link, i) => (
            <motion.a 
              key={link.route} 
              href={link.route} 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.06 }}
              className="group rounded-2xl bg-white border border-cream-300 p-6 transition-all hover:-translate-y-1 hover:shadow-gold hover:border-primary/30"
            >
              <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">{link.title}</h3>
              <p className="text-sm text-dark/55 leading-relaxed line-clamp-2 mb-4">{link.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
