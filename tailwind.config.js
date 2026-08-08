/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#181310",
          charcoal: "#332a24",
          gold: "#c9a227",
          "gold-light": "#e3c992",
          cream: "#faf5ec",
          "cream-dark": "#f3ebdd",
        },
        ink: {
          900: "#181310",
          700: "#332a24",
          500: "#5c5049",
          300: "#a89a90",
          100: "#e7ded6",
        },
        cream: {
          50: "#fffdfa",
          100: "#faf5ec",
          200: "#f3ebdd",
          300: "#e9ddc8",
        },
        gold: {
          300: "#e3c992",
          500: "#c9a227",
          600: "#a9821c",
          700: "#7d5f14",
        },
        blush: {
          100: "#f6e3df",
          300: "#e8c0b8",
          500: "#c98a7f",
          700: "#9c5a51",
        },
      },
      fontFamily: {
        serif: ['"Bodoni Moda"', "Georgia", "Times New Roman", "serif"],
        sans: ["Manrope", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
