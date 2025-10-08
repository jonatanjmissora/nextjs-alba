import type { ServiceMockType, ServicesTreeType } from "./types"

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
): ServicesTreeType[] {
	const groupedServices = services.reduce<Record<string, ServicesTreeType>>(
		(acc, service) => {
			const { title, ...serviceData } = service

			if (!acc[title]) {
				acc[title] = {
					title,
					services: [],
				}
			}

			acc[title].services.push(serviceData)
			return acc
		},
		{}
	)

	return Object.values(groupedServices)
}
