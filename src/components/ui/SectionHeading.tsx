import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-3xl mb-14 md:mb-18", alignment, className)}>
      {tag && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-950/40 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(230,154,62,0.15)]">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs uppercase font-mono tracking-widest text-amber-300 font-semibold">
            {tag}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-cream-50 leading-[1.12]">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
