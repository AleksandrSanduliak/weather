import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      boxShadow: {
        base: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        neon: "0 0 15px 5px rgba(57, 255, 20, 0.6)",
      },
      colors: {
        white: "#FFFFFF",
      },
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem", 
          md: "2.5rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
