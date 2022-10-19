import { GetStaticProps, InferGetStaticPropsType } from "next"
import Link from "next/link"
import { ProjectType } from "@/types/projects"
import { getProjects } from "@/lib/projects"

type Props = {
	projects: ProjectType[]
}

export default function Index({projects}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Link href="/">
				<a className="m-2 bg-accent-primary hover:bg-accent-secondary text-white font-bold py-2 px-4 rounded">Home</a>
			</Link>
			<Link href="/blog">
				<a className="m-2 bg-accent-primary hover:bg-accent-secondary text-white font-bold py-2 px-4 rounded">Blog</a>
			</Link>
			{projects.map((p) => (
				<article key={p.name}>
					<header>
						<Link href={`/projects/${p.name}`} as=""><a>{p.name}</a></Link>
					</header>
					<p>{p.description}</p>
				</article>
			))}
		</>
	)
}

export const getStaticProps: GetStaticProps<Props> = async function ({preview, previewData}) {
	const projects = await getProjects()
	return {
		props: {
			projects
		},
		revalidate: 30 * 60, // 30 minutes
	}
}
