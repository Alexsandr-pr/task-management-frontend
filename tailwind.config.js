/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {

		extend: {
			borderRadius: {
				'none': '0',
				'sm': '0.125rem',
				DEFAULT: '0.625rem',
				DEFAULT: '10px',
				'md': '0.375rem',
				'lg': '0.5rem',
				'full': '9999px',
				'large': '12px',
			},
		colors: {
			"white":"#fff",
			"primary" : {
				100:"#DCE4FF",
				200:"#BAC8FF",
				300:"#98ABFF",
				400:"#9F84FD",
				500:"#546FFF",
				600:"#3D53DB",
				700:"#2A3BB7",
				800:"#1A2793",
				900:"#10197A",
			},
			"success" : {
				100:"#F5FCD2",
				200:"#E8FAA6",
				300:"#D3F178",
				400:"#BCE455",
				500:"#9CD323",
				600:"#7FB519",
				700:"#659711",
				800:"#4C7A0B",
				900:"#3B6506",
			},
			"error" : {
				100:"#FFE7D3",
				200:"#FFC8A6",
				300:"#FFA37A",
				400:"#FF7F59",
				500:"#FF4423",
				600:"#DB2719",
				700:"#B71112",
				800:"#930B16",
				900:"#7A0619",
			},
			"warning" : {
				100:"#FFF8D7",
				200:"#FFEFB0",
				300:"#FFE488",
				400:"#FFD96B",
				500:"#FFC73A",
				600:"#DBA32A",
				700:"#B7821D",
				800:"#936312",
				900:"#7A4D0B",
			},
			"info" : {
				100:"#DCF3FF",
				200:"#BAE5FF",
				300:"#98D3FF",
				400:"#7EC2FF",
				500:"#54A6FF",
				600:"#3D81DB",
				700:"#2A60B7",
				800:"#1A4393",
				900:"#102E7A",
			},
			"second" : {
				100:"#DFE1F3",
				200:"#C2C6E8",
				300:"#8E92BC",
				400:"#54577A",
				500:"#141522",
				600:"#0E0F1D",
				700:"#0A0A18",
				800:"#060713",
				900:"#040815",
			},
			"main": "#F5F5F7",
			'skelet': {
				100: "rgba(84, 111, 255, 0.12)",
				200: "rgba(84, 111, 255, 0.22)",
				300: "rgba(84, 111, 255, 0.32)"
			},
			"dark": {
				100: "#242735",
				200: "rgba(26, 28, 38, 1)"
			}
		}
		},
	},
	plugins: [],
}