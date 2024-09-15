/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        // adding our own colors 
        primary: '#ff6363',
        secondary:{
          // lighter shade of the primary
          100:'#e2e2d5',
          // darker shade of the primary
          200:'#888883',
        }
      },
      fontFamily:{
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

