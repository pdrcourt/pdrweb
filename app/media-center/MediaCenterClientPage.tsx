'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  BookOpen, 
  Download, 
  Radio, 
  HelpCircle, 
  Mail, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function MediaCenterClientPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    infoSeekType: '-Select-',
    query: '',
    consent: true
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const mediaRoutes: { title: string; description: string; href: string; icon: typeof Newspaper }[] = [
    // {
    //   title: "Newsroom",
    //   description: "Get the Top Headlines on Alternate Dispute Resolution from across the globe, Supreme Court Judgements, settlements, and updates.",
    //   href: "/newsroom",
    //   icon: Newspaper
    // },
    // {
    //   title: "Articles",
    //   description: "Get an insight into Alternative Dispute Resolution (ADR) as a sensible, cost-effective method to resolve commercial and legal matters.",
    //   href: "/articles",
    //   icon: BookOpen
    // },
    // {
    //   title: "Media Kit",
    //   description: "Our comprehensive Media Kit is specially designed for journalists, partners, and media professionals wishing to feature our ADR progress.",
    //   href: "/media-kit",
    //   icon: Download
    // },
    // {
    //   title: "Press Release",
    //   description: "Stay updated on our latest institutional announcements, PAN India events, strategic partnerships, and milestones.",
    //   href: "/press-release",
    //   icon: Radio
    // },
    // {
    //   title: "FAQs",
    //   description: "Find instant answers to common questions about PDR COURT arbitration, mediation processes, fees, and membership advantages.",
    //   href: "/faqs",
    //   icon: HelpCircle
    // }
  ];

  const valuePoints = [
    { title: "Get Legally Protected", desc: "We help Individuals & Organisations secure their Business against any future conflict with robust legal frameworks." },
    { title: "Impartial & Unbiased Justice", desc: "Our platform lets parties select neutrals collaboratively, guaranteeing complete impartiality." },
    { title: "Secure your Deals", desc: "Embedding our model ADR clause into contracts resolves commercial disputes in a swift, cost-effective manner." },
    { title: "Business Continuity", desc: "Preserve business relationships by solving commercial disputes early, cleanly, and out of public courts." },
    { title: "Trust & Conviction", desc: "PDR COURT ensures effective enforcement and transparent administration matching high-value claims." }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch("https://webhook.pdrcourt.com/getFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ jsonString: formData })
      });
      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          infoSeekType: '-Select-',
          query: '',
          consent: true
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary-950/40 z-10" />
          <img src="/images/young-happy-businessman-using-digital-tablet.jpg" alt="Media Hub" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Radio className="w-4 h-4" />
                <span>Passage to Global Business</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Centre.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                Our ADR platform facilitates global connections, paving the way for transparent reporting and resource access for members worldwide.
              </p>
              
              <div className="flex gap-4">
                <a href="#discover" className="btn-primary">
                  Discover Modules
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid of Modules */}
      <section id="discover" className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Explore Resources</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mt-4">PDR COURT Publications & News</h2>
            <p className="mt-6 text-lg text-ink-70 max-w-2xl mx-auto leading-relaxed">
              Study all aspects of our Online Dispute Resolution platform, including the latest legal advancements, announcements, and FAQs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaRoutes.map((route, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1 }}>
                <Link href={route.href} className="group flex flex-col h-full bg-cream p-8 rounded-[2rem] border border-cream-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-cream-300 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                    <route.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {route.title}
                  </h3>
                  <p className="text-ink-70 leading-relaxed mb-6 flex-1 text-sm">
                    {route.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-dark uppercase tracking-widest group-hover:text-primary transition-colors pt-4 border-t border-cream-300">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask Us Form */}
      <section className="py-20 lg:py-32 bg-cream border-t border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Ask Us</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark mt-4 mb-6">Have Questions?</h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-8">
                Write to us at <a href="mailto:legal@pdrcourt.com" className="text-primary font-bold underline">legal@pdrcourt.com</a> or fill out the query form for immediate support.
              </p>
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img src="/images/young-professional-girl.jpg" alt="Professional Representative" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl border border-cream-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-xl font-bold text-dark mb-6 flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /> Personal Details</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Tel / Mobile</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <label className="block text-sm font-medium text-ink-70 mb-2">What type of Information do you seek?</label>
                  <select name="infoSeekType" value={formData.infoSeekType} onChange={handleInputChange} className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
                    <option value="-Select-">Pick type of Information</option>
                    <option value="Related to Arbitration">Related to Arbitration</option>
                    <option value="PDR COURT Process & Benefits">PDR COURT Process & Benefits</option>
                    <option value="Pricing Information">Pricing Information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-70 mb-2">Write your Query Here</label>
                  <textarea name="query" value={formData.query} onChange={handleInputChange} rows={4} required placeholder="State your requirements..." className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" />
                </div>

                <div className="border-t border-cream-300 pt-6 space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} className="w-5 h-5 mt-0.5 text-primary focus:ring-primary border-cream-300 rounded" />
                    <span className="text-xs text-ink-70 leading-relaxed">I provide my consent to PDR COURT to contact me through email or Telephone.</span>
                  </label>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
                    Your query has been submitted successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
                    There was an error submitting your query. Please try again.
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className="w-full btn-primary py-4 text-base">
                  {status === 'loading' ? 'Submitting...' : 'Submit Query'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explainer video placeholder */}
      <section className="py-20 lg:py-32 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label mx-auto">Video Tour</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mt-4 mb-6">See PDR COURT in Action</h2>
          <p className="text-lg text-ink-70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Experience dispute resolution designed for modern business operations. Watch our brief platform walk-through video.
          </p>

          <div className="aspect-video bg-dark rounded-[2.5rem] overflow-hidden shadow-2xl relative group border-4 border-cream-300">
            <iframe 
              className="w-full h-full" 
              src="https://player.vimeo.com/video/784529338?title=0&byline=0&portrait=0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Unique Positioning</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mt-4">Why Businesses Trust Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePoints.map((pt, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-cream-300 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <CheckCircle2 className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-bold text-dark mb-4">{pt.title}</h3>
                <p className="text-ink-70 text-sm leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download app section */}
      <section className="py-20 lg:py-32 bg-white relative border-t border-cream-300 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-dark text-white rounded-[3rem] p-8 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-6">
                  <Smartphone className="w-4 h-4" />
                  <span>The Mobile App</span>
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Download the PDR COURT App</h2>
                <p className="text-paper-70 leading-relaxed mb-8">
                  Get real-time case notifications, upload evidence directly from your device, and review hearing outcomes securely. Designed for both claimants and empaneled neutrals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#play-store" className="hover:scale-105 transition-transform">
                    <img src="/images/googleplay.png" alt="Google Play" className="h-12 w-auto" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </a>
                  <a href="#app-store" className="hover:scale-105 transition-transform">
                    <img src="/images/appstore.png" alt="App Store" className="h-12 w-auto" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream border-t border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h4 className="text-2xl font-display font-bold text-dark mb-2">Access the Newsroom</h4>
            <p className="text-ink-70">Read major alternate dispute resolution stories globally.</p>
          </div>
          {/* <Link href="/newsroom" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-dark text-white font-bold hover:bg-primary transition-colors">
            Go to Newsroom <ArrowRight className="w-5 h-5" />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
