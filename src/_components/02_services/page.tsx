import { servicesHeader } from "@/_lib/services"
import { SectionHeader } from "../section-header"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import { servicesTree } from "@/_lib/services-mock"
import { ElementsTreeType } from "@/_lib/types"
import { Card } from "../layout/card"
import { Dot } from "lucide-react"

export default function ServicesSection() {
	return (
		<section
			id="services"
			className="w-full my-32 relative border border-transparent"
		>
			<LeafImgs />

			<SectionHeader
				title="Nuestros servicios en gabinete"
				subtitle="Servicios"
				description={servicesHeader}
			/>

			<ServiceCategoriesComponent />
		</section>
	)
}

const ServiceCategoriesComponent = () => {
	return (
		<div className="flex flex-wrap gap-6 w-full">
			{servicesTree.map((category: ElementsTreeType) => (
				<Card key={category.title} category={category}>
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

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[35%] 2xl:-bottom-[30%] 2xl:-left-[18%] -left-[18%] size-[20rem] 2xl:size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="absolute -bottom-[10%] 2xl:-bottom-[5%] left-[47%] size-[5rem] 2xl:size-[6rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[25%] 2xl:-bottom-[20%] 2xl:-right-[10%] -right-[5%] size-[7rem] 2xl:size-[10rem] text-[var(--leaf-color)]" />
		</>
	)
}
