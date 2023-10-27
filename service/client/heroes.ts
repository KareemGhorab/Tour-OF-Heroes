import { Hero } from '@/types/hero'

const baseUrl = 'http://localhost:3001'

export const updateHero = async (id: number, hero: any) => {
	const res = await fetch(`${baseUrl}/heroes/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(hero),
	})
	return res.json()
}
