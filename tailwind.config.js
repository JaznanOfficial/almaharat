/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#212832",
        mintGreen: "#309255",
        lightGreen: "#E7F8EE",
      },
      fontFamily: {
        Montserrat: ["Montserrat", 'sans-serif'],
      }
    },
  },
  plugins: [],
}