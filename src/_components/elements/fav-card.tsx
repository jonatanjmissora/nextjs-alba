"use client"

import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeartIconContainer from "../layout/heart-icon-container"
import CartIconContainer from "../layout/cart-icon-container"
import { ElementMockType } from "@/_lib/types"
import { formatPrice } from "@/_lib/utils"
import { setUrlCategoryName } from "@/_lib/utils"

export default function FavCard({
	type,
	element,
	from,
}: {
	type: "shop" | "services"
	element: ElementMockType
	from: "shop" | "services" | "favorites" | "cart"
}) {
	const urlCategoryName = setUrlCategoryName(element.title)

	return (
		<li
			key={element.id}
			className={`w-full flex-1 min-w-[280px] flex flex-col justify-between items-center gap-4 p-6 ${type === "shop" ? "bg-[var(--primary-pink)]" : "bg-[var(--background-one)]"} rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group border border-[#d685922a]`}
		>
			<div className="relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tr-4xl rounded-bl-4xl w-full h-[280px] 2xl:h-[350px]">
				<Image
					src={element.images.split("*")[0]}
					alt={element.title}
					quality={100}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{
						objectFit: "cover",
					}}
					className={`group-hover:scale-120 transition-all duration-800`}
				/>
			</div>

			<div className="flex flex-col justify-start items-start w-full">
				<span className="text-xs font-semibold text-[#444]/50 tracking-wider">
					{element.title}
				</span>
				<h3 className="text-[var(--primary-green)] text-pretty font-semibold truncate h-12 w-full">
					{element.subtitle}
				</h3>
			</div>

			<div className="w-full flex justify-between items-center">
				<span className="text-balance text-xl sm:text-lg 2xl:text-xl font-bold text-black">
					$ {formatPrice(Number(element.price))}
				</span>

				<div className="flex gap-4">
					<HeartIconContainer id={element.id.toString()} />
					<CartIconContainer id={element.id.toString()} />
				</div>
			</div>
			<span className="text-sm sm:text-xs 2xl:text-sm text-[#444]/75 tracking-wider w-full h-20 2xl:h-16 scrollable overflow-y-auto">
				{element.description}
			</span>
			<div className="w-full flex justify-end">
				<Link
					href={`/${type}/${urlCategoryName}?id=${element.id}&from=${from}`}
					className="cursor-pointer"
				>
					<MoveRight size={30} color="var(--primary-green)" className="icon" />
				</Link>
			</div>
		</li>
	)
}
