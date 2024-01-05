const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
		},
	},

	plugins: [typography, daisyui],

	daisyui: {
		darkTheme: 'night',
		themes: true,
		logs: false,
	},
};

module.exports = config;
