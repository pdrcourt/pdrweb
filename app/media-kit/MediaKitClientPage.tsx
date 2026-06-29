'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Compass, Mail, Clock } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function MediaKitClientPage() {
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

  const assets = [
    {
      title: "PDR COURT Logo",
      subtitle: "Official institutional logo package",
      image: "/images/pdrcourt-logo-lowres.png",
      downloads: [
        { label: "EPS", url: "https://www.pdrcourt.com/downloads/pdrcourt-logo.eps" },
        { label: "CDR", url: "https://www.pdrcourt.com/downloads/pdrcourt-logo.cdr" },
        { label: "PNG", url: "https://www.pdrcourt.com/downloads/pdrcourt-logo.png" },
        { label: "PDF", url: "https://www.pdrcourt.com/downloads/pdrcourt-logo.pdf" }
      ]
    },
    {
      title: "Brand Graphic Seal",
      subtitle: "The Dharma Wheel & Pillar representation",
      image: "/images/pdr-court-graphic-1.png",
      downloads: [
        { label: "EPS", url: "https://www.pdrcourt.com/downloads/pdrcourt-logo-symbol-display.eps" },
        { label: "CDR", url: "https://www.pdrcourt.com/downloads/pdrcourt-logo-symbol-display.cdr" },
        { label: "PNG", url: "https://www.pdrcourt.com/downloads/pdrcourt-logo-symbol-display.png" },
        { label: "PDF", url: "https://www.pdrcourt.com/downloads/pdrcourt-logo-symbol-display.pdf" }
      ]
    },
    {
      title: "Presentation Kit",
      subtitle: "Institutional deck assets and visual guidelines",
      image: "/images/presentation.jpg",
      downloads: [
        { label: "EPS", url: "https://www.pdrcourt.com/downloads/pdrcourt-link-button.eps" },
        { label: "SVG", url: "https://www.pdrcourt.com/downloads/pdrcourt-link-button.svg" },
        { label: "PNG", url: "https://www.pdrcourt.com/downloads/pdrcourt-link-button.png" },
        { label: "PDF", url: "https://www.pdrcourt.com/downloads/pdrcourt-link-button.pdf" }
      ]
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary-950/40 z-10" />
          <img decoding="async" src="/images/business-meeting.jpg" alt="Media Kit" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Download className="w-4 h-4" />
                <span>Digital Press & Brand Package</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Kit.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                Get all essential PDR COURT logos, statements, digital assets, brand guidelines, and white papers in a unified location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Identity / Sanskrit Core Values */}
      <section className="py-20 lg:py-32 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Institutional Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mt-4 mb-6">
                The Digital Seal & Nyaya
              </h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-6 font-medium">
                {"PDR COURT is an International Arbitration Court. The Digital Seal represents justice or \"Nyaya\" in the Indic value system, incorporating the Wheel of Dharma and the Pillar of Truth."}
              </p>
              <p className="text-lg text-ink-70 leading-relaxed font-medium">
                {"Our operations embody the fundamental belief that \"Justice is established through righteousness\" ("}<span className="text-primary italic">dharmeṇa nyāyaḥ sthāpyate = धर्मेण न्यायः स्थाप्यते</span>{")."}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-cream rounded-[3rem] p-10 border border-cream-300 relative overflow-hidden shadow-xl text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <Compass className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-6 leading-relaxed">
                नास्ति सत्यसमो धर्मो न सत्याद्विद्यते परम्। <br />
                न हि तीव्रतरं किञ्चिद् नृतादिह विद्यते।।
              </h3>
              <div className="space-y-4 text-sm text-ink-80 text-left border-t border-cream-300 pt-6">
                <div>
                  <span className="text-xs font-bold text-primary uppercase block tracking-wider mb-1">Transliteration</span>
                  <p className="font-semibold italic">Nāsti Satyasamo Dharmo Na Satyādvidyate Paraṁ. Na hi Tīvrataraṁ Kiñchid Nr̥tādih Vidyate.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase block tracking-wider mb-1">English Representation</span>
                  <p className="font-semibold">There is no other righteousness like truth. Nothing is higher than truth. Nothing is more severe than a falsehood.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Assets Download Section */}
      <section className="py-20 lg:py-32 bg-cream relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Asset Packages</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mt-4">Download Institutional Material</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {assets.map((asset, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-cream-300 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                
                <div className="flex justify-center items-center h-48 bg-cream rounded-2xl p-6 mb-6 overflow-hidden">
                  <img loading="lazy" decoding="async" src={asset.image} alt={asset.title} className="max-h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">{asset.title}</h3>
                  <p className="text-xs text-ink-60 font-semibold mb-6">{asset.subtitle}</p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-6 border-t border-cream-300">
                    {asset.downloads.map((dl, dIdx) => (
                      <a key={dIdx} href={dl.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-cream-300 text-xs font-bold uppercase tracking-wider text-ink-70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
                        <Download className="w-3.5 h-3.5" />
                        {dl.label}
                      </a>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoho Queries Form */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Media Relations</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark mt-4 mb-6">Media Inquiries</h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-8">
                Submit media requests, strategic promotion materials claims, event invites, or press queries through our dedicated intake portal.
              </p>
              
              <div className="bg-cream rounded-[2.5rem] border border-cream-300 p-8 space-y-6">
                <h4 className="text-lg font-bold text-dark flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> Assistance Helpline</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-ink-50 block uppercase tracking-wider">Business Hours</span>
                    <p className="font-semibold text-ink-80">Monday - Friday | 10 AM - 5 PM</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-ink-50 block uppercase tracking-wider">Contact Channels</span>
                    <p className="font-semibold text-primary underline">legal@pdrcourt.com</p>
                    <p className="font-semibold text-dark">+91 89769 55540</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-cream rounded-[3rem] p-8 lg:p-12 border border-cream-300 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-xl font-bold text-dark mb-6 flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /> Submit Media Query</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Tel / Mobile</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <h5 className="text-sm font-bold text-dark uppercase tracking-wider mb-4">Organization & Domain</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Name of Business</label>
                      <input type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Your Position</label>
                      <input type="text" name="position" value={formData.position} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Type of Industry</label>
                      <input type="text" name="industry" value={formData.industry} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Serving Customer Size</label>
                      <input type="text" name="customerSize" value={formData.customerSize} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <label className="block text-sm font-medium text-ink-70 mb-2">Select your Reason</label>
                  <select name="reason" value={formData.reason} onChange={handleInputChange} className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium">
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
                  <label className="block text-sm font-medium text-ink-70 mb-2">Detail your Purpose / Reason here</label>
                  <textarea name="purpose" value={formData.purpose} onChange={handleInputChange} rows={4} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none text-dark font-medium" />
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} className="w-5 h-5 mt-0.5 text-primary focus:ring-primary border-cream-300 rounded" />
                    <span className="text-xs text-ink-70 leading-relaxed">I provide my consent to PDR COURT to contact me through email or Telephone.</span>
                  </label>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
                    Your request was submitted successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
                    There was an error submitting your request. Please try again.
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className="w-full btn-primary py-4 text-base">
                  {status === 'loading' ? 'Submitting...' : 'Submit Request'}
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
            // { title: "Press Release", route: "/press-release", description: "Our milestones." },
            // { title: "FAQs", route: "/faqs", description: "Platform answers." }
          ]}
          parentRoute="/media-center" 
          currentRoute="/media-kit" 
          kind="General" 
        />
      </div>
    </div>
  );
}
