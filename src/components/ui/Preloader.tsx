"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("creamy_loaded");
    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    const duration = 750; // Ultra-fast under 1 second
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem("creamy_loaded", "true");
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#0C0605] text-cream-50"
        >
          {/* Warm Caramel Glow */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-amber-500/15 filter blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Logo />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-52 h-[3px] bg-stone-900 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-rose-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <div className="flex items-center justify-between w-52 font-mono text-[11px] text-amber-200/70">
              <span className="tracking-widest uppercase">Loading Sweetness...</span>
              <span className="font-semibold text-white">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
