"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "cream" | "white" | "dark" | "gold-subtle";
  padded?: boolean;
}

const bgMap: Record<string, string> = {
  cream: "bg-cream dark:bg-dark",
  white: "bg-white dark:bg-dark-800",
  dark: "bg-dark dark:bg-dark",
  "gold-subtle": "bg-gold-subtle",
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function SectionWrapper({
  children,
  id,
  className = "",
  background = "cream",
  padded = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${bgMap[background]} ${padded ? "py-16 md:py-24 lg:py-32" : ""} ${className}`}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default SectionWrapper;
