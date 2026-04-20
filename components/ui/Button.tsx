"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  href?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-6 py-3 text-base rounded-xl gap-2",
  lg: "px-8 py-4 text-lg rounded-xl gap-2.5",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-gradient text-white shadow-gold hover:shadow-gold-lg font-semibold",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold bg-transparent",
  ghost: "text-primary hover:bg-primary/10 font-medium",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", children, className = "", href, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none";
    const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
