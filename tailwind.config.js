/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#bae0ff',
          300: '#7cc4fa',
          400: '#38a5f8',
          500: '#0066f5', // Vibrant Action Blue
          600: '#08214d', // Thiru Logo Exact Deep Navy
          700: '#061a3d', // Midnight Navy
          800: '#04132b',
          900: '#020b18', // Deepest Navy
          dark: '#030f24',
          darker: '#010610',
          lime: '#00d4ff', // Electric Cyan highlight that pops on Navy
          yellow: '#38bdf8',
        },
        navy: {
          50: '#f0f4f9',
          100: '#e1e9f2',
          200: '#c3d3e6',
          300: '#95b3d4',
          400: '#5f8ebd',
          500: '#08214d', // Thiru logo deep navy
          600: '#061a3d',
          700: '#051530',
          800: '#030d20',
          900: '#020711',
          dark: '#020b17',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
