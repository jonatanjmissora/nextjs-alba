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
			<BranchLeaf className="absolute top-0 right-0 z-1 size-40 2xl:size-60 rotate-x-180 text-(--primary-green)" />
			<Leaf1 className="absolute top-[60%] 2xl:top-[65%] left-[5%] -z-1 size-16 2xl:size-24 text-(--primary-green) opacity-95" />
			<Leaf2 className="absolute top-[43%] 2xl:top-[20%] left-[40%] -z-1 size-20 2xl:size-32 rotate-180 text-(--primary-green) opacity-95" />
			<RoundLeaf className="absolute top-0 -left-[2%] z-1 size-28 2xl:size-40 rotate-180 text-(--primary-green) opacity-95" />
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
