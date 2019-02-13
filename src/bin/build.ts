import path from 'path'
const { default: nextBuild } = require('next/dist/build')
import { getNextConfig, getProjectConfig } from '../config'
import { hasProject, log } from '../utils'

export default async function(dir = '.') {
	if (!hasProject(dir)) return

	const projectConfig = getProjectConfig(dir)
	process.env.TSXDOCS_CONFIG = JSON.stringify(projectConfig)

	const conf = getNextConfig(dir)

	const absDir = path.join(process.cwd(), dir)

	try {
		log('Building...')
		await nextBuild(absDir, conf)
		log('Built!')
	} catch (e) {
		console.log(e)
	}
}
