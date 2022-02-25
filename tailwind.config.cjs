const { primary, secondary, error } = require('daisyui/src/colors')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#523521",
          accent: "#37cdbe",
          neutral: "#3d4451",
        },
      }
    ]
  },
  plugins: [require('daisyui')],
}
