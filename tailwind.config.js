/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '425px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: '#1F1F1F',
        primary: '#9139F6',
        darkCard: '#2A2431',
        secondary: '#292929',
      }
    },
  },
  plugins: [],
}