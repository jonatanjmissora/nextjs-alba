"use client"

import type { ElementTreeType } from "@/_lib/types"
import { MinusCircle, PlusCircle, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useStore } from "@/_lib/store"
import { redirect } from "next/navigation"
import { formatPrice } from "@/_lib/utils"

export const ElementCountAndCart = ({
	element,
}: {
	element: ElementTreeType
}) => {
	const { cartStore, setCartStore } = useStore()
	const [count, setCount] = useState<number>(
		cartStore.find(cart => cart.id.toString() === element.id.toString())
			?.quantity || 1
	)

	const handlePlus = () => {
		setCount(count + 1)
	}

	const handleMinus = () => {
		if (count > 1) {
			setCount(count - 1)
		}
	}

	const handleAddToCart = () => {
		const cartItemIndex = cartStore.findIndex(
			cart => cart.id.toString() === element.id.toString()
		)
		if (cartItemIndex !== -1) {
			setCartStore(
				cartStore.map((cart, index) =>
					index === cartItemIndex ? { ...cart, quantity: count } : cart
				)
			)
		} else {
			setCartStore([
				...cartStore,
				{ id: element.id.toString(), quantity: count },
			])
		}
		redirect("/cart")
	}

	return (
		<>
			<div className="flex justify-between items-center">
				<p className="header font-semibold">
					$ {formatPrice(Number(element.price))}
				</p>
				<div className="flex gap-4 items-center justify-center">
					<button onClick={handleMinus} type="button">
						<MinusCircle
							color="var(--primary-green)"
							className="size-6 2xl:size-8 icon cursor-pointer"
						/>
					</button>

					<span className="header leading-none pb-2 m-0">{count}</span>

					<button onClick={handlePlus} type="button">
						<PlusCircle
							color="var(--primary-green)"
							className="size-6 2xl:size-8 icon cursor-pointer"
						/>
					</button>
				</div>
			</div>

			<div className="flex justify-end gap-4">
				<button
					className="cta-button flex justify-center items-center gap-4 py-3 px-6 w-full sm:w-1/2"
					onClick={handleAddToCart}
				>
					<ShoppingCart className="size-4 2xl:size-8 icon cursor-pointer" />
					<span className="text 2xl:text-normal">
						Agregar {count > 1 ? `(x${count})` : ""}
					</span>
				</button>

				{/* <button className="cta-button-inv flex justify-center items-center gap-4 py-2 px-6 w-1/2">
					<CircleDollarSign className="size-4 2xl:size-8 icon cursor-pointer" />
					<span className="text 2xl:text-normal">
						Comprar {count > 1 ? `(x${count})` : ""}
					</span>
				</button> */}
			</div>
		</>
	)
}
