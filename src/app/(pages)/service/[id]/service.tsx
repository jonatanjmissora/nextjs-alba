"use client"

import Image from "next/image"
import { ServiceCountAndCart } from "./service-count"
import { useState } from "react"
import { Service } from "@/_lib/services"
import SinglePageHeader from "@/_components/layout/single-page-header"
import SinglePageFooter from "@/_components/layout/single-page-footer"
import SinglePageLeaf from "@/_components/layout/single-page-leaf"
import SinglePageCarrousel from "@/_components/layout/single-page-carrousel"
import HeartIconContainer from "@/_components/layout/heart-icon-container"
import CartIconContainer from "@/_components/layout/cart-icon-container"

export default function ServicePage({
	service,
	from,
}: {
	service: Service
	from: "services" | "shop" | "favorites" | "cart"
}) {
	return (
		<div className="w-full min-h-screen px-6 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Servicio" href={from} />

			<ServiceBody service={service} />

			<SinglePageFooter />

			<SinglePageLeaf />
		</div>
	)
}

const ServiceBody = ({ service }: { service: Service }) => {
	return (
		<div className="w-full flex-1 flex flex-col sm:flex-row justify-between items-center py-10 2xl:py-20">
			<ServiceImage service={service} />

			<div className="w-full sm:w-1/2 h-max sm:h-full flex flex-col gap-6 justify-center pl-0 sm:pl-20 2xl:pl-40">
				<div className="flex flex-row sm:flex-col gap-4 justify-between items-start pt-8 sm:pt-0">
					<span className="header text-[var(--primary-green)] ">Categoria</span>

					<div className="flex items-center gap-3">
						<HeartIconContainer id={service.id} />
						<CartIconContainer id={service.id} />
					</div>
				</div>

				<span className="title font-bold">Service Header</span>

				<p className="text mb-10 2xl:mb-20">{service.description}</p>

				<ServiceCountAndCart service={service} />
			</div>
		</div>
	)
}

const ServiceImage = ({ service }: { service: Service }) => {
	const [actualImageIndex, setActualImageIndex] = useState(0)

	return (
		<div className="w-full sm:w-[45%] h-[70dvh] flex flex-col gap-4">
			<div className="w-full h-full overflow-hidden relative rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
				<Image
					src={service.carousel[actualImageIndex]}
					alt={service.title}
					quality={100}
					fill
					style={{
						objectFit: "cover",
					}}
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
