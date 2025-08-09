"use client"

import { Heart } from "lucide-react"
import dynamic from "next/dynamic"

const HeaderHeart = dynamic(() => import("./header-heart"), {
	ssr: false,
	loading: () => <InitialHeart />,
})

export default function HeaderHeartContainer() {
	return <HeaderHeart />
}

const InitialHeart = () => {
	return (
		<div className="relative">
			<Heart color="var(--primary-green)" className="icon size-5 2xl:size-7 " />
			<span className="absolute top-[-5px] 2xl:right-[-12px] right-[-8px] w-4 h-4 rounded-full text-transparent font-semibold">
				0
			</span>
		</div>
	)
}
