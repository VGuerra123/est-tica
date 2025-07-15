/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      /*  Nuevo set tipográfico  */
      display: ['Poppins', 'sans-serif'], // títulos, hero, CTA
      body:    ['DM Sans', 'sans-serif'], // párrafos, botones, labels
    },
    extend: {
      /*  coloca aquí cualquier color, spacing o animation extra  */
    },
  },
  plugins: [],
};
