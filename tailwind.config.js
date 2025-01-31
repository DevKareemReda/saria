/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xsr: {'max': "719px"},
      },
      colors: {
        "dark-blue": '#0074D9',
        "dark-black": '#10212A',
      },
    },
  },
  plugins: [],
}

