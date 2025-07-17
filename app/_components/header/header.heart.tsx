"use client"

import { Heart } from "lucide-react"
import Link from "next/link"
import { loadFavorites } from "@/app/_lib/localstorage"

export default function HeaderHeart() {
	const savedFavorites = loadFavorites()

	return (
		<Link href="/favorites" className="relative w-8">
			<Heart
				color="var(--primary-green)"
				className={`icon size-5 2xl:size-7 ${savedFavorites.length > 0 && "fill-[var(--primary-green)]"}`}
			/>
			{savedFavorites.length > 0 && (
				<span className="absolute top-[-5px] right-[-8px] w-4 h-4 rounded-full text-[var(--primary-green)] font-semibold">
					{savedFavorites.length}
				</span>
			)}
		</Link>
	)
}
