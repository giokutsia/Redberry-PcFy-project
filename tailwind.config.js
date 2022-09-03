/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    screens: {
     
      desktop: {max: '400px'},
      tablet:  '400px',
    },
    colors: {
      'white': '#ffffff',
      'solidblue': "#62A1EB",
      'easygray': "#F6F6F6",
      'lightblue': '#8AC0E2'
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
     
    },
    extend: {},
  },
  plugins: [],
}
