"use client"
import { useEffect } from "react"
import BranchLeaf from "../../../../public/leaf/branch-leaf"
import Leaf2 from "../../../../public/leaf/leaf2"
import Leaf1 from "../../../../public/leaf/leaf1"
import RoundLeaf from "../../../../public/leaf/round-leaf"
import HeaderFixed from "@/_components/header/header-fixed"

export default function MovilSinglePageLayout({
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
		<section className="w-full min-h-[100svh] sm:min-h-screen px-6 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Volver" from={from} />
			{children}
			<SinglePageFooter />

			<SinglePageLeaf />
		</section>
	)
}

const SinglePageFooter = () => {
	return (
		<div className="w-full border-t-2 border-[var(--primary-green)]">
			<p className="w-full text-right py-2 text-sm text-[var(--primary-green)]">
				© 2025 ALBA
			</p>
		</div>
	)
}

const SinglePageLeaf = () => {
	return (
		<>
			<BranchLeaf className="absolute -z-10 top-0 right-[15%] size-[14rem] 2xl:size-[20rem] rotate-x-180 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="absolute -z-10 top-[50%] left-[50%] size-[4rem] 2xl:size-[5rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -z-10 bottom-[5%] right-[5%] size-[6rem] 2xl:size-[10rem] rotate-180 text-[var(--leaf-color)]" />
			<RoundLeaf className="absolute -z-10 bottom-[25%] 2xl:bottom-[17%] -left-[2%] size-[7rem] 2xl:size-[10rem] rotate-180 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
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
		<div className="w-full h-[10dvh] border-b-2 border-[var(--secondary-green)] flex group relative">
			<HeaderFixed layout="single-page" link={link} text={text} />
		</div>
	)
}
