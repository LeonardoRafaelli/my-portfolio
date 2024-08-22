/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    colors: {
      'light': '#CEDADA',
      'lightgray': '#CCD9D9',
      'opaclight': '#acb4b6',

      'dark': '#241F26',
      'darkgray': '#231E25',
      'opacdark': '#46454a',
    },

    extend: {
      fontFamily: {
      'standard': [ 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      'signature': "Dancing Script"
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
});

