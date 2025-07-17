"use client"

import { Service } from "@/app/_lib/services"
import Image from "next/image"
import { ServiceCountAndCart } from "./service-count"
import { useState } from "react"
import SinglePageHeader from "@/app/_components/layout/single-page-header"
import SinglePageFooter from "@/app/_components/layout/single-page-footer"
import SinglePageLeaf from "@/app/_components/layout/single-page-leaf"
import SinglePageCarrousel from "@/app/_components/layout/single-page-carrousel"
import HeartIconContainer from "@/app/_components/layout/heart-icon-container"

export default function ServicePage({
	service,
	from,
}: {
	service: Service
	from: "services" | "shop" | "favorites" | "cart"
}) {
	return (
		<div className="w-full h-screen border px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Servicio" href={from} />
			{service ? (
				<ServiceBody service={service} />
			) : (
				<span>Service not found</span>
			)}
			<span>{from}</span>
			<SinglePageFooter />

			<SinglePageLeaf />
		</div>
	)
}

const ServiceBody = ({ service }: { service: Service }) => {
	const [actualImageIndex, setActualImageIndex] = useState(0)

	return (
		<div className="w-full flex-1 flex justify-between items-center py-10 2xl:py-20">
			<div className="w-1/2 h-full flex flex-col gap-4">
				<div className="w-full h-full overflow-hidden relative rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
					<Image
						src={service.carousel[actualImageIndex]}
						alt={service.title}
						quality={100}
						layout="fill"
						objectFit="cover"
						className=""
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

			<div className="w-1/2 h-full flex flex-col gap-6 justify-center pl-20 2xl:pl-40">
				<div className="flex justify-between items-center">
					<span className="header text-[var(--primary-green)]">Categoria</span>

					<HeartIconContainer id={service.id} />
				</div>
				<h1 className="title font-bold">Service Header</h1>
				<p className="text mb-10 2xl:mb-20">{service.description}</p>

				<ServiceCountAndCart service={service} />
			</div>
		</div>
	)
}
