module.exports = {
	title: 'Aventure Laura Craft ',
	description: '',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},
	themeConfig: {
		search: false,
	}
};
