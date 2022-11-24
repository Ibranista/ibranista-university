/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 
  ".src/*.{html,js}",
  "*.{html,js}",
  "./src/pages/*.{html,js}"
],
  theme: {
    extend: {
      backgroundImage:{
        'main-background':'url("../src/assets/education.svg")',
        'meeting':'url("../src/assets/parents-meeting.jpg")',
        '2015':'url("../src/assets/2015-background.png")',
        'pattern':'url("../src/assets/bg-pattern.png")'
      }
    }
  },
  plugins: [],
}
