/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-0': { 
      transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotateX(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
    },
    '.rotate-x-270': {
      transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotateX(270deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
    },
    '.rotate-x-360': {
      transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotateX(360deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
    },
  })
})
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-0': { 
      transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotateY(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)))',
    },
    '.rotate-y-360': {
      transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotateY(360deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
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
  plugins: [rotateX, rotateY],
}