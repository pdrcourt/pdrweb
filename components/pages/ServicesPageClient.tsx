'use client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import CtaBanner from '@/components/sections/CtaBanner';
import ReasonsWhySection from '@/components/sections/ReasonsWhySection';
import ProcessFlowSection from '@/components/sections/ProcessFlowSection';
import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';
import { Users, Building2, Landmark, Briefcase, DollarSign, Smartphone, ArrowRight, Scale, Shield, Zap, Clock, Globe } from 'lucide-react';

const services = [
  { title: 'Individuals', desc: 'Dispute Resolution tailored for individuals — sole proprietors and independent contractors.', icon: Users, href: '/solutions/individuals', color: 'from-blue-500/10 to-primary/10' },
  { title: 'MSMEs', desc: 'Seamless, software-driven dispute resolution enhancing MSME productivity and growth.', icon: Briefcase, href: '/solutions/msmes', color: 'from-emerald-500/10 to-primary/10' },
  { title: 'Financial Institutions', desc: 'Quick, efficient dispute resolution for banks and NBFCs supporting the financial framework.', icon: Landmark, href: '/solutions/financial-institutions', color: 'from-violet-500/10 to-primary/10' },
  { title: 'Enterprises', desc: 'Seamless collaboration, extended market presence, and safeguarded brand identity.', icon: Building2, href: '/solutions/enterprise', color: 'from-amber-500/10 to-primary/10' },
  { title: 'Pricing', desc: 'Top-tier services at competitive prices through cutting-edge software and streamlined platform.', icon: DollarSign, href: '/pricing', color: 'from-rose-500/10 to-primary/10' },
  { title: 'The App', desc: 'Review testimony, evidence, and resolve disputes — all within our mobile application.', icon: Smartphone, href: '#app', color: 'from-cyan-500/10 to-primary/10' },
];

const features = [
  { icon: Scale, title: 'Impartial Justice', text: 'Parties select the arbitrator together, ensuring unbiased decisions.' },
  { icon: Shield, title: 'Legally Protected', text: 'Arbitration clauses resolve future disputes in a timely, cost-effective manner.' },
  { icon: Zap, title: 'Tech-Driven', text: 'Cutting-edge software and advanced technology enhance every process.' },
  { icon: Clock, title: '60-Day Resolution', text: 'Target resolution timeline for all arbitration cases.' },
  { icon: Globe, title: 'International Coverage', text: 'Cross-border dispute resolution across 100+ cities.' },
  { icon: Users, title: 'Expert Panel', text: 'Highly skilled professionals with years of experience in law and business.' },
];

export default function ServicesPageClient() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-cream text-dark">
        <HeroBanner variant="split" title="Our Services" titleAccent="Technology-Powered ADR" badge="Digital ADR Services"
          description="We drive success by addressing your ADR needs through our cutting-edge, technology-powered platform. From individuals to enterprises, our solutions cover every need."
          breadcrumb={['Services']} image="/images/hero-illustration.png"
          accentColor="from-primary-500 via-primary-400 to-amber-300"
          stats={[{ value: '60', label: 'Day Resolution' }, { value: '12', label: 'Languages' }, { value: '48h', label: 'SLA Response' }, { value: '100+', label: 'Cities' }]}
          tags={['Secure', 'Digital', 'Neutral', 'Fast']} />

        {/* Services Grid */}
        <section id="content" className="py-20 lg:py-28 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">What We Offer</span>
              <h2 className="heading-lg mb-4">Check Our Services</h2>
              <p className="body-lg max-w-2xl mx-auto">From individuals to large enterprises, we provide tailored ADR solutions powered by cutting-edge technology.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a key={s.title} href={s.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className={`group rounded-2xl bg-gradient-to-br ${s.color} border border-cream-300 p-7 transition-all hover:-translate-y-2 hover:shadow-gold-lg hover:border-primary/30`}>
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:shadow-gold transition-shadow">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-dark/60 leading-relaxed mb-4">{s.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="section-label">Why Choose Us</span>
                <h2 className="heading-lg mb-6">From our first handshake to the final outcome, we stand by you!</h2>
                <p className="text-dark/60 leading-relaxed mb-6">PDR COURT combines technology and expertise to analyze your requirements for the best results. Our disciplined and tech-driven approach leads us to the truth.</p>
                <p className="text-dark/60 leading-relaxed">Since our inception, we have set industry benchmarks, driven by our vision of inspiring future generations with hope and truth.</p>
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-5">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div key={f.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="rounded-2xl bg-white border border-cream-300 p-5 transition-all hover:shadow-gold hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-dark mb-1 text-sm">{f.title}</h4>
                      <p className="text-xs text-dark/55 leading-relaxed">{f.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <ProcessFlowSection variant="cards" bgColor="white" />
        <ReasonsWhySection variant="numbered" columns={5} />

        {/* Contact Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ContactForm title="Got any Questions?" subtitle="Write to us" showInformationType informationTypes={['General Inquiry', 'Service Details', 'Pricing', 'Partnership']} />
          </div>
        </section>

        <CtaBanner title="Move from uncertainty to structured resolution." subtitle="Ready for the next step?" description="File your first case today and experience the future of dispute resolution." variant="gradient" />
      </main>
      <Footer />
    </>
  );
}
