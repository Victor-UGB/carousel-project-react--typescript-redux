/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "scale-up-down": 'scaleUpDown 1s ease-in-out',
        "pin-down": 'pinDown .8s ease-in-out',
        'step-up' : 'stepUp .5s ease-out',
        'step-down': 'stepDown .8s ease-in-out',
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
        },
        stepUp: {
          '0%':{
            transform: 'translateY(100%)',
            opacity: '1'
          },
          "100%": {
            transform: 'translateY(0%)',
            opacity: '1'
          }
        },
        stepDown: {
          '0%': {
              transform: 'translateY(-100%)',
              opacity: '0'
          },
          '50%' :{
              transform: 'translateY(-50%)',
              opacity: '0'
          },
          '98%': {
              opacity: '.8'
          },
          '100%': {
              transform: 'translateY(0%)',
              opacity: '1'
          }
        },
      }
    },
  },
  plugins: [],
}

