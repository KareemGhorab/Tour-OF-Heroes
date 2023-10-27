'use client'

import { getHeroByName } from '@/service/client/heroes'
import { Hero } from '@/types/hero'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const HeroSearch: React.FC = (): JSX.Element => {
	const [heroName, setHeroName] = useState<string>('')
	const [error, setError] = useState<string>('')
	const router = useRouter()

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault()
		const hero: Hero[] = await getHeroByName(heroName)
		if (hero.length) {
			router.push(`/hero/${hero[0].id}`)
		} else {
			setError('No hero found with this name')
		}
	}

	return (
		<section>
			<h3 className='text-2xl'>Hero Search</h3>
			<div className='my-2' />
			<form onSubmit={(e: any) => handleSubmit(e)}>
				<input
					type='text'
					name='hero'
					value={heroName}
					onChange={(e: any) => setHeroName(e.target.value)}
				/>
				{error && error}
			</form>
		</section>
	)
}

export default HeroSearch
