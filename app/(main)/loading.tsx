import { PiSpinnerGapThin } from 'react-icons/pi'

const Loading: React.FC = (): JSX.Element => (
	<main className='min-h-screen flex justify-center items-center'>
		<PiSpinnerGapThin className='animate-spin' size='lg' />
	</main>
)

export default Loading
