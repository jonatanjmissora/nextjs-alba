import { MovilSectionHeader } from "../layout/movil/movil-section-header"
import { MovilShopCard } from "../layout/movil/movil-shop-card"

export default function MovilShop() {
	return (
		<div id="shop" className="w-full relative pt-12">
			<MovilSectionHeader
				title="Nuestros productos en gabinete"
				subtitle="Productos"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>

			<MovilShopCard />

			<div className="w-full border-t-2 border-[var(--secondary-green)] text-right mt-12">
				<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
					ver mas +
				</button>
			</div>
		</div>
	)
}
