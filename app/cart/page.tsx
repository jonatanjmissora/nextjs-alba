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

	const total = cart.reduce((total, id) => total + (services.find(service => service.id === id)?.price || products.find(product => product.id === id)?.price || 0), 0)

	return (
		<div className="w-full min-h-[84dvh] 2xl:h-[75dvh] flex gap-3 2xl:gap-4">
			<ul className="w-[70%] flex flex-col justify-start gap-3 2xl:gap-4 flex-wrap py-10 2xl:py-20">
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
			<div className="flex-1 max-h-[80dvh] 2xl:max-h-[75dvh] flex flex-col justify-center items-center gap-12 flex-wrap p-4 2xl:p-6 my-10 2xl:my-20 border rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] bg-[var(--background-three)] border-[#d685922a]">
				<h2 className="subtitle font-semibold text-[var(--primary-green)] text-center w-full">Resumen de compra</h2>
				<p className="text-center w-full header font-semibold">{cart.length} item(s)</p>
				<div className="flex justify-center gap-4 items-center">
					<span className="subtitle font-semibold">Total</span>
					<span className="subtitle font-bold text-black">${total.toFixed(2)}</span>
				</div>
				<button className="w-full cta-button py-3">Confirmar</button>
			</div>
		</div>
	)
}
