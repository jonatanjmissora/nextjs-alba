import { servicesData } from "@/_lib/services"
import ServicePage from "./service"
import NotFound from "@/_components/layout/not-found"

type Params = Promise<{ id: string }>
type SearchParams = Promise<{
	from: "services" | "shop" | "favorites" | "cart"
}>

export async function generateStaticParams() {
	return servicesData.map(service => ({ id: service.id })).slice(0, 10)
}

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
		return <NotFound />
	}

	return <ServicePage service={service} from={from} />
}
