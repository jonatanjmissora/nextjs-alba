import { servicesHeader } from "@/_lib/constant"
import { SectionHeader } from "../section-header"
import { servicesTree } from "@/_lib/services-mock"
import { ElementsTreeType } from "@/_lib/types"
import { Card } from "../elements/card"
import { LeafImgs } from "../leaf-section"

export default function ServicesSection() {
	return (
		<section className="w-full bg-(--background-two) relative pt-20 pb-80 px-(--sm-layout-padding) 2xl:px-(--2xl-layout-padding)">
			<article
				id="services01"
				className="w-full my-32 border border-transparent"
			>
				<SectionHeader
					title="Nuestros servicios en gabinete"
					subtitle="Servicios"
					description={servicesHeader}
				/>
				<ServiceCategoriesComponent />
			</article>
			<LeafImgs />
		</section>
	)
}

const ServiceCategoriesComponent = () => {
	return (
		<div className="flex flex-wrap gap-12 w-full">
			{servicesTree.map((category: ElementsTreeType) => (
				<Card key={category.title} type="services" category={category} />
			))}
		</div>
	)
}
