import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  
  plugins: [require('@tailwindcss/typography'), require("daisyui")],

  daisyui: {
		themes: [
		  {
			mytheme: {
			
   "primary": "#76FF03",
			
   "secondary": "#000000",
			
   "accent": "#7cff70",
			
   "neutral": "#1B1622",
			
   "base-100": "#31204B",
			
   "info": "#1f2937",
			
   "success": "#3FE47E",
			
   "warning": "#F3A916",
			
   "error": "#FA1E22",
			},
		  },
		],
	  },
}
export default config
