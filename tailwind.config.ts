import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#834009",
          50: "#fbf1e3",
          100: "#f5dabf",
          200: "#eab476",
          300: "#db8a2f",
          400: "#b3680f",
          500: "#834009",
          600: "#6e3608",
          700: "#582b06",
          800: "#422105",
          900: "#2c1603",
        },
        // royal — recoloured to the gold theme (kept as an alias so page
        // components compile unchanged; visually identical to `primary`).
        royal: {
          DEFAULT: "#834009",
          50: "#fbf1e3",
          100: "#f5dabf",
          200: "#eab476",
          300: "#db8a2f",
          400: "#b3680f",
          500: "#834009",
          600: "#6e3608",
          700: "#582b06",
          800: "#422105",
          900: "#2c1603",
          950: "#0c0a09",
        },
        cream: {
          DEFAULT: "#faf8f5",
          50: "#ffffff",
          100: "#faf8f5",
          200: "#f4efe8",
          300: "#ebe4d8",
        },
        dark: {
          DEFAULT: "#12100e", // Rich Espresso
          900: "#0c0a09",
          800: "#1c1917",
          700: "#292524",
          600: "#44403c",
        },
        // Solid equivalents of text-dark/NN composited on cream — opaque text
        // re-enables crisp sub-pixel (ClearType) rendering. Visually identical.
        ink: {
          10: "#e3e1de",
          15: "#d7d5d2",
          20: "#cccac7",
          25: "#c0bebb",
          30: "#b4b2b0",
          35: "#a9a7a4",
          40: "#9d9b99",
          45: "#92908d",
          50: "#868482",
          55: "#7a7876",
          60: "#6f6d6a",
          65: "#63615f",
          70: "#585653",
          75: "#4c4a48",
          80: "#403e3c",
          82: "#3c3a38",
          85: "#353331",
          90: "#292725",
        },
        // Solid equivalents of text-white/NN composited on espresso-dark.
        paper: {
          10: "#2a2826",
          15: "#363432",
          20: "#41403e",
          25: "#4d4c4a",
          30: "#595856",
          35: "#656462",
          40: "#71706e",
          45: "#7d7c7a",
          50: "#898887",
          55: "#949393",
          60: "#a09f9f",
          65: "#acabab",
          70: "#b8b7b7",
          75: "#c4c3c3",
          80: "#d0cfcf",
          82: "#d4d4d4",
          85: "#dbdbdb",
          90: "#e7e7e7",
        },
        soft: {
          white: "#f5f5f5",
          dark: "#1a1a1a",
        }
      },
      fontFamily: {
        sans: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        display: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        brand: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        editorial: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        gold: "0 4px 24px rgba(131, 64, 9, 0.15)",
        "gold-lg": "0 8px 40px rgba(131, 64, 9, 0.25)",
        royal: "0 4px 24px rgba(131, 64, 9, 0.15)",
        "royal-lg": "0 10px 44px rgba(131, 64, 9, 0.28)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.04)",
        "glass-dark": "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #834009 0%, #a85220 50%, #c66e1c 100%)",
        "gold-radial": "radial-gradient(ellipse at center, #834009 0%, #6e3608 100%)",
        "cream-gradient": "linear-gradient(135deg, #faf8f5 0%, #f4efe8 100%)",
        "hero-gradient": "linear-gradient(135deg, #faf8f5 0%, #fbf1e3 50%, #faf8f5 100%)",
        "dark-gradient": "linear-gradient(135deg, #12100e 0%, #1c1917 100%)",
        "royal-gradient": "linear-gradient(135deg, #834009 0%, #a85220 55%, #c66e1c 100%)",
        "navy-gradient": "linear-gradient(140deg, #12100e 0%, #1c1917 60%, #292524 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
