/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-0': { 
      transform: 'rotateX(0deg)',
    },
    '.rotate-x-270': {
      transform: 'rotateX(270deg)',
    },
  })
})
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [rotateX],
}