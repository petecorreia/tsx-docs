import React from 'react'
import Link from 'next/link'
import { Lead, CodeHighlight } from 'tsx-docs'

export default () => (
	<>
		<Lead>
			Welcome to your Docs{' '}
			<span role="img" aria-label="party">
				🎉
			</span>
		</Lead>

		<p>
			We recommend following our{' '}
			<a href="https://tsx-docs.now.sh/guide">Guide</a> if you're
			not already doing it.
		</p>

		<p>
			You should also have a look at all the{' '}
			<a href="https://tsx-docs.now.sh/configuration">
				configuration options
			</a>{' '}
			and the provided{' '}
			<a href="https://tsx-docs.now.sh/components">components</a>.
		</p>

		<hr />

		<CodeHighlight
			code={`
				npm run dev
				npm run build
				npm run typecheck
			`}
			language="bash"
		/>
	</>
)
