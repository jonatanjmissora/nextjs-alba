"use client"

import { ShoppingCart } from "lucide-react"
import dynamic from "next/dynamic"

const HeaderCart = dynamic(() => import("./header-cart"), {
	ssr: false,
	loading: () => <InitialCart />,
})

export default function HeaderCartContainer() {
	return <HeaderCart />
}

const InitialCart = () => {
	return (
		<div className="relative w-8">
			<ShoppingCart
				color="var(--primary-green)"
				className="icon size-5 2xl:size-7 "
			/>
			<span className="absolute top-[-5px] right-[-8px] 2xl:right-[-12px] w-4 h-4 rounded-full text-transparent font-semibold">
				0
			</span>
		</div>
	)
}
