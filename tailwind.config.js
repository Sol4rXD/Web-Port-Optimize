/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grey_primary: "#4E4E4E",
        grey_secondary: "#969696"
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      },
    },
  },
  plugins: [],
}