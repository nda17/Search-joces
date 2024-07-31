import '@/components/assets/styles/globals.scss'
import MainProvider from '@/providers/MainProvider/MainProvider'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
