"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productsData, menuCategories, FlavorProduct } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Heart, Sparkles, Plus, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Cups & Tubs", "Sundaes", "Special Flavours"];

  const filtered =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="relative py-28 md:py-36 bg-[#080D1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            tag="Artisanal Catalog"
            title="Explore Our"
            highlight="Flavour Menu"
            subtitle="Discover our most loved ice cream flavors, rich and creamy textures, and delicious treats made for sharing."
            align="left"
            className="mb-0"
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border",
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 border-amber-300 font-bold shadow-[0_0_20px_rgba(255,199,44,0.4)]"
                    : "bg-navy-950/80 text-stone-300 border-navy-800 hover:text-white hover:bg-navy-900"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid of Food Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-navy-900/80 border border-navy-800 hover:border-amber-400/40 transition-all duration-400 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
              data-cursor="TASTE"
            >
              {/* Product Visual Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-950 select-none">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-amber-300">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium text-amber-200/80 italic mt-0.5">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-stone-300 mt-3 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-950/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-400">
                    Fresh Churned Batch
                  </span>

                  <a
                    href={`https://api.whatsapp.com/send?phone=919168986666&text=Hello%20Creamy%20Day!%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-400/40 transition-all text-xs font-bold font-mono"
                  >
                    <span>Order Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Categories Overview Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-amber-950/60 via-stone-950/80 to-rose-950/60 border border-amber-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
              Party Orders &amp; Family Tubs
            </span>
            <h4 className="text-2xl font-display font-bold text-white">
              Planning a Birthday, Wedding, or Gathering?
            </h4>
            <p className="text-sm text-stone-300 mt-1 max-w-xl">
              We supply customized 1-liter, 2-liter, and 5-liter party tubs with scooping counters across Rajahmundry &amp; Dowlaiswaram.
            </p>
          </div>

          <Button
            href="https://api.whatsapp.com/send?phone=918832416141&text=Hello%20Creamy%20Day!%20I%20am%20inquiring%20about%20party%20orders%20and%20tubs."
            isExternal
            variant="primary"
            size="md"
            withArrow
            className="shrink-0"
          >
            Inquire Bulk Tubs
          </Button>
        </div>
      </div>
    </section>
  );
}
