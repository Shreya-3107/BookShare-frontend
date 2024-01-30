/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#32968F",
        "secondary" : "#FFFFFF",
        "accent" : "#032220",
        "grey" : "#B2BFB9",
        "lightGreenBlue" : "#ebfffe",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
