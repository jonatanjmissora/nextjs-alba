import { productsTree } from "@/_lib/products-mock"
import { ElementsTreeType } from "@/_lib/types"
import { MovilElementsCard } from "./movil-element-card"

export const MovilProductsCard = () => {
	const products = productsTree

	return (
		<div className="w-full flex justify-between">
			<ul className="w-full flex justify-start items-start flex-wrap gap-12">
				{products.map((category: ElementsTreeType) => (
					<MovilElementsCard
						key={category.title}
						type="shop"
						elements={products}
					/>
				))}
			</ul>
		</div>
	)
}
