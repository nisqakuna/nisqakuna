/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  darkMode: 'dark',
  theme: {
    extend: {
      colors: {
        primary: '#1565c0',
        primaryLight: '#42a5f5',
        dark: '#090E1A',
        darker: '#090E1A',
        secondaryLight: '#957fef'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *');
    }
  ],
}

