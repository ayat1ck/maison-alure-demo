/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        chocolate: "#120d09",
        "chocolate-soft": "#1a120d",
        gold: "#d7ad77",
        cream: "#f7eee3",
        beige: "#dfc8ac"
      },
      boxShadow: {
        premium: "0 18px 40px rgba(0,0,0,0.25)"
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

