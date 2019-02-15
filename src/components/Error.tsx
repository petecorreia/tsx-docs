import React from 'react'
import { NextFunctionComponent } from 'next'
import NextLink from 'next/link'

export const Error: NextFunctionComponent<{
	statusCode: string
	className?: string
}> = ({ statusCode, className }) => (
	<>
		{statusCode ? (
			<p>`An error ${statusCode} occurred on the server.`</p>
		) : (
			<>
				<p>An error occurred, the page doesn't seem to exist.</p>
				<hr />
				<NextLink href="/" prefetch>
					<a>Let's go back to the beginning?</a>
				</NextLink>
			</>
		)}
	</>
)

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? (err as any).statusCode : null
	return { statusCode }
}
