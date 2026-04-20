"use client";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "dark" | "outline";
}

export function Badge({ children, className = "", variant = "gold" }: BadgeProps) {
  const variants = {
    gold: "bg-primary/10 text-primary border border-primary/20",
    dark: "bg-dark/10 text-dark dark:bg-white/10 dark:text-white border border-dark/10 dark:border-white/10",
    outline: "bg-transparent text-primary border border-primary",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionBadge({ 
  children, 
  align = "center" 
}: { 
  children: React.ReactNode;
  align?: "start" | "center" | "end";
}) {
  const alignMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  return (
    <div className={`flex ${alignMap[align]} mb-4`}>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 border border-primary/20">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        {children}
      </span>
    </div>
  );
}

export default Badge;
