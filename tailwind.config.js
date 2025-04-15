/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        surface: {
          900: 'var(--surface-900)',
          800: 'var(--surface-800)',
          700: 'var(--surface-700)',
          600: 'var(--surface-600)',
          500: 'var(--surface-500)',
          400: 'var(--surface-400)',
          300: 'var(--surface-300)',
          200: 'var(--surface-200)',
          100: 'var(--surface-100)',
        },
      },
    },
  },
  plugins: [],
}