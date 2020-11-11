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
				accent: {
					primary: "var(--accent-primary)",
					secondary: "var(--accent-secondary)",
				},
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
