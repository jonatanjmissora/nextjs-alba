import { SectionHeader } from "../section-header"
import { MovilLeafImgs } from "../layout/movil/movil-leaf-imgs"
import { MovilProductsCard } from "../layout/movil/movil-products-card"
import { productsHeader } from "@/_lib/constant"

export default function MovilProducts() {
	return (
		<section className="w-full flex justify-center items-start relative pb-[300px]">
			<MovilLeafImgs />
			<div id="shop" className="w-full relative px-6 pt-12">
				<SectionHeader
					title="Nuestros productos en gabinete"
					subtitle="Productos"
					description={productsHeader}
				/>

				<MovilProductsCard />
			</div>
		</section>
	)
}
