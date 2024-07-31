import { NextPage } from 'next'
import { IItemData, IResultItem } from 'shared/types/joke.interface'
import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'

const Gallery: NextPage<IItemData> = ({ data }) => {
	// @ts-ignore-next-line
	const total = data.data.total
	// @ts-ignore-next-line
	const items = data.data.result.map((item: IResultItem) => ({
		id: item.id,
		// @ts-ignore-next-line
		createdAt: item.created_at,
		// @ts-ignore-next-line
		iconUrl: item.icon_url,
		url: item.url,
		value: item.value
	}))

	return (
		<>
			{total >= 4 ? (
				<p className={styles.count}>{`Total count: ${total}`}</p>
			) : (
				<p className={styles.noData}>No jokes here</p>
			)}
			<div className={styles.gallery}>
				{items.map((item: IResultItem) => (
					<GalleryItem key={item.id} data={item} />
				))}
			</div>
		</>
	)
}

export default Gallery
