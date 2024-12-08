/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#1E90FF", // Custom blue
            secondary: "#FFD700", // Custom yellow
            grayBackground: "#F3F4F6", // Light gray for backgrounds
        },
        fontSize: {
            small: "0.875rem", // 14px
            base: "1rem", // 16px
            large: "1.25rem", // 20px
        },
        spacing: {
            "128": "32rem", // 512px
            "144": "36rem", // 576px
        },
    },
},
plugins: [],
};