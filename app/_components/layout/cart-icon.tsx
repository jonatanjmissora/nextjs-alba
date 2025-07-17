"use client"

import { loadCart, setToCart } from "@/app/_lib/localstorage"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

export default function CartIcon({ id }: { id: string }) {
	const savedCart = loadCart()
	const [isInCart, setIsInCart] = useState(savedCart.includes(id))

	const handleClick = () => {
		setToCart(id)
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
