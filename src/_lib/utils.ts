import type { ServiceMockType, ElementsTreeType } from "./types"

export const setShortDate = (date: string) => {
	const newDate = new Date(date)
	newDate.setDate(newDate.getDate() + 1)
	return new Intl.DateTimeFormat("es-ES", {
		year: "numeric",
		month: "short",
		day: "2-digit",
	}).format(newDate)
}

export function convertToServicesTree(
	services: ServiceMockType[]
): ElementsTreeType[] {
	const groupedServices = services.reduce<Record<string, ElementsTreeType>>(
		(acc, service) => {
			const { title, ...serviceData } = service

			if (!acc[title]) {
				acc[title] = {
					title,
					elements: [],
				}
			}

			acc[title].elements.push(serviceData)
			return acc
		},
		{}
	)

	return Object.values(groupedServices)
}

export function setUrlCategoryName(categoryName: string) {
	return categoryName
		.toLowerCase()
		.replace(/ /g, "-")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
}

export function setCleanCategoryName(categoryName: string) {
	console.log("categoryName", categoryName)
	const r = categoryName
		.replace(/-/g, " ")
		.replace(/^([a-z])/i, match => match.toUpperCase())
	return r
}
