"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { MigratedPage } from "@/lib/migrated-content";

interface Props {
  prev: MigratedPage | null;
  next: MigratedPage | null;
  /** route prefix — e.g. "/articles", "/newsroom", or "" for root-level pages */
  basePath: string;
}

function hrefFor(basePath: string, slug: string): string {
  return basePath ? `${basePath}/${slug}` : `/${slug}`;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function PrevNextNav({ prev, next, basePath }: Props) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Page navigation"
      className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10"
    >
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        {/* ── PREVIOUS (left) ── */}
        {prev ? (
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
          >
            <Link
              href={hrefFor(basePath, prev.slug)}
              className="group relative flex items-center gap-4 h-full rounded-2xl border border-cream-300 bg-white p-5 md:p-6 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-gold hover:-translate-y-0.5"
            >
              {/* gold edge accent */}
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gold-gradient scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />
              <span className="flex-shrink-0 w-11 h-11 rounded-full border border-primary/30 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent">
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-primary/70 mb-1">
                  Previous
                </span>
                <span className="block text-[15px] font-display font-semibold text-dark leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {prev.title}
                </span>
              </span>
            </Link>
          </motion.div>
        ) : (
          <span className="hidden sm:block" />
        )}

        {/* ── NEXT (right) ── */}
        {next ? (
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
          >
            <Link
              href={hrefFor(basePath, next.slug)}
              className="group relative flex items-center justify-end gap-4 h-full rounded-2xl border border-cream-300 bg-white p-5 md:p-6 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-gold hover:-translate-y-0.5"
            >
              <span className="absolute right-0 top-0 bottom-0 w-1 bg-gold-gradient scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />
              <span className="min-w-0 text-right">
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-primary/70 mb-1">
                  Next
                </span>
                <span className="block text-[15px] font-display font-semibold text-dark leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {next.title}
                </span>
              </span>
              <span className="flex-shrink-0 w-11 h-11 rounded-full border border-primary/30 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent">
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>
        ) : (
          <span className="hidden sm:block" />
        )}
      </div>
    </nav>
  );
}
