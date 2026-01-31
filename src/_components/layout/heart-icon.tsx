"use client"

import { useStore } from "@/_lib/store"
import { Heart } from "lucide-react"
import { useState } from "react"

export default function HeartIcon({ id }: { id: string }) {
	const { favoritesStore, setFavoritesStore } = useStore()
	const [isInFavorites, setIsInFavorites] = useState(
		favoritesStore.includes(id)
	)

	const handleClick = () => {
		if (isInFavorites) {
			setFavoritesStore(favoritesStore.filter(favorite => favorite !== id))
		} else {
			setFavoritesStore([...favoritesStore, id])
		}
		setIsInFavorites(!isInFavorites)
	}

	return (
		<button type="button" onClick={handleClick} className="cursor-pointer">
			<Heart
				color="var(--primary-green)"
				className={`icon size-6 ${isInFavorites && "fill-(--primary-green)"}`}
			/>
		</button>
	)
}
