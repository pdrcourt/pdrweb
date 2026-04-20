"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  goldBorder?: boolean;
  glass?: boolean;
  padding?: "sm" | "md" | "lg";
  id?: string;
}

const paddingMap = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  hover = true,
  goldBorder = false,
  glass = false,
  padding = "md",
  id,
}: CardProps) {
  const base =
    "rounded-2xl transition-all duration-300 overflow-hidden";
  const bgClass = glass
    ? "bg-white/70 dark:bg-dark-800/70 backdrop-blur-md"
    : "bg-white dark:bg-dark-800";
  const borderClass = goldBorder
    ? "border border-primary/20 hover:border-primary/60"
    : "border border-cream-300 dark:border-white/10";
  const shadowClass = "shadow-glass dark:shadow-glass-dark";
  const hoverClass = hover ? "hover:-translate-y-1 hover:shadow-gold" : "";

  return (
    <motion.div
      id={id}
      className={`${base} ${bgClass} ${borderClass} ${shadowClass} ${hoverClass} ${paddingMap[padding]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Card;
