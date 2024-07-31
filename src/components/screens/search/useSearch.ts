import { SearchService } from '@/services/search/search.service'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const router = useRouter()

	useEffect(() => {
		searchTerm.length >= 4
			? router.push('/search', `/search?query=${searchTerm}`, {
					shallow: true
			  })
			: null
		searchTerm.length === 0
			? router.push('/search', '/search', { shallow: true })
			: null
	}, [searchTerm])

	const { isSuccess, isError, data, error } = useQuery(
		[searchTerm],
		() => SearchService.getJokesList(searchTerm),
		{
			enabled: searchTerm.length >= 4,
			staleTime: Infinity
		}
	)

	if (isError) {
		console.error(error)
	}

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, handleSearch, searchTerm, data }
}
