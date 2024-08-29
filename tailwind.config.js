/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    colors: {
      'light': '#FFF', // CEDADA
      'lightgray': '#FDFDFD', // CCD9D9
      'opaclight': '#CEDADA', // ACB4B6

      'dark': '#241F26',
      'darkgray': '#231E25',
      'opacdark': '#46454a',

      'link': '#1e40af',
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
}

