"use client"

import { Product } from "@/app/_lib/products"
import Image from "next/image"
import { ProductCountAndCart } from "./product-count"
import { useState } from "react"
import SinglePageHeader from "../../_components/layout/single-page-header"
import SinglePageFooter from "../../_components/layout/single-page-footer"
import SinglePageLeaf from "../../_components/layout/single-page-leaf"
import SinglePageCarrousel from "../../_components/layout/single-page-carrousel"
import HeartIconContainer from "../../_components/layout/heart-icon-container"

export default function ProductPage({
	product,
	from,
}: {
	product: Product
	from: "services" | "shop" | "favorites" | "cart"
}) {
	return (
		<div className="w-full h-screen px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Producto" href={from} />
			{product ? (
				<ProductBody product={product} />
			) : (
				<span>Product not found</span>
			)}
			<SinglePageFooter />

			<SinglePageLeaf />
		</div>
	)
}

const ProductBody = ({ product }: { product: Product }) => {
	const [actualImageIndex, setActualImageIndex] = useState(0)

	return (
		<div className="w-full flex-1 flex justify-between items-center py-10 2xl:py-20">
			<div className="w-1/2 h-full flex flex-col gap-4">
				<div className="w-full h-full overflow-hidden relative rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
					<Image
						src={product.carousel[actualImageIndex]}
						alt={product.title}
						quality={100}
						layout="fill"
						objectFit="cover"
						className=""
					/>
				</div>
				<div className="flex gap-2">
					<SinglePageCarrousel
						element={product}
						actualImageIndex={actualImageIndex}
						setActualImageIndex={setActualImageIndex}
					/>
				</div>
			</div>

			<div className="w-1/2 h-full flex flex-col gap-6 justify-center pl-20 2xl:pl-40">
				<div className="flex justify-between items-center">
					<span className="header text-[var(--primary-green)]">Categoria</span>

					<HeartIconContainer id={product.id} />
				</div>
				<h1 className="title font-bold">Product Header</h1>
				<p className="text mb-10 2xl:mb-20">{product.description}</p>

				<ProductCountAndCart product={product} />
			</div>
		</div>
	)
}
