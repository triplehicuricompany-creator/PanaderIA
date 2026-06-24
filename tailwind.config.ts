import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#080807",
        charcoal: "#11100e",
        gold: "#d7a84f",
        champagne: "#f8ead0",
        cream: "#fffaf0"
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        gold: "0 24px 80px rgba(215, 168, 79, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
