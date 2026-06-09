'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Newspaper, Calendar, ArrowUpRight, Search, Tag } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";

export interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  href: string;
}

interface Props {
  newsItems: NewsItem[];
}

export default function NewsroomClientPage({ newsItems }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = React.useMemo(() => {
    const set = new Set<string>(['All']);
    newsItems.forEach((n) => set.add(n.category));
    return Array.from(set);
  }, [newsItems]);

  const filteredNews = newsItems.filter((item) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q);
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-cream overflow-hidden border-b border-cream-300">
        <EditorialHeroDecor />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-medium mb-8">
                <Newspaper className="w-4 h-4" />
                <span>Headlines & Press Updates</span>
              </div>
              <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                PDR News
                <span className="gold-text">
                  room.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-ink-60 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                Stay updated with alternative dispute resolution news, supreme court rulings, domestic policies, and company breakthroughs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-16 pb-8 border-b border-cream-300">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-cream text-ink-70 hover:bg-cream-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-ink-40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-cream border border-cream-300 rounded-full pl-12 pr-6 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all text-dark font-medium"
              />
            </div>
          </div>

          {/* Result count */}
          <div className="text-sm text-ink-50 mb-6">
            Showing {filteredNews.length} of {newsItems.length} updates
          </div>

          {/* News Cards Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredNews.slice(0, 60).map((item) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.href}
                  className="bg-cream rounded-[2.5rem] overflow-hidden border border-cream-300 hover:shadow-2xl transition-all duration-300 flex flex-col group h-full"
                >
                  <div className="p-8 pb-0 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                      <Tag className="w-3.5 h-3.5" />
                      {item.category}
                    </span>
                    {item.date && (
                      <span className="flex items-center gap-1.5 text-xs text-ink-50 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xl font-display font-bold text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-ink-70 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>

                    <Link
                      href={item.href}
                      className="flex items-center justify-between pt-6 border-t border-cream-300 mt-auto"
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-dark group-hover:text-primary transition-colors">
                        Read Full Story
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark border border-cream-300 group-hover:bg-primary group-hover:text-white transition-all group-hover:translate-x-1">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredNews.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-cream rounded-[3rem] border border-cream-300">
              <Newspaper className="w-16 h-16 text-ink-30 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark mb-2">No Articles Found</h3>
              <p className="text-ink-60">Try refining your search terms or choosing a different filter category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection
          links={[
            { title: 'Media Centre', route: '/media-center', description: 'Our publications hub.' },
            { title: 'Articles', route: '/articles', description: 'ADR perspectives.' },
            { title: 'Media Kit', route: '/media-kit', description: 'Press assets.' },
            { title: 'Press Release', route: '/press-release', description: 'Our milestones.' },
            { title: 'FAQs', route: '/faqs', description: 'Platform answers.' },
          ]}
          parentRoute="/media-center"
          currentRoute="/newsroom"
          kind="General"
        />
      </div>
    </div>
  );
}
