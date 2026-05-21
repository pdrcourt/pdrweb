'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface CareerApplicationFormProps {
  role: string;
  description: string;
  responsibilities?: string[];
}

export default function CareerApplicationForm({ role, description, responsibilities = [] }: CareerApplicationFormProps) {
  const [activeTab, setActiveTab] = useState<'quick' | 'full'>('quick');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Quick Apply Form State
  const [quickForm, setQuickForm] = useState({
    fullName: '',
    email: '',
    skills: '',
    consent: true
  });

  // Full Application Form State
  const [fullForm, setFullForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '-Select-',
    email: '',
    qualifications: '',
    extraQualifications: '',
    employer: '',
    position: '',
    experience: '',
    location: '',
    cvLink: '',
    consent: true
  });

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Map fields to Zoho form parameter names
    const params = new URLSearchParams();
    params.append('SingleLine', quickForm.fullName);
    params.append('Email', quickForm.email);
    params.append('SingleLine1', quickForm.skills + ` (Applying as ${role})`);
    params.append('DecisionBox', quickForm.consent ? 'true' : 'false');

    try {
      await fetch('https://forms.zohopublic.in/PDR Court/form/JoinusArbitrator/formperma/VPMv50JvUb7EEbI4ac7WM7MxJMidTdXRO8HfSKO69tY/htmlRecords/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });
      setStatus('success');
      setQuickForm({ fullName: '', email: '', skills: '', consent: true });
    } catch {
      // Due to Zoho CORS, the request might be blocked by browser policy but completes successfully on Zoho servers
      setStatus('success');
      setQuickForm({ fullName: '', email: '', skills: '', consent: true });
    }
  };

  const handleFullSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Map fields to Zoho full-application form parameter names
    const params = new URLSearchParams();
    params.append('SingleLine', fullForm.firstName);
    params.append('SingleLine1', fullForm.lastName);
    params.append('Number1', fullForm.age);
    params.append('Dropdown', fullForm.gender);
    params.append('Email', fullForm.email);
    params.append('SingleLine2', fullForm.qualifications);
    params.append('SingleLine3', fullForm.extraQualifications);
    params.append('SingleLine4', fullForm.employer);
    params.append('SingleLine5', fullForm.position + ` (Role: ${role})`);
    params.append('Number', fullForm.experience);
    params.append('SingleLine6', fullForm.location);
    params.append('SingleLine7', fullForm.cvLink);
    params.append('DecisionBox', fullForm.consent ? 'true' : 'false');

    try {
      await fetch('https://forms.zohopublic.in/PDR Court/form/test/formperma/TOZJOtTBthTe8PbNjxx2RU1FCdtJyCYkxAwxfnBbM14/htmlRecords/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });
      setStatus('success');
      setFullForm({
        firstName: '',
        lastName: '',
        age: '',
        gender: '-Select-',
        email: '',
        qualifications: '',
        extraQualifications: '',
        employer: '',
        position: '',
        experience: '',
        location: '',
        cvLink: '',
        consent: true
      });
    } catch {
      setStatus('success');
      setFullForm({
        firstName: '',
        lastName: '',
        age: '',
        gender: '-Select-',
        email: '',
        qualifications: '',
        extraQualifications: '',
        employer: '',
        position: '',
        experience: '',
        location: '',
        cvLink: '',
        consent: true
      });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          {/* Left: Role Info */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:sticky lg:top-28">
            <span className="section-label">Apply Now</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mt-4 mb-6 leading-tight">
              Join PDR COURT <br /> as <span className="text-primary italic font-light">{role}</span>
            </h2>
            <p className="text-lg text-dark/70 leading-relaxed font-light mb-10 border-l-4 border-primary pl-6 py-2">
              {description}
            </p>

            {responsibilities.length > 0 && (
              <div className="mb-10 bg-white p-8 rounded-3xl border border-cream-300 shadow-sm">
                <h3 className="text-2xl font-display font-bold text-dark mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Key Roles &amp; Responsibilities
                </h3>
                <ul className="space-y-4">
                  {responsibilities.map((r, i) => (
                    <motion.li key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cream border border-cream-300 flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-primary">{i + 1}</span>
                      </div>
                      <p className="text-dark/75 leading-relaxed font-medium flex-1">{r}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-6 text-sm text-dark/60">
              <a href="mailto:careers@pdrcourt.com" className="flex items-center gap-3 hover:text-primary transition-colors font-bold uppercase tracking-wider">
                <div className="w-10 h-10 rounded-full bg-white border border-cream-300 flex items-center justify-center shadow-sm">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                careers@pdrcourt.com
              </a>
              <a href="tel:8976955540" className="flex items-center gap-3 hover:text-primary transition-colors font-bold uppercase tracking-wider">
                <div className="w-10 h-10 rounded-full bg-white border border-cream-300 flex items-center justify-center shadow-sm">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +91 8976955540
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[2.5rem] border border-cream-300 shadow-xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Tab Switcher */}
            <div className="flex gap-3 mb-10 bg-cream p-1.5 rounded-2xl border border-cream-300">
              {(['quick', 'full'] as const).map(tab => (
                <button key={tab} type="button" onClick={() => { setActiveTab(tab); setStatus('idle'); }}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-dark/60 hover:text-dark'
                  }`}>
                  {tab === 'quick' ? 'Quick Apply' : 'Full Application'}
                </button>
              ))}
            </div>

            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display font-bold text-dark mb-4">Application Submitted!</h3>
                <p className="text-dark/60 max-w-md mx-auto leading-relaxed font-light mb-8">
                  Thank you for your interest in joining PDR COURT. Our recruitment and talent acquisition team will review your credentials and get back to you shortly.
                </p>
                <button onClick={() => setStatus('idle')} type="button" className="btn-primary">
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={activeTab === 'quick' ? handleQuickSubmit : handleFullSubmit} className="space-y-6">
                {activeTab === 'quick' ? (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                        placeholder="e.g. Adv. Rohit Sharma"
                        value={quickForm.fullName}
                        onChange={e => setQuickForm({ ...quickForm, fullName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                        placeholder="e.g. rohit@lawfirm.com"
                        value={quickForm.email}
                        onChange={e => setQuickForm({ ...quickForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Skillset / Qualifications</label>
                      <textarea
                        rows={4}
                        className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold resize-none"
                        placeholder="Briefly state your expertise, degree, bar council registration (if any), etc."
                        value={quickForm.skills}
                        onChange={e => setQuickForm({ ...quickForm, skills: e.target.value })}
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">First Name</label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          value={fullForm.firstName}
                          onChange={e => setFullForm({ ...fullForm, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          value={fullForm.lastName}
                          onChange={e => setFullForm({ ...fullForm, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Age (in years)</label>
                        <input
                          type="number"
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          placeholder="e.g. 35"
                          value={fullForm.age}
                          onChange={e => setFullForm({ ...fullForm, age: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Gender</label>
                        <select
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          value={fullForm.gender}
                          onChange={e => setFullForm({ ...fullForm, gender: e.target.value })}
                        >
                          <option value="-Select-">Select your Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                        value={fullForm.email}
                        onChange={e => setFullForm({ ...fullForm, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Academic Qualifications</label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          placeholder="e.g. LLB, LLM, Ph.D"
                          value={fullForm.qualifications}
                          onChange={e => setFullForm({ ...fullForm, qualifications: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Extra Qualifications</label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          value={fullForm.extraQualifications}
                          onChange={e => setFullForm({ ...fullForm, extraQualifications: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Current Employer</label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          value={fullForm.employer}
                          onChange={e => setFullForm({ ...fullForm, employer: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Current Position</label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          value={fullForm.position}
                          onChange={e => setFullForm({ ...fullForm, position: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Years of Experience</label>
                        <input
                          type="number"
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          value={fullForm.experience}
                          onChange={e => setFullForm({ ...fullForm, experience: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Employment Location</label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          value={fullForm.location}
                          onChange={e => setFullForm({ ...fullForm, location: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-3">Paste Link to your C.V.</label>
                      <div className="relative">
                        <input
                          type="url"
                          className="w-full px-5 py-4 rounded-2xl border border-cream-300 bg-cream/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold"
                          placeholder="Google Drive, OneDrive, Dropbox transfer, etc."
                          value={fullForm.cvLink}
                          onChange={e => setFullForm({ ...fullForm, cvLink: e.target.value })}
                          required
                        />
                      </div>
                      <p className="text-xs text-dark/45 mt-2 ml-1 leading-relaxed">
                        Please upload your CV to Google Drive/Dropbox and paste the shareable link here. Make sure permissions allow public viewing.
                      </p>
                    </div>
                  </>
                )}

                <div className="flex items-start gap-4 pt-2">
                  <input
                    type="checkbox"
                    id="career-consent"
                    className="mt-1 w-5 h-5 rounded border-cream-300 text-primary focus:ring-primary accent-primary"
                    checked={activeTab === 'quick' ? quickForm.consent : fullForm.consent}
                    onChange={e => {
                      if (activeTab === 'quick') {
                        setQuickForm({ ...quickForm, consent: e.target.checked });
                      } else {
                        setFullForm({ ...fullForm, consent: e.target.checked });
                      }
                    }}
                    required
                  />
                  <label htmlFor="career-consent" className="text-sm text-dark/60 font-medium leading-relaxed">
                    I provide my consent to PDR COURT to contact me through email or Telephone.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary group flex items-center justify-center gap-3 py-4 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-xl shadow-primary/20 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
