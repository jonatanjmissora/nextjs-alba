"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import SinglePageCarrousel from "@/_components/elements/single-page-carrousel"
import HeartIconContainer from "@/_components/layout/heart-icon-container"
import CartIconContainer from "@/_components/layout/cart-icon-container"
import { ElementCountAndCart } from "./element-count"
import { ElementTreeType } from "@/_lib/types"
import { cn } from "@/lib/utils"

export default function ElementPage({
	categoryName,
	element,
}: {
	categoryName: string
	element: ElementTreeType
}) {
	return (
		<div className="w-full flex-1 flex flex-col sm:flex-row justify-between items-center py-10 2xl:py-20">
			<ElementImage element={element} />

			<div className="w-full sm:w-2/3 h-max sm:h-full flex flex-col gap-3 2xl:gap-6 justify-center pl-0 sm:pl-20 2xl:pl-40">
				<div className="flex flex-col">
					<span className="title font-bold text-pretty">
						{element.subtitle}
					</span>
					<span className="text-sm font-semibold text-[var(--primary-green)]">
						{categoryName}
					</span>
				</div>
				<div className="flex w-full items-center gap-6">
					<HeartIconContainer id={element.id.toString()} />
					<CartIconContainer id={element.id.toString()} />
				</div>

				<p className="text ">{element.description_long}</p>

				<ElementCountAndCart element={element} />
			</div>
		</div>
	)
}

const ElementImage = ({ element }: { element: ElementTreeType }) => {
	const [actualImageIndex, setActualImageIndex] = useState(0)
	const [previousImageIndex, setPreviousImageIndex] = useState(0)
	const [isTransitioning, setIsTransitioning] = useState(false)
	const imagesArray = element.images.split("*")

	useEffect(() => {
		const interval = setInterval(() => {
			setPreviousImageIndex(actualImageIndex)
			setIsTransitioning(true)

			setTimeout(() => {
				setActualImageIndex(prev => (prev + 1) % imagesArray.length)
				setIsTransitioning(false)
			}, 300) // Duración de la transición
		}, 7000)

		return () => clearInterval(interval)
	}, [actualImageIndex, imagesArray.length])

	return (
		<div className="w-full sm:w-[40%] sm:h-[65dvh] 2xl:h-[55dvh] h-[400px] flex flex-col gap-4">
			<div className="w-full h-full overflow-hidden relative rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
				{/* Imagen anterior con fade out */}
				<div
					className={cn(
						"absolute inset-0 transition-opacity duration-1000",
						isTransitioning ? "opacity-0" : "opacity-50"
					)}
				>
					<Image
						src={imagesArray[previousImageIndex]}
						alt={element.subtitle}
						quality={100}
						fill
						className="object-cover hover:scale-110 duration-300"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				{/* Imagen actual con fade in */}
				<div
					className={cn(
						"absolute inset-0 transition-opacity duration-1000",
						isTransitioning ? "opacity-50" : "opacity-100"
					)}
				>
					<Image
						src={imagesArray[actualImageIndex]}
						alt={element.subtitle}
						quality={100}
						fill
						className="object-cover hover:scale-110 duration-300"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			</div>
			<div className="flex gap-2">
				<SinglePageCarrousel
					array={imagesArray}
					subtitle={element.subtitle}
					actualImageIndex={actualImageIndex}
					setActualImageIndex={setActualImageIndex}
				/>
			</div>
		</div>
	)
}
