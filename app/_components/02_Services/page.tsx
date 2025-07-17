import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"
import Leaf2 from "@/public/leaf/leaf2"
import { SectionHeader } from "../section-header"
import { servicesData } from "@/app/_lib/services"
import Card from "../layout/card"

export default function ServiceSection() {
	return (
		<section
			id="services"
			className="w-full min-h-screen 2xl:min-h-[50dvh] my-32 relative border border-transparent"
		>
			<LeafImgs />

			<SectionHeader
				title="Nuestros servicios en gabinete"
				subtitle="Servicios"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>

			<ServicesCard />

			<div className="w-full border-t-2 border-[var(--secondary-green)] text-right mt-12">
				<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
					ver mas +
				</button>
			</div>
		</section>
	)
}

const ServicesCard = () => {
	const services = servicesData

	return (
		<div className="w-full h-[90dvh] 2xl:h-[75dvh] flex justify-between">
			<ul className="w-full flex justify-start items-start gap-14 2xl:gap-18 flex-wrap gap-y-12">
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

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[40%] 2xl:-bottom-[30%] 2xl:-left-[18%] -left-[18%] size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute -bottom-[10%] 2xl:-bottom-[5%] left-[47%] size-[5rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[25%] 2xl:-bottom-[20%] 2xl:-right-[10%] -right-[5%] size-[10rem] text-[var(--leaf-color)]" />
		</>
	)
}
