import { servicesHeader } from "@/_lib/services"
import { SectionHeader } from "../section-header"
import { servicesTree } from "@/_lib/services-mock"
import { ElementsTreeType } from "@/_lib/types"
import { Card } from "../elements/card"
import { Dot } from "lucide-react"
import { LeafImgs } from "../leaf-section"

export default function ServicesSection() {
	return (
		<section className="w-full bg-[var(--primary-pink)] relative pt-20 pb-80 px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)]">
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
		<div className="flex flex-wrap gap-6 gap-y-12 w-full">
			{servicesTree.map((category: ElementsTreeType) => (
				<Card key={category.title} type="services" category={category}>
					{category.elements.slice(0, 3).map(element => (
						<div key={element.id} className="flex items-center gap-1">
							<span>
								<Dot size={26} />
							</span>
							<span className="w-full text-left text-base sm:text-xs 2xl:text-base">
								{element.subtitle}
							</span>
						</div>
					))}
					{Array.from({ length: 3 - category.elements.length }, (_, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <no puedo hacerlo de otra forma>
						<div key={index} className="w-full text-transparent">
							.
						</div>
					))}
				</Card>
			))}
		</div>
	)
}
