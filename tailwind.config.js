module.exports = {
	plugins: [
		require("@tailwindcss/custom-forms")
	],
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: [
			"./pages/**/*.tsx"
		]
	},
	theme: {
		extend: {
			colors: {
				bg: {
					primary: "var(--bg-bg-primary)"
				},
				text: {
					primary: "var(--text-text-primary)",
					secondary: "var(--text-text-secondary)"
				}
			}
		}
	}
}
