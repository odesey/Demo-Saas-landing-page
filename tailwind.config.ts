import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config = {
  darkMode: ["class"],
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  prefix: "",
  theme: {
    boxShadow: {
      sm: "box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      mdbl: "0px 7px 16px rgb(40 149 255 / 20%);",
      big: "0px 7px 32px rgb(0 0 0 / 35%);",
      massive:
        "0px 64px 64px rgba(0, 0, 0, 0.15), 0px 32px 32px rgba(0, 0, 0, 0.15), 0px 16px 16px rgba(0, 0, 0, 0.15), 0px 8px 8px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15);"
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px"
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px"
        }
      },
      colors: {
        white: colors.white,
        black: colors.black,
        pink: colors.pink,
        indigo: colors.indigo,
        transparent: colors.transparent,
        onyx: {
          50: "#F1F1F4",
          100: "#E3E3E8",
          200: "#C8C6D2",
          300: "#AFADBE",
          400: "#9490A7",
          500: "#787490",
          600: "#605D75",
          700: "#4B485B",
          800: "#34323F",
          900: "#1f1e26",
          950: "#1c1b22"
        },
        blue: {
          50: "#F6F6FE",
          100: "#ECEDFD",
          200: "#D0D1FB",
          300: "#B9BAF9",
          400: "#9395F5",
          500: "#6366F1"
        },
        primeBlue: {
          50: "#f6fbff",
          100: "#e7f3ff",
          200: "#bedfff",
          300: "#9ecfff",
          400: "#6bb6ff",
          500: "#2895FF"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(40px, -50px) scale(1.01)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 10s infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
