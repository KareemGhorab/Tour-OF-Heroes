import clsx from 'clsx'

type TProps = {
	type?: 'submit' | 'button'
	variant?: 'primary' | 'secondary'
	onClick?: React.MouseEventHandler
} & React.PropsWithChildren

const Button: React.FC<TProps> = ({
	children,
	type,
	onClick,
	variant = 'primary',
}): JSX.Element => (
	<button
		type={type}
		onClick={onClick}
		className={clsx('py-3 px-5 text-xl rounded', {
			'border border-neutral-750 bg-white text-neutral-750 hover:bg-neutral-750 hover:text-white':
				variant === 'primary',
			'border border-white bg-neutral-750 text-white hover:bg-white hover:text-neutral-750':
				variant === 'secondary',
		})}
	>
		{children}
	</button>
)

export default Button
