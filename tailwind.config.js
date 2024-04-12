/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	plugins: [require('flowbite/plugin')],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Inter Variable'],
			serif: ['Libre Baskerville']
		},
		extend: {
			colors: {
				primary: {
					50: '#F2F4F8',
					100: '#E1E6EF',
					200: '#C3CDDF',
					300: '#A5B4D0',
					400: '#869CC0',
					500: '#6A84B1',
					600: '#4D6793',
					700: '#3A4D6E',
					800: '#27334A',
					900: '#131A25',
					950: '#0B0E14'
				},
				gray: {
					50: '#F7F7F8',
					100: '#ECEDEF',
					200: '#D8DBDF',
					300: '#C5C9CE',
					400: '#B1B8BE',
					500: '#9FA7AF',
					600: '#798590',
					700: '#5A636C',
					800: '#3C4248',
					900: '#1E2124',
					950: '#101213'
				},
				armadillo: {
					50: '#EDEBE9',
					100: '#DCD9D5',
					200: '#BAB3AB',
					300: '#978C81',
					400: '#6D635A',
					500: '#443E38',
					600: '#35302C',
					700: '#2A2623',
					800: '#1C1A17',
					900: '#0E0D0C',
					950: '#060505'
				}
			}
		}
	},
	plugins: []
};
