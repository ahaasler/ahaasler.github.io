import { GetStaticProps } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'

export default function Index({
	file
}: {
	file: any
}) {
	const formOptions = {
		label: 'Home Page',
		fields: [
			{ label: 'Title', name: 'title', component: 'text' },
			{ label: 'Description', name: 'description', component: 'text' }
		],
	}
	const [page, form] = useGithubJsonForm(file, formOptions)
	usePlugin(form)
	useGithubToolbarPlugins()
	return (
		<>
			<h1>{page.title}</h1>
			<h2>{page.description}</h2>
		</>
	)
}

export const getStaticProps: GetStaticProps = async function({
	preview,
	previewData
}) {
	if (preview) {
		return getGithubPreviewProps({
			...previewData,
			fileRelativePath: 'config/page.json',
			parse: parseJson
		})
	}
	return {
		props: {
			sourceProvider: null,
			error: null,
			preview: false,
			file: {
				fileRelativePath: 'config/page.json',
				data: (await import('../config/page.json')).default
			}
		}
	}
}
