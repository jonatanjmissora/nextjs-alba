"use client"

import Image from "next/image"
import { useState } from "react"
import SinglePageCarrousel from "@/_components/layout/single-page-carrousel"
import HeartIconContainer from "@/_components/layout/heart-icon-container"
import CartIconContainer from "@/_components/layout/cart-icon-container"
import NotFound from "@/_components/layout/not-found"
import { ServiceCountAndCart } from "./service-count"
import { ServiceTreeType } from "@/_lib/types"

export default function ServicePage({
	categoryName,
	service,
}: {
	categoryName: string
	service: ServiceTreeType
}) {
	if (!service) {
		return <NotFound />
	}

	return (
		<div className="w-full flex-1 flex flex-col sm:flex-row justify-between items-center py-10 2xl:py-20">
			<ServiceImage service={service} />

			<div className="w-full sm:w-2/3 h-max sm:h-full flex flex-col gap-6 justify-center pl-0 sm:pl-20 2xl:pl-40">
				<div className="flex flex-col">
					<span className="title font-bold text-pretty">
						{service.subtitle}
					</span>
					<span className="text-sm font-semibold  text-[var(--primary-green)]">
						{categoryName}
					</span>
				</div>
				<div className="flex w-full items-center gap-6">
					<HeartIconContainer id={service.id.toString()} />
					<CartIconContainer id={service.id.toString()} />
				</div>

				<p className="text ">{service.description_long}</p>

				<ServiceCountAndCart service={service} />
			</div>
		</div>
	)
}

const ServiceImage = ({ service }: { service: ServiceTreeType }) => {
	const [actualImageIndex, setActualImageIndex] = useState(0)
	const imagesArray = service.images.split("*")

	return (
		<div className="w-full sm:w-[40%] sm:h-[60dvh] h-[400px] flex flex-col gap-4">
			<div className="w-full h-full overflow-hidden relative rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
				<Image
					src={imagesArray[actualImageIndex]}
					alt={service.subtitle}
					quality={100}
					fill
					className="object-cover hover:scale-110 duration-300"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex gap-2">
				<SinglePageCarrousel
					array={imagesArray}
					subtitle={service.subtitle}
					actualImageIndex={actualImageIndex}
					setActualImageIndex={setActualImageIndex}
				/>
			</div>
		</div>
	)
}
