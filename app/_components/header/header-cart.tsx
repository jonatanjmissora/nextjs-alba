"use client"

import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { loadCart } from "@/app/_lib/localstorage"

export default function HeaderCart() {
	const savedCart = loadCart()

	return (
		<Link href="/cart" className="relative w-8">
			<ShoppingCart
				color="var(--primary-green)"
				className={`icon size-5 2xl:size-7 ${savedCart.length > 0 && "fill-[var(--primary-green)]"}`}
			/>
			{savedCart.length > 0 && (
				<span className="absolute top-[-5px] right-[-8px] 2xl:right-[-12px] w-4 h-4 rounded-full text-[var(--primary-green)] font-semibold">
					{savedCart.length}
				</span>
			)}
		</Link>
	)
}
