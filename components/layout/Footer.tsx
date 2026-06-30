"use client";

import { footerContent } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";

function SocialIcon({ name }: { name: string }) {
  // Inline SVGs — keep the component tree serializable (no function refs in props)
  switch (name) {
    case "LinkedIn":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "Twitter":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      );
    case "Telegram":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      );
    case "Pinterest":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0c-6.624 0-11.99 5.367-11.99 12.017 0 5.079 3.158 9.417 7.618 11.171-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-12.017C24.007 5.367 18.641.001 12.017.001z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    default:
      return <span>{name[0]}</span>;
  }
}

function TopBarForm({
  titlePrefix,
  titleAccent,
  placeholder,
  buttonLabel,
  action,
}: {
  titlePrefix: string;
  titleAccent: string;
  placeholder: string;
  buttonLabel: string;
  action: string;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 p-6 md:p-8">
      <div className="md:w-2/5">
        <h3 className="text-2xl md:text-3xl font-display leading-tight text-white">
          <span className="italic text-paper-70">{titlePrefix}</span>
          <br />
          <span className="font-bold bg-gold-gradient bg-clip-text text-transparent">
            {titleAccent}
          </span>
        </h3>
      </div>
      <form
        action={action}
        className="flex-1 min-w-0 flex items-stretch rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 min-w-0 bg-transparent px-5 py-4 text-sm text-white placeholder:text-paper-40 focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 whitespace-nowrap px-5 md:px-7 bg-gold-gradient text-white font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
        >
          {buttonLabel}
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </button>
      </form>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark dark:bg-black text-white">
      {/* Gold top accent */}
      <div className="h-px bg-gold-gradient" />

      {/* ───── TOP BAR: Request Callback + Newsletter ───── */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <TopBarForm {...footerContent.topBar.callback} />
          <TopBarForm {...footerContent.topBar.newsletter} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* ───── BRAND + LINK GRID ───── */}
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a href="/" className="inline-block mb-6 group">
              <motion.div
                className="bg-white p-4 rounded-2xl border border-white/10 shadow-lg"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/PDR_LOGO_WITH_BG_-_Color_Dark-removebg-preview.png"
                  alt={footerContent.brand.name}
                  className="w-48 h-auto"
                />
              </motion.div>
            </a>
            <p className="text-sm font-semibold text-primary mb-2">
              {footerContent.brand.tagline}
            </p>
            <p className="text-sm text-paper-50 leading-relaxed max-w-xs mb-7">
              {footerContent.brand.description}
            </p>
            {/* Social icons row */}
            <div className="flex flex-wrap items-center gap-2.5">
              {footerContent.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-paper-80 hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — 2×4 grid mirroring pvtweb */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
              {footerContent.columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-sm font-display font-bold text-primary mb-3">
                    <a href={col.titleHref} className="hover:underline">
                      {col.title}
                    </a>
                  </h4>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-[13px] text-paper-55 hover:text-primary transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ───── BOTTOM: Copyright + Regional Offices  /  Disclaimer ───── */}
        <div className="grid lg:grid-cols-12 gap-10 border-t border-white/10 pt-10">
          {/* Left: copyright + regional offices */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold text-primary">
                {footerContent.copyright}
              </p>
              <p className="text-[10px] text-paper-35 leading-relaxed mt-2">
                {footerContent.trademarkNote}
              </p>
            </div>

            {footerContent.regionalAddresses && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {footerContent.regionalAddresses.map((office) => (
                  <div key={office.zone} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-primary" />
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        {office.zone}
                      </h5>
                    </div>
                    <p className="text-[10px] text-paper-45 leading-relaxed">
                      {office.address}
                    </p>
                    {office.landmark && (
                      <p className="text-[10px] text-primary/60 font-medium">
                        Landmark — {office.landmark}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Quick contact */}
            <div className="pt-4 border-t border-white/5 text-[11px] text-paper-40 space-y-1">
              <a
                href={`mailto:${footerContent.contact.email}`}
                className="block hover:text-primary transition-colors"
              >
                {footerContent.contact.email}
              </a>
              <a
                href={`tel:${footerContent.contact.phone}`}
                className="block hover:text-primary transition-colors"
              >
                +91 {footerContent.contact.phone}
              </a>
            </div>
          </div>

          {/* Right: DISCLAIMER + Non-Discrimination + DPDP */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-3">
                Disclaimer
              </h5>
              <ol className="space-y-2 list-decimal list-inside marker:text-primary/40">
                {footerContent.legalSection.disclaimer.map((p, i) => (
                  <li
                    key={i}
                    className="text-[10px] leading-relaxed text-paper-30 text-justify"
                  >
                    {p}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-3">
                Non-Discrimination Clause
              </h5>
              <ol className="space-y-2 list-decimal list-inside marker:text-primary/40">
                {footerContent.legalSection.nonDiscrimination.map((p, i) => (
                  <li
                    key={i}
                    className="text-[10px] leading-relaxed text-paper-30 text-justify"
                  >
                    {p}
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-2">
                Digital Personal Data Protection
              </h5>
              <p className="text-[10px] leading-relaxed text-paper-40">
                {footerContent.legalSection.dataProtection}
              </p>
            </div>
          </div>
        </div>

        {/* ───── BASE bar ───── */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-paper-35">
          <span>{footerContent.copyright}</span>
          <div className="flex items-center gap-5">
            <a href="/guides" className="hover:text-primary transition-colors">
              Guides
            </a>
            <a href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="/cookie-policy" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <a href="/disclaimer" className="hover:text-primary transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
