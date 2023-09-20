import Button from '@/app/ui/button'
import Link from 'next/link'

const navItems: { href: string; label: string }[] = [
	{
		label: 'Dashboard',
		href: '/dashboard',
	},
	{
		label: 'Heroes',
		href: '/heroes',
	},
]

const Header: React.FC = (): JSX.Element => (
	<header>
		<h1 className='text-5xl'>Tour of Heroes</h1>
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
