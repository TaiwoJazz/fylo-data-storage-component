/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(243, 100%, 93%)",
        "grayish-blue": "hsl(229, 7%, 55%)",
        "dark-blue": "hsl(228, 56%, 26%)",
        "very-dark-blue": "hsl(229, 57%, 11%)",
      },
      fontFamily: {
        raleway: 'Raleway, sans-serif'
      },
      backgroundImage: theme => ({
        'mobile': "url('/src/img/bg-mobile.png')",
        'desktop': "url('/src/img/bg-desktop.png')",
       }),
    },
  },
  plugins: [],
}
