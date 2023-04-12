/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightSage: '#f2f2f2', // a light gray with a slight hint of green
        darkSage: '#0d1e20', // a deep greenish blue
        grayGreen: '#c6d1c6', // a light greenish gray
        lightGrey: '#e6e6e6', // a very light gray
        blueGrey: '#707a7c', // a bluish gray
        lightBrown: '#f2e2ce', // a light beige color
        regGrey: '#d4d7db',
        darkGreen: '#0c1f1e', // a dark green
        offWhite: '#fbfafa', // a warm white
        logo: '#2a2a2a', // a dark gray
        filmRoll: '#f5e6db', // a light beige color
      },
      fontFamily: {
        logo: ['Cormorant Garamond', 'serif'], // a serif font for a luxurious feel
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
