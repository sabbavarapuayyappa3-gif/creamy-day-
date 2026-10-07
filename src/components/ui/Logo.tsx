"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "compact" | "footer";
  href?: string;
}

export function Logo({
  className,
  variant = "default",
  href = "/",
}: LogoProps) {
  const isCompact = variant === "compact";
  const isFooter = variant === "footer";

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center select-none transition-all duration-300 active:scale-95",
        className
      )}
      aria-label="Creamy Day - Make The Day Happy"
    >
      {/* Official Master Transparent Brand Logo */}
      <div
        className={cn(
          "relative flex items-center justify-center transition-all duration-300",
          "filter drop-shadow-[0_4px_16px_rgba(255,199,44,0.35)] group-hover:drop-shadow-[0_6px_28px_rgba(255,199,44,0.65)] group-hover:scale-[1.03]"
        )}
      >
        <Image
          src="/images/brand/creamy-day-dark-theme.png"
          alt="Creamy Day - Make The Day Happy"
          width={isCompact ? 115 : isFooter ? 190 : 145}
          height={isCompact ? 69 : isFooter ? 114 : 87}
          priority
          className={cn(
            "w-auto object-contain transition-transform duration-300",
            isCompact ? "h-9" : isFooter ? "h-16" : "h-11 sm:h-12"
          )}
        />
      </div>
    </Link>
  );
}
