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
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Mirch fiery orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        charcoal: {
          950: '#06080d',
          900: '#0c0f17',
          850: '#111622',
          800: '#171e2e',
          700: '#232d42',
          600: '#334155'
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Plus Jakarta Sans', '-apple-system', 'sans-serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Outfit', 'Plus Jakarta Sans', '-apple-system', 'sans-serif'], // safe modern override
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      }
    },
  },
  plugins: [],
}
