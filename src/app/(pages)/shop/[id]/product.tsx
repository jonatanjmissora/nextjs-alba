"use client"

import { Product } from "@/_lib/products"
import Image from "next/image"
import { ProductCountAndCart } from "./product-count"
import { useState } from "react"
import SinglePageHeader from "@/_components/layout/single-page-header"
import SinglePageFooter from "@/_components/layout/single-page-footer"
import SinglePageLeaf from "@/_components/layout/single-page-leaf"
import SinglePageCarrousel from "@/_components/layout/single-page-carrousel"
import HeartIconContainer from "@/_components/layout/heart-icon-container"
import CartIconContainer from "@/_components/layout/cart-icon-container"

export default function ProductPage({
	product,
	from,
}: {
	product: Product
	from: "services" | "shop" | "favorites" | "cart"
}) {
	return (
		<div className="w-full min-h-[100svh] sm:min-h-[100dvh] px-6 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
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
				<span className="header text-[var(--primary-green)] ">Categoria</span>

				<h1 className="title font-bold">Product Header</h1>

				<p className="text">{product.description}</p>

				<div className="flex justify-end w-full items-center gap-6 mb-10 2xl:mb-20 pr-4">
					<HeartIconContainer id={product.id} />
					<CartIconContainer id={product.id} />
				</div>

				<ProductCountAndCart product={product} />
			</div>
		</div>
	)
}

const ProductImage = ({ product }: { product: Product }) => {
	const [actualImageIndex, setActualImageIndex] = useState(0)

	return (
		<div className="w-full sm:w-[45%] sm:h-[70dvh] h-[500px] flex flex-col gap-4">
			<div className="w-full h-full overflow-hidden relative rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
				<Image
					src={product.carousel[actualImageIndex]}
					alt={product.title}
					quality={100}
					fill
					className="object-cover"
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
