import React from 'react'
import { Lead, CodeHighlight, Link } from 'tsx-docs'

const IndexPage = () => (
	<>
		<Lead>
			Minimalist documentation with React Typescript powered by Next.js, Styled
			Components and Rebass.
		</Lead>

		<CodeHighlight
			code={`
				npm init next-docs
			`}
			language="bash"
		/>

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
			To create a new documentation site, run <code>npm init next-docs</code>{' '}
			and follow the prompts.
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
				npm install
				npm run dev
			`}
			language="bash"
		/>

		<h3>Build for deployment</h3>

		<CodeHighlight
			code={`
				npm run build
				# ...or for static exports use:
				npm run build-static
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
