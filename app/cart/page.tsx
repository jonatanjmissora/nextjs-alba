"use client"

import { useEffect, useState } from "react"
import SinglePageFooter from "../_components/layout/single-page-footer"
import SinglePageHeader from "../_components/layout/single-page-header"
import SinglePageLeaf from "../_components/layout/single-page-leaf"
import { loadCart } from "../_lib/localstorage"
import { servicesData } from "../_lib/services"
import { productsData } from "../_lib/products"
import CartCard from "./cart-card"

export default function CartPage() {
	const [cart, setCart] = useState<string[]>([])

	useEffect(() => {
		const savedCart = loadCart()
		setCart(savedCart)
	}, [])

	return (
		<div className="w-full min-h-screen px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Carrito de compras" href="services" />
			{cart ? <CartBody cart={cart} /> : <span>add some products to cart</span>}
			<SinglePageFooter />

			<SinglePageLeaf />
		</div>
	)
}

const CartBody = ({ cart }: { cart: string[] }) => {
	const services = servicesData
	const products = productsData

	const servicesCart = services.filter(service => cart.includes(service.id))
	const productsCart = products.filter(product => cart.includes(product.id))

	return (
		<div className="w-full flex-1 2xl:h-[75dvh] flex justify-between items-start">
			<ul className="w-full flex justify-start gap-2 2xl:gap-4 flex-wrap py-20">
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
			</ul>
		</div>
	)
}
