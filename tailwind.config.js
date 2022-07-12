module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#EEB462",
          "secondary": "#DC8665",
          "accent": "#fcccae",
          "info": "#FEC195",
          "textColor": "#455054",
          "base-100": "#E8E5EB",
          "success": "#55C595",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}