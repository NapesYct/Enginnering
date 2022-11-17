const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/home.jpg')",
        'bgMechatronics': "url('../public/images/departments/mehatronicsE.jpg')",
        'bgMechanical': "url('../public/images/departments/mechanicalE.jpg')",
        'bgElectrical': "url('../public/images/departments/electricalE.jpg')",
        'bgComputer': "url('../public/images/departments/computerE.jpg')",

      },
      colors: {
        'overlay': "rgba(10, 10, 10, .96)"
      }
    },
  },
  plugins: [],
}
