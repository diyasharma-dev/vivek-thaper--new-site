/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf5ef',
          100: '#f4e9db',
          200: '#ebd3b6',
          300: '#deb88c',
          400: '#d09b63',
          500: '#c58245',
          600: '#b26a38',
          700: '#945230',
          800: '#79422b',
          900: '#643826',
          gold: '#dfa64f',
          goldLight: '#fbe29a',
          goldDark: '#b37d2e'
        },
        dark: {
          950: '#07090e',
          900: '#0b0f19',
          850: '#111726',
          800: '#161f33',
          750: '#1e2942',
          700: '#263452',
          600: '#38486b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', transform: 'scale(1)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' }
        }
      }
    },
  },
  plugins: [],
}
