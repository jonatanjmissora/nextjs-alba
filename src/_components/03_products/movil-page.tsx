import { SectionHeader } from "../section-header"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf2 from "../../../public/leaf/leaf2"
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
			<BranchLeaf className="absolute -bottom-[4%] -left-[5%] size-[15rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf2 className="absolute -bottom-[3%] right-[5%] size-[4rem] text-[var(--leaf-color)]" />
		</>
	)
}
