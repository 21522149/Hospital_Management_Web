/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        blue: "#0067FF",
        yellow: "#FEB60D",
        purple: "#9771FF",
        headingColor: "#181A1E",
        textColor:"#4E545F"
      },
      boxShadow: {
        panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}

