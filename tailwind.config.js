/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        dark: '#093f68',
        light: '#ffffff',
        gray: '#777f98',
        blue: '#093f68',
        cyan: '#3ee9e5',
        pink: '#ff2965',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
