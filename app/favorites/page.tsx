"use client"

import { useEffect, useState } from "react"
import SinglePageFooter from "../_components/layout/single-page-footer"
import SinglePageHeader from "../_components/layout/single-page-header"
import SinglePageLeaf from "../_components/layout/single-page-leaf"
import { loadFavorites } from "../_lib/localstorage"
import { servicesData } from "../_lib/services"
import Card from "../_components/layout/card"
import { productsData } from "../_lib/products"

export default function FavoritesPage() {
	const [favorites, setFavorites] = useState<string[]>([])

	useEffect(() => {
		const savedFavorites = loadFavorites()
		setFavorites(savedFavorites)
	}, [])

	return (
		<div className="w-full min-h-screen px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Favoritos" href="services" />
			{favorites ? (
				<FavoritesBody favorites={favorites} />
			) : (
				<span>add some favorites</span>
			)}
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
		</div>
	)
}
