"use client"

import { useState } from "react"
import { MinusCircle, PlusCircle } from "lucide-react"
import { useStore } from "@/_lib/store"
import { ElementMockType } from "@/_lib/types"

const elementQuantityFn = (
	element: ElementMockType,
	cartStore: { id: string; quantity: number }[]
) => {
	return (
		cartStore.find(cart => cart.id === element.id.toString())?.quantity || 1
	)
}

export const CartCount = ({ element }: { element: ElementMockType }) => {
	const { cartStore, setCartStore } = useStore()
	const [count, setCount] = useState<number>(
		elementQuantityFn(element, cartStore)
	)

	const handlePlus = () => {
		setCount(count + 1)
		setCartStore(
			cartStore.map(cart =>
				cart.id === element.id.toString()
					? { ...cart, quantity: cart.quantity + 1 }
					: cart
			)
		)
	}

	const handleMinus = () => {
		if (count > 1) {
			setCount(count - 1)
			setCartStore(
				cartStore.map(cart =>
					cart.id === element.id.toString()
						? { ...cart, quantity: cart.quantity - 1 }
						: cart
				)
			)
		}
	}

	return (
		<div className="flex justify-end gap-2">
			<button onClick={handleMinus} type="button">
				<MinusCircle
					color="var(--primary-green)"
					className="size-5 sm:size-4 2xl:size-6 icon cursor-pointer"
				/>
			</button>
			<span className="font-semibold">x{count}</span>
			<button onClick={handlePlus} type="button">
				<PlusCircle
					color="var(--primary-green)"
					className="size-5 sm:size-4 2xl:size-6 icon cursor-pointer"
				/>
			</button>
		</div>
	)
}
