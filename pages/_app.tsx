import App from 'next/app'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import '../styles/tailwind.css'
import '../styles/global.css'
import '../styles/utilities.css'

const LoadingBar = dynamic(
	() => import("@/components/loading-bar"),
	{ ssr: false }
)

export default class Site extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider
				enableSystem
				defaultTheme='system'
			>
				<LoadingBar delay={400} trickleSpeed={100} />
						<ThemePicker />
						<Component {...pageProps} />
			</ThemeProvider>
		)
	}
}

export const ThemePicker = () => {
	const [mounted, setMounted] = useState(false)
	const { themes, theme, setTheme } = useTheme()
	useEffect(() => setMounted(true), [])
	if (!mounted) return (<select className="bg-bg-primary py-2 px-4 rounded w-32" disabled><option>Theme not loaded</option></select>)
	return (
		<label className="m-2">
			<span className="sr-only">Theme</span>
			<select className="bg-bg-primary py-2 px-4 rounded w-32" value={theme} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value)}>
				{themes.map((t: string) => (
					<option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
				))}
			</select>
		</label>
	)
}
