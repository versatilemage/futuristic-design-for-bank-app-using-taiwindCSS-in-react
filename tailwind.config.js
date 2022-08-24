/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "robot-hand": "url('/Images/robo-hand.png')",
        "signal": "url('/Images/Conection Icon.png')",
        "chips": "url('/Images/chips.png')",
        "paypal": "url('/Images/emblem-Paypal.jpg')",
      }),
      skew: {
        '30': '-30deg',
      }
    },
  },
  plugins: [],
}
