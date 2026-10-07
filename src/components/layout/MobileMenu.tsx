"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, ArrowRight, MessageSquare } from "lucide-react";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] lg:hidden bg-[#0A0504]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Header row in mobile menu */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-amber-900/30">
            <Logo variant="compact" />
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-amber-100 hover:text-white transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8 flex flex-col justify-center">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between text-2xl font-display font-bold text-cream-100 hover:text-amber-400 py-2 border-b border-white/5 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-5 h-5 text-stone-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 space-y-3">
              <Button
                href={siteConfig.contact.whatsapp}
                isExternal
                onClick={onClose}
                variant="primary"
                size="lg"
                className="w-full text-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Order via WhatsApp
              </Button>
              <Button
                href="#menu"
                onClick={onClose}
                variant="outline"
                size="md"
                className="w-full text-center"
              >
                Explore Flavor Menu
              </Button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="px-6 py-6 bg-stone-950/70 border-t border-amber-900/30 text-xs text-stone-400 space-y-2">
            <div className="flex items-center gap-2 text-amber-200">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteConfig.contact.phones[0].value} (Delivery &amp; Parlor)</span>
            </div>
            <div className="flex items-start gap-2 text-stone-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>Dowlaiswaram Industrial Park, Plot C-5 &amp; C-6, E.G. Dist</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
