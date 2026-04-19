import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7ED",
        /** Hero / satin surround — close to reference lavender fabric */
        satin: "#E4DCFC",
        lilac: {
          DEFAULT: "#E9D5FF",
          soft: "#F3E8FF",
          deep: "#C084FC",
        },
        blush: "#FCE7F3",
        grape: "#6B21A8",
        grapemuted: "#7C3AED",
        butter: "#FDE047",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        body: ["var(--font-quicksand)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        float: "0 10px 30px -8px rgba(107, 33, 168, 0.18)",
        card: "0 8px 24px -10px rgba(124, 58, 237, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
