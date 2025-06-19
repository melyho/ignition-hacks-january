// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // make sure this includes your file paths
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // e.g. blue
        secondary: "#9333EA", // e.g. purple
        accent: "#F59E0B", // e.g. amber
        brandGray: "#F1F1F1", // custom gray
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
