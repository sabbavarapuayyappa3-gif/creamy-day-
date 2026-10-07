import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: {
          50: "#FFFDF9",
          100: "#FFF8F0",
          200: "#FDF0DE",
          300: "#FCE2C2",
          400: "#F8CCA0",
          500: "#F2B276",
        },
        navy: {
          950: "#060913",
          900: "#0A1128",
          850: "#0D1636",
          800: "#111C44",
          700: "#1B2474", // Logo primary blue
          600: "#24328E",
          500: "#3244B8",
        },
        gold: {
          300: "#FFE485",
          400: "#FFD166",
          500: "#FFC72C", // Logo yellow/gold
          600: "#F59E0B",
          700: "#D97706",
        },
        caramel: {
          DEFAULT: "var(--caramel)",
          hover: "#D48227",
          light: "#F5B467",
        },
        strawberry: {
          DEFAULT: "var(--strawberry)",
          light: "#FB7185",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"],
      },
      animation: {
        "scoop-float": "scoopFloat 5s ease-in-out infinite",
        "drip-pulse": "dripPulse 4s ease-in-out infinite",
        "ticker": "ticker 25s linear infinite",
      },
      keyframes: {
        scoopFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1.5deg)" },
        },
        dripPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
