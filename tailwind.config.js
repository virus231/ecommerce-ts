module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#F9F9F9',
          200: '#F5F5F5',
          300: '#EBEBEB',
          400: '#D1D1D1',
          500: '#A9A9A9',
          600: '#575757',
          700: '#151515',
        },
        secondary: {
          100: '#F4F8EC',
          200: '#C8DEB3',
          300: '#92C064',
          400: '#46760A',
          500: '#6A983C',
        },
      },
      screens: {
        xl: '1170px',
      },
    },
  },
  plugins: [],
};
