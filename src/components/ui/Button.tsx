"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "strawberry";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      withArrow = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
      xl: "px-9 py-5 text-lg",
    };

    const variantClasses = {
      primary:
        "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-semibold shadow-[0_0_25px_rgba(230,154,62,0.4)] hover:shadow-[0_0_35px_rgba(245,180,103,0.6)] hover:scale-[1.02] border border-amber-400/40",
      secondary:
        "bg-stone-900/90 text-amber-100 font-medium hover:bg-stone-800 border border-stone-700/80 hover:border-amber-400/50 shadow-lg backdrop-blur-md hover:scale-[1.02]",
      outline:
        "bg-transparent text-amber-200 hover:text-white border border-amber-400/40 hover:border-amber-300 hover:bg-amber-500/10 backdrop-blur-sm",
      strawberry:
        "bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold shadow-[0_0_25px_rgba(225,29,72,0.4)] hover:shadow-[0_0_35px_rgba(251,113,133,0.6)] hover:scale-[1.02] border border-rose-400/40",
    };

    const baseClasses = cn(
      "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out select-none active:scale-[0.98] overflow-hidden",
      sizeClasses[size],
      variantClasses[variant],
      className
    );

    const content = (
      <>
        {/* Shimmer sweep */}
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none"
          aria-hidden="true"
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {withArrow && (
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </span>
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseClasses} onClick={onClick} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
