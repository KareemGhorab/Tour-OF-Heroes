import { getHeroById } from '@/service/server/heroes'
import { Hero } from '@/types/hero'
import UpdateHero from './components/update-hero'

const HeroDetails: React.FC<{
	params: { id: string }
}> = async ({ params: { id } }): Promise<JSX.Element> => {
	const hero: Hero = await getHeroById(+id)
	return (
		<main>
			<h2 className='text-3xl'>{hero.name} Details</h2>
			<div className='my-2' />
			<div>id: {hero.id}</div>
			<UpdateHero hero={hero} />
		</main>
	)
}
export default HeroDetails
