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
          dark: '#050505',
          deep: '#000000',
          card: 'rgba(18, 18, 18, 0.9)',
          emerald: '#ef4444',
          mint: '#f87171',
          darkgreen: '#1a0508',
          silver: '#ffffff',
          steel: '#f1f5f9',
          gold: '#ffffff',
          amber: '#ef4444'
        },
        galaxy: {
          dark: '#050505',
          deep: '#000000',
          card: 'rgba(18, 18, 18, 0.9)',
          cyan: '#ef4444',
          sky: '#f87171',
          purple: '#dc2626',
          amber: '#ffffff'
        }
      }
    },
  },
  plugins: [],
}
