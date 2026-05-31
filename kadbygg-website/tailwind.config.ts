import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the KAD Bygg logo
        forest: {
          DEFAULT: "#2D4A1E",
          50: "#f3f6f0",
          100: "#e3ebdc",
          200: "#c7d7ba",
          300: "#a3bd8e",
          400: "#7d9e63",
          500: "#5c7e44",
          600: "#456433",
          700: "#365028",
          800: "#2d4a1e",
          900: "#243a1a",
          950: "#11200b",
        },
        amber: {
          DEFAULT: "#D98E3D",
          50: "#fdf6ee",
          100: "#f9e7d0",
          200: "#f2cc9d",
          300: "#eaab69",
          400: "#e29044",
          500: "#d98e3d",
          600: "#c2702c",
          700: "#a15527",
          800: "#824526",
          900: "#6b3a22",
          950: "#3a1d10",
        },
        ink: {
          DEFAULT: "#1d2430",
          soft: "#2b3543",
          muted: "#5a6675",
        },
        bone: "#f7f6f2",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
