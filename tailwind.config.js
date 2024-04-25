/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // animationDelay: {
      //   '75': '75ms',
      //   '200': '2000ms',
      // },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}