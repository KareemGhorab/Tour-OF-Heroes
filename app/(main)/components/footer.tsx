'use client'

import useLogs from '@/store/logs-store'

const Footer: React.FC = (): JSX.Element => {
	const { logs } = useLogs()

	return (
		<footer>
			<h2 className='text-3xl'>Messages</h2>
			<div className='my-3' />
			<ul className='flex flex-row gap-2'>
				{logs.map(({ id, log }) => (
					<li key={id}>{log}</li>
				))}
			</ul>
		</footer>
	)
}

export default Footer
