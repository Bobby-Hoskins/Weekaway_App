/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryDark: "#001011",
        PrimaryColor: "#1e75e7",
        PrimaryAccent: "#64e9ee",
      },
      fontFamily: {
        h1Text: ["Zen Dots", "cursive"],
        TitilliumWeb: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
