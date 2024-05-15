/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '30px',
        xl: '20px',
      },
    },
    extend: {},
  },
  plugins: [],
};
