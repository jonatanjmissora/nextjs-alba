import { servicesHeader } from "@/_lib/constant"
import { SectionHeader } from "../section-header"
import { MovilLeafImgs } from "../layout/movil/movil-leaf-imgs"
import { servicesTree } from "@/_lib/services-mock"
import { MovilElementsCard } from "../layout/movil/movil-element-card"

export default function MovilServices() {
	const services = servicesTree

	return (
		<section className="w-full bg-[var(--primary-pink)] flex justify-center items-start relative pb-[300px]">
			<MovilLeafImgs />

			<section id="services" className="w-full relative px-6 pt-12">
				<SectionHeader
					title="Nuestros servicios en gabinete"
					subtitle="Servicios"
					description={servicesHeader}
				/>
				<MovilElementsCard elements={services} />
			</section>
		</section>
	)
}
