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
import CartIconContainer from "@/app/_components/layout/cart-icon-container"

export default function ProductPage({
	product,
	from,
}: {
	product: Product
	from: "services" | "shop" | "favorites" | "cart"
}) {
	return (
		<div className="w-full min-h-screen px-6 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Producto" href={from} />

			<ProductBody product={product} />

			<SinglePageFooter />

			<SinglePageLeaf />
		</div>
	)
}

const ProductBody = ({ product }: { product: Product }) => {
	return (
		<div className="w-full flex-1 flex flex-col sm:flex-row justify-between items-center py-10 2xl:py-20">
			<ProductImage product={product} />

			<div className="w-full sm:w-1/2 h-max sm:h-full flex flex-col gap-6 justify-center pl-0 sm:pl-20 2xl:pl-40">
				<div className="flex flex-row sm:flex-col gap-4 justify-between items-start pt-8 sm:pt-0">
					<span className="header text-[var(--primary-green)] ">Categoria</span>

					<div className="flex items-center gap-3">
						<HeartIconContainer id={product.id} />
						<CartIconContainer id={product.id} />
					</div>
				</div>

				<h1 className="title font-bold">Product Header</h1>

				<p className="text mb-10 2xl:mb-20">{product.description}</p>

				<ProductCountAndCart product={product} />
			</div>
		</div>
	)
}

const ProductImage = ({ product }: { product: Product }) => {
	const [actualImageIndex, setActualImageIndex] = useState(0)

	return (
		<div className="w-full sm:w-[45%] h-[70dvh] flex flex-col gap-4">
			<div className="w-full h-full overflow-hidden relative rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
				<Image
					src={product.carousel[actualImageIndex]}
					alt={product.title}
					quality={100}
					layout="fill"
					objectFit="cover"
					className=""
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
	)
}
