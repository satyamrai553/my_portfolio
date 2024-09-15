/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Merriweather: ["Merriweather"],
        Unlock: ["Unlock"]

      },
      colors:{
        'background-color': '#282C33',
        'primary': "#C778DD",
        'gray': "#ABB2BF"
      }
    },
  },
  plugins: [],
}

