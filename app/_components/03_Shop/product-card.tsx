"use client"

import { Product } from "@/app/_lib/products"
import { ShoppingCart, MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeartIconContainer from "../layout/heart-icon-container"

export default function ProductCard({ product }: { product: Product }) {

	return (
		<li
			key={product.id}
			className="flex flex-col gap-5 p-4 2xl:p-6 bg-[var(--primary-pink)] rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group"
		>
			<div className="relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tr-4xl rounded-bl-4xl w-[180px] 2xl:w-[250px] h-[300px] 2xl:h-[500px]">
				<Image
					src={product.image}
					alt={product.title}
					quality={100}
					layout="fill"
					objectFit="cover"
					className={`group-hover:scale-120 transition-all duration-800`}
				/>
			</div>

			<h3 className="font-semibold text-[var(--primary-green)] 2xl:text-2xl pt-2">
				{product.title}
			</h3>
			<div className="flex justify-between items-center">
				<span className="text-balance 2xl:text-xl font-bold text-black">
					${product.price}
				</span>

				<div className="flex gap-4">
					<HeartIconContainer id={product.id}/>
					<ShoppingCart
						size={20}
						color="var(--primary-green)"
						className="icon"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<span className="text w-[180px] 2xl:w-[250px]">{product.subtitle}</span>
				<Link
					href={`/shop/${product.id}`}
					className="mr-2 ml-auto cursor-pointer mt-2"
				>
					<MoveRight size={30} color="var(--primary-green)" className="icon" />
				</Link>
			</div>
		</li>
	)
}
