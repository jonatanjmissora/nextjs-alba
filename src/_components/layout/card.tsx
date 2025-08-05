"use client"

import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeartIconContainer from "../layout/heart-icon-container"
import { Product } from "@/_lib/products"
import { Service } from "@/_lib/services"
import CartIconContainer from "./cart-icon-container"

export default function Card({
	type,
	element,
	from,
}: {
	type: "shop" | "service" | "favorites" | "cart"
	element: Product | Service
	from: "shop" | "services" | "favorites" | "cart"
}) {
	return (
		<li
			key={element.id}
			className={`w-full sm:w-[220px] 2xl:w-[295px] flex flex-col gap-5 p-4 2xl:p-6 ${type === "shop" ? "bg-[var(--primary-pink)]" : "bg-[var(--background-one)]"} rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group border border-[#d685922a]`}
		>
			<div className="relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tr-4xl rounded-bl-4xl w-full h-[280px] 2xl:h-[480px]">
				<Image
					src={element.image}
					alt={element.title}
					quality={100}
					fill
					style={{
						objectFit: "cover",
					}}
					className={`group-hover:scale-120 transition-all duration-800`}
				/>
			</div>

			<h3 className="font-semibold text-[var(--primary-green)] subtitle pt-2">
				{element.title}
			</h3>
			<div className="flex justify-between items-center">
				<span className="text-balance text-xl sm:text-lg 2xl:text-xl font-bold text-black">
					${element.price}
				</span>

				<div className="flex gap-4">
					<HeartIconContainer id={element.id} />
					<CartIconContainer id={element.id} />
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<span className="text w-[180px] 2xl:w-[250px]">{element.subtitle}</span>
				<Link
					href={`/${type}/${element.id}?from=${from}`}
					className="mr-2 ml-auto cursor-pointer mt-2"
				>
					<MoveRight size={30} color="var(--primary-green)" className="icon" />
				</Link>
			</div>
		</li>
	)
}
