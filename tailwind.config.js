module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        primary: {
          100: "#F4F8EC",
          200: "#C8DEB3",
          300: "#92C064",
          400: "#46760A",
          500: "#6A983C",
        },
        secondary: {
          100: "#F9F9F9",
          200: "#F5F5F5",
          300: "#EBEBEB",
          400: "#D1D1D1",
          500: "#A9A9A9",
          600: "#575757",
          700: "#151515",
        },
      },
      screens: {
        xl: "1170px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      padding: {
        "px-12": "48px",
        "pl-12": "60px",
        "pl-13": "70px",
      },
      backgroundImage: {
        "banner-card": "url('/public/assets/images/banner.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/forms")],
};
