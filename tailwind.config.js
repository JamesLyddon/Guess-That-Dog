/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				cultured: '#F0F6F6',
				'french-blue': '#1C77C3',
				'cerulean-crayola': '#39A9DB',
				'pacific-blue': '#40BCD8',
				'deep-saffron': '#F39237',
				'persian-red': '#D63230',
				kellygreen: '#3EC300',
			},
		},
	},
	plugins: [],
}
