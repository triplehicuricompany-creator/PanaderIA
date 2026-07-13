import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#5b3a28",
        charcoal: "#8B5E3C",
        gold: "#F2D7A1",
        champagne: "#FFF7F0",
        cream: "#FFF7F0",
        flour: "#FFFDF8",
        peach: "#FFD9C2",
        coral: "#C95F6D",
        wheat: "#F2D7A1",
        toast: "#8B5E3C",
        cocoa: "#2F2118",
        sage: "#B9C7B0"
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        gold: "0 20px 54px rgba(139, 94, 60, 0.10)",
        soft: "0 16px 42px rgba(139, 94, 60, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
