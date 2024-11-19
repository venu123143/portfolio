/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      rubik: ['Rubik'],
      dancing: ['"Dancing Script"', 'cursive'],
      inter: ['"Inter"', 'sans-serif'],
      edu: ['"Edu AU VIC WA NT Pre"', 'sans-serif'],
      noto: ['"Noto Serif"', 'serif'],
      ubuntu: ['"Ubuntu"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#FDC435", // Yellowish-orange background
        textPrimary: "#212121", // Dark text
        textSecondary: "#6D6D6D", // Light gray
        accent: "#2B8474", // Green stroke
      },
      boxShadow: {
        card: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "480px": "480px",
        "400px": "400px"
      },
    },
  },
  plugins: [],
}