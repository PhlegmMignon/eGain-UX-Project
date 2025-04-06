module.exports = {
  content: [
    "./src/**/*.{html,js,vue}", // Specify your template files here
  ],
  theme: {
    extend: {}, // Extend the default theme as needed
  },
  plugins: [
    require("tailwindcss-primeui"), // Add the PrimeUI plugin
  ],
};
