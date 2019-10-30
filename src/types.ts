import { NextConfig } from 'next-server/next-config'

type NextConfigFunction = (nextConfig: NextConfig) => NextConfig

export type TSXDocsConfig = {
	root?: string
	include?: string[]
	exportDir?: string
	title: string
	description: string
	author?: string
	authorURL?: string
	routes: TSXDocsRoute[]
	theme: TSXDocsTheme
	nextConfig?: NextConfig | NextConfigFunction
}

export type TSXDocsRoute = {
	name: string
	path: string
}

export type TSXDocsTheme = {
	breakpoints: string[]
	fontSizes: number[]
	space: number[]
	colors: {
		[key: string]: string
	}
}
