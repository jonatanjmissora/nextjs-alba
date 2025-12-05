"use client"

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link"
import { CartCount } from "./cart-count"
import HeartIconContainer from "@/_components/layout/heart-icon-container"
import { Trash2Icon } from "lucide-react"
import { useStore } from "@/_lib/store"
import { ElementMockType } from "@/_lib/types"
import { formatPrice } from "@/_lib/utils"
import { ImageKit } from "../image-kit"

export default function CartCard({
	element,
	type,
	from,
}: {
	element: ElementMockType
	type: "shop" | "services"
	from: "shop" | "services" | "favorites" | "cart"
}) {
	const { cartStore } = useStore()
	const cartElementQuantity = cartStore.find(
		cart => cart.id === element.id.toString()
	)?.quantity

	return (
		<li
			key={element.id}
			className={`w-full flex flex-col sm:flex-row gap-5 rounded-tr-2xl rounded-bl-2xl custom-shadow group border border-[#d685922a] relative overflow-hidden ${type === "shop" ? "bg-(--primary-pink)" : "bg-(--background-one)"}`}
		>
			<div className="relative custom-shadow overflow-hidden w-full sm:w-[150px] 2xl:w-[200px] h-[150px] sm:h-[100px] 2xl:h-[150px]">
				<ImageKit
					imageID={element.images.split("*")[0]}
					className={`group-hover:scale-120 transition-all duration-800`}
				/>
			</div>

			<div className="flex-1 flex flex-col justify-between p-4 2xl:p-6">
				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center">
						<i className="scale-75 flex items-center">
							<HeartIconContainer id={element.id.toString()} />
						</i>
						<span className="text-xs font-bold text-[#444]/50 tracking-wider">
							{element.category_title}
						</span>
					</div>

					<CartDeleteButton element={element} />
				</div>

				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
					<Link
						href={`/${type}/${element.category_id.toString()}?id=${element.id}&from=${from}`}
						className="subtitle tracking-wider text-(--primary-green)"
					>
						{element.title}
					</Link>
					<div className="flex justify-between items-center ">
						<span className="subtitle">
							${" "}
							{formatPrice(Number(element.price * (cartElementQuantity ?? 1)))}
						</span>
					</div>
				</div>

				<div className="flex justify-between items-center">
					<p className="text-xs text-[#444] tracking-wider w-100 truncate">
						{element.description}
					</p>
					<CartCount element={element} />
				</div>
			</div>
		</li>
	)
}

const CartDeleteButton = ({ element }: { element: ElementMockType }) => {
	const { cartStore, setCartStore } = useStore()
	const handleClick = () => {
		setCartStore(cartStore.filter(cart => cart.id !== element.id.toString()))
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<button type="button" className="cursor-pointer">
					<Trash2Icon color="var(--primary-green)" className={`icon size-5`} />
				</button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						¿Seguro deseas quitar {element.title}?
					</AlertDialogTitle>
					<AlertDialogDescription>
						No pierdas la oportunidad de llevartelo!!
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction onClick={handleClick}>Confirmar</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
