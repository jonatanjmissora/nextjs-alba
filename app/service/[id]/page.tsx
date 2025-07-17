import { servicesData } from "@/app/_lib/services"
import ServicePage from "./service"

export default function ServerServicePage({
	params,
	searchParams,
}: {
	params: { id: string }
	searchParams: { [key: string]: string | undefined }
}) {
	const id = params.id
	const from = searchParams.from ?? "services"

	const service = servicesData.find(service => service.id === id)

	if (!service) {
		return <span>Service not found</span>
	}

	return <ServicePage service={service} from={from} />
}
