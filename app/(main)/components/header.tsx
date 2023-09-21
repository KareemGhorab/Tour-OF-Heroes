import clsx from 'clsx'
import Link from 'next/link'
import Button from '@/app/ui/button'
import { cabin } from '@/utils/fonts'

const navItems: { href: string; label: string }[] = [
	{
		label: 'Dashboard',
		href: '/dashboard',
	},
	{
		label: 'Heroes',
		href: '/hero',
	},
]

const Header: React.FC = (): JSX.Element => (
	<header>
		<h1 className={clsx('text-6xl', cabin.className)}>Tour of Heroes</h1>
		<div className='my-3' />
		<nav>
			<ul className='flex gap-5'>
				{navItems.map(({ href, label }) => (
					<li key={label}>
						<Link href={href}>
							<Button>{label}</Button>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	</header>
)

export default Header
