import { serviceCategories, serviceHeader } from "@/_lib/services"
import { SectionHeader } from "../section-header"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import CardCategories from "../layout/card-categories"

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
				description={serviceHeader}
			/>

			<ServiceCategoriesComponent />

			<div className="w-full border-t-2 border-[var(--secondary-green)] text-right mt-12">
				<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
					ver mas +
				</button>
			</div>
		</section>
	)
}

const ServiceCategoriesComponent = () => {
	const services = serviceCategories

	return (
		<div className="w-full  2xl:h-[75dvh] flex justify-between">
			<ul className="w-full flex justify-start items-start gap-11 2xl:gap-18 flex-wrap gap-y-12">
				{services.map(service => (
					<CardCategories
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

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[35%] 2xl:-bottom-[30%] 2xl:-left-[18%] -left-[18%] size-[20rem] 2xl:size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="absolute -bottom-[10%] 2xl:-bottom-[5%] left-[47%] size-[5rem] 2xl:size-[6rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[25%] 2xl:-bottom-[20%] 2xl:-right-[10%] -right-[5%] size-[7rem] 2xl:size-[10rem] text-[var(--leaf-color)]" />
		</>
	)
}
