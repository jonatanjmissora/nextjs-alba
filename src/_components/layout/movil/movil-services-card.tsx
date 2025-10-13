import Card from "../../elements/fav-card"
import { servicesMock } from "@/_lib/services-mock"

export const MovilServicesCard = () => {
	const services = servicesMock

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
