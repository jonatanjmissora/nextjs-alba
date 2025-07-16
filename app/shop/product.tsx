"use client"

import { Product } from "@/app/_lib/products"
import { ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProductCountAndCart } from "./product-count"
import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"
import Leaf2 from "@/public/leaf/leaf2"
import { useEffect, useState } from "react"
import RoundLeaf from "@/public/leaf/round-leaf"
import { loadFavorites, setToFavorites } from "../_lib/localstorage"

export default function ProductPage({ product }: { product: Product }) {
	return (
		<div className="w-full h-screen px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<ProductHeader />
			{product ? (
				<ProductBody product={product} />
			) : (
				<span>Product not found</span>
			)}
			<ProductFooter />

			<LeafImgs />
		</div>
	)
}

const ProductHeader = () => {
	return (
		<div className="w-full h-[10dvh] border-b-2 border-[var(--secondary-green)] flex flex-col justify-end group">
			<Link
				href="/#shop"
				className="py-4 flex items-center gap-6 cursor-pointer"
			>
				<ArrowLeft size={24} color="var(--primary-green)" className="icon" />
				<span className="header text-[var(--primary-green)] icon">Volver</span>
			</Link>
		</div>
	)
}

const ProductBody = ({ product }: { product: Product }) => {
	const [actualImageIndex, setActualImageIndex] = useState(0)
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		const favorites = loadFavorites()
		if (favorites.includes(product.id)) {
			setIsFavorite(true)
		}
	}, [product.id])

	const handleClick = () => {
		setIsFavorite(!isFavorite)
		setToFavorites(product.id)
	}

	return (
		<div className="w-full flex-1 flex justify-between items-center py-20">
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
					<Carrousel
						product={product}
						actualImageIndex={actualImageIndex}
						setActualImageIndex={setActualImageIndex}
					/>
				</div>
			</div>

			<div className="w-1/2 flex flex-col gap-6 justify-center pl-40">
				<div className="flex justify-between items-center">
					<span className="header text-[var(--primary-green)]">Categoria</span>
					<button type="button" onClick={handleClick}>
						<Heart
							size={30}
							color="var(--primary-green)"
							className={
								isFavorite ? "icon fill-[var(--primary-green)]" : "icon"
							}
						/>
					</button>
				</div>
				<h1 className="title font-bold">Product Header</h1>
				<p className="text mb-20">{product.description}</p>

				<ProductCountAndCart product={product} />
			</div>
		</div>
	)
}

const ProductFooter = () => {
	return (
		<div className="w-full border-t-2 border-[var(--primary-green)]">
			<p className="py-2 text-sm text-[var(--primary-green)]">© 2025 ALBA</p>
		</div>
	)
}

const Carrousel = ({
	product,
	actualImageIndex,
	setActualImageIndex,
}: {
	product: Product
	actualImageIndex: number
	setActualImageIndex: (index: number) => void
}) => {
	return (
		<div className="flex gap-2">
			{product.carousel.map((image, index) => (
				<div
					key={image}
					className={`w-[70px] h-[70px] overflow-hidden relative rounded-tl-[1rem] rounded-br-[1rem] cursor-pointer ${index === actualImageIndex && "shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]"}`}
				>
					<Image
						src={image}
						alt={product.title}
						quality={100}
						layout="fill"
						objectFit="cover"
						onClick={() => setActualImageIndex(index)}
					/>
				</div>
			))}
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute top-0 right-[15%] size-[17rem] 2xl:size-[20rem] rotate-x-180 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute top-[50%] left-[50%] size-[4rem] 2xl:size-[5rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute bottom-[5%] right-[5%] size-[8rem] 2xl:size-[10rem] rotate-180 text-[var(--leaf-color)]" />
			<RoundLeaf className="absolute bottom-[17%] left-[5%] size-[7rem] 2xl:size-[10rem] rotate-0 text-[var(--leaf-color)] opacity-50" />
		</>
	)
}
