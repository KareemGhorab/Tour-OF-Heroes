import Link from 'next/link'
import Button from '@/app/ui/button'
import { Hero } from '@/types/hero'

const TopHeroes: React.FC<{ heroes: Hero[] }> = ({ heroes }): JSX.Element => (
	<section className='flex flex-col justify-center items-center'>
		<h2 className='text-2xl'>Top Heroes</h2>
		<div className='my-2' />
		<ul className='flex gap-2'>
			{heroes.map(({ id, name }) => (
				<li key={id}>
					<Link href={`/hero/${id}`}>
						<Button variant='secondary'>{name}</Button>
					</Link>
				</li>
			))}
		</ul>
	</section>
)

export default TopHeroes
