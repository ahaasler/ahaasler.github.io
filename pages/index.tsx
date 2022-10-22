import { GetStaticProps } from 'next'
import Link from 'next/link'

export default function Index({
	page
}: {
	page: any
}) {
	return (
		<>
			<h1 className="m-2 text-5xl">{page.title}</h1>
			<h2 className="m-2 text-xl text-text-secondary">{page.description}</h2>
			<Link href="/blog">
				<a className="m-2 bg-accent-primary hover:bg-accent-secondary text-white font-bold py-2 px-4 rounded">Blog</a>
			</Link>
			<Link href="/projects">
				<a className="m-2 bg-accent-primary hover:bg-accent-secondary text-white font-bold py-2 px-4 rounded">Projects</a>
			</Link>
		</>
	)
}

export const getStaticProps: GetStaticProps = async function() {
	return {
		props: {
			page: (await import('../config/page.json')).default
		}
	}
}
