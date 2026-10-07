"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "taste">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 1024
    ) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "TASTE";
        setCursorText(text);
        setCursorVariant("taste");
        return;
      }

      const interactive = target.closest("a, button, input, [role='button']");
      if (interactive) {
        setCursorText("");
        setCursorVariant("hover");
        return;
      }

      setCursorText("");
      setCursorVariant("default");
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      x: position.x - 6,
      y: position.y - 6,
      width: 12,
      height: 12,
      backgroundColor: "#E69A3E",
    },
    hover: {
      x: position.x - 22,
      y: position.y - 22,
      width: 44,
      height: 44,
      backgroundColor: "rgba(230, 154, 62, 0.2)",
      border: "1.5px solid rgba(245, 180, 103, 0.8)",
    },
    taste: {
      x: position.x - 36,
      y: position.y - 36,
      width: 72,
      height: 72,
      backgroundColor: "rgba(230, 154, 62, 0.95)",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(230,154,62,0.5)]"
      animate={cursorVariant}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 28,
        mass: 0.5,
      }}
    >
      {cursorText && (
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#0C0605] uppercase select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
