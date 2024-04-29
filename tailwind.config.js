/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					200: '#a0c8c6',
					400: '#76c1c6',
					900: '#04224d',
				},
			},
			backgroundImage: {
				principal: "url('/img/Fondo_login.webp')",
			},
		},
	},
	plugins: [],
};
