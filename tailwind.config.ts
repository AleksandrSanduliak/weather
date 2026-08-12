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
    },
  },
  plugins: [],
};

export default config;
