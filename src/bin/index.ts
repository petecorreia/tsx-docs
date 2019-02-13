#! /usr/bin/env node

import yargs, { Argv } from 'yargs'
import server from './server'
import build from './build'
import staticExport from './export'
import init from './init'

const defaultArgs = (args: Argv<{}>) => {
	return args.positional('dir', {
		describe: 'root directory',
		default: '.',
	})
}

const setEnv = (dir: string) => {
	process.env.REACT_TYPESCRIPT_DOCS_DIR = dir
}

yargs
	.command(
		'dev [dir]',
		'start tsx-docs dev server (similar to "next")',
		defaultArgs,
		({ dir }) => {
			setEnv(dir)
			server(dir, true)
		}
	)
	.command(
		'start [dir]',
		'start tsx-docs production server (similar to "next start")',
		defaultArgs,
		({ dir }) => {
			setEnv(dir)
			server(dir, false)
		}
	)
	.command(
		'build [dir]',
		'build tsx-docs production server and client (similar to "next build")',
		defaultArgs,
		({ dir }) => {
			setEnv(dir)
			build(dir)
		}
	)
	.command(
		'export [dir]',
		'export static tsx-docs (similar to "next build && next export")',
		defaultArgs,
		({ dir }) => {
			setEnv(dir)
			staticExport(dir)
		}
	)
	.command(
		'init [dir]',
		'scaffold tsx-docs project at directory',
		(args: Argv<{}>) => {
			return args.positional('dir', {
				describe: 'root directory',
			})
		},
		({ dir }) => {
			init(dir as string)
		}
	)
	.scriptName('tsx-docs')
	.demandCommand()
	.help()
	.wrap(100)
	.epilog(
		'for more information visit https://github.com/petecorreia/tsx-docs'
	)
	.showHelpOnFail(false, 'whoops, something went wrong! run with --help').argv // tslint:disable-line:no-unused-expression
