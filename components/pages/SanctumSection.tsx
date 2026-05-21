"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Reusable "A Sanctum of Rewarding Experiences" section.
 * Drop it on any page — collaboration / partnership messaging + Let's Connect CTA.
 */
export default function SanctumSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden rounded-[2rem] bg-gold-subtle border border-primary/15 p-8 md:p-14"
        >
          <div className="pointer-events-none absolute -top-16 -right-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <span className="eyebrow mb-5">A Rewarding Partnership</span>
              <h2 className="heading-md">
                A Sanctum of{" "}
                <span className="accent-serif">Rewarding Experiences</span>
              </h2>
              <p className="mt-5 text-dark/70 leading-relaxed">
                At PDR COURT, our success is driven by a team of expert
                professionals who execute the entire ADR process. We harness
                cutting-edge technology to enhance efficiency and deliver the
                benefits of a modern platform.
              </p>
              <Link href="/contact" className="btn-primary btn-sm mt-8">
                Let&apos;s Connect
              </Link>
            </div>

            {/* pull-quote */}
            <div className="relative rounded-3xl bg-dark text-white p-8 md:p-10 overflow-hidden">
              <div className="pointer-events-none absolute -top-16 -right-12 w-56 h-56 rounded-full bg-primary/25 blur-[80px]" />
              <Quote className="w-9 h-9 text-primary/60" />
              <p className="mt-4 text-2xl md:text-3xl font-display font-semibold leading-snug">
                Our success is driven by our ability to collaborate and enable
                others to win.
              </p>
              <p className="mt-4 text-primary-300 font-semibold">
                If you succeed, we succeed.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-primary-300 hover:gap-3 transition-all"
              >
                Start a conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
