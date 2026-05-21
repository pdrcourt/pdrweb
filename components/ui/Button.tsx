"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "outline" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  secondary: "btn-secondary",
  ghost:
    "inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-2.5 transition-all px-2 py-1",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", children, className = "", href, ...props },
    ref,
  ) => {
    const sizeClass = size === "sm" && variant !== "ghost" ? "btn-sm" : "";
    const classes = `${variantClasses[variant]} ${sizeClass} ${className}`.trim();

    const MotionComponent = href ? motion.a : motion.button;

    return (
      <MotionComponent
        // @ts-expect-error - ref type mismatch between button and anchor
        ref={ref}
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  },
);

Button.displayName = "Button";
export default Button;
