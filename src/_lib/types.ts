export type ElementTreeType = {
	id: number
	category_title: string
	category_id: number
	title: string
	price: number
	description: string
	description_admin: string
	description_long: string
	images: string
}

export type ElementsTreeType = {
	id: number
	title: string
	description: string
	image: string
	elements: ElementTreeType[]
}

export type ElementMockType = {
	id: number
	category_title: string
	category_id: number
	title: string
	price: number
	description: string
	description_admin: string
	description_long: string
	images: string
}
