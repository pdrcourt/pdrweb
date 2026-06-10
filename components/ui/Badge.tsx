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
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        {children}
      </span>
    </div>
  );
}

export default Badge;
