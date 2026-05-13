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
          DEFAULT: "#bd6b20",
          50: "#fdf6ee",
          100: "#faebd6",
          200: "#f4d2ac",
          300: "#ecb478",
          400: "#e29043",
          500: "#bd6b20",
          600: "#9a5518",
          700: "#7d4315",
          800: "#643516",
          900: "#532d15",
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
        soft: {
          white: "#f5f5f5",
          dark: "#1a1a1a",
        }
      },
      fontFamily: {
        sans: ["var(--font-cinzel)", "Cinzel", "serif"],
        display: ["var(--font-cinzel)", "Cinzel", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        gold: "0 4px 24px rgba(189, 107, 32, 0.15)",
        "gold-lg": "0 8px 40px rgba(189, 107, 32, 0.25)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.04)",
        "glass-dark": "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #bd6b20 0%, #d4862a 50%, #e09440 100%)",
        "gold-radial": "radial-gradient(ellipse at center, #bd6b20 0%, #9a5518 100%)",
        "cream-gradient": "linear-gradient(135deg, #faf8f5 0%, #f4efe8 100%)",
        "hero-gradient": "linear-gradient(135deg, #faf8f5 0%, #fdf6ee 50%, #faf8f5 100%)",
        "dark-gradient": "linear-gradient(135deg, #12100e 0%, #1c1917 100%)",
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
