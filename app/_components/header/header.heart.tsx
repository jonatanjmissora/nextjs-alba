"use client"

import { Heart } from "lucide-react"
import Link from "next/link"
import { loadFavorites } from "@/app/_lib/localstorage"
import { useEffect, useState } from "react"

export default function HeaderHeart() {
	const [isFavorite, setIsFavorite] = useState(false)
	const [favoritesLength, setFavoritesLength] = useState(0)

	useEffect(() => {
		const favorites = loadFavorites()
		if (favorites.length > 0) {
			setIsFavorite(true)
			setFavoritesLength(favorites.length)
		}
	}, [])

	return (
		<Link href="/favorites" className="relative w-8">
			<Heart
				size={20}
				color="var(--primary-green)"
				className={`${isFavorite ? "icon fill-[var(--primary-green)]" : "icon"}`}
			/>
			{favoritesLength > 0 && (
				<span className="absolute top-[-5px] right-[-8px] w-4 h-4 rounded-full text-[var(--primary-green)] font-semibold">
					{favoritesLength}
				</span>
			)}
		</Link>
	)
}
