import { ProjectType } from "@/types/projects"
import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { getCache } from "@/lib/cache"

const cache = getCache()

export async function getProjects(): Promise<ProjectType[]> {
	let projects = await cache.projects()
	if (projects == undefined) {
		console.log("Missing in cache, fetching")
		projects = await fetchProjects()
		cache.set(projects)
	} else {
		console.log("Cache hit")
	}
	return projects
}

export async function getProjectNames(): Promise<string[]> {
	let projectNames = await cache.projectNames()
	if (projectNames == undefined) {
		console.log("Missing in cache, fetching")
		const projects = await fetchProjects()
		cache.set(projects)
		projectNames = projects?.map((project) => project.name) || []
	} else {
		console.log("Cache hit")
	}
	return projectNames
}

export async function getProject(name: string): Promise<ProjectType | undefined> {
	let project = await cache.project(name)
	if (project == undefined) {
		console.log("Missing in cache, fetching")
		const projects = await fetchProjects()
		cache.set(projects)
		project = projects?.find((project) => project.name === name) || undefined
	} else {
		console.log("Cache hit")
	}
	return project
}

async function fetchProjects(): Promise<ProjectType[]> {
	const httpLink = createHttpLink({
		uri: process.env.GITHUB_GRAPHQL_URI || "https://api.github.com/graphql"
	})

	const authLink = setContext((_, {headers}) => {
		return {
			headers: {
				...headers,
				authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			}
		}
	})

	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	})

	const {data} = await client.query({
		query: gql`{
			viewer {
				repositories(
					first: 10
					orderBy: {field: UPDATED_AT, direction: DESC}
					isFork: false
					privacy: PUBLIC
				) {
					edges {
						node {
							name
							description
							readme: object(expression: "main:README.md") {
								... on Blob {
									text
								}
							}
							url
							stargazerCount
							forkCount
							isMirror
							isEmpty
							homepageUrl
							sshUrl
							licenseInfo {
								name
							}
							languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
								edges {
									node {
										name
									}
								}
							}
						}
					}
				}
			}
		}`
	})

	const {viewer} = data
	const projects = viewer.repositories.edges.map(edge => {
		return {
			name: edge.node.name || null,
			description: edge.node.description || null,
			url: edge.node.url || null,
			readme: edge.node.readme?.text || null,
			languages: edge.node.languages?.edges?.map(edge => edge.node.name) || [],
		}
	})
	console.log("Projects fetched")
	return projects
}
