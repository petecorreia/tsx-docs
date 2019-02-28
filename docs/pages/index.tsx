import React from 'react'
import { Lead, CodeHighlight, Link } from 'tsx-docs'
import SEO from '../components/SEO'

const IndexPage = () => (
	<>
		<SEO />

		<Lead>
			Minimalist documentation with React Typescript powered by Next.js, Styled
			Components and Rebass.
		</Lead>

		<CodeHighlight
			code={`
				npx tsx-docs init [dir]
			`}
			language="bash"
		/>

		<p>Once the application has been generated, cd into it and:</p>

		<CodeHighlight
			code={`
				cd [dir]
				npm run dev
			`}
			language="bash"
		/>

		<p>
			Visit <a href="http://localhost:3000">http://localhost:3000</a>! 🎉
		</p>

		<h2>Goals</h2>

		<ul>
			<li>
				⚛️ <strong>Simplicity</strong> by focusing on React and Typescript
			</li>
			<li>
				💨 <strong>Fast and accessible</strong> effortlessly
			</li>
			<li>
				◾️ <strong>Minimalist</strong> with easy customisation
			</li>
		</ul>

		<h2>Getting Started</h2>

		<p>
			To create a new documentation site, run <code>npx tsx-docs init</code> and
			follow the prompts. Once the application has been generated run{' '}
			<code>npm run dev</code>.
		</p>

		<p>
			Follow our{' '}
			<strong>
				<Link href="/guide" prefetch>
					<a>Guide</a>
				</Link>
			</strong>
			.
		</p>
		<p>
			Have a look at{' '}
			<strong>
				<Link href="/configuration" prefetch>
					<a>Configuration</a>
				</Link>
			</strong>{' '}
			options .
		</p>
		<p>
			Use the provided{' '}
			<strong>
				<Link href="/components" prefetch>
					<a>Components</a>
				</Link>
			</strong>
			.
		</p>

		<h3>Run in development mode</h3>

		<CodeHighlight
			code={`
				npm run dev
			`}
			language="bash"
		/>

		<h3>Build for production</h3>

		<CodeHighlight
			code={`
				npm run build
				npm run start
			`}
			language="bash"
		/>

		<h3>Static export</h3>

		<CodeHighlight
			code={`
				npm run export
			`}
			language="bash"
		/>

		<h3>Type checking</h3>

		<CodeHighlight
			code={`
				npm run typecheck
			`}
			language="bash"
		/>

		<p>Enjoy! 🎉</p>
	</>
)

export default IndexPage
