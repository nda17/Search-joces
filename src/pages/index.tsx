import Heading from '@/ui/heading/Heading'
import { NextPage } from 'next'
import Link from 'next/link'

const HomePage: NextPage = () => {
	return (
		<Link href={'https://api.chucknorris.io/'}>
			<Heading title="FAQ" />
		</Link>
	)
}

export default HomePage
