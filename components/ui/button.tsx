"use client";

import { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaVariant } from "@/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CtaVariant;
  loading?: boolean;
}

const variants: Record<CtaVariant, string> = {
  primary:
    "rounded-full bg-gradient-to-r from-[#f2d2a4] via-[#d9ab6b] to-[#b78549] text-[#1a120d] shadow-premium hover:opacity-90 active:scale-[0.99]",
  secondary:
    "rounded-full border border-gold/40 bg-white/[0.03] text-cream hover:bg-gold/10 active:scale-[0.99]",
  ghost: "rounded-full border border-transparent text-beige hover:border-gold/30 hover:text-cream",
  text: "rounded-full text-gold hover:text-cream",
  icon: "rounded-full border border-gold/35 text-gold hover:bg-gold/10"
};

export function Button({
  className,
  variant = "primary",
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
}
