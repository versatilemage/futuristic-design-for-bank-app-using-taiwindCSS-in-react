/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "robot-hand": "url('/Images/robo-hand.png')",
      }),
      skew: {
        '30': '-30deg',
      }
    },
  },
  plugins: [],
}
