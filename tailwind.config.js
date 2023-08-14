/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		colors: {
			// Primary

			red: "hsl(0, 100%, 68%)",
			white: "#ffffff",
			// Neutral

			veryDarkBlue: "hsl(230, 29%, 20%)",
			darkGrayishBlue: "hsl(230, 11%, 40%)",
			grayishBlue: "hsl(231, 7%, 65%)",
			lightGrayishBlue: "hsl(207, 33%, 95%)",
		},
		fontFamily: {
			sans: ['"Barlow"', "sans-serif"],
			barlow: "'Barlow', sans-serif",
			barlowCondensed: "'Barlow Condensed', sans-serif",
		},
		extend: {},
	},
	plugins: [],
};
