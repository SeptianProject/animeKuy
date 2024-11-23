/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#020211',
        primary: '#1E1E1E',
        secondary: '#2E2E2E',
      }
    },
  },
  plugins: [],
}