/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./js/**/*.js",
    "./**/*.html",
    "./src/**/*.html",
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px',
    },
    extend: {
      colors: {
        'mainBlack': '#191428',
        'mainRed': '#E63229',
        'lightGray': '#F3F3F4',
        'midGray': '#E2E2E2',
        'darkGrey': '#E4E4E4',
        'darkRed': '#E43229',
        'mainOrange': '#ED4900',
        'darkBlue': '#191428',
      },
    },
  },
  plugins: [
    require("tailwindcss-hyphens")
  ],
}
