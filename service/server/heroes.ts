import { Options } from '../types'

const defaultOptions: Options = {
	limit: 5,
	order: 'asc',
	page: 1,
	sort: 'likes',
}

const generateQueryParams = (options: Options = defaultOptions): string => {
	console.log(Object.entries(options))
	return Object.entries(options)
		.reduce((acc, [k, v]) => `${acc}&_${k}=${v.toString()}`, '')
		.slice(1)
}

export const getHeroes = async (options: Options) => {
	const res = await fetch(
		`${process.env.DB_URL}/heroes?${generateQueryParams(options)}`
	)
	return res.json()
}

export const getHeroById = async (id: number) => {
	const res = await fetch(`${process.env.DB_URL}/heroes/${id}`)
	return res.json()
}

