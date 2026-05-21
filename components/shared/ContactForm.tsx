'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showOrganization?: boolean;
  showInformationType?: boolean;
  informationTypes?: string[];
  buttonText?: string;
}

export default function ContactForm({
  title = 'Got any Questions?',
  subtitle = 'Write to us',
  showOrganization = false,
  showInformationType = false,
  informationTypes = [],
  buttonText = 'Submit'
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    industry: '',
    customerSize: '',
    informationType: '',
    query: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-8 md:p-10"
    >
      <div className="mb-8">
        <h3 className="heading-lg mb-2">{title}</h3>
        <p className="body-lg text-primary">{subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-dark/60 dark:text-white/60">
          <a href="mailto:legal@pdrcourt.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            legal@pdrcourt.com
          </a>
          <a href="tel:8976955540" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +91 8976955540
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark/80 dark:text-white/80 mb-2">
              First Name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-dark-800/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark/80 dark:text-white/80 mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-dark-800/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark/80 dark:text-white/80 mb-2">
              Your Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-dark-800/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark/80 dark:text-white/80 mb-2">
              Tel / Mobile
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-dark-800/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>

        {showOrganization && (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-dark/80 dark:text-white/80 mb-2">
                Name of Business
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-dark-800/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark/80 dark:text-white/80 mb-2">
                Your Position
              </label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-dark-800/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
        )}

        {showOrganization && (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-dark/80 dark:text-white/80 mb-2">
                Type of Industry
              </label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-dark-800/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark/80 dark:text-white/80 mb-2">
                Serving Customer Size
              </label>
              <input
                type="text"
                value={formData.customerSize}
                onChange={(e) => setFormData({ ...formData, customerSize: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-dark-800/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
        )}

        {showInformationType && (
          <div>
            <label className="block text-sm font-medium text-dark/80 dark:text-white/80 mb-2">
              What type of Information you seek for
            </label>
            <select
              value={formData.informationType}
              onChange={(e) => setFormData({ ...formData, informationType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-dark-800/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            >
              <option value="">Pick type of Information</option>
              {informationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-dark/80 dark:text-white/80 mb-2">
            Write your Query Here
          </label>
          <textarea
            value={formData.query}
            onChange={(e) => setFormData({ ...formData, query: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-dark-800/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder="Write Here"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 w-4 h-4 rounded border-primary/20 text-primary focus:ring-primary"
            required
          />
          <label htmlFor="consent" className="text-sm text-dark/60 dark:text-white/60">
            I provide my consent to PDR COURT to contact me through email or Telephone.
          </label>
        </div>

        <button
          type="submit"
          className="w-full btn-primary justify-center pl-2"
        >
          {buttonText}
        </button>
      </form>
    </motion.div>
  );
}
