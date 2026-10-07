"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productsData, FlavorProduct } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { Sparkles, MessageSquare, Flame, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function SignatureScoop() {
  const [activeFlavor, setActiveFlavor] = useState<FlavorProduct>(productsData[0]);

  return (
    <section id="signature" className="relative py-28 md:py-36 bg-[#060913] overflow-hidden">
      {/* Dynamic Background Glow changing according to selected flavor */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b transition-colors duration-1000 pointer-events-none opacity-40",
          activeFlavor.bgGradient
        )}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Artisan Flavor Laboratory"
          title="The Anatomy Of Our"
          highlight="Signature Scoop"
          subtitle="Explore the handcrafted layers, rich creaminess, and real fruit inclusions that define Creamy Day."
          align="center"
        />

        {/* Flavor Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {productsData.map((flavor) => {
            const isSelected = flavor.id === activeFlavor.id;
            return (
              <button
                key={flavor.id}
                onClick={() => setActiveFlavor(flavor)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 border flex items-center gap-2",
                  isSelected
                    ? "bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 border-amber-300 font-bold shadow-[0_0_25px_rgba(255,199,44,0.6)] scale-105"
                    : "bg-navy-950/80 text-stone-300 border-navy-800 hover:text-white hover:border-amber-400/40"
                )}
                data-cursor="TASTE"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: flavor.accentColor }}
                />
                <span>{flavor.name.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Big Spotlight Interactive Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-stone-950/80 border border-amber-900/40 p-8 sm:p-12 md:p-16 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual: High-Res Macro Scoop with Smooth AnimatePresence (6 cols) */}
            <div className="lg:col-span-6 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFlavor.id}
                  initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotate: 4 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-[280px] sm:w-[360px] md:w-[420px] aspect-square rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl group select-none"
                  data-cursor="SCOOP"
                >
                  <Image
                    src={activeFlavor.image}
                    alt={activeFlavor.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 450px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Flavor Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-amber-300">
                    {activeFlavor.badge}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Flavor Details & Tasting Profile (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold block mb-2">
                  {activeFlavor.category}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
                  {activeFlavor.name}
                </h3>
                <p className="text-sm font-medium text-amber-200/90 italic mt-1">
                  &ldquo;{activeFlavor.tagline}&rdquo;
                </p>
              </div>

              <p className="text-base text-stone-300 leading-relaxed">
                {activeFlavor.description}
              </p>

              {/* Verified Natural Ingredients */}
              <div className="pt-4 border-t border-amber-950/80 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold block">
                  Pure Ingredients In Sourcing
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeFlavor.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="inline-flex items-center gap-1.5 text-xs text-amber-100 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-lg"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Calorie / Portion Note */}
              {activeFlavor.calories && (
                <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                  <Flame className="w-4 h-4 text-rose-400" />
                  <span>Portion Energy: {activeFlavor.calories}</span>
                </div>
              )}

              {/* Order Action */}
              <div className="pt-2">
                <Button
                  href={`https://api.whatsapp.com/send?phone=919168986666&text=Hello%20Creamy%20Day!%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(activeFlavor.name)}.`}
                  isExternal
                  variant="primary"
                  size="md"
                  withArrow
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Order {activeFlavor.name.split("&")[0]}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
