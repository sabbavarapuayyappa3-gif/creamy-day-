"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Heart, Sparkles, Leaf, Users, CheckCircle2 } from "lucide-react";

export function BrandStory() {
  return (
    <section id="story" className="relative py-28 md:py-36 bg-[#060913] overflow-hidden">
      {/* Warm Ambient Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Our Sweet Heritage"
          title="Began With A"
          highlight="Simple Dream"
          subtitle="Born from a deep passion to craft the finest, most heartwarming ice cream experience."
          align="left"
        />

        {/* Large Editorial Quotation */}
        <div className="mb-16 md:mb-20">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-cream-50 leading-[1.25] tracking-tight max-w-5xl">
            &ldquo;Every batch is made with love and attention to detail, ensuring{" "}
            <span className="text-amber-400 font-bold underline decoration-amber-400/40 underline-offset-8">
              unmatched quality and freshness
            </span>{" "}
            in every single scoop.&rdquo;
          </blockquote>
        </div>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Grid of Waffle Cones & Sundaes (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden border-2 border-amber-900/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group select-none">
              <Image
                src="/images/icecream/waffle-cone.jpg"
                alt="Creamy Day Artisanal Waffle Cones and Handcrafted Scoops"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quality Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-stone-950/85 backdrop-blur-xl border border-amber-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold block">
                    Small Batch Artisans
                  </span>
                  <span className="text-sm font-bold text-white">
                    Dowlaiswaram, East Godavari District
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                  🍦
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Story Narrative from Reference (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-3 p-2 px-3 rounded-2xl bg-white shadow-lg border border-amber-300/60">
              <Image
                src="/images/brand/creamy-day-logo-clean.png"
                alt="Creamy Day Official Logo"
                width={120}
                height={56}
                className="h-9 w-auto object-contain"
              />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-800 border-l border-stone-200 pl-3">
                Since Day One
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
              Our Mission is to Create Joyful Moments.
            </h3>

            <p className="text-base text-stone-300 leading-relaxed">
              Creamy Day was born from a passion to craft the finest ice cream experience. Using only premium, natural ingredients sourced from trusted suppliers, we create handcrafted flavors that range from timeless classics to innovative seasonal creations. Every batch is made with love and attention to detail, ensuring unmatched quality and freshness in every scoop.
            </p>

            <p className="text-base text-stone-300 leading-relaxed">
              At Creamy Day, we believe everyone deserves to enjoy exceptional ice cream. That&apos;s why we offer a diverse selection including dairy-free, vegan, and gluten-free options, ensuring that every guest finds their perfect treat.
            </p>

            <p className="text-sm text-amber-200/90 leading-relaxed italic border-l-2 border-amber-400 pl-4 py-1">
              &ldquo;We strive to provide a warm, welcoming space where families, friends, and ice cream lovers of all ages can gather, celebrate life&apos;s sweet moments, and create cherished memories together.&rdquo;
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-amber-950/60">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-950/80 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Inclusive Treats</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Dairy-free, vegan, and gluten-free choices for everyone.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-950/80 border border-rose-500/30 flex items-center justify-center shrink-0 text-rose-400 mt-1">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Crafted With Love</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Fresh milk, pure cream, real fruits, and zero shortcuts.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button href="#contact" variant="primary" size="md" withArrow>
                Visit Our Dowlaiswaram Parlor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
