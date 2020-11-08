module.exports = {
	plugins: [
		require('@tailwindcss/custom-forms')
	],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			"./pages/**/*.tsx"
		]
	}
}
