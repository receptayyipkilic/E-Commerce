/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#252B42',
        'primary-blue': '#23A6F0',
      },
      letterSpacing: {
        '0.1px': '0.1px',
      },
    },
  },
  plugins: [],
} 