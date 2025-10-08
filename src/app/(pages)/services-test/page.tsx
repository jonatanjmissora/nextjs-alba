import { ServiceMockType, servicesMock } from "@/_lib/services-mock"

export default function ServicesTest() {
	return (
		<div className="flex flex-col items-center justify-center w-screen p-12">
			<div className="grid grid-cols-2 gap-4">
				{servicesMock.map((service: ServiceMockType) => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
		</div>
	)
}

const ServiceCard = ({ service }: { service: ServiceMockType }) => {
	return (
		<div className="flex flex-col items-center justify-center w-full bg-slate-500">
			<h2>{service.title}</h2>
			<p>{service.subtitle}</p>
			<p>{service.price}</p>
			<p>{service.description}</p>
			<p>{service.admin_desc}</p>
			<p>{service.description_long}</p>
			<p>{service.images}</p>
		</div>
	)
}
