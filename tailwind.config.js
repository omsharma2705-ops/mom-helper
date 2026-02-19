/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#F57C00',
        kitchenGreen: '#2E7D32',
        cream: '#FFF7EE'
      },
      borderRadius: {
        'xl-2': '14px'
      }
    }
  },
  plugins: []
}
