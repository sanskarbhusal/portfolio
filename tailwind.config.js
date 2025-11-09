/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "theme-light": "#be2739",// light red
        "theme-dark": "#8e0000" // dark red
      }
    },
  },
  plugins: [],
}

