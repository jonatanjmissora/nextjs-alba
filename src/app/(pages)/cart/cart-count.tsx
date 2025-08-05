"use client"

import { Service } from "@/_lib/services"
import { useState } from "react"
import { Product } from "@/_lib/products"
import { MinusCircle, PlusCircle } from "lucide-react"
import { useStore } from "@/_lib/store"

const elementQuantityFn = (
	element: Service | Product,
	cartStore: { id: string; quantity: number }[]
) => {
	return cartStore.find(cart => cart.id === element.id)?.quantity || 1
}

export const CartCount = ({ element }: { element: Service | Product }) => {
	const { cartStore, setCartStore } = useStore()
	const [count, setCount] = useState<number>(
		elementQuantityFn(element, cartStore)
	)

	const handlePlus = () => {
		setCount(count + 1)
		setCartStore(
			cartStore.map(cart =>
				cart.id === element.id ? { ...cart, quantity: cart.quantity + 1 } : cart
			)
		)
	}

	const handleMinus = () => {
		if (count > 1) {
			setCount(count - 1)
			setCartStore(
				cartStore.map(cart =>
					cart.id === element.id
						? { ...cart, quantity: cart.quantity - 1 }
						: cart
				)
			)
		}
	}

	return (
		<div className="flex justify-end gap-2 mr-2">
			<button onClick={handleMinus} type="button">
				<MinusCircle
					color="var(--primary-green)"
					className="size-5 sm:size-4 2xl:size-6 icon cursor-pointer"
				/>
			</button>
			<span className="header">{count}</span>
			<button onClick={handlePlus} type="button">
				<PlusCircle
					color="var(--primary-green)"
					className="size-5 sm:size-4 2xl:size-6 icon cursor-pointer"
				/>
			</button>
		</div>
	)
}
