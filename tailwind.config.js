const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#005F59",
        yellow: "#FECD08",
        secondaryYellow2: "FFCD05",
        white: "#FFFFFF",
        offwhite: "#FFF",
        lightBlue: " #E9FEFF",
        grey: "#5B5B5B",
        black: "#000000",
       darkgrey:" #B3B3B3",
       red:"#660000",
       gradientblue:" #0E5F59",
       darkGrey:"#D9D9D9",
        aqua: "#F3F7F7",
        lightgrey:"B6B6B6",
      },
      fontFamily: {
        Lexend: ["Lexend,", "sans-serif"],
        Inter: ["Inter,", "sans-serif"],
      },
      screens: {
        xxs:'280px',
        xs: "390px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
        laptop:"1024px"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const customUtilities = {
        '.custom-element': {
          width: '1463.001px',
          height: '1px',
          background: '#000',
        },
        '.full-width-navbar': {
          width: '100%'
        }
      };

      addUtilities(customUtilities, ['responsive', 'hover']);
    },
    
  ],
});