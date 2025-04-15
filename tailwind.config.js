/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BFFF',
        secondary: '#FF00FF',
        accent: '#FFCC00',
        surface: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2E2E2E',
          600: '#3E3E3E',
          500: '#505050',
          400: '#9E9E9E',
          300: '#C0C0C0',
          200: '#E0E0E0',
          100: '#F0F0F0',
        },
      },
    },
  },
  plugins: [],
}