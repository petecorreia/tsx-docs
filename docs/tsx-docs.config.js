module.exports = {
	title: 'TSX Docs',
	description: 'Built with tsx-docs',
	routes: [
		{ name: 'About', path: '/about' },
		{
			name: 'Github',
			path: 'https://github.com/petecorreia/tsx-docs',
		},
	],
	nextConfig: {
		target: 'serverless',
	},
}
