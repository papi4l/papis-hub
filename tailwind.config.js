/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
  'premium-gradient': 'linear-gradient(135deg, #0E0E0E, #1A1A1A, #3B3B3B)',
},

      colors: {
        // 🎨 Terry’s Premium Color Palette
        bronze: "#B08D57",      // Accent color — elegant gold-bronze glow
        dark: "#1A1A1A",        // Deep background (primary base)
        cream: "#EEE8E2",       // Soft neutral text/background
        base: "#0E0E0E",        // Dark base background
        olive: "#7E837D",       // Highlight or subtle accent
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // clean, modern font
      },
      boxShadow: {
        glow: "0 0 20px rgba(176, 141, 87, 0.5)", // bronze glow effect
      },
    },
  },
  plugins: [],
};
