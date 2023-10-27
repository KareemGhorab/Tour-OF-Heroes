'use client'

import { useFormik } from 'formik'
import { Hero } from '@/types/hero'
import { updateHero } from '@/service/client/heroes'

type Props = {
	hero: Hero
}

type Form = {
	name: string
	likes: string
}

const UpdateHero: React.FC<Props> = ({
	hero: { id, likes, name },
}): JSX.Element => {
	const { handleSubmit, handleChange, handleBlur, values } = useFormik<Form>({
		initialValues: {
			likes: likes.toString(),
			name,
		},
		onSubmit: (val) => {
			updateHero(id, val)
		},
	})

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.name}
					id='name'
					name='name'
				/>
			</form>
		</>
	)
}
export default UpdateHero
