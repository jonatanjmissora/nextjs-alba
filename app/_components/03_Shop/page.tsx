import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"
import Leaf2 from "@/public/leaf/leaf2"
import { SectionHeader } from "../section-header"
import { productsData } from "@/app/_lib/products"
import ProductCard from "./product-card"

export default function page() {
	return (
		<>
			<div className="w-full h-[20dvh] bg-transparent"></div>
			<div id="shop" className="w-full my-32 relative border border-transparent">
				<LeafImgs />
				<SectionHeader
					title="Nuestros productos en gabinete"
					subtitle="Productos"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>

				<div className="w-full h-[90dvh] 2xl:h-[75dvh] flex flex-col justify-between items-center mb-60">
					<ProductsCard />

					<div className="w-full border-t-2 border-[var(--secondary-green)] text-right">
						<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
							ver mas +
						</button>
					</div>
				</div>
			</div>
			<div className="w-full h-[10dvh] bg-transparent"></div>
		</>
	)
}

const ProductsCard = () => {

	const products = productsData

	return (
		<ul className="w-full flex justify-between items-start">
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</ul>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[13%] -left-[18%] size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute bottom-[10%] left-[47%] size-[7rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[10%] -right-[5%] size-[10rem] text-[var(--leaf-color)]" />
		</>
	)
}
