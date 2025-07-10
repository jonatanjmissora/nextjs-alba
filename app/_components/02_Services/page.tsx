import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"
import Leaf2 from "@/public/leaf/leaf2"
import { SectionHeader } from "../section-header"
import { servicesData } from "@/app/_lib/services"
import ServiceCard from "./service-card"

export default function page() {
	return (
		<div
			id="services"
			className="w-full min-h-[100dvh] 2xl:min-h-[90dvh] my-32 relative border border-transparent"
		>
			<LeafImgs />
			<SectionHeader
				title="Nuestros servicios en gabinete"
				subtitle="Servicios"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>

			<div className="w-full h-[80dvh] 2xl:h-[70dvh] flex justify-between">
				<ServicesCard />
			</div>
		</div>
	)
}

const ServicesCard = () => {
	const services = servicesData

	return (
		<ul className="w-full flex justify-between items-start">
			{services.map(service => (
				<ServiceCard key={service.id} service={service} />
			))}
		</ul>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-32 2xl:-bottom-[30%] 2xl:-left-[18%] -left-40 size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute bottom-[10%] 2xl:-bottom-[5%] left-[47%] size-[7rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[5%] 2xl:-bottom-[20%] 2xl:-right-[10%] -right-[5%] size-[15rem] text-[var(--leaf-color)]" />
		</>
	)
}
