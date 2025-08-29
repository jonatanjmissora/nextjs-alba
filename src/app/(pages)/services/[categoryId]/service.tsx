"use client"

import Image from "next/image"
import { useState } from "react"
import { Service, servicesData } from "@/_lib/services"
import SinglePageCarrousel from "@/_components/layout/single-page-carrousel"
import HeartIconContainer from "@/_components/layout/heart-icon-container"
import CartIconContainer from "@/_components/layout/cart-icon-container"
import NotFound from "@/_components/layout/not-found"
import { ServiceCountAndCart } from "./service-count"

export default function ServicePage({
	scrollTo,
	serviceId,
	category,
}: {
	scrollTo: string
	serviceId: string
	category: string
}) {
	const service = servicesData.find(service => service.id === serviceId)

	if (!service) {
		return <NotFound />
	}

	return (
		<div className="w-full flex-1 flex flex-col sm:flex-row justify-between items-center py-10 2xl:py-20">
			<ServiceImage service={service} />

			<div className="w-full sm:w-2/3 h-max sm:h-full flex flex-col gap-6 justify-center pl-0 sm:pl-20 2xl:pl-40">
				<div className="flex flex-col">
					<span className="title font-bold">{service.title}</span>
					<span className="text-sm font-semibold  text-[var(--primary-green)]">
						{category}
					</span>
				</div>
				<div className="flex w-full items-center gap-6">
					<HeartIconContainer id={service.id} />
					<CartIconContainer id={service.id} />
				</div>

				<p className="text ">{service.description}</p>

				

				<ServiceCountAndCart service={service} />
			</div>
		</div>
	)
}

const ServiceImage = ({ service }: { service: Service }) => {
	const [actualImageIndex, setActualImageIndex] = useState(0)

	return (
		<div className="w-full sm:w-[45%] sm:h-[70dvh] h-[500px] flex flex-col gap-4">
			<div className="w-full h-full overflow-hidden relative rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
				<Image
					src={service.carousel[actualImageIndex]}
					alt={service.title}
					quality={100}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex gap-2">
				<SinglePageCarrousel
					element={service}
					actualImageIndex={actualImageIndex}
					setActualImageIndex={setActualImageIndex}
				/>
			</div>
		</div>
	)
}
