// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#18181b',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderColor: {
        'hover': '#fff',
      },
      textColor: {
        'hover-black': '#000000',
      },
    },
  },
  plugins: [],
}
