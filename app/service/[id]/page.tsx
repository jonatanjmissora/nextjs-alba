import { servicesData } from "@/app/_lib/services"
import ServicePage from "./service"

type Params = Promise<{ id: string }>
type SearchParams = Promise<{ from: string | undefined }>

export default async function ServerServicePage({
	params,
	searchParams,
}: {
	params: Params
	searchParams: SearchParams
}) {
	const { id } = await params
	const { from = "services" } = await searchParams

	const service = servicesData.find(service => service.id === id)

	if (!service) {
		return <span>Service not found</span>
	}

	return <ServicePage service={service} from={from} />
}
