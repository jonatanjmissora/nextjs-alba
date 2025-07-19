"use client"

import { useEffect, useState } from "react"
import HeaderCartContainer from "./header-cart-container"
import HeaderHeartContainer from "./header-heart-container"

export default function HeaderFixed({ layout }: { layout: "single-page" | "home" }) {
	const [scrolled, setScrolled] = useState<boolean>(false)

	useEffect(() => {
		if (window.scrollY) setScrolled(true)

		const handleScrolled = () => {
			if (window.scrollY > 100) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScrolled)
		return () => window.removeEventListener("scroll", handleScrolled)
	}, [])

	if (layout === "single-page") {
		return (
			<div className="top-[4.25%] fixed right-[3%] flex gap-8">
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</div>
		)
	} else {
		return (
			<>
				<a
					href="/#home"
					className={`${scrolled ? "top-[4.25%]" : "-top-[4.25%]"} 2xl:text-2xl text-xl font-semibold text-[var(--primary-green)] fixed left-[4%]`}
				>
					ALBA
				</a>
				<div className={`${scrolled ? "top-[4.25%]" : "-top-[4.25%]"} fixed right-[3%] flex gap-8`}>
					<HeaderHeartContainer />
					<HeaderCartContainer />
				</div>
			</>
		)
	}

}