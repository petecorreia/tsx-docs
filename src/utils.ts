#! /usr/bin/env node
import chalk from 'chalk'
import { getUserProjectConfig } from './config'

export const log = (m?: string) =>
	console.log(m ? chalk.magenta('[tsx-docs] ' + m) : '')

export const logError = (m?: string) =>
	console.error(m ? chalk.red('[tsx-docs] ' + m) : '')

export const hasProject = (dir: string) => {
	if (!Boolean(getUserProjectConfig(dir))) {
		const prettyDir = dir !== '.' ? dir : ''
		const message = `No project found at "${dir}"

> tsx-docs init ${prettyDir}`
		logError(message)
		return false
	}
	return true
}
