"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { Sparkles, HeartHandshake, Leaf, Smile, CheckCircle } from "lucide-react";

export function QualityCraft() {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-amber-400" />,
    Leaf: <Leaf className="w-6 h-6 text-amber-400" />,
    Smile: <Smile className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="craft" className="relative py-28 md:py-36 bg-[#080D1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Uncompromising Standards"
          title="The Creamy Day"
          highlight="Quality Promise"
          subtitle="At Creamy Day, we promise quality, freshness, and service that exceeds expectations in every scoop."
          align="center"
        />

        {/* 4 Pillars Grid with Premium Food Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-8 rounded-3xl bg-navy-900/80 border border-navy-800 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-[0_10px_30px_rgba(255,199,44,0.15)] hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-950/90 border border-amber-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[pillar.icon] || <Sparkles className="w-6 h-6 text-amber-400" />}
                </div>

                <span className="font-mono text-xs font-bold text-amber-400 block mb-2">
                  0{idx + 1} &bull; PILLAR
                </span>

                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-stone-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-950/60 flex items-center gap-2 text-xs font-mono text-amber-400/80">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Artisan Standards</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Banner of Ingredients */}
        <div className="mt-16 relative rounded-3xl overflow-hidden border border-amber-900/40 bg-stone-950 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
              100% Plant-Based &amp; Dairy-Free Collection
            </span>
            <h4 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
              Delicious Flavors Made With Only the Best Plant-Based Ingredients.
            </h4>
            <p className="text-sm text-stone-300 leading-relaxed">
              Enjoy creamy, dairy-free ice cream that&apos;s both tasty and kind to the planet. Crafted from oat milk, coconut cream, and fresh fruit purees with zero loss in richness.
            </p>
          </div>

          <div className="relative w-full lg:w-72 h-48 rounded-2xl overflow-hidden border border-amber-900/40 shrink-0">
            <Image
              src="/images/icecream/strawberry-swirl.jpg"
              alt="Dairy-free ice cream swirl"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
