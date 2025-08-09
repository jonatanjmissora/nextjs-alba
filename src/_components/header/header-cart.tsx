"use client"

import { useStore } from "@/_lib/store"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function HeaderCart() {
	const { cartStore } = useStore()

	return (
		<Link href="/cart" className="relative">
			<ShoppingCart
				color="var(--primary-green)"
				className={`icon size-5 2xl:size-7 ${cartStore.length > 0 && "fill-[var(--primary-green)]"}`}
			/>
			{cartStore.length > 0 && (
				<span className="absolute top-[-11px] right-[-15px] 2xl:right-[-12px] w-4 h-4 rounded-full text-[var(--primary-green)] font-semibold">
					{cartStore.length}
				</span>
			)}
		</Link>
	)
}
