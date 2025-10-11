export type ServiceTreeType = {
	id: number
	subtitle: string
	price: number
	description: string
	description_admin: string
	description_long: string
	images: string
}

export type ServicesTreeType = {
	title: string
	services: ServiceTreeType[]
}

export type ServiceMockType = {
	id: number
	title: string
	subtitle: string
	price: number
	description: string
	description_admin: string
	description_long: string
	images: string
}
