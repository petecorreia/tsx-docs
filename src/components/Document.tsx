import React from 'react'
import NextDocument, {
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

type Props = DocumentProps & {
	className?: string
}

export class Document extends NextDocument<Props> {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				(originalRenderPage as any)({
					enhanceApp: (App: any) => (props: any) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await NextDocument.getInitialProps(ctx)

			return {
				...initialProps,
				styles: [...(initialProps.styles as any), ...sheet.getStyleElement()],
			}
		} finally {
			;(sheet as any).seal()
		}
	}

	render() {
		return (
			<html>
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/fonts/fonts.css"
					/>
					<link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
				</Head>
				<body className={this.props.className}>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
