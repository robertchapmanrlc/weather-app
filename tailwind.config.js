/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gradientColorStops: {
        "sky-blue": "#87CEEB",
        "deep-sky-blue": "#00BFFF",
      },
    },
  },
  plugins: [],
};

