"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { Menu, Phone, MessageSquare, Sparkles } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar in Royal Navy & Gold */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-amber-300 text-[11px] font-medium py-1.5 px-4 overflow-hidden relative z-50 select-none border-b border-amber-400/25">
        <div className="flex items-center justify-center gap-6 whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-8 animate-ticker">
            {siteConfig.announcements.concat(siteConfig.announcements).map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span>{item}</span>
                <span className="opacity-40">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-40 transition-all duration-400 ease-out",
          isScrolled
            ? "py-3 bg-[#060913]/95 backdrop-blur-xl border-b border-navy-800/80 shadow-[0_10px_30px_rgba(6,9,19,0.85)]"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-navy-950/80 border border-amber-400/25 backdrop-blur-md px-5 py-2 rounded-full shadow-inner">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-3.5 py-1.5 text-xs font-semibold text-stone-200 hover:text-amber-300 transition-colors duration-200 group"
                >
                  <span>{item.label}</span>
                  {/* Subtle hover golden underline */}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-400 to-amber-200 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
              ))}
            </nav>

            {/* Desktop Action & Phone */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phones[0].raw}`}
                className="hidden xl:flex items-center gap-2 text-xs font-mono text-amber-200/90 hover:text-amber-300 transition-colors py-2 px-3 rounded-full hover:bg-white/5 border border-transparent hover:border-navy-700"
                title="Direct Parlor & Delivery Hotline"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>{siteConfig.contact.phones[0].value}</span>
              </a>

              <Button
                href={siteConfig.contact.whatsapp}
                isExternal
                variant="primary"
                size="sm"
                className="text-xs uppercase tracking-wider font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 shadow-[0_0_20px_rgba(255,199,44,0.35)]"
                data-cursor="ORDER"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                Order Online
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-navy-900/80 border border-amber-400/30 text-amber-200 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
