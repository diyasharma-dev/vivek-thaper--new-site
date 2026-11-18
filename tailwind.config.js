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
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Executive crimson red
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
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
