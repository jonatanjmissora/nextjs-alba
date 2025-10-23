"use client"

import { useStore } from "@/_lib/store"
import CartCard from "@/_components/elements/cart-card"
import CartCheckout from "@/_components/elements/cart-checkout"
import NoCard from "@/_components/layout/no-card"
import Link from "next/link"
import { servicesMock } from "@/_lib/services-mock"
import { productsMock } from "@/_lib/products-mock"
import SinglePageLayout from "@/_components/layout/single-page-layout"
import { MovilCartCard } from "@/_components/layout/movil/movil-cart-card"

export default function CartPage() {
	return (
		<SinglePageLayout>
			<div className="w-full flex-1 flex flex-col justify-start items-center">
				<h2 className="text-2xl font-bold py-0 sm:py-2 pt-20 sm:pt-2 w-full text-left sm:text-center">
					Tu Carrito
				</h2>
				<CartBody />
			</div>
		</SinglePageLayout>
	)
}

const CartBody = () => {
	const { cartStore } = useStore()
	if (cartStore.length === 0) return <NoCard text="al carrito" />

	const services = servicesMock
	const products = productsMock

	const servicesCart = services.filter(service =>
		cartStore.find(cart => cart.id === service.id.toString())
	)
	const productsCart = products.filter(product =>
		cartStore.find(cart => cart.id === product.id.toString())
	)

	return (
		<div className="w-full flex-1 flex flex-col justify-between items-center">
			<div className="flex-1 w-full flex flex-col sm:flex-row items-center gap-3 2xl:gap-4">
				<ul className="w-full sm:w-[70%] flex flex-col justify-start gap-6 sm:gap-4 flex-wrap py-6 sm:py-10 2xl:py-20">
					{servicesCart.map(service => (
						<div key={service.id.toString()}>
							<div className="hidden sm:block">
								<CartCard
									key={service.id.toString()}
									element={service}
									type="services"
									from="cart"
								/>
							</div>
							<div className="block sm:hidden">
								<MovilCartCard
									key={service.id}
									element={service}
									type="services"
									from="cart"
								/>
							</div>
						</div>
					))}
					{productsCart.map(product => (
						<div key={product.id.toString()}>
							<div className="hidden sm:block">
								<CartCard
									key={product.id.toString()}
									element={product}
									type="shop"
									from="cart"
								/>
							</div>
							<div className="block sm:hidden">
								<MovilCartCard
									key={product.id}
									element={product}
									type="shop"
									from="cart"
								/>
							</div>
						</div>
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
		</div>
	)
}
