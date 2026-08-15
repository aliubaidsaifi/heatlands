/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FBFAF8',
        ivory: '#F2F0EB',
        stone: '#DFDBD3',
        concrete: '#9C978D',
        slate: '#57534C',
        charcoal: '#1A1A18',
        ink: '#0E0E0D',
        bronze: '#8A6A46',
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { shell: '1480px' },
    },
  },
  plugins: [],
};
