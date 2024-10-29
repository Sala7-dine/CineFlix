/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('../images/bg1.png')",
      }
    },
  },
  plugins: [],
}

