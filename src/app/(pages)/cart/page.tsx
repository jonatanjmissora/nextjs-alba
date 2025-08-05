"use client"

import SinglePageFooter from "@/_components/layout/single-page-footer"
import SinglePageHeader from "@/_components/layout/single-page-header"
import SinglePageLeaf from "@/_components/layout/single-page-leaf"
import { useStore } from "@/_lib/store"
import { servicesData } from "@/_lib/services"
import { productsData } from "@/_lib/products"
import CartCard from "./cart-card"
import CartCheckout from "./cart-checkout"
import NoCard from "@/_components/layout/no-card"
import Link from "next/link"

export default function CartPage() {
	const { cartStore } = useStore()

	return (
		<div className="w-full min-h-screen px-6 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Carrito de compras" href="services" />

			<CartBody cart={cartStore} />

			<SinglePageFooter />

			<SinglePageLeaf />
		</div>
	)
}

const CartBody = ({ cart }: { cart: { id: string; quantity: number }[] }) => {
	const services = servicesData
	const products = productsData

	const servicesCart = services.filter(service =>
		cart.find(cart => cart.id === service.id)
	)
	const productsCart = products.filter(product =>
		cart.find(cart => cart.id === product.id)
	)

	return (
		<div className="w-full flex-1 flex flex-col sm:flex-row gap-3 2xl:gap-4">
			{cart.length === 0 ? (
				<NoCard text="al carrito" />
			) : (
				<ul className="w-full sm:w-[70%] flex flex-col justify-start gap-3 2xl:gap-4 flex-wrap py-10 2xl:py-20">
					{servicesCart.map(service => (
						<CartCard
							key={service.id}
							element={service}
							type="service"
							from="cart"
						/>
					))}
					{productsCart.map(product => (
						<CartCard
							key={product.id}
							element={product}
							type="shop"
							from="cart"
						/>
					))}
					<Link
						href="/#services"
						className="text text-[var(--primary-green)] cursor-pointer ml-auto"
					>
						agregar mas +
					</Link>
				</ul>
			)}
			<CartCheckout />
		</div>
	)
}
