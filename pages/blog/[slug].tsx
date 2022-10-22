import Head from "next/head"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { ParsedUrlQuery } from "querystring"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { PostContent, PostData } from "@/types/blog"
import Markdown from "@/components/markdown"

interface Params extends ParsedUrlQuery {
	slug: string
}

type PropData = {
	frontmatter: PostData
	markdownBody: PostContent
}

type Props = {
	data: PropData
}

export default function Post({data}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<article className="m-6">
			<Head>
				<title>
					{data.frontmatter.title}
				</title>
			</Head>
			<h1>{data.frontmatter.title}</h1>
			<div className="prose lg:prose-xl">
				<Markdown content={data.markdownBody}/>
			</div>
		</article>
	)
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
	const {slug, content, ...data} = getPostBySlug(params.slug, [
		"title",
		"content"
	])

	return {
		props: {
			data: {
				frontmatter: data,
				markdownBody: content
			}
		}
	}
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	return {
		paths: getAllPosts().map((posts) => {
			return {
				params: {
					slug: posts.slug
				}
			}
		}),
		fallback: false,
	}
}
