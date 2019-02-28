import React from 'react'
import Head from 'next/head'
import { description, title } from '../tsx-docs.config'

const SEO = () => (
	<Head>
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@petecorreia" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta
			name="twitter:image"
			content="https://tsx-docs.now.sh/static/social-card.png"
		/>

		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:url" content="https://tsx-docs.now.sh" />
		<meta
			property="og:image"
			content="https://tsx-docs.now.sh/static/social-card.png"
		/>
	</Head>
)

export default SEO
