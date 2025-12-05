"use client"

import { MoveRight } from "lucide-react"
import Link from "next/link"
import HeartIconContainer from "../layout/heart-icon-container"
import CartIconContainer from "../layout/cart-icon-container"
import { ElementMockType } from "@/_lib/types"
import { formatPrice } from "@/_lib/utils"
import { ImageKit } from "../image-kit"

export default function FavCard({
	type,
	element,
	from,
}: {
	type: "shop" | "services"
	element: ElementMockType
	from: "shop" | "services" | "favorites" | "cart"
}) {
	return (
		<li
			key={element.id}
			className={`w-full flex-1 min-w-[280px] flex flex-col justify-between items-center gap-2 sm:gap-4 ${type === "shop" ? "bg-(--primary-pink)" : "bg-(--background-one)"} rounded-tr-2xl rounded-bl-2xl custom-shadow group border border-[#d685922a] overflow-hidden`}
		>
			<div className="relative custom-shadow  w-full h-[200px] sm:h-[280px] 2xl:h-[350px] overflow-hidden">
				<ImageKit
					imageID={element.images.split("*")[0]}
					className={`group-hover:scale-120 transition-all duration-800`}
				/>
			</div>

			<div className="w-full h-full p-8 pt-0 flex flex-col gap-4">
				<div className="flex flex-col w-full">
					<h3 className="text-(--primary-green) subtitle leading-8 truncate w-full">
						{element.title}
					</h3>
					<span className="text-xs font-semibold text-[#444]/50 tracking-wider">
						{element.category_title}
					</span>
				</div>

				<div className="w-full flex justify-between items-center">
					<span className="text-balance text-xl subtitle text-black">
						$ {formatPrice(Number(element.price))}
					</span>

					<div className="flex gap-4">
						<HeartIconContainer id={element.id.toString()} />
						<CartIconContainer id={element.id.toString()} />
					</div>
				</div>
				<span className="text-xs 2xl:text-sm text-[#444]/75 tracking-wider w-full h-20 2xl:h-16 scrollable overflow-y-auto">
					{element.description}
				</span>
				<div className="w-full flex justify-end">
					<Link
						href={`/${type}/${element.category_id.toString()}?id=${element.id}&from=${from}`}
						className="cursor-pointer"
					>
						<MoveRight
							size={30}
							color="var(--primary-green)"
							className="icon"
						/>
					</Link>
				</div>
			</div>
		</li>
	)
}
