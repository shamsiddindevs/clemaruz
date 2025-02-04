/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        md: "30px",
        lg: "60px",

      },
      // screens: {
      //   sm: "100%",
      //   md: "100%",
      //   lg: "100%",
      //   xl: "1280px",
      // },
    },
    extend: {
      colors: {
        blackColor: "#222222",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        defaultRadius: "16px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '1380px',
          },
          // '@screen 2xl': {
          //   maxWidth: '1440px',
          // },
        }
      })
    }
  ]
};
