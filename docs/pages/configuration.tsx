import React from 'react'
import { CodeHighlight } from 'tsx-docs'
import SEO from '../components/SEO'

export default () => (
	<>
		<SEO />

		<p>
			You can edit <code>tsx-docs.config.js</code> to customise your docs. It's
			generated for you and it's located at the root of the project.
		</p>

		<CodeHighlight
			code={`
				/tsx-docs.config.js
			`}
			language="bash"
		/>

		<h2>Meta</h2>

		<p>
			You should edit the meta information on <code>tsx-docs.config.js</code>{' '}
			with your project information.
		</p>

		<CodeHighlight
			code={`
				// tsx-docs.config.js

				// project name
				title: '',
				// project description
				description: '',
				// author / copyright holder displayed on footer
				author: '',
				// (optional) author / copyright holder URL display on footer
				authorURL: '',
			`}
			language="js"
		/>

		<h2>Routes</h2>

		<p>
			The routes defined in <code>tsx-docs.config.js</code> are used to populate
			the sidebar. The routes don't have to be pointing just to the app, feel
			free to point to any URL (e.g Github repo).
		</p>

		<p>
			The app title always links to <code>/</code> so you can rely on that for
			navigating to the project home (if you feel it's sufficient).
		</p>

		<CodeHighlight
			code={`
				// tsx-docs.config.js

				routes: [
					// supports internal routes (prefetched, etc)
					{
						name: 'Example Page',
						path: '/example',
					},
					// and also external routes
					{
						name: 'Github',
						path: 'https://github.com/petecorreia/tsx-docs',
					},
				],
			`}
			language="js"
		/>

		<h2>Theming</h2>

		<p>
			Theming is powered by{' '}
			<a href="https://rebassjs.org/theming">Rebass Theming</a>.
		</p>

		<p>
			Simply edit the <code>theme</code> property on{' '}
			<code>tsx-docs.config.js</code>
		</p>

		<CodeHighlight
			code={`
				// tsx-docs.config.js

				// Default Rebass theme, feel free to edit
				theme: {
					breakpoints: ['550px', '769px', '1024px'],
					fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
					space: [0, 4, 8, 16, 32, 64, 128, 256],
					colors: {
						blue: '#000',
						gray: '#666',
						lightgray: '#aaa',
					},
				},
			`}
			language="js"
		/>

		<p>
			You can find more information about the available properties in the{' '}
			<a href="https://rebassjs.org/theming">Rebass documentation</a>.
		</p>

		<h2>Next.js Configuration</h2>

		<p>
			TSX Docs is powered by <a href="https://nextjs.org">Next.js</a> so you can
			add configuration for it either via <code>tsx-docs.config.js</code>{' '}
			(recommended) or directly via <code>next.config.js</code>.
		</p>

		<CodeHighlight
			code={`
				// tsx-docs.config.js

				nextConfig: {
					assetPrefix: 'https://example.com'
				},
			`}
			language="js"
		/>

		<p>
			You can find more information about the available properties in the{' '}
			<a href="https://nextjs.org/docs">Next.js documentation</a>.
		</p>
	</>
)
