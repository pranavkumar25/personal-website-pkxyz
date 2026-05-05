import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#000023",
        bone: "#FDFDF8",
        signal: "#367AFF",
        ink: "#1A1A3A",
        slate: "#3A3A55",
        sand: "#E8DFC8",
      },
      fontFamily: {
        serif: ["Ovo", "Times New Roman", "serif"],
        sans: ["LT Superior", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.025em",
        tight: "-0.018em",
        snug: "-0.012em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.16em",
        ultra: "0.2em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(.2,.8,.2,1)",
      },
      transitionDuration: {
        quick: "160ms",
        standard: "240ms",
        editorial: "600ms",
      },
      spacing: {
        "s1": "8px",
        "s2": "16px",
        "s3": "24px",
        "s4": "32px",
        "s5": "48px",
        "s6": "64px",
        "s7": "80px",
        "s8": "120px",
        "s9": "160px",
      },
      maxWidth: {
        shell: "1480px",
      },
      animation: {
        "page-fade": "pageFade 600ms cubic-bezier(.2,.8,.2,1) both",
        "pulse-soft": "pulseSoft 2.4s ease-out infinite",
        "marquee": "marquee 38s linear infinite",
      },
      keyframes: {
        pageFade: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(54,122,255,0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(54,122,255,0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
