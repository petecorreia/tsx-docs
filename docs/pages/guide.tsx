import React from 'react'
import { CodeHighlight, Link } from 'tsx-docs'

export default () => (
	<>
		<p>
			After running <code>npx tsx-docs init</code> and following the prompts,
			your project is generated in the specified folder.
		</p>
		<p>
			All dependencies are installed as part of the process so you can just run
			the dev command straight away:
		</p>
		<CodeHighlight
			code={`
				npm run dev
			`}
			language="bash"
		/>
		<p>
			Navigate to <a href="http://localhost:3000">http://localhost:3000</a> and
			you should see the app running!
		</p>
		<p>
			<em>Note:</em> Type checking is done in a separate process so run{' '}
			<code>npm run typecheck</code> on a separate terminal (or let your IDE do
			its thing) to type check your code as you develop.
		</p>
		<h2>Adding Pages</h2>
		<p>
			Each file in the <code>/pages</code> directory will create a route for
			your application. As an example, create a file at{' '}
			<code>/pages/test.tsx</code> with following:
		</p>
		<CodeHighlight
			code={`
				import React from 'react'

				export default () => <p>Created a new page!</p>
			`}
		/>
		<p>
			Navigate to{' '}
			<a href="http://localhost:3000/test">http://localhost:3000/test</a> and
			you should see the new page with the above content!
		</p>
		<h2>Adding Sidebar Links</h2>
		<p>
			Open up <code>tsx-docs.config.js</code> and add routes to the config:
		</p>
		<CodeHighlight
			code={`
				// /docs.config.js
				routes: [
					{
						name: 'Test',
						path: '/test',
					},
				],
			`}
			language="js"
		/>
		<p>
			That's it! The app should reload and display a Test link in the sidebar.
		</p>
		<h2>Configuring your Project</h2>
		<p>
			Now that you've run through the basic editing and development, it's time
			to make it yours!
		</p>
		<p>
			Make the following tweaks to <code>tsx-docs.config.js</code>:
		</p>
		<CodeHighlight
			code={`
				// edit the following with your information:

				title: 'Project Docs',
				description: 'This is an example project with create-next-docs',
				author: 'William Gibson',
				authorURL: 'http://loremgibson.com',
			`}
			language="js"
		/>
		<p>
			The above will make sure the title, window title, meta tags and footer
			info are all set up properly.
		</p>
		<p>
			For all configuration options, have a look the{' '}
			<Link href="/configuration" prefetch>
				<a>Configuration</a>
			</Link>{' '}
			page.
		</p>
		<h2>Deploying</h2>
		<p>
			The project <strong>includes a now.json configuration file</strong> for
			seamless deployments with <a href="https://zeit.co/now">Zeit Now</a> so if
			you've set it up with your Github account your project will deploy
			automatically!
		</p>
		<p>
			For other services or use-cases, have a look at the{' '}
			<a href="https://nextjs.org/docs/#production-deployment">
				Next.js Production Deployment docs
			</a>
			.
		</p>
		<hr />
		Have a look at all{' '}
		<Link href="/configuration" prefetch>
			<a>configuration options</a>
		</Link>{' '}
		and the provided{' '}
		<Link href="/components" prefetch>
			<a>components</a>
		</Link>
		.
	</>
)
