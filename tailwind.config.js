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
				persianred: {
					400: '#E33532',
					500: '#D63230',
					600: '#BD2C2A',
				},
				kellygreen: {
					400: '#3B9212',
					500: '#3EC300',
					600: '#5DE31D',
				},
			},
		},
	},
	plugins: [],
}
