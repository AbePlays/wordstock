/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        accent: '#14b8a6',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
