import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import { SectionHeader } from "../section-header"
import Card from "../layout/card"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import { productsData } from "@/_lib/products"

export default function ProductsSection() {
	return (
		<>
			<div className="w-full h-[20dvh] bg-transparent"></div>
			<div
				id="shop"
				className="w-full my-32 relative border border-transparent"
			>
				<LeafImgs />

				<SectionHeader
					title="Nuestros productos en gabinete"
					subtitle="Productos"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>

				<ProductsCard />

				<div className="w-full border-t-2 border-[var(--secondary-green)] text-right mt-12">
					<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
						ver mas +
					</button>
				</div>
			</div>
			<div className="w-full h-[40dvh] 2xl:h-[25dvh] bg-transparent"></div>
		</>
	)
}

const ProductsCard = () => {
	const products = productsData

	return (
		<div className="w-full 2xl:h-[75dvh] flex justify-between">
			<ul className="w-full flex justify-start items-start gap-11 2xl:gap-18 flex-wrap gap-y-12">
				{products.map(product => (
					<Card key={product.id} type="shop" element={product} from="shop" />
				))}
			</ul>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[30%] -left-[18%] size-[20rem] 2xl:size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="absolute -bottom-[10%] 2xl:-bottom-[5%] left-[47%] size-[5rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[25%] -right-[5%] size-[7rem] 2xl:size-[10rem] text-[var(--leaf-color)]" />
		</>
	)
}
