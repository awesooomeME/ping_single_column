/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      blue: 'hsl(223, 87%, 63%)',
      pale_blue: 'hsl(223, 100%, 88%)',
      light_red: 'hsl(354, 100%, 66%)',
      gray: 'hsl(0, 0%, 59%)',
      very_dark_blue: 'hsl(209, 33%, 12%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontWeight: {
      light: '300',
      norma: '600',
      heavy: '700'
    }
  },
  plugins: [],
}
