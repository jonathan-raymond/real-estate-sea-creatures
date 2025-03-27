/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean': {
          100: '#E0F7FF',
          200: '#B3E0FF',
          300: '#80C9FF',
          400: '#4DB2FF',
          500: '#1A9BFF',
          600: '#0077CC',
          700: '#004C8C',
          800: '#003866',
          900: '#001F3F',
        },
        'deep': {
          900: '#000B18',
          800: '#001529',
          700: '#002233',
          600: '#00334D',
        },
        'coral': {
          400: '#FF6B6B',
          500: '#FF5252',
        },
        'seaweed': {
          400: '#48BF84',
          500: '#2F9C6A',
        }
      },
      fontFamily: {
        'display': ['Righteous', 'cursive'],
        'accent': ['Water Brush', 'cursive'],
        'body': ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'underwater': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 