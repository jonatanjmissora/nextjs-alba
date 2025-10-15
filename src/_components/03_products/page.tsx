import { SectionHeader } from "../section-header"
import { productsHeader } from "@/_lib/products"
import type { ElementsTreeType } from "@/_lib/types"
import { productsTree } from "@/_lib/products-mock"
import { Card } from "../elements/card"
import { LeafImgs } from "../leaf-section"

export default function ProductsSection() {
	return (
		<section className="w-full px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] pt-20 pb-80 relative">
			<article id="shop01" className="w-full my-32 border border-transparent">
				<SectionHeader
					title="Nuestros productos en gabinete"
					subtitle="Productos"
					description={productsHeader}
				/>

				<ProductCategoriesComponent />
			</article>
			<LeafImgs />
		</section>
	)
}

const ProductCategoriesComponent = () => {
	return (
		<div className="flex flex-wrap gap-6 gap-y-12 w-full">
			{productsTree.map((category: ElementsTreeType) => (
				<Card key={category.title} type="shop" category={category}>
					<span className="text-sm p-4 pb-8 text-pretty tracking-wider">
						{category.elements[0].description}
					</span>
				</Card>
			))}
		</div>
	)
}
