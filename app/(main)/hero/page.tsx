import { getHeroes } from '@/service/server/heroes'
import { Hero } from '@/types/hero'
import HeroLi from './components/hero-li'

const Hero: React.FC = async (): Promise<JSX.Element> => {
	const heroes: Hero[] = await getHeroes({ order: 'desc' })
	return (
		<main>
			<h2 className='text-3xl'>Heroes List</h2>
			<div className='my-6' />
			<ul className='flex flex-col gap-5'>
				{heroes.map((hero) => (
					<HeroLi key={hero.id} hero={hero} />
				))}
			</ul>
		</main>
	)
}
export default Hero
