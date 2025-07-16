import { servicesData } from "@/app/_lib/services"
import ServicePage from "./service"

export default async function ServerServicePage({
	params,
}: {
	params: { id: string }
}) {
	const id = await params.id
	const service = servicesData.find(service => service.id === id)

	if (!service) {
		return <span>Service not found</span>
	}

	return <ServicePage service={service} />
}
