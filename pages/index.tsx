import { GetStaticProps } from 'next'

export default function Index({
	page
}: {
	page: {
		title: string
		description: string
	}
}) {
	return (
		<>
			<h1>{page.title}</h1>
			<h2>{page.description}</h2>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			page: (await import('../config/page.json')).default
		}
	}
}
