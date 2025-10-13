"use client"

import FavCard from "@/_components/elements/fav-card"
import { useStore } from "@/_lib/store"
import NoCard from "@/_components/layout/no-card"
import { servicesMock } from "@/_lib/services-mock"
import { productsMock } from "@/_lib/products-mock"

export default function FavoritesPage() {
	const { favoritesStore } = useStore()

	return <FavoritesBody favorites={favoritesStore} />
}

const FavoritesBody = ({ favorites }: { favorites: string[] }) => {
	const services = servicesMock
	const products = productsMock

	const servicesFavorites = services.filter(service =>
		favorites.includes(service.id.toString())
	)
	const productsFavorites = products.filter(product =>
		favorites.includes(product.id.toString())
	)

	return (
		<div className="w-full flex-1 flex flex-col justify-between items-center">
			<h2 className="text-2xl font-bold py-2">Tus Favoritos</h2>
			{favorites.length === 0 ? (
				<NoCard text="a favoritos" />
			) : (
				<ul className="w-full flex justify-start items-start gap-11 2xl:gap-18 flex-wrap py-5 2xl:py-10">
					{servicesFavorites.map(service => (
						<FavCard
							key={service.id}
							type={"service"}
							element={service}
							from="favorites"
						/>
					))}
					{productsFavorites.map(product => (
						<FavCard
							key={product.id}
							type={"shop"}
							element={product}
							from="favorites"
						/>
					))}
				</ul>
			)}
		</div>
	)
}
