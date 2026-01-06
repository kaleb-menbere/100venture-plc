/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            950: '#020617', // Deepest navy for premium backgrounds
            900: '#0B1120',
            800: '#152342',
            700: '#1E3A8A',
          },
          gold: {
            900: '#78350F', // Deep bronze
            600: '#B45309', // Rich gold
            500: '#D97706', // Bright gold accent
            400: '#F59E0B', // Light gold
            50: '#FFFBEB', // Cream background
          },
          slate: {
            850: '#1A202C', // Rich charcoal
          }
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(135deg, #0B1120 0%, #1A202C 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 60px -12px rgba(0, 0, 0, 0.25)',
        'luxury-lg': '0 30px 80px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}