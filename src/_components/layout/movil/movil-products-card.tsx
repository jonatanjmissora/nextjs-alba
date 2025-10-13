import { productsMock } from "@/_lib/products-mock"
import Card from "../../elements/fav-card"

export const MovilProductsCard = () => {
	const products = productsMock

	return (
		<div className="w-full flex justify-between">
			<ul className="w-full flex justify-start items-start gap-11 2xl:gap-18 flex-wrap gap-y-12">
				{products.map(product => (
					<Card key={product.id} type="shop" element={product} from="shop" />
				))}
			</ul>
		</div>
	)
}
