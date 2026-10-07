"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { navItems, footerCategories } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { MapPin, Phone, Mail, Clock, ArrowUp, Heart, Sparkles } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060913] text-stone-300 border-t border-navy-850/80 pt-20 pb-12 overflow-hidden">
      {/* Warm brand gold accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-amber-950/60">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="footer" />
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              {siteConfig.longDescription}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-300/90 bg-amber-950/40 border border-amber-900/50 px-3 py-1.5 rounded-lg w-fit">
              <span>🍦</span>
              <span>Handcrafted treats, made to bring a little sweetness to your day.</span>
            </div>
          </div>

          {/* Menu Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200 font-mono">
              Flavours &amp; Menu
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerCategories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600/60 group-hover:bg-amber-400 transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-amber-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Parlor (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200 font-mono">
              Visit Parlor
            </h4>
            <div className="space-y-3 text-xs text-stone-400 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.locality}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phones[0].raw}`}
                  className="hover:text-amber-300 transition-colors font-mono"
                >
                  {siteConfig.contact.phones[0].value}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.emails[0].value}`}
                  className="hover:text-amber-300 transition-colors font-mono"
                >
                  {siteConfig.contact.emails[0].value}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            Copyright &copy; {new Date().getFullYear()} Creamy Day. All rights reserved. &bull; Make The Day Happy.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-amber-950/60 text-stone-400 hover:text-white hover:border-amber-400/40 transition-all"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
