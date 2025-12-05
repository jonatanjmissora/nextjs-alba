"use client"

import FavCard from "@/_components/elements/fav-card"
import { useStore } from "@/_lib/store"
import NoCard from "@/_components/layout/no-card"
import { servicesMock } from "@/_lib/services-mock"
import { productsMock } from "@/_lib/products-mock"
import SinglePageLayout from "@/_components/layout/single-page-layout"
import { MovilFavCard } from "@/_components/layout/movil/movil-fav-card"

export default function FavoritesPage() {
	return (
		<SinglePageLayout>
			<div className="w-full flex-1 flex flex-col justify-start items-center">
				<h2 className="subtitle py-0 sm:py-2 pt-20 sm:pt-2 w-full text-left sm:text-center text-(--primary-green)">
					Tus Favoritos
				</h2>

				<FavoritesCard />
			</div>
		</SinglePageLayout>
	)
}

const FavoritesCard = () => {
	const { favoritesStore } = useStore()
	if (favoritesStore.length === 0) return <NoCard text="a favoritos" />

	const services = servicesMock
	const products = productsMock
	const servicesFavorites = services.filter(service =>
		favoritesStore.includes(service.id.toString())
	)
	const productsFavorites = products.filter(product =>
		favoritesStore.includes(product.id.toString())
	)

	return (
		<ul className="py-6 grid grid-cols-1 sm:grid-cols-4 gap-6 w-full">
			{servicesFavorites.map(service => (
				<div key={service.id}>
					<div className="hidden sm:block">
						<FavCard
							key={service.id}
							element={service}
							type={"services"}
							from="favorites"
						/>
					</div>
					<div className="block sm:hidden">
						<MovilFavCard
							key={service.id}
							element={service}
							type={"services"}
							from="favorites"
						/>
					</div>
				</div>
			))}
			{productsFavorites.map(product => (
				<div key={product.id}>
					<div className="hidden sm:block">
						<FavCard
							key={product.id}
							element={product}
							type={"shop"}
							from="favorites"
						/>
					</div>
					<div className="block sm:hidden">
						<MovilFavCard
							key={product.id}
							element={product}
							type={"shop"}
							from="favorites"
						/>
					</div>
				</div>
			))}
		</ul>
	)
}
