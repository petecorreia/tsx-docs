import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import { log, hasProject } from '../utils'
import { getNextConfig, getProjectConfig } from '../config'

export default async function(
	dir = '.',
	dev = process.env.NODE_ENV !== 'production'
) {
	if (!hasProject(dir)) return

	const projectConfig = getProjectConfig(dir)
	process.env.TSXDOCS_CONFIG = JSON.stringify(projectConfig)

	const conf = getNextConfig(dir)
	const app = next({ dev, dir, conf })

	const handle = app.getRequestHandler()

	log(dev ? 'Starting dev server...' : 'Starting server')

	const port = parseInt(process.env.PORT as string, 10) || 3000

	await app.prepare().then(() => {
		createServer((req, res) => {
			const parsedUrl = parse(req.url as string, true)
			handle(req, res, parsedUrl)
		}).listen(port, (err: any) => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${port}`)
		})
	})
}
