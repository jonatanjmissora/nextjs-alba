import { SectionHeader } from "../section-header"
import BranchLeafMovil from "../../../public/leaf/branch-leaf-movil"
import Leaf2Movil from "../../../public/leaf/leaf2-movil"
import { MovilProductsCard } from "../layout/movil/movil-products-card"

export default function MovilProducts() {
	return (
		<>
			<LeafImgs />
			<div id="shop" className="w-full relative pt-12">
				<SectionHeader
					title="Nuestros productos en gabinete"
					subtitle="Productos"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>

				<MovilProductsCard />

				<div className="w-full border-t-2 border-[var(--secondary-green)] text-right mt-12">
					<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
						ver mas +
					</button>
				</div>
			</div>
		</>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeafMovil className="absolute -bottom-[4%] -left-[5%] size-[15rem] rotate-90 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf2Movil className="absolute -bottom-[3%] right-[5%] size-[4rem] text-[var(--leaf-color)]" />
		</>
	)
}
