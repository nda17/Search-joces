import { SearchField } from '@/ui/form-elements/search-field/SearchField'
import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import { NextPage } from 'next'
import styles from './Search.module.scss'
import { useSearch } from './useSearch'

const Search: NextPage = () => {
	const { isSuccess, handleSearch, searchTerm, data } = useSearch()
	console.log(data)
	return (
		<div className={styles.search}>
			<Heading title="Search jokes" />
			<div className={styles.search}>
				<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
				{/* @ts-ignore-next-line  */}
				{isSuccess && <Gallery data={data || []} />}
			</div>
		</div>
	)
}

export default Search
