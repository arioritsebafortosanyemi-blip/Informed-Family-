import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fcfcf7",
        "cream-light": "#fcf9ee",
        "green-dark": "#1c3a13",
        "green-darker": "#13270d",
        "body-dark": "#282d26",
        sage: "#8a9a86",
        muted: "#6a6965",
        border: "#bcbab2",
        lime: "#d3fa99",
        "pale-green": "#dffad7",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "sans-serif"],
        serif: ["var(--font-baskervville)", "serif"],
      },
      borderRadius: {
        card: "19px",
        button: "12px",
        pill: "1188px",
      },
    },
  },
  plugins: [],
};

export default config;
