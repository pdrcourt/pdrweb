'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Mail, Clock, Phone } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import { motion as fm } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string[];
}

export default function FaqsClientPage() {
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const quickQuestions = [
    { q: "How much time does it take to resolve a case?", a: "It takes 60 to 90 days to resolve a case subject to the complexity and requirement of that case." },
    { q: "Is PDR COURT legal?", a: "Yes, it is legal. We work under the Arbitration & Conciliation Act." },
    { q: "What are the charges for the Dispute Resolution paper?", a: "Our charges start from Rs 100 to 2500. It depends upon the type of agreement as well as the value of that agreement." },
    { q: "How to purchase Dispute Resolution paper?", a: "You can purchase the Dispute Resolution paper online, offline, and through our mobile applications." },
    { q: "Can I purchase Dispute Resolution paper for employee/vendor contracts?", a: "Yes, you can purchase for employees and vendors as well. You can refer to the old agreement and attach that paper as an annexure." },
    { q: "Can I purchase the Dispute Resolution paper for logistics or smaller transactions?", a: "Yes, you can purchase Dispute Resolution paper for all kinds of transactions. You can get it sent and signed digitally." }
  ];

  const accordions: FAQItem[] = [
    {
      question: "What is PDR COURT?",
      answer: [
        "PDR ORGANIZATION PRIVATE LIMITED is a technical Platform, which makes available the Information Technology-based infrastructure and expert Dispute Resolution Professionals to its members as a service, for the resolution of their disputes through alternate and appropriate dispute resolution methods.",
        "The services provided by PDR ORGANIZATION PRIVATE LIMITED are out-of-the-court proceedings and are completely voluntary in nature.",
        "PDR ORGANIZATION PRIVATE LIMITED is not a law firm, and the relationship between it and its clients is not an attorney-client relationship."
      ]
    },
    {
      question: "Why PDR COURT?",
      answer: [
        "The Government of India is actively promoting arbitration due to an increase in the number of cases. The Government has made pre-mediation mandatory before you file cases in civil courts. Our digital model is highly cost-effective, swift, and secure."
      ]
    },
    {
      question: "What is PDR COURT dispute resolution paper?",
      answer: [
        "PDR COURT dispute resolution paper is for dispute resolution consent from both parties. This consent is taken when you execute any agreement, invoice, work order, or purchase order."
      ]
    },
    {
      question: "How does the Dispute Resolution paper cover your arbitration process?",
      answer: [
        "When you purchase PDR COURT Dispute Resolution Paper, it implies you have already paid for the dispute resolution process. There is no need to pay extra fees for the dispute resolution process."
      ]
    },
    {
      question: "What does the Dispute Resolution Paper cover?",
      answer: [
        "Dispute reservation paper covers conciliation and arbitration.",
        "We always focus on the resolution of the dispute via conciliation. So, generally, the disputes are resolved mostly at the level of conciliation, which is why there is seldom a need to go for arbitration in most cases.",
        "Digital communication helps both parties to understand the dispute in detail so that they can collaboratively identify the path to resolution."
      ]
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
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <fm.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <HelpCircle className="w-4 h-4" />
                <span>Instant Reference & Clarity</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Questions.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                Gain comprehensive insights on PDR COURT online mechanisms, pricing schedules, legal enforceability, and arbitrator rosters.
              </p>
            </fm.div>

            <fm.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="aspect-video bg-black rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl relative">
              <iframe 
                className="w-full h-full" 
                src="https://player.vimeo.com/video/784529338?title=0&byline=0&portrait=0" 
                allow="autoplay; fullscreen" 
                allowFullScreen
              />
            </fm.div>
          </div>
        </div>
      </section>

      {/* FAQs split columns */}
      <section className="py-20 lg:py-32 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">
            
            {/* Quick Qs Left Column */}
            <fm.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8 bg-cream p-8 rounded-[2.5rem] border border-cream-300">
              <span className="section-label">Quick Reference</span>
              <h2 className="text-3xl font-display font-bold text-dark mb-8">Rapid Answers</h2>
              
              <div className="space-y-8 divide-y divide-cream-300">
                {quickQuestions.map((q, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-6" : ""}>
                    <h4 className="text-base font-bold text-primary mb-2">{q.q}</h4>
                    <p className="text-ink-70 text-sm leading-relaxed font-medium">{q.a}</p>
                  </div>
                ))}
              </div>
            </fm.div>

            {/* Standard Accordion Right Column */}
            <fm.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="section-label">General FAQs</span>
              <h2 className="text-3xl font-display font-bold text-dark mt-4 mb-8">In-Depth Explanations</h2>
              
              <div className="space-y-4">
                {accordions.map((faq, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <div key={idx} className="bg-cream rounded-[2rem] border border-cream-300 overflow-hidden transition-all duration-300">
                      <button onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-cream-300/40 transition-colors">
                        <span className="text-lg font-bold text-dark pr-4">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${isExpanded ? 'rotate-185' : ''}`} />
                      </button>

                      <fm.div layout animate={{ height: isExpanded ? 'auto' : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-8 pb-8 space-y-4 border-t border-cream-300/50 pt-6">
                          {faq.answer.map((para, pIdx) => (
                            <p key={pIdx} className="text-ink-70 text-sm leading-relaxed font-medium">
                              {para}
                            </p>
                          ))}
                        </div>
                      </fm.div>
                    </div>
                  );
                })}
              </div>
            </fm.div>

          </div>
        </div>
      </section>

      {/* Zoho Queries Form */}
      <section className="py-20 lg:py-32 bg-cream relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <fm.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Assistance Request</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark mt-4 mb-6">Write to us</h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-8">
                If you have other questions about our custom agreements or integrations, fill out the form or dial our legal hotline.
              </p>

              <div className="bg-white rounded-[2.5rem] border border-cream-300 p-8 space-y-6 shadow-sm">
                <h4 className="text-lg font-bold text-dark flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> Support Helpline</h4>
                <div className="space-y-4 text-sm font-medium text-ink-70">
                  <p>Our team is available Monday through Friday from 10 AM to 5 PM IST (Excluding Public Holidays).</p>
                  <div className="pt-4 border-t border-cream-300 space-y-2">
                    <p className="flex items-center gap-2 text-dark font-bold"><Phone className="w-4 h-4 text-primary" /> +91 89769 55540</p>
                    <p className="flex items-center gap-2 text-primary font-bold"><Mail className="w-4 h-4 text-primary" /> legal@pdrcourt.com</p>
                  </div>
                </div>
              </div>
            </fm.div>

            <fm.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-8 lg:p-12 border border-cream-300 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-xl font-bold text-dark mb-6 flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /> Contact Details</h4>

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
                  <h5 className="text-sm font-bold text-dark uppercase tracking-wider mb-4">Organization Details</h5>
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
                  <label className="block text-sm font-medium text-ink-70 mb-2">Detail your Purpose / Reason here</label>
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
                    Your inquiry has been submitted successfully!
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
            </fm.div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Media Centre", route: "/media-center", description: "Our publications hub." },
            { title: "Newsroom", route: "/newsroom", description: "Headlines & judgments." },
            { title: "Articles", route: "/articles", description: "ADR perspectives." },
            { title: "Media Kit", route: "/media-kit", description: "Press assets." },
            { title: "Press Release", route: "/press-release", description: "Our milestones." }
          ]} 
          parentRoute="/media-center" 
          currentRoute="/faqs" 
          kind="General" 
        />
      </div>
    </div>
  );
}
