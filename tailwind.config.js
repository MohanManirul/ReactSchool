/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ✅ DaisyUI প্লাগইন যোগ করুন
}

