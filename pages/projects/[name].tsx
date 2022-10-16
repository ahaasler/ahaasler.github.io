import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { getProject, getProjectNames, getProjects } from "@/lib/projects"
import { ParsedUrlQuery } from "querystring"
import { ProjectType } from "@/types/projects"
import Head from "next/head"
import Markdown from "@/components/markdown"
import Link from "next/link"

interface Params extends ParsedUrlQuery {
	name: string
}

type Props = {
	project: ProjectType
}

export default function Project({project}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Link href="/">
				<a className="m-2 bg-accent-primary hover:bg-accent-secondary text-white font-bold py-2 px-4 rounded">Home</a>
			</Link>
			<Link href="/blog">
				<a className="m-2 bg-accent-primary hover:bg-accent-secondary text-white font-bold py-2 px-4 rounded">Blog</a>
			</Link>
			<Link href="/projects">
				<a className="m-2 bg-accent-primary hover:bg-accent-secondary text-white font-bold py-2 px-4 rounded">Projects</a>
			</Link>
			<article className="m-6">
				<Head>
					<title>{project.name}</title>
				</Head>
				<h1>{project.name}</h1>
				<h2>{project.description}</h2>
				<div className="prose lg:prose-xl">
					<Markdown content={project.readme}/>
				</div>
			</article>
		</>
	)
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
	const project = await getProject(params.name)
	return {
		props: {
			project: project
		}
	}
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const projectNames = await getProjectNames()
	return {
		paths: projectNames.map((projectName) => {
			return {
				params: {
					name: projectName
				}
			}
		}),
		fallback: false,
	}
}
