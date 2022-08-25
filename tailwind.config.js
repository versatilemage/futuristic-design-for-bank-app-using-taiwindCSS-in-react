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
        "dribble": "url('/Images/Vector.png')",
        "up": "url('/Images/Polygon 4.png')",
        "down": "url('/Images/Polygon 2.png')",
        "netflix": "url('/Images/Vector (1).png')",
        "manulife": "url('/Images/Vector (2).png')",
        "apple": "url('/Images/Vector (3).png')",
        "play": "url('/Images/playstore.jpg')",
        "graph": "url('/Images/Vector 3.png')",
        "dark-graph": "url('/Images/Vector 4.png')",
        "visa": "url('/Images/visa-logo.png')",
        "app-logo": "url('/Images/apple-logo.png')",
        "shopify": "url('/Images/shopify.png')",
        "thumbnail-1": "url('/Images/Image.png')",
        "air-bnb": "url('/Images/Vector (5).png')",
        "binance": "url('/Images/path16.png')",
        "coinbase": "url('/Images/Vector (6).png')",
        "box": "url('/Images/Vector (8).png')",
        "dropbox": "url('/Images/Vector (7).png')",
        "facebook": "url('/Images/Vector (9).png')",
        "twitter": "url('/Images/Vector (10).png')",
        "linkedin": "url('/Images/Vector (11).png')",
      }),
      skew: {
        '30': '-30deg',
      }
    },
  },
  plugins: [],
}
