/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
          primaryColor: "#b6e1e0",
          secondaryColor: "#9cd3d3", 
          btnColor: "#e8630a",
          textColor: "#2b4353",
        }
    },
  },
  plugins: [],
}

