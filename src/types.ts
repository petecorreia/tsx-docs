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
