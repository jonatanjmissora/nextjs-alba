"use client"
import { useEffect } from "react"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import RoundLeaf from "../../../public/leaf/round-leaf"
import HeaderFixed from "../header/header-fixed"
import MovilHeader from "./movil/movil-header"

export default function SinglePageLayout({
	from = "services",
	children,
	id,
}: Readonly<{
	from?: "services" | "shop" | "favorites" | "cart"
	children: React.ReactNode
	id?: string
}>) {
	useEffect(() => {
		if (id) {
			const element = document.getElementById(id)
			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				})
			}
		}
	}, [id])

	return (
		<section className="w-full min-h-svh sm:min-h-screen px-6 sm:px-(--sm-layout-padding) 2xl:px-(--2xl-layout-padding) flex flex-col relative">
			<SinglePageHeader text="Volver" from={from} />
			{children}
			<SinglePageFooter />

			<SinglePageLeaf />
		</section>
	)
}

const SinglePageFooter = () => {
	return (
		<div className="w-full border-t-2 border-(--primary-green)">
			<p className="w-full text-right py-2 text-sm text-(--primary-green)">
				© 2025 ALBA
			</p>
		</div>
	)
}

const SinglePageLeaf = () => {
	return (
		<>
			<BranchLeaf className="absolute -z-10 top-0 right-[15%] size-56 2xl:size-80 rotate-x-180 text-(--leaf-color) opacity-(--opacity-leaf)" />
			<Leaf1 className="absolute -z-10 top-[50%] left-[50%] size-16 2xl:size-20 text-(--leaf-color)" />
			<Leaf2 className="absolute -z-10 bottom-[5%] right-[5%] size-24 2xl:size-40 rotate-180 text-(--leaf-color)" />
			<RoundLeaf className="absolute -z-10 bottom-[25%] 2xl:bottom-[17%] -left-[2%] size-28 2xl:size-40 rotate-180 text-(--leaf-color) opacity-(--opacity-leaf)" />
		</>
	)
}

const SinglePageHeader = ({ text, from }: { text: string; from?: string }) => {
	const link =
		from === "services"
			? "/#services01"
			: from === "shop"
				? "/#shop01"
				: `/${from}`

	return (
		<>
			<div className="hidden sm:flex w-full h-[10dvh] border-b-2 border-(--secondary-green) group relative">
				<HeaderFixed layout="single-page" link={link} text={text} />
			</div>
			<div className="block sm:hidden">
				<MovilHeader />
			</div>
		</>
	)
}
