'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import Link from 'next/link';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
}

export default function ArticlesClientPage({ articles }: { articles: Article[] }) {
  return (
    <div className="bg-cream min-h-screen">
      {/* Premium Media Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-cream overflow-hidden">
        <EditorialHeroDecor />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-medium mb-8">
              <BookOpen className="w-4 h-4" />
              <span>Media Center</span>
            </div>

            <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)] mb-6">
              Articles & Resources
            </h1>

            <p className="text-lg md:text-xl text-ink-60 leading-relaxed font-light">
              Discover Alternative Dispute Resolution (ADR): A Smart, Cost-Effective Approach to Legal Matters. Explore insights that illuminate the methods, benefits, and precautions of ADR—designed to empower your decision-making in a tech-driven world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article Grid */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="section-label">Latest Insights</span>
              <h2 className="heading-lg text-dark mt-2">Article Flash</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.article 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-cream-300 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Article Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-100">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-dark text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      Article Flash
                    </span>
                  </div>
                  {/* Using standard img for broad compatibility given unknown real paths */}
                  <img
                    decoding="async"
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback gradient if image fails to load
                      e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%25" height="100%25" fill="%23f4f1eb"/%3E%3C/svg%3E';
                      e.currentTarget.className = 'w-full h-full object-cover opacity-50';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Article Content */}
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-dark leading-snug mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-ink-70 leading-relaxed mb-8 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-cream-300">
                    <Link href={article.href} className="inline-flex items-center gap-2 text-sm font-bold text-dark group-hover:text-primary transition-colors uppercase tracking-widest">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection
          links={[
            // { title: "Press Release", route: "/press-release", description: "Official announcements." },
            // { title: "Media Kit", route: "/media-kit", description: "Downloadable brand assets." },
            // { title: "Newsroom", route: "/newsroom", description: "Latest company news." }
          ]}
          parentRoute="/media-center" 
          currentRoute="/articles" 
          kind="Media" 
        />
      </div>
    </div>
  );
}
