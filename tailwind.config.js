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
      },
      fontFamily: {
        Montserrat: ["Montserrat", 'sans-serif'],
      }
    },
  },
  plugins: [],
}