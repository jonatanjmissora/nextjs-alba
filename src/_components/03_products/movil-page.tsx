import { SectionHeader } from "../section-header"
import { MovilLeafImgs } from "../layout/movil/movil-leaf-imgs"
import { productsHeader } from "@/_lib/constant"
import { productsTree } from "@/_lib/products-mock"
import { MovilElementsCard } from "../layout/movil/movil-element-card"

export default function MovilProducts() {
	const products = productsTree

	return (
		<section className="w-full flex justify-center items-start relative pb-[300px]">
			<MovilLeafImgs />
			<div id="shop" className="w-full relative px-6 pt-12">
				<SectionHeader
					title="Nuestros productos en gabinete"
					subtitle="Productos"
					description={productsHeader}
				/>

				<MovilElementsCard elements={products} />
			</div>
		</section>
	)
}
