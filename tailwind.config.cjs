/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryDark: "#001011",
        PrimaryColor: "#0A4388",
        PrimaryLight: "#F4F4ED",
        PrimaryAccent: "#64e9ee",
      },
      fontFamily: {
        logoText: ["Zen Dots", "cursive"],
        h1Text: ["Monkirta Pursuit NC", "sans-serif"],
        TitilliumWeb: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
