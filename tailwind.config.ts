import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: undefined,

    borderRadius: {
      "3xl": "calc(var(--radius) + 3rem)",
      "2xl": "calc(var(--radius) + 2rem)",
      "1xl": "calc(var(--radius) + 1rem)",
      xl: "calc(var(--radius) + 0.5rem)",
      lg: "var(--radius)",
      md: "calc(var(--radius) - 0.125rem)",
      DEFAULT: "calc(var(--radius) - 0.25rem)",
      sm: "calc(var(--radius) - 0.375rem)",
      full: "9999px",
      none: "0",
    },
    extend: {
      fontFamily: {
        "ibm-plex": ["var(--font-ibm-plex)"],
      },
      height: {
        "header-height": "var(--header-height)",
      },
      margin: {
        "analysis-cross-height": "var(--analysis-cross-height)",
        "between-sections": "var(--space-between-sections)",
      },
      padding: {
        "analysis-cross-height": "var(--analysis-cross-height)",
      },
      top: {
        "analysis-cross-height": "var(--analysis-cross-height)",
      },
      spacing: {
        "analysis-cross-height": "var(--analysis-cross-height)",
      },
      inset: {
        "analysis-cross-height": "var(--analysis-cross-height)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        nav: "hsl(var(--nav))",
        lightGray: "hsl(var(--light-gray))",
        notActive: "hsl(var(--not-active))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          "1": "hsl(var(--card-1))",
          "2": "hsl(var(--card-2))",
          "3": "hsl(var(--card-3))",
        },
        gray: {
          DEFAULT: "hsl(var(--gray))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          active: "hsl(var(--secondary-active))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [animate],
};
export default config;
