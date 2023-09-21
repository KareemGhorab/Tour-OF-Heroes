import Header from './components/header'
import Footer from './components/footer'

const MainLayout: React.FC<React.PropsWithChildren> = ({
	children,
}): JSX.Element => (
	<div className='mx-auto max-w-5xl p-10'>
		<Header />
		<div className='my-10'></div>
		{children}
		<div className='my-10'></div>
		<Footer />
	</div>
)

export default MainLayout
