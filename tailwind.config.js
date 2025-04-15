/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF2D55',
          light: '#FF6B8B',
          dark: '#CC0930'
        },
        secondary: {
          DEFAULT: '#4CD964',
          light: '#7AE794',
          dark: '#2A9D44'
        },
        accent: '#5856D6',
        surface: {
          50: '#f8fafc',   // Lightest
          100: '#f1f5f9',
          200: '#e2e8f0', 
          300: '#cbd5e1',
          400: '#94a3b8',  
          500: '#64748b',  
          600: '#475569',  
          700: '#334155',  
          800: '#1e293b',  
          900: '#0f172a'   // Darkest
        }      
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui'],
        arcade: ['"Press Start 2P"', 'cursive']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'neu-light': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
        'neu-dark': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.05)',
        'neon': '0 0 5px #FF2D55, 0 0 20px #FF2D55, 0 0 40px #FF2D55',
        'neon-green': '0 0 5px #4CD964, 0 0 20px #4CD964, 0 0 40px #4CD964',
        'neon-blue': '0 0 5px #5856D6, 0 0 20px #5856D6, 0 0 40px #5856D6'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { textShadow: '0 0 5px #FF2D55, 0 0 10px #FF2D55' },
          '100%': { textShadow: '0 0 10px #FF2D55, 0 0 20px #FF2D55, 0 0 30px #FF2D55' }
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
        'arcade-gradient': 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)'
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}