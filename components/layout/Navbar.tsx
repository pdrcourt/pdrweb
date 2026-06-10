"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navContent } from "@/data/content";
import { ChevronDown, Menu, X } from "lucide-react";

// Links shown to the RIGHT of the logo (everything else stays on the left).
const RIGHT_NAV_LABELS = new Set(["Join Us", "About"]);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white dark:bg-dark shadow-glass border-b border-cream-200 dark:border-white/10"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 relative grid grid-cols-3 items-center"
          ref={dropdownRef}
        >
          {/* ─── LEFT — Desktop nav links (hug the inner edge, toward the logo) ─── */}
          <div className="hidden md:flex items-center gap-1 whitespace-nowrap justify-self-start">
            {navContent.links.filter((l) => !RIGHT_NAV_LABELS.has(l.label)).map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-ink-70 dark:text-paper-70 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.label ? null : link.label,
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 w-56 rounded-2xl bg-white dark:bg-dark-800 shadow-gold border border-cream-200 dark:border-white/10 py-2 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-ink-70 dark:text-paper-70 hover:text-primary hover:bg-primary/5 transition-all"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-ink-70 dark:text-paper-70 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
          {/* mobile-only PDR COURT wordmark on the left */}
          <a
            href="/"
            aria-label="PDR Court — home"
            className="md:hidden justify-self-start font-brand font-bold text-lg tracking-wider bg-gold-gradient bg-clip-text text-transparent whitespace-nowrap"
          >
            PDR COURT
          </a>

          {/* ─── CENTER — empty placeholder; logo is rendered absolutely below ─── */}
          <div className="justify-self-center" aria-hidden />

          {/* ─── RIGHT — Nav links (Join Us / About) + CTAs / mobile hamburger ─── */}
          <div className="justify-self-end flex items-center gap-4 whitespace-nowrap">
            {/* Right-side nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navContent.links
                .filter((l) => RIGHT_NAV_LABELS.has(l.label))
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-ink-70 dark:text-paper-70 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
            <a
              href="/contact"
              className="hidden md:inline text-sm font-semibold text-ink-70 dark:text-paper-70 hover:text-primary transition-colors"
            >
              Log In
            </a>
            <a
              href={navContent.cta.href}
              className="hidden md:inline-flex pill-cta text-sm shadow-gold"
            >
              {navContent.cta.label}
            </a>
            <button
              id="mobile-menu-btn"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-cream-200 dark:hover:bg-dark-700 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* ─── LOGO BUBBLE — absolutely centred, overflows below the nav ─── */}
          <motion.a
            href="/"
            id="nav-logo"
            aria-label="PDR Court — home"
            className="absolute left-1/2 top-0 origin-top w-32 h-28 md:w-40 md:h-32 rounded-b-3xl hidden md:flex items-center justify-center overflow-hidden z-10"
            style={{ x: "-50%" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            {/* Background + border only on the bottom half (outside navbar), only when scrolled */}
            {scrolled && (
              <span
                aria-hidden
                className="absolute inset-0 rounded-b-3xl bg-white dark:bg-dark border-l border-r border-b border-cream-200 dark:border-white/10 pointer-events-none [clip-path:inset(56px_0_0_0)] md:[clip-path:inset(64px_0_0_0)]"
              />
            )}
            <img
              src="/images/PDR_LOGO_WITH_BG_-_Color_Dark-removebg-preview.png"
              alt="PDR Court"
              className="relative z-10 h-20 md:h-24 w-auto drop-shadow-sm"
            />
          </motion.a>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-dark/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-14 left-0 right-0 bg-white dark:bg-dark-800 shadow-glass border-b border-cream-200 dark:border-white/10 p-6 max-h-[80vh] overflow-y-auto"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Logo inside the drawer (mobile equivalent of the desktop bubble) */}
              <a
                href="/"
                onClick={() => setMobileOpen(false)}
                aria-label="PDR Court — home"
                className="flex justify-center mb-6"
              >
                <img
                  src="/images/PDR_LOGO_WITH_BG_-_Color_Dark-removebg-preview.png"
                  alt="PDR Court"
                  className="h-20 w-auto drop-shadow-sm"
                />
              </a>
              <div className="flex flex-col gap-1 mb-6">
                {navContent.links.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink-30 dark:text-paper-30">
                        {link.label}
                      </div>
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-8 pr-4 py-2.5 rounded-xl text-sm text-ink-70 dark:text-paper-70 hover:text-primary hover:bg-primary/5 transition-all"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 rounded-xl text-base font-medium text-dark dark:text-white hover:text-primary hover:bg-primary/5 transition-all"
                    >
                      {link.label}
                    </a>
                  ),   
                  
                )}
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-3 rounded-full font-semibold text-primary border border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  Log In
                </a>
                <a
                  href={navContent.cta.href}
                  onClick={() => setMobileOpen(false)}
                  className="pill-cta w-full justify-center py-3"
                >
                  {navContent.cta.label}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
