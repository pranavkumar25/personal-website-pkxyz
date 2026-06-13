import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#000023",
        midnight2: "#0A0A2E",
        bone: "#FDFDF8",
        surface: "#F2F1E9",
        signal: "#367AFF",
        signal2: "#5C95FF",
        ink: "#1A1A3A",
        slate: "#3A3A55",
        mute: "#6A6A82",
      },
      fontFamily: {
        sans: ["Ronzino", "system-ui", "-apple-system", "sans-serif"],
        display: ["Ronzino", "system-ui", "sans-serif"],
        serif: ["Ovo", "Times New Roman", "serif"],
      },
      letterSpacing: {
        tightest: "-0.034em",
        tighter: "-0.026em",
        tight: "-0.018em",
        snug: "-0.012em",
        wide: "0.02em",
        wider: "0.04em",
        widest: "0.08em",
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        md: "14px",
        lg: "20px",
        xl: "28px",
        "2xl": "32px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(.2,.8,.2,1)",
      },
      transitionDuration: {
        quick: "160ms",
        standard: "240ms",
        editorial: "600ms",
      },
      maxWidth: {
        shell: "1320px",
        wide: "1480px",
        prose: "66ch",
      },
      animation: {
        "page-fade": "page-fade 600ms cubic-bezier(.2,.8,.2,1) both",
        "pulse-soft": "pulse-soft 2.4s ease-out infinite",
        "marquee": "marquee 38s linear infinite",
      },
      keyframes: {
        "page-fade": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(54,122,255,0.45)" },
          "50%": { boxShadow: "0 0 0 8px rgba(54,122,255,0)" },
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
