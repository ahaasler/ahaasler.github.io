import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import { PostType } from "@/types/blog"

const postsRelativePath = "content/blog"
const postsDirectory = join(process.cwd(), postsRelativePath)

function getPostFileFromSlug(slug: string): string {
	return `${slug}.md`
}

function getPostSlugFromFile(file: string): string {
	return file.replace(/\.md$/, "")
}

export function getPostRelativePathFromSlug(slug: string): string {
	return join(postsRelativePath, getPostFileFromSlug(slug))
}

export function getPostFiles(): string[] {
	try {
		return fs.readdirSync(postsDirectory)
	} catch(err) {
		return []
	}
}

export function getPostBySlug(slug: string, fields: (keyof PostType)[] = []): PostType {
	return getPostByFile(getPostFileFromSlug(slug), fields)
}

export function getPostByFile(file: string, fields: (keyof PostType)[] = []): PostType {
	const post: PostType = {
		slug: getPostSlugFromFile(file)
	}
	fields = fields.filter(field => field !== 'slug')
	if (fields.length !== 0) {
		// Only read file if more data is requested
		const md = fs.readFileSync(join(postsDirectory, file), 'utf8')
		const { data, content } = matter(md)

		// Only expose requested data
		fields.forEach((field) => {
			if (field === "content") {
				post.content = content
			} else if (data[field]) {
				post[field] = data[field]
			}
		})
	}
	return post
}

export function getAllPosts(fields: (keyof PostType)[] = []): PostType[] {
	return getPostFiles()
		.map((file) => getPostByFile(file, fields))
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
