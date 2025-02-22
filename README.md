Student Login, Registration , Dashboard , Profile
# React + Vite + DaisyUI + Laravel APi

Installation Guide
1. git clone [Repository Link ]
2. cd my-project
3. npm i
4. npm install -D tailwindcss@3 postcss autoprefixer
5. npx tailwindcss init -p

এখন DaisyUI ইনস্টল করুন:
6. npm install daisyui

7. tailwind.config.js ফাইলে DaisyUI যুক্ত করুন

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ✅ DaisyUI প্লাগইন যোগ করুন
};

----------------------------------------------------
📌 8. Tailwind CSS সেটআপ ঠিক আছে কিনা চেক করুন

আপনার index.css ফাইলে Tailwind CSS ইমপোর্ট করুন:
@tailwind base;
@tailwind components;
@tailwind utilities;
-----------------------------------------------------
9. 📌 ৪. DaisyUI কাজ করছে কিনা চেক করুন

আপনার React App-এ DaisyUI এর বাটন যোগ করুন:

👉 App.js বা অন্য কোনো কম্পোনেন্টে কোড লিখুন:
 <button className="btn btn-primary">Click Me</button>
 
10. npm run dev


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
