/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#090a0d',
          900: '#0d0f12', // primary app background
          850: '#13161c', // card surface
          800: '#181c24', // elevated hover surface
          750: '#222631',
          700: '#2a303e',
          600: '#3e4659'
        },
        brass: {
          50: '#fbf8f2',
          100: '#f5eee0',
          200: '#ebdcbf',
          300: '#dfc698',
          400: '#d4a36a',
          500: '#c59b63', // signature matte brass
          600: '#b0834a',
          700: '#8d6435',
          800: '#724f2d',
          900: '#5c3f25'
        },
        ivory: '#f4f4f0',
        muted: '#9aa0ac'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      }
    },
  },
  plugins: [],
}
