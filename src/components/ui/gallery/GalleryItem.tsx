import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IItemData } from 'shared/types/joke.interface'
import styles from './Gallery.module.scss'

const GalleryItem: NextPage<IItemData> = ({ data }) => {
	return (
		<div className={styles.item}>
			<Link href={data.url}>
				<div className={styles.info}>
					<Image
						width={80}
						height={80}
						src={data.iconUrl}
						alt={'Picture'}
						unoptimized
					/>

					<p>{data.createdAt.slice(0, 16)}</p>
				</div>
				<p>{data.value}</p>
			</Link>
		</div>
	)
}

export default GalleryItem
