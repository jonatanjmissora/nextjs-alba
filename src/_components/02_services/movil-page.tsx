import BranchLeafMovil from "../../../public/leaf/branch-leaf-movil"
import Leaf2Movil from "../../../public/leaf/leaf2-movil"
import { MovilServicesCard } from "../layout/movil/movil-services-card"
import { SectionHeader } from "../section-header"

export default function MovilServices() {
	return (
		<>
			<LeafImgs />
			<div className="absolute -z-10 -top-[21dvh] left-0 w-full h-[15dvh] bg-[var(--primary-pink)]"></div>
			<section id="services" className="w-full relative px-6 pt-12">
				<SectionHeader
					title="Nuestros servicios en gabinete"
					subtitle="Servicios"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>

				<MovilServicesCard />

				<div className="w-full border-t-2 border-[var(--secondary-green)] text-right mt-12">
					<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
						ver mas +
					</button>
				</div>
			</section>
			<div className="absolute -z-10 -bottom-[21dvh] left-0 w-full h-[15dvh] bg-[var(--primary-pink)]"></div>
		</>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeafMovil className="absolute -bottom-[8%] -left-[5%] size-[15rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf2Movil className="absolute -bottom-[7%] right-[5%] size-[4rem] text-[var(--leaf-color)]" />
		</>
	)
}
