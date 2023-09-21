import './globals.css'
import type { Metadata } from 'next'
import { Neucha } from 'next/font/google'

const neucha = Neucha({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tour of Heroes',
	description: 'Tour of Heroes but using Next.js 13',
}

export const dynamic = 'force-dynamic'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={neucha.className}>{children}</body>
		</html>
	)
}
