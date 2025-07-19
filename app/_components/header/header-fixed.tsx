"use client"

import { useEffect, useState } from "react"
import HeaderCartContainer from "./header-cart-container"
import HeaderHeartContainer from "./header-heart-container"

export default function HeaderFixed({
	layout,
}: {
	layout: "single-page" | "home"
}) {
	const [scrolled, setScrolled] = useState<boolean>(true)
	const [scrollY, setScrollY] = useState<number>(0)

	useEffect(() => {
		const handleScrolled = () => {
			if (window.scrollY < 100) {
				setScrollY(window.scrollY)
			}
		}

		window.addEventListener("scroll", handleScrolled)
		return () => window.removeEventListener("scroll", handleScrolled)
	}, [])

	if (layout === "single-page") {
		return (
			<div className="top-[4.75%] fixed right-[5%] flex gap-8">
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</div>
		)
	} else {
		return (
			<>
				<a
					href="#home"
					className="fixed top-[4.75%] flex gap-8 z-100 2xl:text-2xl text-xl font-semibold text-[var(--primary-green)]"
					style={{
						left: `calc(12.6% - ${scrollY * 2.2}px)`,
						transition: "left 0.1s ease-out",
					}}
				>
					ALBA
				</a>
				<a
					href="#home"
					className="absolute top-[0.49%] left-[16.25%] flex gap-8 z-100 2xl:text-2xl text-xl font-semibold text-[var(--primary-green)]"
					// style={{
					// 	left: `calc(12.6% - ${scrollY * 2.2}px)`,
					// 	transition: "left 0.1s ease-out",
					// }}
				>
					GARCIA
				</a>
				<div
					className="fixed top-[4.75%] flex gap-8 z-100"
					style={{
						right: `calc(12.6% - ${scrollY * 2.2}px)`,
						transition: "right 0.1s ease-out",
					}}
				>
					<HeaderHeartContainer />
					<HeaderCartContainer />
				</div>
			</>
		)
	}
}
