import { FC } from 'react'
import styles from './SearchField.module.scss'
import { ISearchField } from './search-field.interface'

export const SearchField: FC<ISearchField> = ({
	searchTerm,
	handleSearch
}) => {
	return (
		<div className={styles.searchField}>
			<input
				placeholder="Search jokes..."
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}
