"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import {
  ArrowDown,
  MessageSquare,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SLIDER_IMAGES = [
  { id: 1, src: "/images/icecream/mango-delight.jpg", alt: "Artisan Alphonso Mango Scoop" },
  { id: 2, src: "/images/icecream/chocolate-brownie.jpg", alt: "Belgian Chocolate Brownie Scoop" },
  { id: 3, src: "/images/icecream/strawberry-swirl.jpg", alt: "Wild Strawberry Swirl Scoop" },
  { id: 4, src: "/images/icecream/waffle-cone.jpg", alt: "Pistachio & Chocolate Waffle Cone" },
  { id: 5, src: "/images/icecream/sundae-special.jpg", alt: "Royal Parlor Sundae Special" },
  { id: 6, src: "/images/icecream/hero-scoop.jpg", alt: "Classic Madagascar Vanilla Bean" },
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide images every 2.5 seconds with 1 second smooth slide transition
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);
  };

  // Ensure background video autoplays smoothly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "tween" as const, duration: 1.0, ease: "easeInOut" as const },
        opacity: { duration: 0.8 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.97,
      transition: {
        x: { type: "tween" as const, duration: 1.0, ease: "easeInOut" as const },
        opacity: { duration: 0.8 },
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden bg-[#050813]"
    >
      {/* 1. CINEMATIC BACKGROUND VIDEO (Completely visible, bright, luscious) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/icecream/hero-scoop.jpg"
          className="w-full h-full object-cover object-center filter brightness-[1.08] contrast-[1.05] saturate-[1.15]"
        >
          <source src="/videos/icecream-scoop.mp4" type="video/mp4" />
        </video>

        {/* Text backing vignette: Dark on left behind text, transparent on right for full video visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050813]/80 via-[#050813]/40 to-[#050813]/30 lg:bg-gradient-to-r lg:from-[#050813]/92 lg:via-[#050813]/60 lg:to-transparent lg:w-[60%] pointer-events-none" />

        {/* Soft edge fades at top & bottom */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#050813]/70 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050813]/80 to-transparent pointer-events-none" />

        {/* Warm golden light glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* 2. HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Info (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Main Headline with Golden Ribbon Curve */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[1.05] tracking-tight">
                Make The Day{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                    Happy...
                  </span>
                  {/* Golden Ribbon Curve */}
                  <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-300 to-transparent rounded-full shadow-[0_0_12px_rgba(255,199,44,0.7)]" />
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg font-serif italic text-amber-200/90 tracking-wide">
                &ldquo;Pure Fresh Cream &bull; Rich Real Fruit &bull; Irresistible Flavours&rdquo;
              </p>
            </motion.div>

            {/* Authentic Brand Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-stone-200/90 font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            >
              Handcrafted in Dowlaiswaram with premium dairy milk, lush fresh fruits, and zero artificial shortcuts. Dense, creamier with less air, and bursting with joy in every scoop.
            </motion.p>

            {/* Quality Feature Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono text-stone-200"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950/70 border border-amber-400/25 backdrop-blur-md shadow-sm">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                100% Real Milk &amp; Cream
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950/70 border border-amber-400/25 backdrop-blur-md shadow-sm">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                No Added Artificial Colours
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950/70 border border-amber-400/25 backdrop-blur-md shadow-sm">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                Dense &amp; Extra Creamy
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                href="#menu"
                variant="primary"
                size="lg"
                withArrow
                className="text-base font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 shadow-[0_0_35px_rgba(255,199,44,0.45)]"
                data-cursor="SCOOP"
              >
                Explore 30+ Flavours
              </Button>

              <Button
                href={siteConfig.contact.whatsapp}
                isExternal
                variant="secondary"
                size="lg"
                className="text-base border-emerald-500/50 bg-emerald-950/50 hover:bg-emerald-900/60 text-white backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                data-cursor="ORDER"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 mr-2" />
                Quick WhatsApp Order
              </Button>
            </motion.div>

            {/* Food Trust Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-navy-800/80"
            >
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-300 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-stone-400 hidden sm:block">
                    {stat.note}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Clean, Ultra-Premium Ice Cream Slider Box (Only Images + Order Button) */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center lg:items-end w-full">
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-full max-w-sm sm:max-w-md p-3 sm:p-4 rounded-3xl bg-[#091124]/85 border border-amber-400/40 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] relative overflow-hidden space-y-3 sm:space-y-4 group"
            >
              {/* Outer Golden Ambient Sheen */}
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

              {/* SLIDING ICE CREAM IMAGE CONTAINER (1 sec smooth transition) */}
              <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-amber-400/35 shadow-[0_15px_35px_rgba(0,0,0,0.7)] bg-navy-950">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={SLIDER_IMAGES[currentIndex].src}
                      alt={SLIDER_IMAGES[currentIndex].alt}
                      fill
                      priority
                      className="object-cover object-center filter contrast-[1.05] brightness-[1.02]"
                      sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 460px"
                    />

                    {/* Subtle aesthetic gradient trim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Left / Right Arrow Controls */}
                <button
                  type="button"
                  onClick={slidePrev}
                  aria-label="Previous ice cream image"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy-950/70 border border-amber-400/40 text-amber-200 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-amber-400 hover:text-navy-950 hover:scale-110 active:scale-95 z-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={slideNext}
                  aria-label="Next ice cream image"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy-950/70 border border-amber-400/40 text-amber-200 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-amber-400 hover:text-navy-950 hover:scale-110 active:scale-95 z-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Slide Indicators / Dots */}
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 z-10 pointer-events-auto">
                  {SLIDER_IMAGES.map((img, idx) => (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      aria-label={`Go to image ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        idx === currentIndex
                          ? "w-6 bg-gradient-to-r from-amber-400 to-amber-300 shadow-[0_0_8px_rgba(255,199,44,0.8)]"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* SINGLE ORDER OPTION BUTTON */}
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-bold font-mono text-sm tracking-wide shadow-[0_4px_25px_rgba(255,199,44,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 fill-stone-950" />
                <span>Order Now</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR & SCROLL EXPLORE INDICATOR */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-200/70 pt-6 border-t border-navy-800/60">
        <div className="flex items-center gap-2 font-mono text-[11px] text-center sm:text-left">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>PARLOR OPEN TODAY &bull; 10:00 AM &ndash; 11:00 PM &bull; DOWLAISWARAM</span>
        </div>

        <a
          href="#menu"
          className="group inline-flex items-center gap-2 text-stone-300 hover:text-amber-300 transition-colors"
          aria-label="Scroll down to explore flavor menu"
        >
          <span className="font-mono uppercase tracking-widest text-[11px]">Explore Scoops</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
        </a>
      </div>
    </section>
  );
}

