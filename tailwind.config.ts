import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#3d2a1f",
        charcoal: "#7a4528",
        gold: "#d9a85b",
        champagne: "#fff4df",
        cream: "#fffaf1",
        flour: "#fffaf1",
        peach: "#ffd9bd",
        coral: "#d96f5f",
        wheat: "#ecd39d",
        toast: "#7a4528",
        cocoa: "#3d2a1f",
        sage: "#8fa98b"
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        gold: "0 24px 80px rgba(122, 69, 40, 0.12)",
        soft: "0 18px 60px rgba(122, 69, 40, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
