"use client"

import FavCard from "@/_components/elements/fav-card"
import { useStore } from "@/_lib/store"
import NoCard from "@/_components/layout/no-card"
import { servicesMock } from "@/_lib/services-mock"
import { productsMock } from "@/_lib/products-mock"
import SinglePageLayout from "@/_components/layout/single-page-layout"

export default function FavoritesPage() {
	const { favoritesStore } = useStore()

	return (
		<SinglePageLayout>
			<FavoritesBody favorites={favoritesStore} />
		</SinglePageLayout>
	)
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
		<div className="w-full flex-1 flex flex-col justify-start items-center">
			<h2 className="text-2xl font-bold py-2">Tus Favoritos</h2>
			{favorites.length === 0 ? (
				<NoCard text="a favoritos" />
			) : (
				// <ul className="w-full flex justify-start items-start gap-6 2xl:gap-18 flex-wrap py-5 2xl:py-10">
				<ul className="py-6  grid grid-cols-4 gap-6 w-full">
					{servicesFavorites.map(service => (
						<FavCard
							key={service.id}
							type={"services"}
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
