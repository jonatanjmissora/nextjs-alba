"use client"

import { Heart } from "lucide-react"
import dynamic from "next/dynamic"

const HeartIcon = dynamic(() => import("./heart-icon"), {
	ssr: false,
	loading: () => <InitialHeart />,
})

export default function HeartIconContainer({ id }: { id: string }) {
	return <HeartIcon id={id} />
}

const InitialHeart = () => {
	return <Heart color="var(--primary-green)" className="icon size-6" />
}
