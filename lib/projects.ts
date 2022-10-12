import { promises as fs } from "fs"
import path from "path"
import { ProjectType } from "@/types/projects"
import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

export async function getProjects(): Promise<ProjectType[]> {
	try {
		const data = await fs.readFile(path.join(process.cwd(), "projects.db"))
		const projects: ProjectType[] = JSON.parse(data as unknown as string)
		console.log("Cache hit")
		return projects
	} catch (error) {
		console.log("Fetching projects")
		const projects: ProjectType[] = await fetchProjects()
		await fs.writeFile(
			path.join(process.cwd(), "projects.db"),
			JSON.stringify(projects),
		)
		return projects
	}
}

export async function getProject(name: string): Promise<ProjectType | null | undefined> {
	const projects: ProjectType[] = await getProjects()
	return projects.find((project) => project.name === name)
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
