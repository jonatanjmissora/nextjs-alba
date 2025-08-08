"use client"

import SinglePageFooter from "@/_components/layout/single-page-footer"
import SinglePageHeader from "@/_components/layout/single-page-header"
import SinglePageLeaf from "@/_components/layout/single-page-leaf"
import { servicesData } from "@/_lib/services"
import Card from "@/_components/layout/card"
import { productsData } from "@/_lib/products"
import { useStore } from "@/_lib/store"
import NoCard from "@/_components/layout/no-card"

export default function FavoritesPage() {
	const { favoritesStore } = useStore()

	return (
		<div className="w-full min-h-[100dvh] sm:min-h-[100dvh] px-6 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Favoritos" href="services" />

			<FavoritesBody favorites={favoritesStore} />

			<SinglePageFooter />

			<SinglePageLeaf />
		</div>
	)
}

const FavoritesBody = ({ favorites }: { favorites: string[] }) => {
	const services = servicesData
	const products = productsData

	const servicesFavorites = services.filter(service =>
		favorites.includes(service.id)
	)
	const productsFavorites = products.filter(product =>
		favorites.includes(product.id)
	)

	return (
		<div className="w-full flex-1 flex justify-between items-center">
			{favorites.length === 0 ? (
				<NoCard text="a favoritos" />
			) : (
				<ul className="w-full flex justify-start items-start gap-11 2xl:gap-18 flex-wrap py-5 2xl:py-10">
					{servicesFavorites.map(service => (
						<Card
							key={service.id}
							type={"service"}
							element={service}
							from="favorites"
						/>
					))}
					{productsFavorites.map(product => (
						<Card
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
