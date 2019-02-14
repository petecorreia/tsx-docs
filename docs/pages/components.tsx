import React from 'react'
import { CodeHighlight, Lead } from 'tsx-docs'

export default () => (
	<>
		<p>
			We provide <strong>components</strong> to get you going fast when
			documenting your components or libraries. These are built to look great
			and they're easily customisible - they're styled-components after all.
		</p>
		<h2>Link</h2>
		<p>
			Use the <code>{`<Link>`}</code> component to route to your pages.
		</p>
		<p>
			It's the same as Next.js Link,{' '}
			<a href="https://nextjs.org/docs/#with-link">read more in the docs</a>.
		</p>
		<CodeHighlight
			code={`
				<CodeHighlight
					code={\`
						<Link href="/test-page" prefetch>
							<a>Test Page</a>
						</Link>
					\`}
					language="tsx"
				/>
			`}
		/>
		<h2>Lead</h2>
		<p>
			The <code>{`<Lead>`}</code> component helps text standout. It's especially
			useful for introductions to pages.
		</p>
		<Lead>The quick brown fox jumps over the lazy dog</Lead>
		<CodeHighlight
			code={`
				<Lead>The quick brown fox jumps over the lazy dog</Lead>
			`}
		/>
		<h2>CodeHighlight</h2>
		<p>
			Use the <code>{`<CodeHighlight>`}</code> component to err... highlight
			code!
		</p>
		<CodeHighlight
			code={`
				<CodeHighlight
					code={\`
						import React from 'react'

						const Component = () => <p>Content</p>

						export default Component
					\`}
					language="tsx"
				/>
			`}
		/>
		<p>
			The <code>language</code> prop supports javascript, typescript, JSX, TSX,
			bash, json.
		</p>

		<h2>Core Components</h2>

		<p>TSX Docs exports the following core components:</p>

		<ul>
			<li>
				<code>{`<App>`}</code>
			</li>
			<li>
				<code>{`<Document>`}</code>
			</li>
			<li>
				<code>{`<Error>`}</code>
			</li>
		</ul>

		<p>
			These components are there to give you an instant layer of styling and
			functionality so you don't have to worry about them unless you want to
			customise the shell of the pages.
		</p>
	</>
)
