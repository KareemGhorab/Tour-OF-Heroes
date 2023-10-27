import { Hero } from '@/types/hero'
import { getHeroes } from '@/service/server/heroes'
import TopHeroes from './components/top-heroes'
import HeroSearch from './components/hero-search'

const Dashboard: React.FC = async (): Promise<JSX.Element> => {
	const topHeroes: Hero[] = await getHeroes({ order: 'desc', limit: 3 })
	return (
		<main>
			<TopHeroes heroes={topHeroes} />
			<HeroSearch />
		</main>
	)
}

export default Dashboard
