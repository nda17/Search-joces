export interface IResultList {
	total?: number
	result?: IResultItem[]
}

export interface IResultItem {
	createdAt: string
	iconUrl: string
	id: string
	url: string
	value: string
}

export interface IItemData extends IResultList {
	data: IResultItem
}
