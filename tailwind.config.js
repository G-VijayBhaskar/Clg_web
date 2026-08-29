/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['monospace'],
        orbitron: ['"Orbitron"', 'sans-serif']
      },
      colors: {
        doom: {
          dark: '#020a06',
          deep: '#05140b',
          card: 'rgba(6, 24, 15, 0.75)',
          emerald: '#10b981',
          mint: '#34d399',
          darkgreen: '#042f2e',
          silver: '#cbd5e1',
          steel: '#94a3b8',
          gold: '#fbbf24',
          amber: '#f59e0b'
        },
        galaxy: {
          dark: '#020a06',
          deep: '#05140b',
          card: 'rgba(6, 24, 15, 0.75)',
          cyan: '#10b981',
          sky: '#34d399',
          purple: '#059669',
          amber: '#fbbf24'
        }
      }
    },
  },
  plugins: [],
}

