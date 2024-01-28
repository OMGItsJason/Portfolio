/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			width: {
				93: '20rem',
				110: '40rem',
				120: '44rem',
				130: '64rem'
			},
			animationDelay: {
				275: '275ms',
				375: '375ms',
				5000: '5s'
			},
			height: {
				110: '40rem',
				120: '44rem',
				130: '64rem'
			},
			animationDuration: {
				2000: '2s',
				long: '10s',
				'very-long': '20s'
			}
		}
	},
	plugins: [require('tailwindcss-animated')]
};
