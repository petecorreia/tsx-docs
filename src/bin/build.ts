import path from 'path'
const { default: nextBuild } = require('next/dist/build')
import { getNextConfig } from '../config'
import { hasProject, log } from '../utils'

export default async function(dir = '.') {
	if (!hasProject(dir)) return

	const conf = getNextConfig(dir)

	const absDir = path.join(process.cwd(), dir)
	console.log('absDir: ', absDir)

	try {
		log('Building...')
		await nextBuild(absDir, conf)
		log('Built!')
	} catch (e) {
		console.log(e)
	}
}
