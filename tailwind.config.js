/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f58832",
        white: "#fff",
        accent: "#235391",
        secondary: "#bcbcbc",
      },
      backgroundImage: {
        "hero-background": "url('./src/assets/hero-bg.png')",
      }
    },
  },
  plugins: [],
};
