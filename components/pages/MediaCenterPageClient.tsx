'use client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import CtaBanner from '@/components/sections/CtaBanner';
import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';
import { MessageSquare, Share2, FolderOpen, FileText, Globe, ArrowRight } from 'lucide-react';

const mediaLinks = [
  { title: 'FAQ', desc: 'Most common queries people have about our dispute resolution services.', icon: MessageSquare, href: '/faq' },
  // { title: 'Press Release', desc: 'Official press releases and announcements from PDR COURT.', icon: Share2, href: '/press-release' },
  // { title: 'Media Kit', desc: 'Brand assets, logos, and visual guidelines for media professionals.', icon: FolderOpen, href: '/media-kit' },
  // { title: 'Articles', desc: 'Articles on dispute resolution, legal tech, and industry insights.', icon: FileText, href: '/articles' },
  // { title: 'Newsroom', desc: 'Latest news, updates, and press coverage about PDR COURT.', icon: Globe, href: '/newsroom' },
];

const articles = [
  { title: 'Understanding the Digital Personal Data Protection Act, 2023', cat: 'Legal Tech', date: 'Recent' },
  { title: 'How Online Dispute Resolution is Transforming Justice', cat: 'Industry', date: 'Featured' },
  { title: 'The Role of ADR in Modern Business Relationships', cat: 'Business', date: 'Popular' },
];

export default function MediaCenterPageClient() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-cream text-dark">
        <HeroBanner variant="centered" title="Media Center" titleAccent="News, Press & Knowledge" badge="News, Press & Knowledge Hub"
          description="Stay informed with the latest news, press releases, articles, and media resources from PDR COURT. Access our media kit and brand assets for coverage."
          breadcrumb={['Media Center']} accentColor="from-stone-950 via-primary-700 to-primary-300"
          stats={[{ value: '50+', label: 'Press Mentions' }, { value: '100+', label: 'Articles' }, { value: '5+', label: 'Years Active' }, { value: '12', label: 'Languages' }]} />

        <section id="content" className="py-20 lg:py-28 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Explore</span>
              <h2 className="heading-lg mb-4">Media &amp; Press Resources</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a key={link.title} href={link.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="group rounded-2xl bg-cream border border-cream-300 p-7 transition-all hover:-translate-y-2 hover:shadow-gold-lg hover:border-primary/30 hover:bg-white">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{link.title}</h3>
                    <p className="text-sm text-ink-60 leading-relaxed mb-4">{link.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Featured</span>
              <h2 className="heading-lg mb-4">Latest from PDR COURT</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl bg-white border border-cream-300 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-gold">
                  <div className="h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-cream flex items-center justify-center">
                    <FileText className="w-12 h-12 text-primary/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1">{a.cat}</span>
                      <span className="text-xs text-ink-40">{a.date}</span>
                    </div>
                    <h3 className="font-semibold text-dark mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                    {/* <a href="/articles" className="inline-flex items-center gap-1 text-sm text-primary font-semibold mt-2">
                      Read <ArrowRight className="w-3 h-3" />
                    </a> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press CTA */}
        <section className="py-20 lg:py-28 bg-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, rgba(131,64,9,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">For Press &amp; Media Inquiries</h2>
                <p className="text-paper-60 leading-relaxed mb-6">For any press inquiries, interviews, or media coverage requests, please contact our communications team.</p>
                <div className="space-y-3">
                  <a href="mailto:legal@pdrcourt.com" className="flex items-center gap-3 text-paper-70 hover:text-primary transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center"><Globe className="w-4 h-4 text-primary" /></span>
                    legal@pdrcourt.com
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="rounded-2xl bg-white/5 border border-white/10 p-8">
                <FolderOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Download Media Kit</h3>
                <p className="text-sm text-paper-50 mb-6">Access our brand guidelines, logos, and visual assets for media use.</p>
                {/* <a href="/media-kit" className="btn-primary">Download Kit <ArrowRight className="w-4 h-4" /></a> */}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ContactForm title="Media Inquiry" subtitle="Reach out to us" showInformationType informationTypes={['Press Coverage', 'Interview Request', 'Partnership', 'General']} />
          </div>
        </section>

        <CtaBanner title="Stay Connected with PDR COURT" subtitle="Media & press" description="Follow us for the latest news, insights, and updates from the world of digital dispute resolution." variant="gradient" />
      </main>
      <Footer />
    </>
  );
}
