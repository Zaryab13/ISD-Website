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
      boxShadow: {
        '3xl': ' 0 0 5px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        "hero-background": "url('./src/assets/hero-bg.png')",
      }
    },
  },
  plugins: [],
};
