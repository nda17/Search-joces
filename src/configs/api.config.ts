export const API_URL = process.env.API_URL
export const getJokesUrl = (value: string) =>
	`${API_URL}/jokes/search?query=${value}`
