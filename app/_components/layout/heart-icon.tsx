"use client"

import { loadFavorites, setToFavorites } from "@/app/_lib/localstorage";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function HeartIcon({id}: {id: string}) {

    const savedFavorites = loadFavorites()
    const [isFavorite, setIsFavorite] = useState(savedFavorites.includes(id))

    const handleClick = () => {
        setToFavorites(id)
        setIsFavorite(!isFavorite)
    }

	return (
        <button type="button" onClick={handleClick} className="cursor-pointer">
            <Heart
                color="var(--primary-green)"
                className={`icon size-6 2xl:size-8 ${isFavorite && "fill-[var(--primary-green)]"}`}
            />
        </button>
	)
}
