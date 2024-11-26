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
        'glow': '0 4px 20px rgba(0, 255, 255, 0.5)', // Soft neon glow
        'frosted': '0 4px 15px rgba(255, 255, 255, 0.3)',
        'shadow-neomorphic': 'drop-shadow(8px 8px 15px #d1d9e6), drop-shadow(-8px -8px 15px #ffffff)',
        'retro': '4px 4px 0px #222, 8px 8px 0px #555',
        'glow-yellow': '0 4px 20px rgba(255, 255, 0, 0.5)', // Soft yellow glow
        'rainbow': '0 4px 15px rgba(255, 0, 0, 0.4), 0 4px 15px rgba(0, 255, 0, 0.4), 0 4px 15px rgba(0, 0, 255, 0.4)',
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