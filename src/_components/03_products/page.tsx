import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import { SectionHeader } from "../section-header"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import { productsHeader } from "@/_lib/products"
import type { ElementsTreeType } from "@/_lib/types"
import { productsTree } from "@/_lib/products-mock"
import { Card } from "../layout/card"

export default function ProductsSection() {
	return (
		<section
			id="products"
			className="w-full my-32 relative border border-transparent"
		>
			<LeafImgs />

			<SectionHeader
				title="Nuestros productos en gabinete"
				subtitle="Productos"
				description={productsHeader}
			/>

			<ProductCategoriesComponent />
		</section>
	)
}

const ProductCategoriesComponent = () => {
	return (
		<div className="flex flex-wrap gap-6 w-full">
			{productsTree.map((category: ElementsTreeType) => (
				<Card key={category.title} category={category}>
					<span className="text-xs pb-4 text-pretty tracking-wider">
						{category.elements[0].description}
					</span>
				</Card>
			))}
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
