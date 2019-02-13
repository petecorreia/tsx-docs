import path from 'path'
import execa from 'execa'
import Listr from 'listr'
import fs from 'fs-extra'
import inquirer from 'inquirer'
import { log } from '../utils'

export default async function(dir?: string) {
	if (!dir) {
		log('Init')
		log()
		const answers: { dir: string } = await inquirer.prompt([
			{
				type: 'input',
				name: 'dir',
				message: 'Directory to initialise',
				default: () => '.',
			},
		])
		dir = answers.dir
		log()
	}

	const from = path.join(__dirname, '../../template')
	const to = path.join(process.cwd(), dir)

	const tasks = new Listr([
		{
			title: 'Copying template',
			task: async () => {
				await fs.remove(path.join(to, 'node_modules'))
				await fs.copy(from, to)
			},
		},
		{
			title: 'Installing dependencies',
			task: () => execa('npm', ['install'], { cwd: to }),
		},
	])

	try {
		log('Initialising...')
		log()

		await tasks.run()

		log()
		log(`Initialised`)
	} catch (e) {
		console.log(e)
	}
}
