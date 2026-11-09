/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1c88c6",
          dark: "#051226",
          lightBlue: "#e0f2fe",
          sky: "#0284c7",
          cyan: "#06b6d4",
          surface: "#f8fafc",
          footer: "#eaeaea",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Alegreya", "Georgia", "serif"],
        bengali: ["'Noto Sans Bengali'", "'Hind Siliguri'", "'Kalpurush'", "'SolaimanLipi'", "system-ui", "sans-serif"],
        "bengali-heading": ["'Hind Siliguri'", "'Noto Sans Bengali'", "'Kalpurush'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
