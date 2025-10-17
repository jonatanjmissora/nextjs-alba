import { productsTree } from "@/_lib/products-mock"
import { ElementsTreeType } from "@/_lib/types"
import { Card } from "@/_components/elements/card"

export const MovilProductsCard = () => {
	const products = productsTree

	return (
		<div className="w-full flex justify-between">
			<ul className="w-full flex justify-start items-start flex-wrap gap-12">
				{products.map((category: ElementsTreeType) => (
					<Card key={category.title} type="shop" category={category}>
						<span className="text-sm p-4 pb-8 text-pretty tracking-wider">
							{category.elements[0].description}
						</span>
					</Card>
				))}
			</ul>
		</div>
	)
}
