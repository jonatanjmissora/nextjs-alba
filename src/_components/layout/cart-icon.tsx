"use client"

import { useStore } from "@/_lib/store"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

const isInCartFn = (
	cartStore: { id: string; quantity: number }[],
	id: string
) => {
	const index = cartStore.findIndex(cart => cart.id === id)
	return index !== -1
}

export default function CartIcon({ id }: { id: string }) {
	const { cartStore, setCartStore } = useStore()
	const [isInCart, setIsInCart] = useState(isInCartFn(cartStore, id))

	const handleClick = () => {
		if (isInCart) {
			setCartStore(cartStore.filter(cart => cart.id !== id))
		} else {
			setCartStore([...cartStore, { id, quantity: 1 }])
		}
		setIsInCart(!isInCart)
	}

	return (
		<button type="button" onClick={handleClick} className="cursor-pointer">
			<ShoppingCart
				color="var(--primary-green)"
				className={`icon size-6 ${isInCart && "fill-[var(--primary-green)]"}`}
			/>
		</button>
	)
}
