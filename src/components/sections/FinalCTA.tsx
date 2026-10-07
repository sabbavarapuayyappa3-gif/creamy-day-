"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { MessageSquare, Sparkles, MapPin } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 bg-[#060913] overflow-hidden text-center">
      {/* Background warm caramel bloom */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-navy-700/30 via-amber-500/15 to-transparent blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Centered Floating Scoop Visual */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-amber-400/50 shadow-[0_0_50px_rgba(230,154,62,0.4)] mb-8 animate-scoop-float">
          <Image
            src="/images/icecream/hero-scoop.jpg"
            alt="Handcrafted Creamy Day ice cream scoop"
            fill
            className="object-cover"
          />
        </div>

        {/* Brand Tagline from Reference */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-950/40 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs uppercase font-mono tracking-widest text-amber-300 font-semibold">
            {siteConfig.tagline}
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-cream-50 tracking-tight leading-[1.1] mb-6">
          Find Your New Favorite{" "}
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-rose-400 bg-clip-text text-transparent">
            Flavor Today.
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Handcrafted treats, made to bring a little sweetness to your day. Visit our Dowlaiswaram parlor or order delivery straight to your doorstep.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            href="#menu"
            variant="primary"
            size="xl"
            withArrow
            className="w-full sm:w-auto"
            data-cursor="SCOOP"
          >
            Explore Menu &amp; Flavours
          </Button>

          <Button
            href={siteConfig.contact.whatsapp}
            isExternal
            variant="secondary"
            size="xl"
            className="w-full sm:w-auto"
            data-cursor="ORDER"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400 mr-2" />
            Order on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
