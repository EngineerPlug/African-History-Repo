/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      bakgroundImage: {
        "african art": "url('src/images/african-print.png')"
      }
    },
  },
  plugins: [],
}
