import { ILayout } from '@/components/layout/layout.interface'
import { Outfit } from 'next/font/google'
import { FC } from 'react'
import styles from './Layout.module.scss'

const font = Outfit({
	subsets: ['latin'],
	weight: '400',
	display: 'fallback',
	style: 'normal'
})

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<main className={font.className}>{children}</main>
		</div>
	)
}

export default Layout
