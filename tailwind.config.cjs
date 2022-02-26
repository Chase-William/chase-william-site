/*
  Color Variables: https://daisyui.com/docs/colors/
  SvelteKit Guide: https://tailwindcss.com/docs/guides/sveltekit
  
  Import to scroll to the bottom and see that we can use various prefixes
  to apply our intented use of the color.
  Example:
    - bg-primary-content <-- Styles the background
    - text-primary-content <-- Styles the forground *(text)*
*/
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          //primary: "#7D869C", // Light Cyan FFD9DA
          //'primary-content': "#FEFEFF",         
          secondary: "#FABC2A", // Mango

          // Base Colors for background | forground
          'base-100': '#7D869C',
          'base-200': '#636A7C',
          'base-content': '#FEFEFF',
        },
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}
