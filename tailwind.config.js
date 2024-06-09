/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'nutmeg': 'hsl(14, 45%, 36%)',
        'dark-raspberry': 'hsl(332, 51%, 32%)',
        'white': 'hsl(0, 0%, 100%)',
        'rose-white': 'hsl(330, 100%, 98%)',
        'eggshell': 'hsl(30, 54%, 90%)',
        'light-grey': 'hsl(30, 18%, 87%)',
        'wenge-brown': 'hsl(30, 10%, 34%)',
        'dark-charcoal': 'hsl(24, 5%, 18%)',
      },
      fontFamily: {
        'young-serif': ['Young Serif', 'serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontWeight: {
        '400': 400,
        '600': 600,
        '700': 700,
      },
      screens: {
        sm: "431px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
}
