"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Menu, X } from "lucide-react";

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
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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
            ? "bg-white/90 dark:bg-dark/90 backdrop-blur-xl shadow-glass border-b border-cream-200 dark:border-white/10"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between" ref={dropdownRef}>
          {/* Logo */}
          <a
            href="/"
            id="nav-logo"
            className="flex items-center gap-2 font-display font-bold text-xl text-dark dark:text-white"
          >
            <span className="w-8 h-8 rounded-lg bg-gold-gradient flex items-center justify-center text-white text-sm font-bold shadow-gold">
              P
            </span>
            <span className="bg-gold-gradient bg-clip-text text-transparent">{navContent.brand}</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navContent.links.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-dark/70 dark:text-white/70 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === link.label ? null : link.label)
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
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-dark/70 dark:text-white/70 hover:text-primary hover:bg-primary/5 transition-all"
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
                  className="px-4 py-2 rounded-lg text-sm font-medium text-dark/70 dark:text-white/70 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contact"
              className="text-sm font-medium text-dark/60 dark:text-white/60 hover:text-primary transition-colors"
            >
              Log In
            </a>
            <Button href={navContent.cta.href} size="sm" variant="primary">
              {navContent.cta.label}
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-cream-200 dark:hover:bg-dark-700 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
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
            <div className="absolute inset-0 bg-dark/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute top-16 left-0 right-0 bg-white dark:bg-dark-800 shadow-glass border-b border-cream-200 dark:border-white/10 p-6 max-h-[80vh] overflow-y-auto"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col gap-1 mb-6">
                {navContent.links.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-dark/30 dark:text-white/30">
                        {link.label}
                      </div>
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-8 pr-4 py-2.5 rounded-xl text-sm text-dark/70 dark:text-white/70 hover:text-primary hover:bg-primary/5 transition-all"
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
                  )
                )}
              </div>
              <div className="flex flex-col gap-3">
                <Button href="/#contact" variant="outline" className="w-full justify-center">Log In</Button>
                <Button href={navContent.cta.href} variant="primary" className="w-full justify-center">{navContent.cta.label}</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
