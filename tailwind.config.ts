import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F3C51B",
      },
      borderRadius: {
        "xl2": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
