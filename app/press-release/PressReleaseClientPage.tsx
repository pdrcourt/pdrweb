'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Calendar, ArrowUpRight, Mail, Clock, Phone } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

interface PressReleaseItem {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export default function PressReleaseClientPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    position: '',
    industry: '',
    customerSize: '',
    reason: '-Select-',
    purpose: '',
    consent: true
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const releases: PressReleaseItem[] = [
    {
      title: "PDR COURT Joins Indian Council of Arbitration (ICA) as an Annual Member",
      excerpt: "We are proud to announce that PDR COURT is now an Annual Member of the prestigious Indian Council of Arbitration (ICA). Our official membership number is AY/ICA/5894.",
      date: "12 Oct 2024",
      category: "Membership"
    },
    {
      title: "Landmark Judgement by SC on Arbitration Fees",
      excerpt: "The Supreme Court of India passed a landmark judgment affirming that arbitrators do not have the power to unilaterally issue binding and enforceable orders determining their own fee parameters.",
      date: "30 Aug 2024",
      category: "Judicial Update"
    },
    {
      title: "Orissa HC Sets off Arbitral Award Allowing the Respondent's Counter Claims",
      excerpt: "In the dispute between BIMTECH, Birla Institute of Management versus Fiberfill Interiors & Construction, Orissa High Court passed critical observations on procedural set-offs.",
      date: "14 Jul 2024",
      category: "Court Ruling"
    },
    {
      title: "J&K&L High Court Allows Appeal Partially & Sets Aside Extent of Lower Judgment",
      excerpt: "Justice Sanjeev Kumar of the Jammu and Kashmir and Ladakh High Court passed a judgment in the Union of India vs M/S D.Khosla matter, detailing limitations of local tribunal scope.",
      date: "02 Jun 2024",
      category: "Tribunal Jurisdiction"
    }
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
          businessName: '',
          position: '',
          industry: '',
          customerSize: '',
          reason: '-Select-',
          purpose: '',
          consent: true
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary-950/40 z-10" />
          <img src="/images/happy-professionals-shaking-hands.jpg" alt="Press Release" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Radio className="w-4 h-4" />
                <span>Institutional Milestone Announcements</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Press <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Releases.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                Discover our corporate declarations, international alliances, book launches, key hires, and ADR policy statements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Announcements List Section */}
      <section className="py-20 lg:py-32 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Latest Updates</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mt-4">Corporate Declarations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {releases.map((item, idx) => (
              <motion.article key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-cream rounded-[2.5rem] p-8 border border-cream-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-ink-50 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-ink-70 text-sm leading-relaxed mb-6 font-medium">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-cream-300 flex justify-between items-center mt-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-dark group-hover:text-primary transition-colors">Read Details</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark border border-cream-300 group-hover:bg-primary group-hover:text-white transition-all group-hover:translate-x-1">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Zoho Queries Form */}
      <section className="py-20 lg:py-32 bg-cream relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Media Intake</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark mt-4 mb-6">Connect With Us</h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-8">
                If you wish to obtain official commentary, propose webinar partnerships, or submit news tips, write to us directly or fill out the request details.
              </p>

              <div className="bg-white rounded-[2.5rem] border border-cream-300 p-8 space-y-6 shadow-sm">
                <h4 className="text-lg font-bold text-dark flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> Support Desk</h4>
                <div className="space-y-4 text-sm font-medium text-ink-70">
                  <p>Operating Monday through Friday from 10 AM to 5 PM IST (Excluding Public Holidays).</p>
                  <div className="pt-4 border-t border-cream-300 space-y-2">
                    <p className="flex items-center gap-2 text-dark font-bold"><Phone className="w-4 h-4 text-primary" /> +91 89769 55540</p>
                    <p className="flex items-center gap-2 text-primary font-bold"><Mail className="w-4 h-4 text-primary" /> legal@pdrcourt.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-8 lg:p-12 border border-cream-300 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-xl font-bold text-dark mb-6 flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /> Personal Details</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Tel / Mobile</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <h5 className="text-sm font-bold text-dark uppercase tracking-wider mb-4">Organization & Industry</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Name of Business</label>
                      <input type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Your Position</label>
                      <input type="text" name="position" value={formData.position} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Type of Industry</label>
                      <input type="text" name="industry" value={formData.industry} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Serving Customer Size</label>
                      <input type="text" name="customerSize" value={formData.customerSize} onChange={handleInputChange} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <label className="block text-sm font-medium text-ink-70 mb-2">What kind of Information you have or looking for</label>
                  <select name="reason" value={formData.reason} onChange={handleInputChange} className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium">
                    <option value="-Select-">Select your Reason</option>
                    <option value="Access to Media & Promotion Materials">Access to Media & Promotion Materials</option>
                    <option value="Connect to team for an Event/Webinar">Connect to team for an Event/Webinar</option>
                    <option value="Get Sponsorship for a Programme/Event">Get Sponsorship for a Programme/Event</option>
                    <option value="Have a piece of news to share">Have a piece of news to share</option>
                    <option value="Publish an Article">Publish an Article</option>
                    <option value="Point to contradictory information">Point to contradictory information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-70 mb-2">Write your Purpose Here</label>
                  <textarea name="purpose" value={formData.purpose} onChange={handleInputChange} rows={4} required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none text-dark font-medium" />
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} className="w-5 h-5 mt-0.5 text-primary focus:ring-primary border-cream-300 rounded" />
                    <span className="text-xs text-ink-70 leading-relaxed">I provide my consent to PDR COURT to contact me through email or Telephone.</span>
                  </label>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
                    Your press inquiry submitted successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
                    There was an error submitting your request. Please try again.
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className="w-full btn-primary py-4 text-base">
                  {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Media Centre", route: "/media-center", description: "Our publications hub." },
            // { title: "Newsroom", route: "/newsroom", description: "Headlines & judgments." },
            // { title: "Articles", route: "/articles", description: "ADR perspectives." },
            // { title: "Media Kit", route: "/media-kit", description: "Press assets." },
            // { title: "FAQs", route: "/faqs", description: "Platform answers." }
          ]}
          parentRoute="/media-center" 
          currentRoute="/press-release" 
          kind="General" 
        />
      </div>
    </div>
  );
}
