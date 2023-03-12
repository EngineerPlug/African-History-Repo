/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "african art": "url('src/images/african-print.png')"
      }
    },
  },
  plugins: [],
}
