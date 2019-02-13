import path from 'path'
const { default: nextExport } = require('next/dist/export')
import { log, hasProject } from '../utils'
import { getProjectConfig, getNextConfig } from '../config'

export default async function(dir = '.') {
	if (!hasProject(dir)) return

	const projectConfig = getProjectConfig(dir)
	const conf = getNextConfig(dir)
	const exportConf = {
		...conf,
		distDir: conf.distDir || '.next',
		assetPrefix: conf.assetPrefix || '',
	}

	process.env.REACT_TYPESCRIPT_DOCS_CONFIG = JSON.stringify(projectConfig)

	const options = {
		silent: false,
		outdir: path.join(dir, projectConfig.exportDir as string),
	}

	try {
		log('Exporting...')
		await nextExport(dir, options, exportConf)
		log('Exported!')
		process.exit()
	} catch (e) {
		console.log(e)
	}
}
