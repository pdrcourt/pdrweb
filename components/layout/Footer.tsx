"use client";

import { footerContent } from "@/data/content";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function getSocialIcon(name: string) {
  switch (name) {
    case "LinkedIn": 
      return <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
    case "Twitter": 
      return <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    case "YouTube": 
      return <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>;
    default: return <span>{name[0]}</span>;
  }
}

export function Footer() {
  return (
    <footer className="bg-dark dark:bg-black text-white">
      {/* Top Border Gold Line */}
      <div className="h-px bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand Column — spans 2 */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center text-white font-display font-bold text-base shadow-gold">
                R
              </span>
              <span className="font-display font-bold text-xl bg-gold-gradient bg-clip-text text-transparent">
                {footerContent.brand.name}
              </span>
            </a>
            <p className="text-sm font-semibold text-primary mb-2">
              {footerContent.brand.tagline}
            </p>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              {footerContent.brand.description}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {footerContent.social.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center text-sm font-bold transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getSocialIcon(s.name)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerContent.columns.map((col) => (
            <div key={col.title} className="col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="flex flex-wrap items-center gap-6 py-6 border-t border-white/10 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Mail className="text-primary" size={16} />
            <a href={`mailto:${footerContent.contact.email}`} className="hover:text-primary transition-colors">
              {footerContent.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Phone className="text-primary" size={16} />
            <a href={`tel:${footerContent.contact.phone}`} className="hover:text-primary transition-colors">
              {footerContent.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <MapPin className="text-primary" size={16} />
            <span>{footerContent.contact.address}</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>{footerContent.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
