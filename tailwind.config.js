/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#22333B",
          "secondary": "#E8E4BE",
          "accent": "#c4b5fd",
          "neutral": "#112022",
          "base-100": "#111827",
          "info": "#0e7490",
          "success": "#bef264",
          "warning": "#fcd34d",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require('daisyui'),],
}

