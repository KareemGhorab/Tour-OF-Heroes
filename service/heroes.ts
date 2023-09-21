import { Hero } from '@/types/hero'

export type TOptions = {
	page?: number
	limit?: number
	sort?: keyof Hero
	order?: 'asc' | 'desc'
}

const generateQueryParams = ({
	limit = 5,
	order = 'asc',
	page = 1,
	sort = 'likes',
}: TOptions = {}): string =>
	`?_limit=${limit}&_sort=${sort}&_order=${order}&_page=${page}`

export const getHeroes = async (options?: TOptions) => {
	const res = await fetch(
		`${process.env.DB_URL!}/heroes${generateQueryParams(options)}`
	)
	return res.json()
}

export const getTopHeroes = async (options?: TOptions) => {
	const res = await fetch(
		`${process.env.DB_URL!}/heroes${generateQueryParams(options)}`
	)
	return res.json()
}
