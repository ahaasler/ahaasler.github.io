import Link from "next/link"
import ReactMarkdown from "react-markdown/with-html"
import gfm from "remark-gfm"

type Props = {
	content: string
}

export default function Markdown({ content }: Props) {
	return (
		<ReactMarkdown
			plugins={ [gfm] }
			children={ content }
			renderers={{
				link: ({ children, href }) => {
					return <Link href={href}><a>{children}</a></Link>
				}
			}}
		/>
	)
}
