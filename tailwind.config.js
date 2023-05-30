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
			keyframes: {
				slide: {
					'0%': { transform: 'translateX(-300px)', filter: 'opacity(0)' },
					'100%': { transform: 'translateX(0)', filter: 'opacity(1)' },
				},
				grow: {
					'0%': { transform: 'scale(0.25, 0.25)', filter: 'opacity(0)' },
					'100%': { transform: 'scale(1, 1)', filter: 'opacity(1)' },
				},
				fadeIn: {
					'0%': { filter: 'opacity(0)' },
					'50%': { filter: 'opacity(0)' },
					'100%': { filter: 'opacity(1)' },
				},
				jumpUp: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0)' },
				},
			},
			animation: {
				slide: 'slide 0.5s ease-out',
				grow: 'grow 0.5s ease-in-out',
				fadeInSlow: 'fadeIn 1s ease-in-out',
				fadeInMedium: 'fadeIn 0.5s ease-in-out',
				fadeInFast: 'fadeIn 0.25s ease-in-out',
			},
		},
	},
	plugins: [],
}
