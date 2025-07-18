"use client"

import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useStore } from "@/app/_lib/store"

export default function CartIcon({ id }: { id: string }) {
	const { cartStore, setCartStore } = useStore()
	const [isInCart, setIsInCart] = useState(cartStore.includes(id))

	const handleClick = () => {
		if (isInCart) {
			setCartStore(cartStore.filter(cart => cart !== id))
		} else {
			setCartStore([...cartStore, id])
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
