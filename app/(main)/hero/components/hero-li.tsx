'use client'
import Link from 'next/link'
import { PiHeartStraightThin } from 'react-icons/pi'
import Button from '@/app/ui/button'
import { Hero } from '@/types/hero'

type TProps = {
	hero: Hero
}

const HeroLi: React.FC<TProps> = ({
	hero: { id, likes, name },
}): JSX.Element => (
	<li className='flex gap-5'>
		<div className='flex flex-col justify-center items-center'>
			<span>{likes}</span>
			<PiHeartStraightThin />
		</div>
		<Link href={`/hero/${id}`}>
			<Button className='w-40'>{name}</Button>
		</Link>
	</li>
)

export default HeroLi
