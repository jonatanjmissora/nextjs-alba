"use client"

import { useStore } from "@/_lib/store"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function HeaderHeart() {
	const { favoritesStore } = useStore()

	return (
		<Link href="/favorites" className="relative w-8">
			<Heart
				color="var(--primary-green)"
				className={`icon size-5 2xl:size-7 ${favoritesStore.length > 0 && "fill-[var(--primary-green)]"}`}
			/>
			{favoritesStore.length > 0 && (
				<span className="absolute top-[-5px] right-[-8px] 2xl:right-[-12px] w-4 h-4 rounded-full text-[var(--primary-green)] font-semibold">
					{favoritesStore.length}
				</span>
			)}
		</Link>
	)
}
