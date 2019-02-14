module.exports = {
	title: 'TSX Docs',
	description:
		'Minimalist documentation with React Typescript powered by Next.js, Styled Components and Rebass.',
	author: 'Pete Correia',
	authorURL: 'https://petecorreia.com',
	routes: [
		{ name: 'Guide', path: '/guide' },
		{ name: 'Configuration', path: '/configuration' },
		{ name: 'Components', path: '/components' },
		{ name: 'Github', path: 'https://github.com/petecorreia/tsx-docs' },
	],
	nextConfig: {
		target: 'serverless',
	},
}
