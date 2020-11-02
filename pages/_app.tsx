import App from 'next/app'
import React, { useEffect, useState } from 'react'
import { TinaCMS, TinaProvider } from 'tinacms'
import { GithubClient, TinacmsGithubProvider, GithubMediaStore } from 'react-tinacms-github'
import { ThemeProvider, useTheme } from 'next-themes'
import '../styles/global.css'

export default class Site extends App {
	cms: TinaCMS

	constructor(props) {
		super(props)

		const github = new GithubClient({
			proxy: '/api/proxy-github',
			authCallbackRoute: '/api/create-github-access-token',
			clientId: process.env.GITHUB_CLIENT_ID,
			baseRepoFullName: process.env.REPO_FULL_NAME,
			baseBranch: process.env.BASE_BRANCH
		})

		/**
		 * 1. Create the TinaCMS instance
		 */
		this.cms = new TinaCMS({
			enabled: !!props.pageProps.preview,
			apis: {
				/**
				 * 2. Register the GithubClient
				 */
				github,
			},
			/**
			 * 3. Register the Media Store
			 */
			media: new GithubMediaStore(github),
			/**
			 * 4. Use the Sidebar and Toolbar
			 */
			sidebar: props.pageProps.preview,
			toolbar: props.pageProps.preview,
		})
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider
				enableSystem
				defaultTheme='system'
			>
				{/**
				 * 5. Wrap the page Component with the Tina and Github providers
				*/}
				<TinaProvider cms={this.cms}>
					<TinacmsGithubProvider
						onLogin={onLogin}
						onLogout={onLogout}
						error={pageProps.error}
					>
						{/**
						 * 6. Add a button for entering Preview/Edit Mode
						 */}
						<EditLink cms={this.cms} />
						<ThemePicker />
						<Component {...pageProps} />
					</TinacmsGithubProvider>
				</TinaProvider>
			</ThemeProvider>
		)
	}
}

const onLogin = async () => {
	const token = localStorage.getItem('tinacms-github-token') || null
	const headers = new Headers()

	if (token) {
		headers.append('Authorization', 'Bearer ' + token)
	}

	const resp = await fetch(`/api/preview`, { headers: headers })
	const data = await resp.json()

	if (resp.status == 200) window.location.href = window.location.pathname
	else throw new Error(data.message)
}

const onLogout = () => {
	return fetch(`/api/reset-preview`).then(() => {
		window.location.reload()
	})
}

export interface EditLinkProps {
	cms: TinaCMS
}

export const EditLink = ({ cms }: EditLinkProps) => {
	return (
		<button onClick={() => cms.toggle()}>
			{cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
		</button>
	)
}

export const ThemePicker = () => {
	const [mounted, setMounted] = useState(false)
	const { themes, theme, setTheme } = useTheme()
	useEffect(() => setMounted(true), [])
	if (!mounted) return (<select disabled><option>Theme not loaded</option></select>)
	return (
		<select value={theme} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value)}>
			{themes.map((t: string) => (
				<option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
			))}
		</select>
	)
}
