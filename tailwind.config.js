module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Example primary color, update as needed
        darkBlue: '#0a2540',
        fontFamily: {
          sans: ['Open Sans', 'sans-serif'],
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    
  ],
}