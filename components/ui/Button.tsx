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
  md: "px-7 py-3.5 text-base rounded-xl gap-2",
  lg: "px-8 py-4 text-lg rounded-xl gap-2.5",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "text-primary hover:bg-primary/5 font-medium transition-colors",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", children, className = "", href, ...props },
    ref
  ) => {
    const base = "inline-flex items-center justify-center transition-all duration-300 cursor-pointer select-none group";
    const classes = `${base} ${variant === 'ghost' ? sizeClasses[size] : ''} ${variantClasses[variant]} ${className}`;

    const MotionComponent = href ? motion.a : motion.button;
    
    return (
      <MotionComponent
        // @ts-expect-error - ref type mismatch between button and anchor
        ref={ref}
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

Button.displayName = "Button";
export default Button;
