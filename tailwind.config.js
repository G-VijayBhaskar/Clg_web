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
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        doom: {
          dark: '#050207',
          deep: '#020104',
          card: 'rgba(15, 8, 14, 0.92)',
          emerald: '#f43f5e',
          mint: '#fb7185',
          darkgreen: '#1a050d',
          silver: '#ffffff',
          steel: '#ffe4e6',
          gold: '#fda4af',
          amber: '#f43f5e'
        },
        galaxy: {
          dark: '#050207',
          deep: '#020104',
          card: 'rgba(15, 8, 14, 0.92)',
          cyan: '#f43f5e',
          sky: '#fb7185',
          purple: '#e11d48',
          amber: '#ffffff'
        }
      }
    },
  },
  plugins: [],
}

