import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mystic: {
          50: "#f5f1ff",
          100: "#ebe4ff",
          200: "#d6c8ff",
          300: "#bfaaff",
          400: "#a98cff",
          500: "#946fff",
          600: "#814bf5",
          700: "#6a32d2",
          800: "#541fa8",
          900: "#3d157a",
          950: "#2a0d52",
        },
        night: {
          50: "#f4f7fb",
          100: "#e2e8f5",
          200: "#c7d0e7",
          300: "#a3afd3",
          400: "#7885b6",
          500: "#56619a",
          600: "#424a7c",
          700: "#323862",
          800: "#232846",
          900: "#161a30",
          950: "#0b0d1b",
        },
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at top, rgba(148, 111, 255, 0.35), transparent 60%)",
      },
      boxShadow: {
        glass: "0 30px 60px -15px rgba(148, 111, 255, 0.25)",
      },
      keyframes: {
        "float-orb": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "orb-slow": "float-orb 12s ease-in-out infinite",
        "orb-fast": "float-orb 8s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
