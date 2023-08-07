/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "scale-up-down": 'scaleUpDown 1s ease-in-out',
        "pin-down": 'pinDown .8s ease-in-out'
      },
      keyframes : {
        scaleUpDown : {
          "0%": {transform: "scale(30%)", opacity: "0"},  
          "50%": {transform: "scale(50%)", opacity: "30"},
          "70%": {transform: "scale(115%)", opacity: "70"},
          "85%": {transform: "scale(80%)", opacity: "10"},
          "100%": {transform: "scale(100%)", opacity: "100"}
        } ,
        pinDown: {
          "0%": {transform: "scale(100%)",},  
          "50%": {transform: "scale(80%)",},
          "85%": {opacity: "10"},
          "100%": {transform: "scale(100%)", opacity: "100"}
        }
      }
    },
  },
  plugins: [],
}

