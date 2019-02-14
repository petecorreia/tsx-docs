import React from 'react'
import NextDocument, {
	Head,
	Main,
	NextScript,
	NextDocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export class Document extends NextDocument {
	static async getInitialProps(ctx: NextDocumentContext) {
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
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/fonts/fonts.css"
					/>
				</Head>
				<body className="tsx-docs">
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
