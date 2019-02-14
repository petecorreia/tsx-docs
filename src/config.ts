import { TSXDocsConfig } from './types'
import { NextConfig } from 'next'
import path from 'path'
const withCSS = require('@zeit/next-css')

const defaultProjectConfig: TSXDocsConfig = {
	exportDir: './dist',
	title: 'Project',
	description: 'Built with tsx-docs',
	routes: [
		{ name: 'Guide', path: 'https://tsx-docs.now.sh/guide' },
		{
			name: 'Github',
			path: 'https://github.com/petecorreia/tsx-docs',
		},
	],
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
}

export function getProjectConfig(dir: string): TSXDocsConfig {
	const userProjectConfig = getUserProjectConfig(dir) || {}
	return {
		...defaultProjectConfig,
		...userProjectConfig,
	}
}

export function getNextConfig(dir: string): NextConfig {
	const projectConfig = getProjectConfig(dir)
	const defaultNextConfig = getDefaultNextConfig(projectConfig)
	const userNextConfig = getUserNextConfig(dir)
	if (typeof userNextConfig === 'function') {
		return userNextConfig(defaultNextConfig)
	}
	return {
		...defaultNextConfig,
		...userNextConfig,
	}
}

export function getDefaultNextConfig(projectConfig: TSXDocsConfig) {
	return withCSS({
		pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
		env: {
			TSXDOCS_CONFIG: JSON.stringify(projectConfig),
		},
		webpack(config: any, options: any) {
			const { dir, defaultLoaders, dev, isServer } = options

			config.resolve.extensions.push('.ts', '.tsx')

			const includeDirs = (projectConfig.include || []).map(p =>
				path.join(dir, p)
			)

			if (!defaultLoaders.hotSelfAccept) {
				if (dev && !isServer) {
					config.module.rules.push({
						test: /\.(js|jsx|ts|tsx)$/,
						loader: 'hot-self-accept-loader',
						include: [path.join(dir, 'pages'), ...includeDirs],
						options: {
							extensions: /\.(js|jsx|ts|tsx)$/,
						},
					})
				}
			}

			config.module.rules.push({
				test: /\.(js|jsx|ts|tsx)$/,
				include: [dir, ...includeDirs],
				exclude: /node_modules/,
				use: {
					...defaultLoaders.babel,
					options: {
						...defaultLoaders.babel.options,
						presets: ['@babel/preset-typescript'],
					},
				},
			})

			return config
		},
	})
}

export function getUserProjectConfig(dir: string): TSXDocsConfig | undefined {
	let userConfig

	try {
		userConfig = require(path.join(process.cwd(), dir, 'tsx-docs.config.js'))
	} catch {
		// ok to let this go
	}

	return userConfig
}

type NextFunctionConfig = (c: NextConfig) => NextConfig

export function getUserNextConfig(
	dir: string
): NextConfig | NextFunctionConfig | undefined {
	let userNextConfig

	try {
		userNextConfig = require(path.join(process.cwd(), dir, 'next.config.js'))
	} catch {
		// ok to let this go
	}

	return userNextConfig
}
