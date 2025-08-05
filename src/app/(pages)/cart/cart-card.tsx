"use client"

import Image from "next/image"
import Link from "next/link"
import { CartCount } from "./cart-count"
import HeartIconContainer from "@/_components/layout/heart-icon-container"
import { Trash2Icon } from "lucide-react"
import { Service } from "@/_lib/services"
import { Product } from "@/_lib/products"
import { useStore } from "@/_lib/store"

export default function CartCard({
	element,
	type,
	from,
}: {
	element: Service | Product
	type: "shop" | "service" | "favorites" | "cart"
	from: "shop" | "services" | "favorites" | "cart"
}) {
	const { cartStore, setCartStore } = useStore()

	const cartItem = cartStore.find(cart => cart.id === element.id)
	const subTotal = element.price * (cartItem?.quantity || 1)

	const handleClick = () => {
		setCartStore(cartStore.filter(cart => cart.id !== element.id))
	}

	return (
		<li
			key={element.id}
			className={`w-full flex flex-col sm:flex-row gap-5 p-4 2xl:p-6 bg-[var(--background-three)] sm:bg-[var(--background-two)] rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group border border-[#d685922a]`}
		>
			<div className="relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tr-4xl rounded-bl-4xl w-full sm:w-[150px] 2xl:w-[200px] h-[150px] sm:h-[100px] 2xl:h-[150px]">
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

			<div className="flex-1 flex flex-col justify-center gap-0 mr-0 sm:mr-10">
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
					<Link
						href={`/${type}/${element.id}?from=${from}`}
						className="subtitle font-semibold text-[var(--primary-green)]"
					>
						{element.title}
					</Link>
					<div className="flex justify-between items-center ">
						<span className="text-xl 2xl:text-2xl font-semibold">
							${element.price}
						</span>
					</div>
				</div>

				<div className="flex justify-between items-center">
					<span className="header">
						{element.id[0] === "s" ? "servicio" : "producto"}
					</span>
					<CartCount element={element} />
				</div>

				<div className="flex justify-between items-center sm:items-end mt-auto">
					<div className="flex gap-4 sm:gap-12 items-center p-3 sm:py-0 sm:px-6">
						<HeartIconContainer id={element.id} />
						<button
							type="button"
							onClick={handleClick}
							className="cursor-pointer"
						>
							<Trash2Icon
								color="var(--primary-green)"
								className={`icon size-6`}
							/>
						</button>
					</div>
					<div className="flex justify-center items-end gap-6">
						<span className="text-xl 2xl:text-2xl font-semibold">subtotal</span>
						<span className="text-xl 2xl:text-2xl font-bold text-black">
							${subTotal.toFixed(2)}
						</span>
					</div>
				</div>
			</div>
		</li>
	)
}
