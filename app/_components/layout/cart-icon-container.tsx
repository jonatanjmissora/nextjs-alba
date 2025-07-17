"use client"

import { ShoppingCart } from "lucide-react"
import dynamic from "next/dynamic"

const CartIcon = dynamic(() => import("./cart-icon"), {
	ssr: false,
	loading: () => <InitialCart />,
})

export default function CartIconContainer({ id }: { id: string }) {
	return <CartIcon id={id} />
}

const InitialCart = () => {
	return <ShoppingCart color="var(--primary-green)" className="icon size-6" />
}
