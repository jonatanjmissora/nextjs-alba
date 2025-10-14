"use client"

import { useStore } from "@/_lib/store"
import CartCard from "@/_components/elements/cart-card"
import CartCheckout from "@/_components/elements/cart-checkout"
import NoCard from "@/_components/layout/no-card"
import Link from "next/link"
import { servicesMock } from "@/_lib/services-mock"
import { productsMock } from "@/_lib/products-mock"
import SinglePageLayout from "@/_components/layout/single-page-layout"

export default function CartPage() {
	const { cartStore } = useStore()

	return (
		<SinglePageLayout>
			<CartBody cart={cartStore} />
		</SinglePageLayout>
	)
}

const CartBody = ({ cart }: { cart: { id: string; quantity: number }[] }) => {
	const services = servicesMock
	const products = productsMock

	const servicesCart = services.filter(service =>
		cart.find(cart => cart.id === service.id.toString())
	)
	const productsCart = products.filter(product =>
		cart.find(cart => cart.id === product.id.toString())
	)

	return (
		<div className="w-full flex-1 flex flex-col justify-between items-center">
			<h2 className="text-2xl font-bold py-2">Tu Carrito</h2>
			{cart.length === 0 ? (
				<NoCard text="al carrito" />
			) : (
				<div className="flex-1 w-full flex items-center gap-3 2xl:gap-4">
					<ul className="w-full sm:w-[70%] flex flex-col justify-start gap-3 2xl:gap-4 flex-wrap py-10 2xl:py-20">
						{servicesCart.map(service => (
							<CartCard
								key={service.id.toString()}
								element={service}
								type="services"
								from="cart"
							/>
						))}
						{productsCart.map(product => (
							<CartCard
								key={product.id.toString()}
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
					<CartCheckout />
				</div>
			)}
		</div>
	)
}
