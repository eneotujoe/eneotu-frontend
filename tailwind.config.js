module.exports = {
  content: [
    'content/**/*.md',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#76FF03",
                    
          "secondary": "#000000",
                    
          "accent": "#1f2937",
                    
          "neutral": "#000000",
                    
          "base-100": "#000000",
                    
          "info": "#1f2937",
                    
          "success": "#3FE47E",
                    
          "warning": "#F3A916",
    
          "error": "#EF7690",

          "--rounded-btn": "0.2rem",
          "--rounded-card": "0.2rem",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('tailwindcss-dark-mode')()],
  darMode: 'class',

}
