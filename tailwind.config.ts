import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#16273d",
        primaryGreen: "#49c088",
        primaryBlue: "#3cc9f5",
        secondaryGray: "#4d5469",
        secondaryHint: "#446374",
        primaryText: "#687381",
        secondaryText: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
