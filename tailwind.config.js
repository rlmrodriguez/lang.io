/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "split-stone-purple":
          "linear-gradient(to bottom, rgb(245 245 244) 60% , rgb(88 28 135) 40%);",
      },
      fontFamily: {
        notosans: "'Noto Sans', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
