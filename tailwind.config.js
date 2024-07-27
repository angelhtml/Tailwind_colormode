/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:"class",
  theme: {
    extend: {},
    colors: {
      "ground": "#f0f0f3",
      "chrome_purple": "#78818e",
      "chrome_blue": "#6b92e5",
      "chrome_pink": "#f88abo",
      "white": "#fff",
      "black": "#000",
      "silver": "silver",
      "grey": "grey"
    },
  },
  plugins: [],
}

