import { servicesData } from "@/_lib/services"
import Card from "../card"

export const MovilServicesCard = () => {
	const services = servicesData

	return (
		<div className="w-full flex justify-between">
			<ul className="w-full flex justify-start items-start gap-11 2xl:gap-18 flex-wrap gap-y-12">
				{services.map(service => (
					<Card
						key={service.id}
						type="service"
						element={service}
						from="services"
					/>
				))}
			</ul>
		</div>
	)
}
