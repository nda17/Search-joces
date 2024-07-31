import { getJokesUrl } from '@/configs/api.config'
import { axiosClassic } from '@/configs/axios.config'

export const SearchService = {
	async getJokesList(searchTerm?: string) {
		return axiosClassic.get(getJokesUrl(`${searchTerm}`))
	}
}
